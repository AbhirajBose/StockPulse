import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponce } from "../utils/ApiResponce.js";
import { User } from "../models/user.models.js";
import mongoose from "mongoose";
import { decode } from "jsonwebtoken";

const getRefreshAndAccessToken = async (userid) => {
    try {
      const user = await User.findById(userid); // ✅ Await the user data
  
      if (!user) {
        throw new ApiError(404, "User not found"); // ✅ Handle null user case
      }
  
      const accessToken = user.generateAccessToken(); // ✅ Call methods on actual user
      const refreshToken = user.generateRefreshToken();
  
      user.refreshToken = refreshToken; // ✅ Save the new refresh token
  
      await user.save({ validateBeforeSave: false });
  
      return { accessToken, refreshToken };
    } catch (error) {
      throw new ApiError(
        500,
        error?.message || "Error while generating access or refresh token"
      );
    }
  };
  

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, fullName, password, phone } = req.body;
  if (
    [username, email, fullName, password, phone].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existuser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existuser) {
    throw new ApiError(409, "Username or email already exists");
  }

  const user = await User.create({
    fullName,
    email,
    password,
    username: username.toLowerCase(),
  });

  const createduser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createduser) {
    throw new ApiError(500, "Something Went Wrong in server");
  }

  return res
    .status(201)
    .json(new ApiResponce(200, createduser, "Successfully registered"));
});


const loginUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
  
    if (!(username || email)) {
      throw new ApiError(401, "Username Or Email is required");
    }
  
    const user = await User.findOne({
        $or: [{ username }, { email }],
      });
  
    const isPasswordvalid = await  user.isPasswordCorrect(password);
  
    if (!isPasswordvalid) {
      throw new ApiError(401, "Password is incorrect");
    }
  
    const { accessToken, refreshToken } = await getRefreshAndAccessToken(user._id);
  
    const loggedinUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );
    const options = {
      httpOnly: true,
      secure: true,
    };
  
    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
        new ApiResponce(
          200,
          { user: loggedinUser, accessToken, refreshToken },
          "User Logged in Successfully"
        )
      );
  });
  

  export {
    registerUser,
    loginUser,
  }