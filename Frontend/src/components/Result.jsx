import React from "react";
import "../css/Question.css";

const Result = ({ result }) => {
  const { max, index } = { ...result };

  let finalPrediction;
  if (index == 0) {
    finalPrediction = "Non Diabetic";
  } else if (index == 1) {
    finalPrediction = "Pre Diabetic";
  } else {
    finalPrediction = "Diabetic";
  }

  return (
    <div>
      <section className="m-5 p-3 justify-content-center text-center">
        <div
          className="question-section text-center"
          style={{
            padding: "2rem",
            marginTop: "7.5vh",
            width: "50%",
            top: "50%",
            left: "25%",
            boxShadow: "4px 4px 8px gray",
            borderRadius: "2.5vh",
          }}
        >
          <h4> Our Prediction: {finalPrediction}</h4>
          <h4>Prob : {parseInt(max * 100)} %</h4>
        </div>
      </section>
    </div>
  );
};

export default Result;
