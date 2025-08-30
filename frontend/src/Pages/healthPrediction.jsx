import React from "react";
import Hero from "../components/Hero";
import HealthPredictionForm from "../components/healthPredictionForm";

const HealthPrediction = () => {
  return (
    <>
      <Hero
        title={"Heart Disease Prediction | ZeeCare Medical Institute"}
        imageUrl={"/signin.png"}
      />
      <HealthPredictionForm />
    </>
  );
};

export default HealthPrediction;
