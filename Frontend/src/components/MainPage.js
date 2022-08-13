import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Question.css";
import doctorImg from "../img/doctor.png";

const MainPage = () => {
  //   const body = {
  //     name: "Gaurav",
  //     email: "gauravsomani52750@gmail.com",
  //   };

  //   useEffect(() => {
  //     axios
  //       .post("http://localhost:5000/", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body,
  //       })
  //       .then((response) => {
  //         console.log("response", response.data);
  //       })
  //       .catch((error) => console.log(error));
  //   });

  const questions = [
    {
      questionText: "Question text 1",
      answers: ["Yes", "No"],
    },
    {
      questionText: "Question text 2",
      answers: ["Yes", "No"],
    },
    {
      questionText: "Question text 3",
      answers: ["Yes", "No"],
    },
  ];
  const [data, setData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [ans, setAns] = useState();

  const handleModal = (e) => {
    setShowQuestion(true);
    // console.log(showQuestion);
  };
  const handleClose = (e) => {
    setShowQuestion(false);
    // console.log(showQuestion);
  };

  const handleNext = (e) => {
    if (currentQuestion == questions.length - 1) {
      // setCurrentQuestion(0);
      // window.alert("Reached the Last Question!")
      //
      const newData = data;
      newData.push(ans);
      setData(newData);

      axios
        .post("http://localhost:3000/", data)
        .then((res) => {
          console.log(data);
          console.log("data posted");
          setShowQuestion(false);
        })
        .catch((err) => {
          console.log(err);
        });
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

              <button
                className="answerBtn mx-3 my-2 btn btn-primary"
                onClick={() => handleAnswer("Yes")}
              >
                Yes
              </button>
              <button
                className="answerBtn mx-3 my-2 btn btn-primary"
                onClick={() => handleAnswer("No")}
              >
                No
              </button>
            </div>
            <div className="text-center">
              <button className="btn btn-primary m-2" onClick={handlePrevious}>
                Previous
              </button>
              <button
                className="btn btn-primary m-2"
                disabled={!ans}
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
          <h2 className="text-center">Heading</h2>

          <section
            className="card1 d-flex"
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
            <div className="container p-5 text-center" style={{ width: "60%" }}>
              <h4>Title</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
                facere quo eius odio ducimus delectus tenetur tempora labore
                nostrum corrupti expedita veritatis, a eaque velit? Ullam
                dolores dolore culpa deserunt ipsam laudantium aliquam quas
                labore tenetur? Iusto atque iste velit, sequi magni asperiores
                in eius voluptatum cupiditate ea, illum veritatis.
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
