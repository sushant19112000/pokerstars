import React, { useEffect, useState } from "react";

import { useRecoilState } from "recoil";
import { AfricaSurveyState } from "@/app/atoms/africaSurvey";
import { FaAngleRight } from "react-icons/fa6";
export const Question2 = ({
  qNo,
  question,
  label,
  answers,
  nextTab,
  btn1,
  btn2,
  many,
}) => {
  const [africaSurveystate, setAfricaSurveyState] =
    useRecoilState(AfricaSurveyState);
  const [next, setNext] = useState(false);
  const [selectedAnswers,setSelectedAnswers]=useState([])
  const [selectedAnswer, setSelectedAnswer] = "";
  const [currentQuestion,setCurrentQuestion] =useState(1)
   

  //currentQuestion is redeclared here 
  
  const handleNext = (e) => {
    const newObj = {
      question: qNo - 1,
      answer: e,
    };
    setAfricaSurveyState([...africaSurveystate, newObj]);
    nextTab(parseInt(qNo) + 1);
  };

  const handleMultiSelect = (answer) => {
    setSelectedAnswers((prevSelectedAnswers) => {
      const index = prevSelectedAnswers.indexOf(answer);
      if (index !== -1) {
        return prevSelectedAnswers.filter((item) => item !== answer);
      } else {
        return [...prevSelectedAnswers, answer];
      }
    });
  };

  const handleSubmit = () => {
    if (selectedAnswer != "") {
      const newObj = {
        question: qNo - 1,
        answer: e,
      };

      setAfricaSurveyState([...africaSurveystate, newObj]);
      nextTab(parseInt(qNo) + 1);
    }
  };
  const Skip = () => {
    nextTab(parseInt(qNo) + 1);
  };

  const qnumber = qNo - 1;

  return (
    <div className="container">
      <main className="container" style={{ height: "100vh" }}>
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div style={{ marginTop: "80px" }}>
              <h3
                style={{
                  color: "gray",
                  fontSize: "15px",
                  fontWeight: "700",
                  paddingTop: "20px",
                }}
              >
                Question {qnumber}
              </h3>
              <h2
                style={{ fontSize: "25px", fontWeight: "600", color: "white" }}
                className="mb-5"
              >
                {question}
                {many && (
                  <>
                    <p
                      style={{
                        color: "gray",
                        fontWeight: "600",
                        fontSize: "20px",
                      }}
                    >
                      {label && <>(Select all that apply)</>}
                    </p>
                  </>
                )}
              </h2>
              {many && (
                <>
                  <div style={{}}>
                    <p
                      style={{
                        color: "gray",
                        fontWeight: "600",
                        fontSize: "15px",
                        marginTop: "10px",
                      }}
                    >
                      {label && <>Choose as many as you like</>}
                    </p>
                  </div>
                </>
              )}

              <div>
                {btn1 && (
                  <>
                    {answers.map((answer, Index) => (
                      <>
                        <div className="col-md-4">
                          <div
                            className="row choice mb-2 rounded"
                            style={{
                              textAlign: "justify",
                              border: "1px solid grey",
                              marginLeft: "2px",
                              color:
                                selectedAnswer == answer ? "black" : "white",
                              backgroundColor:
                                selectedAnswer == answer
                                  ? "white"
                                  : "transparent",
                            }}
                            onClick={() => setSelectedAnswer(answer)}
                          >
                            <div className="d-flex p-2">
                              <div style={{ width: "95%" }}>{answer}</div>
                              <div className="w-5 circle">A</div>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </>
                )}
              </div>
              <div>
                {btn1 == "" && (
                  <>
                    {answers.map((answer) => (
                      <>
                        <div className="col-md-5" key={answer}>
                          <div
                            className="row choice mb-2 rounded"
                            style={{
                              textAlign: "justify",
                              border: "1px solid grey",
                              marginLeft: "2px",
                              color: "white",
                            }}
                            onClick={() => handleNext(answer)}
                          >
                            <div className="d-flex p-2">
                              <div style={{ width: "95%" }}>{answer}</div>
                              <div className="w-5 circle">A</div>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </>
                )}
              </div>
              {many && (
                <>
                  <button
                    className="btn "
                    style={{
                      padding: "15px 35px",
                      borderRadius: "50px",
                      fontSize: "15px",
                      marginTop: "30px",
                      backgroundColor: "red",
                      color: "white",
                      fontWeight: "900",
                      gap: "10px",
                      color: "white",
                      textDecoration: "none",
                    }}
                    // onClick={() => {
                    //   setCurrentQuestion(currentQuestion + 1);
                    // }}
                  >
                    {" "}
                    NEXT <FaAngleRight />
                  </button>
                </>
              )}

              <div className="d-flex">
                {btn1 && (
                  <>
                    <button onClick={handleSubmit}>Next</button>
                  </>
                )}
                {btn2 && (
                  <>
                    <button onClick={Skip}>Skip</button>
                  </>
                )}
              </div>

              {/* //option */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};


