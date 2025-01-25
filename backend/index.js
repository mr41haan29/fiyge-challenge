import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import formRoutes from "./routes/form.routes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/forms", formRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("connected to DB");
  app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
  });
});
