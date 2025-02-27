import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponce } from "../utils/ApiResponce.js";
import { User } from "../models/user.models.js";
import mongoose from "mongoose";
import { decode } from "jsonwebtoken";

const getRefreshAndAccessToken = async (userid) => {
  try {
    const user = User.findById(userid);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;

    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      error?.messege || "Error while generating access or refresh token"
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
