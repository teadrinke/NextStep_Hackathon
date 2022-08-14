import React from 'react'
import "../css/Question.css";

const About = () => {
    return (
        <>
            <section className="m-4 p-3">
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
                    <div className="container p-5 " style={{ width: "60%" }}>
                        <h4 className="text-center my-1 ">Problem</h4>
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
                    </div>
                </section>
            </section>
            <section className="m-4 p-3">
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
                    <div className="container p-5 " style={{ width: "60%" }}>
                        <h4 className="text-center my-1 ">Solution</h4>
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
                    </div>
                </section>
            </section>
        </>
    )
}

export default About