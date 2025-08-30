import mongoose from "mongoose";

const healthPredictionSchema = new mongoose.Schema(
  {
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [0, "Age must be >= 0"],
      max: [150, "Age must be <= 150"],
    },

    // 1 = male, 0 = female (use the encoding your model expects)
    sex: {
      type: Number,
      required: [true, "Sex is required"],
      enum: {
        values: [0, 1],
        message: "Sex must be 0 or 1",
      },
    },

    chest_pain_type: {
      type: Number,
      required: [true, "Chest pain type is required"],
      min: [0, "Value must be >= 0"],
    },

    resting_blood_pressure: {
      type: Number,
      required: [true, "Resting blood pressure is required"],
      min: [0, "Value must be >= 0"],
    },

    cholestoral: {
      type: Number,
      required: [true, "Cholestoral is required"],
      min: [0, "Value must be >= 0"],
    },

    // keep the exact field name you used in JSON
    Max_heart_rate: {
      type: Number,
      required: [true, "Max heart rate is required"],
      min: [0, "Value must be >= 0"],
    },

    exercise_induced_angina: {
      type: Number,
      required: [true, "Exercise induced angina is required"],
      enum: {
        values: [0, 1],
        message: "Exercise induced angina must be 0 or 1",
      },
    },

    oldpeak: {
      type: Number,
      required: [true, "Oldpeak is required"],
      min: [0, "Value must be >= 0"],
    },

    slope: {
      type: Number,
      required: [true, "Slope is required"],
    },

    vessels_colored_by_flourosopy: {
      type: Number,
      required: [true, "Vessels colored by fluoroscopy is required"],
      min: [0, "Value must be >= 0"],
    },

    thalassemia: {
      type: Number,
      required: [true, "Thalassemia is required"],
    },

    // Optional field to store prediction returned by model:
    // store as class (0/1) or probability (0.0-1.0)
    prediction: {
      type: Number,
      default: null,
    },
  },
  { timestamps: true }
);

export const HealthPrediction = mongoose.model(
  "HealthPrediction",
  healthPredictionSchema
);
