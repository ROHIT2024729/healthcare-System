import express from "express";
import {
  postHealthPrediction,
  getAllHealthPredictions,
  updateHealthPrediction,
  deleteHealthPrediction,
} from "../controller/healthPredictionController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

// Patient can submit health prediction form
router.post("/post", isPatientAuthenticated, postHealthPrediction);

// Admin can view all predictions
router.get("/getall", isAdminAuthenticated, getAllHealthPredictions);

// Admin can update prediction record
router.put("/update/:id", isAdminAuthenticated, updateHealthPrediction);

// Admin can delete prediction record
router.delete("/delete/:id", isAdminAuthenticated, deleteHealthPrediction);

export default router;
