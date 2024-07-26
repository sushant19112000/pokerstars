import React, { useEffect } from "react";
import { useState } from "react";
import { Home2 } from "./home2";
import "./main.css";
import { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12 } from "./data2";
import { Question2 } from "./question2";
import { Question } from "../question";
import { Contact2 } from "./contact2";
import { useRecoilState } from "recoil";
import { AfricaSurveyState } from "@/app/atoms/africaSurvey";
import { QuestionFooter } from "./questionFooter";
import { Question14 } from "./question14";
import { Question15 } from "./question15";
import { Thankyou } from "./thankyou";

export const Main2 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [nextDisabled, setNextDisabled] = useState(true)
  const [surveyData, setSurveyData] = useRecoilState(AfricaSurveyState)

  // const checkNext =()=>{
  //  surveyData.some((ob) => {
  //   console.log(ob.question === currentQuestion, "condition");
  //   if (ob.question === currentQuestion) {
  //     setCurrentQuestion(currentQuestion + 1);
  //     console.log(currentQuestion)
  //     return true;
  //   }
  //   return false;
  // })};

  
  

  const handleFooterNext=()=>{
    setCurrentQuestion(currentQuestion+1)
  }
  useEffect(()=>{
    // const result = surveyData.find((item) => item['question']=== currentQuestion);
    // console.log(result,'surveyfind')
    // if (result==true){
    //   setNextDisabled(false)
    // }
    // console.log(currentQuestion,'currentQuestion')
  },[currentQuestion])

  const handleNext = (qno) => {
    setCurrentQuestion(qno)
  };
  return (
    <>
      <div
        style={{
          height: "1100px",
          backgroundColor: "black",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="pb-5"
      >
        {currentQuestion == 1 && (
          <>
            <Home2 nextTab={handleNext} />
          </>
        )}
        {currentQuestion == 2 && (
          <>
            <Question
              qNo={2}
              question={q1.question}
              answers={q1.answers}
              btn1={false}
              btn2={false}
              nextTab={handleNext}
            />{" "}
          </>
        )}
        {currentQuestion == 3 && (
          <>
            <Question2
              qNo={3}
              question={q2.question}
              answers={q2.answers}
              btn1={true}
              btn2={false}
              nextTab={handleNext}
            />
          </>
        )}
        {currentQuestion == 4 && (
          <>
            <Question2
              qNo={4}
              question={q3.question}
              answers={q3.answers}
              btn1={true}
              btn2={false}
              label={true}

              nextTab={handleNext}
            />
          </>
        )}
        {currentQuestion == 5 && (
          <>
            <Question2
              qNo={5}
              question={q4.question}
              answers={q4.answers}
              btn1={true}
              btn2={false}

              nextTab={handleNext}
            />
          </>
        )}
        {currentQuestion == 6 && (
          <>
            <Question2
              qNo={6}
              question={q5.question}
              answers={q5.answers}
              btn1={true}
              btn2={false}
              nextTab={handleNext}
            />
          </>
        )}
        {currentQuestion == 7 && (
          <>
            <Question
              qNo={7}
              question={q6.question}
              answers={q6.answers}
              btn1={false}
              btn2={false}
              nextTab={handleNext}
            />
          </>
        )}
        {currentQuestion == 8 && (
          <>
            <Question2
              qNo={8}
              question={q7.question}
              answers={q7.answers}
              btn1={true}
              btn2={false}
              nextTab={handleNext}
            />
          </>
        )}
        {currentQuestion == 9 && (
          <>
            <Question
              qNo={9}
              question={q8.question}
              answers={q8.answers}
              btn1={false}
              btn2={false}
              nextTab={handleNext}
            />
          </>
        )}
        {currentQuestion == 10 && (
          <>
            <Question
              qNo={10}
              question={q9.question}
              answers={q9.answers}
              btn1={false}
              btn2={false}
              nextTab={handleNext}
            />
          </>
        )}
        {currentQuestion == 11 && (
          <>
            <Question
              qNo={11}
              question={q10.question}
              answers={q10.answers}
              btn1={false}
              btn2={false}
              nextTab={handleNext}
            />
          </>
        )}

        {currentQuestion == 12 && (
          <>
            <Question2
              qNo={12}
              question={q11.question}
              answers={q11.answers}
              btn1={true}
              btn2={false}
              nextTab={handleNext}
            />
          </>
        )}
        {currentQuestion == 13 && (
          <>
            <Question2
              qNo={13}
              question={q12.question}
              answers={q12.answers}
              btn1={true}
              btn2={false}
              nextTab={handleNext}
            />
          </>
        )}

        {currentQuestion == 14 && (
          <>
            <Contact2 nextTab={handleNext} />
          </>
        )}

        {currentQuestion == 15 && (
          <>
            <Question14 nextTab={handleNext} />
          </>
        )}

{currentQuestion == 16 && (
          <>
            <Question15 nextTab={handleNext} />
          </>
        )}
     
      {/* {currentQuestion != 1 && (
        <>
          <QuestionFooter  />
        </>
      )} */}

      
{currentQuestion == 17 && (
          <>
            <Thankyou/>
          </>
        )}
      
      {/* {currentQuestion != 1 && (
        <>
          <QuestionFooter  />
        </>
      )} */}

</div>



      {/* # if current!=1 ;previous disabled  else previous=current-1 */}

     {/* <button disabled={nextDisabled}  onClick={handleFooterNext}> Next</button>
      <button onClick={(()=>(setCurrentQuestion(currentQuestion-1)))}>Prev </button>  */}
    </>
  );
};
