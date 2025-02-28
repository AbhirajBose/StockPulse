import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponce } from "../utils/ApiResponce.js";
import { User } from "../models/user.models.js";
import jwt from "jsonwebtoken";

const getRefreshAndAccessToken = async (userid) => {
    try {
        const user = await User.findById(userid);
        if (!user) {
            throw new ApiError(404, "User not found");
        }

        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };
    } catch (error) {
        throw new ApiError(500, error?.message || "Error generating tokens");
    }
};

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, fullName, password, phone, balance } = req.body;
    if ([username, email, fullName, password, phone].some(field => typeof field !== "string" || field.trim() === "") || balance === undefined) {
        throw new ApiError(400, "All fields are required");
    }

    const existUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existUser) {
        throw new ApiError(409, "Username or email already exists");
    }

    const user = await User.create({
        fullName,
        email,
        password,
        username: username.toLowerCase(),
        balance
    });

    const createdUser = await User.findById(user._id).select("-password -refreshToken");
    if (!createdUser) {
        throw new ApiError(500, "Something went wrong on the server");
    }

    return res.status(201).json(new ApiResponce(201, createdUser, "Successfully registered"));
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new ApiError(400, "Email and password are required");
    }

    const user = await User.findOne({ email });
    if (!user || !(await user.isPasswordCorrect(password))) {
        throw new ApiError(401, "Invalid credentials");
    }

    const { accessToken, refreshToken } = await getRefreshAndAccessToken(user._id);
    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    };

    return res.status(200)
        .cookie("accessToken", accessToken, { ...options, maxAge: 15 * 60 * 1000 })
        .cookie("refreshToken", refreshToken, options)
        .json(new ApiResponce(200, { user, accessToken, refreshToken }, "User logged in successfully"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
        throw new ApiError(401, "Unauthorized");
    }

    const user = await User.findOne({ refreshToken });
    if (!user) {
        throw new ApiError(403, "Forbidden");
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, decoded) => {
        if (err || decoded.id !== user._id.toString()) {
            throw new ApiError(403, "Invalid refresh token");
        }
        
        const newAccessToken = user.generateAccessToken();
        res.cookie("accessToken", newAccessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
            maxAge: 15 * 60 * 1000 // 15 minutes
        });

        res.status(200).json(new ApiResponce(200, { accessToken: newAccessToken }, "Access token refreshed"));
    });
});

const logoutUser = asyncHandler(async (req, res) => {
    const user = await User.findOne({ refreshToken: req.cookies.refreshToken });
    if (!user) return res.status(204).send(); // No content

    user.refreshToken = null;
    await user.save();

    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

    res.status(200).json(new ApiResponce(200, null, "Logged out successfully"));
});

const getProfile = asyncHandler(async (req, res) => {
  const token = req.cookies.accessToken;
    if (!token) {
        throw new ApiError(401, "Unauthorized");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password -refreshToken");

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    res.status(200).json(new ApiResponce(200, { user }, "User authenticated"));
})

export { registerUser, loginUser, refreshAccessToken, logoutUser,getProfile };
