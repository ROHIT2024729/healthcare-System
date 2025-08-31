import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import { errorMiddleware } from "./middlewares/error.js";
import messageRouter from "./router/messageRouter.js";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";
import healthPredictionRouter from "./router/healthPredictionRouter.js";

const app = express();
config({ path: "./config/config.env" });

app.use(
  cors({
    origin: [
       process.env.FRONTEND_URL_ONE,
      process.env.FRONTEND_URL_TWO,
      "http://localhost:5173",
      "http://localhost:5174",
      "https://healthcare-system-34ir8d2g2-rohits-projects-175a9b0f.vercel.app",
      "https://healthcare-system-o8os4gx5b-rohits-projects-175a9b0f.vercel.app",
    ],
    method: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);
app.use("/api/v1/healthPrediction", healthPredictionRouter);

dbConnection();

app.use(errorMiddleware);
export default app;
