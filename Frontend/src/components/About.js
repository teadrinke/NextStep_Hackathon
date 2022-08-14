import React from 'react'
import "../css/Question.css";
import github from "../img/github.svg"
import linkedin from "../img/linkedin.svg"
import Gaurav from "../img/Gaurav.png"
import Shashank from "../img/Shashank.png"
import Omkar from "../img/Omkar.jpg"

const About = () => {
    return (
        <>
            <section className="m-1 p-3">
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
                    <div className="container p-5 " style={{ width: "90%" }}>
                        <h4 className="text-center my-1 ">Problem Statement</h4><br />
                        <p style={{ fontFamily: "McLaren, cursive ", fontSize: "1rem" }}>
                            In this modern world, diabetes is becoming a common phenomenon. People are suffering more and more depression and anxiety related problems. Thus in this period of time, the diagnosis of this problem should be done as early as possible.  <br />
                        </p>
                    </div>
                </section>
            </section>
            <section className="m-1 p-3">
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
                    <div className="container p-5 " style={{ width: "90%" }}>
                        <h4 className="text-center my-1 ">Solution Proposed</h4><br />
                        <p style={{ fontFamily: "McLaren, cursive ", fontSize: "1rem" }}>
                            A web application is developed to predict if you have been diagnosed by diabetes. The result of this prediction tells you if you are a Non-Diabetic, Pre-Diabetic or a Diabetic person. This prediction is done on the basis of the answers the user submits by attempting the quiz provided.  <br />
                        </p>
                    </div>
                </section>
            </section>
            <section className="m-1 p-3">
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
                    <div className="container p-5 " style={{ width: "90%" }}>
                        <h4 className="text-center my-1 ">Solution By</h4><br />

                        {/* <div className='about-card'>
                            <p>Siddhesh Pande :
                                <a className='m-2 btn btn-primary' href="https://www.linkedin.com/in/siddhesh-pande-b55470205/">LinkedIn</a>
                                <a className='m-2 btn btn-dark' href="https://github.com/Sidpan19">GitHub</a>
                            </p>
                        </div> */}
                        <section className='d-flex container-fluid'>
                            <div className='about-card text-center m-3'>
                                <img className='about-image' src={Gaurav} alt="" />
                                <br />
                                <p className='m-1'>Siddhesh Pande</p>
                                <p>ML Model</p>
                                <a className='m-2 btn btn-light' href="https://www.linkedin.com/in/siddhesh-pande-b55470205"><img style={{ margin: "0" }} src={linkedin} alt="" /></a>
                                <a className='m-2 btn btn-light' href="https://github.com/Sidpan19"><img style={{ margin: "0" }} src={github} alt="" /></a>
                            </div>
                            <div className='about-card text-center m-3'>
                                <img className='about-image' src={Gaurav} alt="" />
                                <br />
                                <p className='m-1'>Gaurav Somani</p>
                                <p>Backend</p>
                                <a className='m-2 btn btn-light' href="https://www.linkedin.com/in/gaurav-somani-294233218"><img style={{ margin: "0" }} src={linkedin} alt="" /></a>
                                <a className='m-2 btn btn-light' href="https://github.com/gaurav-750/"><img style={{ margin: "0" }} src={github} alt="" /></a>
                            </div>
                            <div className='about-card text-center m-3'>
                                <img className='about-image' src={Omkar} alt="" />
                                <br />
                                <p className='m-1'>Omkar Kulkarni</p>
                                <p>Frontend</p>
                                <a className='m-2 btn btn-light' href="https://www.linkedin.com/in/omkar-kulkarni-5b1693214/"><img style={{ margin: "0" }} src={linkedin} alt="" /></a>
                                <a className='m-2 btn btn-light' href="https://github.com/OmkarK2553"><img style={{ margin: "0" }} src={github} alt="" /></a>
                            </div>
                            <div className='about-card text-center m-3'>
                                <img className='about-image' src={Shashank} alt="" />
                                <br />
                                <p className='m-1'>Shashank Rathi</p>
                                <p>ML Model</p>
                                <a className='m-2 btn btn-light' href="https://www.linkedin.com/in/shashank-sachin-rathi-921637221"><img style={{ margin: "0" }} src={linkedin} alt="" /></a>

                            </div>
                        </section>




                    </div>
                </section>
            </section>
        </>
    )
}

export default About