// import React, { useEffect, useState } from "react";

// import { useRecoilState } from "recoil";
// import { AfricaSurveyState } from "@/app/atoms/africaSurvey";
// import { FaAngleRight } from "react-icons/fa6";
// export const Question2 = ({
//   qNo,
//   question,
//   label,
//   answers,
//   nextTab,
//   btn1,
//   btn2,
//   many,
// }) => {
//   const [africaSurveystate, setAfricaSurveyState] =
//     useRecoilState(AfricaSurveyState);
//   const [next, setNext] = useState(false);
//   const [selectedAnswers, setSelectedAnswers] = useState([])
//   const [selectedAnswer, setSelectedAnswer] = "";
//   const [currentQuestion, setCurrentQuestion] = useState(1)


//   //currentQuestion is redeclared here 

//   const handleNext = (e) => {
//     const newObj = {
//       question: qNo - 1,
//       answer: e,
//     };
//     setAfricaSurveyState([...africaSurveystate, newObj]);
//     nextTab(parseInt(qNo) + 1);
//   };

//   const handleMultiSelect = (answer) => {
//     setSelectedAnswers((prevSelectedAnswers) => {
//       const index = prevSelectedAnswers.indexOf(answer);
//       if (index !== -1) {
//         return prevSelectedAnswers.filter((item) => item !== answer);
//       } else {
//         return [...prevSelectedAnswers, answer];
//       }
//     });
//   };

//   const handleSubmit = () => {
//     if (selectedAnswer != "") {
//       const newObj = {
//         question: qNo - 1,
//         answer: e,
//       };

//       setAfricaSurveyState([...africaSurveystate, newObj]);
//       nextTab(parseInt(qNo) + 1);
//     }
//   };
//   const Skip = () => {
//     nextTab(parseInt(qNo) + 1);
//   };

//   const qnumber = qNo - 1;

//   return (
//     <div className="container">
//       <main className="container" style={{ height: "100vh" }}>
//         <div className="row justify-content-center">
//           <div className="col-md-9">
//             <div style={{ marginTop: "80px" }}>
//               <h3
//                 style={{
//                   color: "gray",
//                   fontSize: "15px",
//                   fontWeight: "700",
//                   paddingTop: "20px",
//                 }}
//               >
//                 Question {qnumber}
//               </h3>
//               <h2
//                 style={{ fontSize: "25px", fontWeight: "600", color: "white" }}
//                 className="mb-5"
//               >
//                 {question}
//                 {many && (
//                   <>
//                     <p
//                       style={{
//                         color: "gray",
//                         fontWeight: "600",
//                         fontSize: "20px",
//                       }}
//                     >
//                       {label && <>(Select all that apply)</>}
//                     </p>
//                   </>
//                 )}
//               </h2>
//               {many && (
//                 <>
//                   <div style={{}}>
//                     <p
//                       style={{
//                         color: "gray",
//                         fontWeight: "600",
//                         fontSize: "15px",
//                         marginTop: "10px",
//                       }}
//                     >
//                       {label && <>Choose as many as you like</>}
//                     </p>
//                   </div>
//                 </>
//               )}

//               <div>
//                 {btn1 && (
//                   <>
//                     {answers.map((answer, Index) => (
//                       <>
//                         <div className="col-md-4">
//                           <div
//                             className="row choice mb-2 rounded"
//                             style={{
//                               textAlign: "justify",
//                               border: "1px solid grey",
//                               marginLeft: "2px",
//                               color:
//                                 selectedAnswer == answer ? "black" : "white",
//                               backgroundColor:
//                                 selectedAnswer == answer
//                                   ? "white"
//                                   : "transparent",
//                             }}
//                             onClick={() => setSelectedAnswer(answer)}
//                           >
//                             <div className="d-flex p-2">
//                               <div style={{ width: "95%" }}>{answer}</div>
//                               <div className="w-5 circle">A</div>
//                             </div>
//                           </div>
//                         </div>
//                       </>
//                     ))}
//                   </>
//                 )}
//               </div>
//               <div>
//                 {btn1 == "" && (
//                   <>
//                     {answers.map((answer) => (
//                       <>
//                         <div className="col-md-5" key={answer}>
//                           <div
//                             className="row choice mb-2 rounded"
//                             style={{
//                               textAlign: "justify",
//                               border: "1px solid grey",
//                               marginLeft: "2px",
//                               color: "white",
//                             }}
//                             onClick={() => handleNext(answer)}
//                           >
//                             <div className="d-flex p-2">
//                               <div style={{ width: "95%" }}>{answer}</div>
//                               <div className="w-5 circle">A</div>
//                             </div>
//                           </div>
//                         </div>
//                       </>
//                     ))}
//                   </>
//                 )}
//               </div>
//               {many && (
//                 <>
//                   <button
//                     className="btn "
//                     style={{
//                       padding: "15px 35px",
//                       borderRadius: "50px",
//                       fontSize: "15px",
//                       marginTop: "30px",
//                       backgroundColor: "red",
//                       color: "white",
//                       fontWeight: "900",
//                       gap: "10px",
//                       color: "white",
//                       textDecoration: "none",
//                     }}
//                     onClick={() => {
//                       setCurrentQuestion(currentQuestion + 1);
//                     }}
//                   >
//                     {" "}
//                     NEXT <FaAngleRight />
//                   </button>
//                 </>
//               )}

//               <div className="d-flex">
//                 {btn1 && (
//                   <>
//                     <button onClick={handleSubmit}>Next</button>
//                   </>
//                 )}
//                 {btn2 && (
//                   <>
//                     <button onClick={Skip}>Skip</button>
//                   </>
//                 )}
//               </div>

//               {/* //option */}
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { AfricaSurveyState } from "@/app/atoms/africaSurvey";
import { FaAngleRight } from "react-icons/fa6";
const indexToAlphabet = (index) => String.fromCharCode(65 + index); // 65 is the char code for 'A'
export const Question2 = ({
  qNo,
  question,
  label,
  answers,
  nextTab,
  btn1,
  btn2,
}) => {
  const [africaSurveystate, setAfricaSurveyState] =
    useRecoilState(AfricaSurveyState);
  const [next, setNext] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswers,setSelectedAnswers]=useState([])

  const handleNext = (e) => {
    setSelectedAnswer(e)
    const newObj = {
      question: qNo - 1,
      answer: e,
    };
    setAfricaSurveyState([...africaSurveystate, newObj]);
    setTimeout(() => {
      nextTab(parseInt(qNo) + 1);
    }, 1000); 
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

  const handleColor=(answer)=>{
      const index = selectedAnswers.indexOf(answer);
      if (index !== -1) {
        
       return 'black'
      } else {
        
        return 'white'
      }
   
  }

  const handleBackgroundColor=(answer)=>{
      const index =selectedAnswers.indexOf(answer);
      if (index !== -1) {
         return "#ccd0d4"
      } else {
        return "transparent"
      }
   
  }

  const handleSubmit = () => {
    console.log(selectedAnswers,'selected Answers')
    if (selectedAnswers.length>0) {
      const newObj = {
        question: qNo - 1,
        answer: selectedAnswers,
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

      <main className="container" style={{ height: "1100px" }}>
        <div className="row justify-content-center">
          <div className="col-md-9 pb-5">
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
                <>
                  <p
                    style={{
                      color: "gray",
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    (Select all that apply)
                  </p>
                </>
              </h2>
              <div style={{}}>
                <p
                  style={{
                    color: "gray",
                    fontWeight: "600",
                    fontSize: "15px",
                    marginTop: "10px",
                  }}
                >
                 Choose as many as you like
                </p>
              </div>
              <div>
                {btn1 && !btn2 && (
                  <>
                    {answers.map((answer, index) => (
                      <>
                        <div className="col-md-5" >
                          <div
                            className="row choice mb-2 rounded"
                            style={{

                              border: "1px solid grey",
                              marginLeft: "2px",
                              color:
                              handleColor(answer),
                              backgroundColor:handleBackgroundColor(answer)
                            }}
                            onClick={() => handleMultiSelect(answer)}
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
                    {answers.map((answer, index) => (
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
                            onClick={() => handleMultiSelect(answer)}
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
                    {answers.map((answer, index) => (
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
                  onClick={handleSubmit}
                >
                  Next
                  <FaAngleRight style={{ marginLeft: "10px" }} />
                </button>
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


