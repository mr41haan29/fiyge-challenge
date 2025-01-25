import express from "express";
import {
  getMe,
  login,
  logout,
  signup,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);
router.get("/me", getMe);

export default router;
