import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Question.css";
import doctorImg from "../img/doctor.png";
import homepage from "../img/homepage.png";

const MainPage = () => {
  const questions = [
    {
      questionText: `Do you have a High BP?`,
    },
    {
      questionText: `Do you have a High Cholesterol?`,
    },
    {
      questionText: `Have yoe checked your cholesterol in the last 5 years?`,
    },
    {
      questionText: `Enter your BMI(Body Mass Index)`,
    },
    {
      questionText: `Do you smoke frequently? [Note: 5 packs = 100 cigarettes]`,
    },
    {
      questionText: `Have you ever had a stroke?`,
    },
    {
      questionText: `Have you had any coronary heart disease (CHD) or myocardial infarction (MI)?`,
    },
    {
      questionText: `Have you done any physical activity in past 30 days?`,
    },
    {
      questionText: `Do you consume Fruit 1 or more times per day?`,
    },
    {
      questionText: `Do you consume Vegetables 1 or more times per day?`,
    },
    {
      questionText: `Are you a heavy drinker? (adult men having more than 14 drinks per week and adult women having more than 7 drinks per week)`,
    },
    {
      questionText: `Do you have any kind of health care coverage, including health insurance, prepaid plans such as HMO, etc?`,
    },
    {
      questionText: `Was there a time in the past 12 months when you needed to see a doctor but could not because of cost?`,
    },
    {
      questionText: "Would you say that in general your health is: \nScale 1-5 :\n1 = excellent 2 = very good 3 = good 4 = fair 5 = poor",
    },
    {
      questionText: "Now thinking about your mental health, which includes stress, depression, and problems with emotions, for how many days during the past 30 days was your mental health not good?\nScale 1-30 days",
    },
    {
      questionText: `Now thinking about your physical health, for how many days during the past 30 days was your physical health not good? \n
      Scale 1-30 days`,
    },
    {
      questionText: `Do you have serious difficulty walking or climbing stairs?`,
    },
    {
      questionText: `Select your Gender`,
    },
    {
      questionText: `Age\n
      13-level age category \n
      1 = 18-24   9 = 60-64   13 = 80 or older`,
    },
    {
      questionText: `Education\n
Education level Scale 1-6 \n
1 = Never attended school or only kindergarten \n
2 = Grades 1 through 8 (Elementary) \n
3 = Grades 9 through 11 (Some high school) \n
4 = Grade 12 or GED (High school graduate) \n
5 = College 1 year to 3 years (Some college or technical school) \n
6 = College 4 years or more (College graduate)`,
    },
    {
      questionText: `Income\n
Income scale 1-8\n
1 = less than $10,000 \n
5 = less than $35,000 \n
8 = $75,000 or more`,
    },
  ];
  const [data, setData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [ans, setAns] = useState();
  const [inputVal, setInputVal] = useState("");

  const handleModal = (e) => {
    setShowQuestion(true);
  };
  const handleClose = (e) => {
    setShowQuestion(false);
  };

  const handleNext = (e) => {
    if (currentQuestion == questions.length - 1) {
      const newData = data;
      newData.push(ans);
      setData(newData);

      window.alert("Thank you! Your result will be displayed soon!")

      let jsonData = JSON.stringify(data);
      axios
        .post("http://localhost:5000/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          jsonData,
        })
        .then((response) => {
          console.log("response:", response);
          console.log("response", response.data);
          console.log(jsonData);
        })
        .catch((error) => console.log("Error in axios post req", error));
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setIsAnswered(false);
      setAns();

      const newData = data;
      if (currentQuestion < newData.length) {
        newData[currentQuestion] = ans;
      } else {
        newData.push(ans);
      }
      setData(newData);
    }
    setInputVal("");

    // newAns = "";
    console.log(data);
  };
  const handlePrevious = (e) => {
    if (currentQuestion == 0) {
      // setCurrentQuestion(questions.length - 1);
      window.alert("Reached the First Question!");
    } else {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswer = (answer) => {
    setIsAnswered(true);
    setAns(answer);
    console.log(answer);
    console.log(ans);
  };

  // let newAns = "";
  const handleInputChange = (e) => {
    setIsAnswered(true);
    setInputVal(e.target.value)
    setAns(Number(e.target.value));
    console.log(e.target.value);
    console.log(ans);
  };

  useEffect(() => {
    document.title = "Diabetes Tracker";
  }, []);

  return (
    <>
      {showQuestion ? (
        // <QuestionModal questions={questions} currentQuestion={currentQuestion} />

        <section className="m-5 p-3 justify-content-center text-center">
          <div
            className="question-section text-center"
            style={{
              // border: "0.5px gray solid",
              marginTop: "7.5vh",
              // height: "50vh",
              width: "50%",
              top: "50%",
              left: "25%",
              boxShadow: "4px 4px 8px gray",
              borderRadius: "2.5vh",
            }}
          >
            <div
              className="question-count p-3 d-flex"
              style={{ textAlign: "left" }}
            >
              <span>
                Question {currentQuestion + 1}/{questions.length}
              </span>
              <button
                className="btn btn-danger"
                style={{ width: "40px", height: "40px", marginLeft: "auto" }}
                onClick={handleClose}
              >
                X
              </button>
            </div>
            <div className="question-text p-3">
              {questions[currentQuestion].questionText}
            </div>
            <div className="answer-section text-center">
              {/* {questions[currentQuestion].answers.map((answer) => (
                                    <button className='answerBtn mx-3 my-2 btn btn-primary' onClick={(answer) => handleAnswer(answer)}>{answer}</button>
                                ))} */}

              {currentQuestion == 3 ||
                currentQuestion == 13 ||
                currentQuestion == 14 ||
                currentQuestion == 15 ||
                currentQuestion == 18 ||
                currentQuestion == 19 ||
                currentQuestion == 20 ? (
                <input
                  type="text"
                  name="inputQue"
                  value={inputVal}
                  id=""
                  onChange={(e) => handleInputChange(e)}
                />
              ) : (
                <div>
                  <button
                    className="answerBtn mx-3 my-2 btn btn-primary"
                    onClick={() => handleAnswer(1)}
                  >
                    {currentQuestion === 17 ? "Male" : "Yes"}
                  </button>
                  <button
                    className="answerBtn mx-3 my-2 btn btn-primary"
                    onClick={() => handleAnswer(0)}
                  >
                    {currentQuestion === 17 ? "Female" : "No"}

                  </button>
                </div>
              )}
            </div>
            <div className="text-center">
              <button className="btn btn-primary m-2" onClick={handlePrevious}>
                Previous
              </button>
              <button
                className="btn btn-primary m-2"
                disabled={!isAnswered}
                onClick={handleNext}
              >
                {currentQuestion === questions.length - 1
                  ? "Submit"
                  : "Save & Next"}
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="m-4 p-3">
          <h2 className="text-center">Diabetes</h2>

          <section
            className="card1"
            style={{
              // border: "0.5px gray solid",
              marginTop: "7.5vh",
              marginLeft: "25vh",
              width: "75%",
              left: "50%",
              boxShadow: "4px 4px 8px gray",
              borderRadius: "2.5vh",
            }}
          >
            <div className="drImg">
              <img src={doctorImg} />
            </div>
            <div className="container p-5 " style={{ width: "60%" }}>
              <h4 className="text-center my-1 ">What is diabetes?</h4>
              <p style={{ fontFamily: "McLaren, cursive ", fontSize: "1rem" }}>
                Diabetes affects one in ten people worldwide. Understanding the
                condition is the first step to preventing and managing it.
                Whether you live with diabetes, care for someone who does or
                just want to learn more, improve your understanding with one of
                our free interactive courses. <br /><br />
                <h5 className="text-center my-1">Why to take a quiz?</h5>
                <p>The quiz below will help ypu know your chances of being a diabetic or prediabetic person.</p>
                <p style={{ fontSize: "14px" }}>Note : The only conclusive test for diabetes is a blood test. However,
                  the quiz should give you an indication of whether to seek urgent
                  help, or whether to raise the issue at your next GP appointment.</p>

              </p>
              <button
                className="btn btn-success m-3 text-center "
                onClick={(e) => handleModal(e)}
              >
                Take Quiz
              </button>
            </div>
          </section>
        </section>
      )}
    </>
  );
};

export default MainPage;
