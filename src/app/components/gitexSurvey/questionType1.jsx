import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { GitexSurvey2024State } from "@/app/atoms/gitexSurvey2024";
import { useNext } from "./useNext";
import { useSaveData } from "./useSaveData";
const indexToAlphabet = (index) => String.fromCharCode(65 + index); // 65 is the char code for 'A'
export const QuestionType1 = ({
  qNo,
  question,
  label,
  answers,
  nextTab,
  btn1,
  btn2,
}) => {
  // const [gitexSurveyState, setGitexSurveyState] =
  //   useRecoilState(AfricaSurveyState);
  const next= useNext();
  const saveData=useSaveData();
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [qnumber,setQnumber]=useState(qNo-1)

  

  const handleNext = (e) => {
    setSelectedAnswer(e)
    
    // const newObj = {
    //   question: qNo,
    //   answer: e,
    // };
    // setGitexSurveyState([...gitexSurveyState, newObj]);
    setTimeout(() => {
      nextTab(parseInt(qNo) + 1);
    }, 1000); // Adjust the delay (in milliseconds) as needed
  };


  const Skip = () => {
    nextTab(parseInt(qNo) + 1);
  };

  

  return (
    <div className="container">
      {/* <div style={{ marginTop: "50px" }}>
        <div>Question {qNo}</div>
        <div>{question}</div>
        <div>{label && <>{label}</>}</div>

        <div>
          {btn1 && (
            <>
              {answers.map((answer, Index) => (
                <>
                  <div className="col-md-3">
                    <div
                      className="row choice mb-2 rounded"
                      style={{
                        textAlign: "justify",
                        border: "1px solid grey",
                        marginLeft: "2px",
                        color: selectedAnswer==answer?"black":"white",
                        backgroundColor:selectedAnswer==answer?"white":"transparent",
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
          {btn1 == false && (
            <>
              {answers.map((answer, Index) => (
                <>
                  <div className="col-md-3">
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
      </div> */}

      <main className="container" style={{ height: "100vh" }}>
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div style={{ marginTop: '80px' }}>
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
              </h2>
              <div>
                {btn1 && !btn2 && (
                  <>
                    {answers.map((answer,index) => (
                      <>
                        <div className="col-md-5" >
                          <div
                            className="row choice mb-2 rounded"
                            style={{

                              border: "1px solid grey",
                              marginLeft: "2px",
                              color:
                                selectedAnswer == answer ? "black" : "white",
                              backgroundColor:
                                selectedAnswer == answer
                                  ? "#ccd0d4"
                                  : "transparent",
                            }}
                            onClick={() => setSelectedAnswer(answer)}
                          >
                            <div className="d-flex p-2">
                              <div style={{ width: "95%" }}>{answer}</div>
                              <div className="w-5 circle">{indexToAlphabet(index)}</div>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </>
                )}
              </div>
              <div>
                {btn2 && !btn1 && (
                  <>
                    {answers.map((answer,index) => (
                      <>
                        <div className="col-md-5" key={answer}>
                          <div
                            className="row choice mb-2 rounded"
                            style={{
                              border: "1px solid grey",
                              marginLeft: "2px",
                              color:
                                selectedAnswer == answer ? "black" : "white",
                              backgroundColor:
                                selectedAnswer == answer
                                  ? "#ccd0d4"
                                  : "transparent",
                            }}
                            onClick={() => handleNext(answer)}
                          >
                            <div className="d-flex p-2">
                              <div style={{ width: "95%" }}>{answer}</div>
                              <div className="w-5 circle">{indexToAlphabet(index)}</div>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </>
                )}
              </div>
              <div>
                {btn1 && btn2 && (
                  <>
                    {answers.map((answer, index) => (
                      <>
                        <div className="col-md-5">
                          <div
                            className="row choice mb-2 rounded"
                            style={{

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
                              <div className="w-5 circle">{indexToAlphabet(index)}</div>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </>
                )}
              </div>


              <div>
                {!btn1 && !btn2 && (
                  <>
                    {answers.map((answer,index) => (
                      <>
                        <div className="col-md-5" key={answer}>
                          <div
                            className="row choice mb-2 rounded"
                            style={{

                              border: "1px solid grey",
                              marginLeft: "2px",
                              color:
                                selectedAnswer == answer ? "black" : "white",
                              backgroundColor:
                                selectedAnswer == answer
                                  ? "#ccd0d4"
                                  : "transparent",
                            }}
                            onClick={() => handleNext(answer)}
                          >
                            <div className="d-flex p-2">
                              <div style={{ width: "95%" }}>{answer}</div>
                              <div className="w-5 circle">{indexToAlphabet(index)}</div>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </>
                )}
              </div>

              {/* <div className="d-flex">
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
              </div> */}

              {
                btn1 && btn2 && (
                  <div className="d-flex">
                    <div>
                      <button onClick={handleSubmit}>Next</button>
                    </div>
                    <div>
                      <button onClick={Skip}>Skip</button>
                    </div>
                  </div>
                )
              }

              {
                btn1 && !btn2 && (
                  <div>
                    <button onClick={handleSubmit}>Next</button>
                  </div>
                )
              }

              {
                btn2 & !btn1 && (
                  <div className="mt-3">
                    <button style={{ fontSize: '14px', backgroundColor: 'transparent', color: 'RGBA(255, 255, 255, 0.4)', fontWeight: '700', border: '0' }} onClick={Skip}>SKIP</button>
                  </div>
                )
              }



              {/* //option */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
