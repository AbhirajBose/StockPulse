import { Router } from "express";
import {
  registerUser,
  loginUser,
  refreshAccessToken,
   logoutUser,
   getProfile
} from "../controllers/user.controller.js";
// import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.post("/refresh", refreshAccessToken);
router.post("/logout", logoutUser);
router.post("/profile", getProfile);


export default router;