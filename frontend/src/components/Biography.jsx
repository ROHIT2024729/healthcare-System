import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            At Zee Care, we believe that healthcare is more than just treatment — it’s about trust, care, and compassion. Our dedicated team of doctors, nurses, and healthcare professionals work tirelessly to provide patient-centered care that focuses on healing the body, supporting the mind, and uplifting the spirit.

            With years of expertise and a passion for medicine, our doctors blend advanced medical knowledge with empathy, ensuring that every patient feels heard, valued, and cared for. 
          </p>
          <p>We are all in 2024!</p>
          <p>We are working on a Health Related Issued!</p>
          <p>
          </p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
