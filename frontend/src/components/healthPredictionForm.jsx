import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const HealthPredictionForm = () => {
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [chestPainType, setChestPainType] = useState("");
  const [restingBloodPressure, setRestingBloodPressure] = useState("");
  const [cholestoral, setCholestoral] = useState("");
  const [maxHeartRate, setMaxHeartRate] = useState("");
  const [exerciseInducedAngina, setExerciseInducedAngina] = useState("");
  const [oldpeak, setOldpeak] = useState("");
  const [slope, setSlope] = useState("");
  const [vesselsColoredByFlourosopy, setVesselsColoredByFlourosopy] =
    useState("");
  const [thalassemia, setThalassemia] = useState("");

  const handlePrediction = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/healthPrediction/post",
        {
          age,
          sex,
          chest_pain_type: chestPainType,
          resting_blood_pressure: restingBloodPressure,
          cholestoral,
          Max_heart_rate: maxHeartRate,
          exercise_induced_angina: exerciseInducedAngina,
          oldpeak,
          slope,
          vessels_colored_by_flourosopy: vesselsColoredByFlourosopy,
          thalassemia,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      // reset form
      setAge("");
      setSex("");
      setChestPainType("");
      setRestingBloodPressure("");
      setCholestoral("");
      setMaxHeartRate("");
      setExerciseInducedAngina("");
      setOldpeak("");
      setSlope("");
      setVesselsColoredByFlourosopy("");
      setThalassemia("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Prediction failed");
    }
  };

  return (
    <div className="container form-component">
      <h2>Health Prediction</h2>
      <form onSubmit={handlePrediction}>
        <div>
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <select value={sex} onChange={(e) => setSex(e.target.value)}>
            <option value="">Select Sex</option>
            <option value="0">Female</option>
            <option value="1">Male</option>
          </select>
        </div>

        <div>
          <input
            type="number"
            placeholder="Chest Pain Type"
            value={chestPainType}
            onChange={(e) => setChestPainType(e.target.value)}
          />
          <input
            type="number"
            placeholder="Resting Blood Pressure"
            value={restingBloodPressure}
            onChange={(e) => setRestingBloodPressure(e.target.value)}
          />
        </div>

        <div>
          <input
            type="number"
            placeholder="Cholestoral"
            value={cholestoral}
            onChange={(e) => setCholestoral(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max Heart Rate"
            value={maxHeartRate}
            onChange={(e) => setMaxHeartRate(e.target.value)}
          />
        </div>

        <div>
          <select
            value={exerciseInducedAngina}
            onChange={(e) => setExerciseInducedAngina(e.target.value)}
          >
            <option value="">Exercise Induced Angina?</option>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
          <input
            type="number"
            placeholder="Oldpeak"
            value={oldpeak}
            onChange={(e) => setOldpeak(e.target.value)}
          />
        </div>

        <div>
          <input
            type="number"
            placeholder="Slope"
            value={slope}
            onChange={(e) => setSlope(e.target.value)}
          />
          <input
            type="number"
            placeholder="Vessels Colored by Fluoroscopy"
            value={vesselsColoredByFlourosopy}
            onChange={(e) => setVesselsColoredByFlourosopy(e.target.value)}
          />
        </div>

        <div>
          <input
            type="number"
            placeholder="Thalassemia"
            value={thalassemia}
            onChange={(e) => setThalassemia(e.target.value)}
          />
        </div>

        <button style={{ margin: "0 auto" }}>Predict</button>
      </form>
    </div>
  );
};

export default HealthPredictionForm;
