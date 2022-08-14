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
      questionText: `HighBP : 
            0 = no high BP 1 = high BP`,

    },
    {
      questionText: `HighChol :
0 = no high cholesterol 1 = high cholesterol`,

    },
    {
      questionText: `CholCheck
0 = no cholesterol check in 5 years 1 = yes cholesterol check in 5 years`,

    },
    {
      questionText: `BMI
Body Mass Index`,

    },
    {
      questionText: `Smoker
Have you smoked at least 100 cigarettes in your entire life? [Note: 5 packs = 100 cigarettes] 0 = no 1 = yes`,

    },
    {
      questionText: `Stroke
(Ever told) you had a stroke. 0 = no 1 = yes`,

    },
    {
      questionText: `HeartDiseaseorAttack
coronary heart disease (CHD) or myocardial infarction (MI) 0 = no 1 = yes`,

    },
    {
      questionText: `PhysActivity
physical activity in past 30 days - not including job 0 = no 1 = yes`,

    },
    {
      questionText: `Fruits
Consume Fruit 1 or more times per day 0 = no 1 = yes`,

    },
    {
      questionText: `Veggies
Consume Vegetables 1 or more times per day 0 = no 1 = yes`,

    },
    {
      questionText: `HvyAlcoholConsump
Heavy drinkers (adult men having more than 14 drinks per week and adult women having more than 7 drinks per week) 0 = no 1 = yes`,

    },
    {
      questionText: `AnyHealthcare
Have any kind of health care coverage, including health insurance, prepaid plans such as HMO, etc. 0 = no 1 = yes`,

    },
    {
      questionText: `NoDocbcCost
Was there a time in the past 12 months when you needed to see a doctor but could not because of cost? 0 = no 1 = yes`,

    },
    {
      questionText: `GenHlth
Would you say that in general your health is: scale 1-5 1 = excellent 2 = very good 3 = good 4 = fair 5 = poor
`,

    },
    {
      questionText: `MentHlth
Now thinking about your mental health, which includes stress, depression, and problems with emotions, for how many days during the past 30 days was your mental health not good? scale 1-30 days
`,

    },
    {
      questionText: `PhysHlth
Now thinking about your physical health, which includes physical illness and injury, for how many days during the past 30 days was your physical health not good? scale 1-30 days`,

    },
    {
      questionText: `DiffWalk
Do you have serious difficulty walking or climbing stairs? 0 = no 1 = yes`,

    },
    {
      questionText: `Sex
0 = female 1 = male`,

    },
    {
      questionText: `Age
13-level age category (_AGEG5YR see codebook) 1 = 18-24 9 = 60-64 13 = 80 or older`,

    },
    {
      questionText: `Education
Education level (EDUCA see codebook) scale 1-6 1 = Never attended school or only kindergarten 2 = Grades 1 through 8 (Elementary) 3 = Grades 9 through 11 (Some high school) 4 = Grade 12 or GED (High school graduate) 5 = College 1 year to 3 years (Some college or technical school) 6 = College 4 years or more (College graduate)`,

    },
    {
      questionText: `Income
Income scale (INCOME2 see codebook) scale 1-8 1 = less than $10,000 5 = less than $35,000 8 = $75,000 or more`,

    },

  ]
  const [data, setData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [ans, setAns] = useState();

  const handleModal = (e) => {
    setShowQuestion(true)
    // console.log(showQuestion);
  }
  const handleClose = (e) => {
    setShowQuestion(false)
    // console.log(showQuestion);
  }

  const handleNext = (e) => {
    if (currentQuestion == questions.length - 1) {
      // setCurrentQuestion(0);
      // window.alert("Reached the Last Question!")
      // 
      const newData = data;
      newData.push(ans);
      setData(newData);
      window.alert("Thank You! Your Response will be generated soon!")
      // axios.post("http://localhost:3000/", data).then((res) => {
      //   console.log(data);
      //   console.log("data posted");
      //   setShowQuestion(false)
      // })
      //   .catch((err) => {
      //     console.log(err);
      //   })
      let jsonString;
      axios
        .post("http://localhost:5000/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          jsonString: JSON.stringify(data),
        })
        .then((response) => {
          console.log("response", response.data);
          console.log(jsonString);
        })
        .catch((error) => console.log(error));
    }
    else {
      setCurrentQuestion(currentQuestion + 1)
      setIsAnswered(false);
      setAns();

      const newData = data;
      if (currentQuestion < newData.length) {
        newData[currentQuestion] = ans;
      }
      else {
        newData.push(ans);
      }
      setData(newData);
    }
    // newAns = "";
    console.log(data);
  }
  const handlePrevious = (e) => {
    if (currentQuestion == 0) {
      // setCurrentQuestion(questions.length - 1);
      window.alert("Reached the First Question!")
    }
    else {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleAnswer = (answer) => {
    setIsAnswered(true)
    setAns(answer)
    console.log(answer);
    console.log(ans);
  }

  // let newAns = "";
  const handleInputChange = (e) => {
    setIsAnswered(true)
    // newAns.concat(e.target.value);
    setAns(Number(e.target.value))
    // e.target.value = "";
    console.log(e.target.value);
    console.log(ans);
  }

  useEffect(() => {
    document.title = "Diabetes Tracker"
  }, [])

  return (
    <>
      {showQuestion ?
        (
          // <QuestionModal questions={questions} currentQuestion={currentQuestion} />

          <section className='m-5 p-3 justify-content-center text-center'>
            <div className='question-section text-center' style={{
              // border: "0.5px gray solid",
              marginTop: "7.5vh",
              // height: "50vh",
              width: "50%",
              top: "50%",
              left: "25%",
              boxShadow: "4px 4px 8px gray", borderRadius: "2.5vh",
            }}>
              <div className='question-count p-3 d-flex' style={{ textAlign: "left" }}>
                <span>Question {currentQuestion + 1}/{questions.length}</span>
                <button className='btn btn-danger' style={{ width: "40px", height: "40px", marginLeft: "auto" }} onClick={handleClose}>X</button>
              </div>
              <div className='question-text p-3'>{questions[currentQuestion].questionText}</div>
              <div className='answer-section text-center'>
                {/* {questions[currentQuestion].answers.map((answer) => (
                                    <button className='answerBtn mx-3 my-2 btn btn-primary' onClick={(answer) => handleAnswer(answer)}>{answer}</button>
                                ))} */}

                {currentQuestion == 3 || currentQuestion == 13 || currentQuestion == 14 || currentQuestion == 15 || currentQuestion == 19 || currentQuestion == 20 ? (
                  <input type="text" name="inputQue" id="" onChange={(e) => handleInputChange(e)} />
                ) : (
                  <div>
                    <button className='answerBtn mx-3 my-2 btn btn-primary' onClick={() => handleAnswer(1)}>Yes</button>
                    <button className='answerBtn mx-3 my-2 btn btn-primary' onClick={() => handleAnswer(0)}>No</button>
                  </div>
                )}
              </div>
              <div className='text-center'>
                <button className='btn btn-primary m-2' onClick={handlePrevious}>Previous</button>
                <button className='btn btn-primary m-2' disabled={!isAnswered} onClick={handleNext}>
                  {currentQuestion === questions.length - 1 ? "Submit" : "Save & Next"}

                </button>
              </div>
            </div>

          </section>

        ) : (
          <section className='m-4 p-3'>
            <h2 className='text-center'>Heading</h2>

            <section className='card1 d-flex' style={{
              // border: "0.5px gray solid",
              marginTop: "7.5vh",
              marginLeft: "25vh",
              width: "75%",
              left: "50%",
              boxShadow: "4px 4px 8px gray", borderRadius: "2.5vh"
            }}>
              <div className='drImg'>
                <img src={doctorImg} />
              </div>
              <div className='container p-5 text-center' style={{ width: "60%" }}>
                <h4>Title</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe facere quo eius odio ducimus delectus tenetur tempora labore nostrum corrupti expedita veritatis, a eaque velit? Ullam dolores dolore culpa deserunt ipsam laudantium aliquam quas labore tenetur? Iusto atque iste velit, sequi magni asperiores in eius voluptatum cupiditate ea, illum veritatis.</p>
                <button className='btn btn-success m-3 text-center ' onClick={(e) => handleModal(e)}>Take Quiz</button>
              </div>
            </section>


          </section>
        )
      }

    </>
  )
}

export default MainPage