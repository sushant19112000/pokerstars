import React, { useEffect } from "react";
import { Question } from "./question";
import { useState } from "react";
import { UploadSurvey } from "./upload";
import "./main.css";
import { q1,q2,q3,q4,q5,q6 } from "./data";
import { Thankyou } from "./thankyou";
import { Home } from "./home";
import { useRecoilState } from "recoil";
import { AfricaSurveyState } from "@/app/atoms/africaSurvey";
import SurveyContact from "./contact";
export const Main = () => {
  const [surveyData,setSurveyData]=useRecoilState(AfricaSurveyState)
  const [currentQuestion, setCurrentQuestion] = useState(1);
  useEffect(()=>(
    console.log(surveyData,"surveyData")
  ),[currentQuestion])
  const handleNext = (qno) => {
    setCurrentQuestion(qno+1);
  };
  return (
    <>
      <div
        style={{
          height: "1000px",
          backgroundImage: "url('/SurveypageBgimage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="pb-5"
      >
        {currentQuestion == 1 && (
          <>
            <Home nextTab={handleNext} />
          </>
        )}
        {currentQuestion == 2 && <><Question qNo={2} question={q1.question} answers={q1.answers} btn1={false} btn2={false} label="" nextTab={handleNext} /></>}
        {currentQuestion == 3 && <><Question qNo={3} question={q2.question} answers={q2.answers} btn1={false} btn2={false} label="" nextTab={handleNext} /></>}
        {currentQuestion == 4 && <><Question qNo={4} question={q3.question} answers={q3.answers} btn1={false} btn2={false} label="" nextTab={handleNext} /></>}
        {currentQuestion == 5 && <><Question qNo={5} question={q4.question} answers={q4.answers} btn1={false} btn2={false} label="" nextTab={handleNext} /></>}
        {currentQuestion == 6 && <><Question qNo={6} question={q5.question} answers={q5.answers} btn1={false} btn2={false} label="" nextTab={handleNext} /></>}
        {currentQuestion == 7 && <><Question qNo={7} question={q6.question} answers={q6.answers} btn1={false} btn2={true} label="" nextTab={handleNext} /></>}
        {currentQuestion == 8 && <><SurveyContact nextTab={handleNext}/></>}
        {currentQuestion == 9 && (
          <>
            <UploadSurvey nextTab={handleNext}/>
          </>
        )}
        {currentQuestion==10 &&(
          <>
          <Thankyou/>
          </>
        )}
      </div>
    </>
  );
};
