import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { HealthPrediction } from "../models/healthPredictionSchema.js";

// =========================
// Post Health Prediction
// =========================
export const postHealthPrediction = catchAsyncErrors(async (req, res, next) => {
  const {
    age,
    sex,
    chest_pain_type,
    resting_blood_pressure,
    cholestoral,
    Max_heart_rate,
    exercise_induced_angina,
    oldpeak,
    slope,
    vessels_colored_by_flourosopy,
    thalassemia,
  } = req.body;

  // Check required fields
  if (
    age === undefined ||
    sex === undefined ||
    chest_pain_type === undefined ||
    resting_blood_pressure === undefined ||
    cholestoral === undefined ||
    Max_heart_rate === undefined ||
    exercise_induced_angina === undefined ||
    oldpeak === undefined ||
    slope === undefined ||
    vessels_colored_by_flourosopy === undefined ||
    thalassemia === undefined
  ) {
    return next(new ErrorHandler("Please fill all fields!", 400));
  }

  // TODO: Call your ML model here if integrated
  // Example: const prediction = await runModel(req.body);
  const prediction = null; // placeholder

  const healthPrediction = await HealthPrediction.create({
    age,
    sex,
    chest_pain_type,
    resting_blood_pressure,
    cholestoral,
    Max_heart_rate,
    exercise_induced_angina,
    oldpeak,
    slope,
    vessels_colored_by_flourosopy,
    thalassemia,
    prediction,
  });

  res.status(200).json({
    success: true,
    healthPrediction,
    message: "Health prediction submitted!",
  });
});

// =========================
// Get All Health Predictions
// =========================
export const getAllHealthPredictions = catchAsyncErrors(
  async (req, res, next) => {
    const healthPredictions = await HealthPrediction.find();
    res.status(200).json({
      success: true,
      healthPredictions,
    });
  }
);

// =========================
// Update Health Prediction
// =========================
export const updateHealthPrediction = catchAsyncErrors(
  async (req, res, next) => {
    const { id } = req.params;
    let healthPrediction = await HealthPrediction.findById(id);

    if (!healthPrediction) {
      return next(new ErrorHandler("Health prediction not found!", 404));
    }

    healthPrediction = await HealthPrediction.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );

    res.status(200).json({
      success: true,
      message: "Health prediction updated!",
    });
  }
);

// =========================
// Delete Health Prediction
// =========================
export const deleteHealthPrediction = catchAsyncErrors(
  async (req, res, next) => {
    const { id } = req.params;
    const healthPrediction = await HealthPrediction.findById(id);

    if (!healthPrediction) {
      return next(new ErrorHandler("Health prediction not found!", 404));
    }

    await healthPrediction.deleteOne();

    res.status(200).json({
      success: true,
      message: "Health prediction deleted!",
    });
  }
);
