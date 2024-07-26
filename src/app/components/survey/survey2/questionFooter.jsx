import React, { useState, useEffect } from "react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { useRecoilState } from "recoil";
import { AfricaSurveyState } from "@/app/atoms/africaSurvey";
export const QuestionFooter = ({ qNo }) => {
  const [surveyData, setSurveyData] = useRecoilState(AfricaSurveyState);
  const [disableNext, setDisableNext] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const handlePrev = (qno) => {
    if (currentQuestion == 1) {
      return;
    }
    setCurrentQuestion(currentQuestion - 1);
  };
  useEffect(() => {
    tempFunNext();
  }, [currentQuestion]);

  // const tempFunNext = () => {
  //   surveyData.map((ob) => {
      
  //     if (ob.question === currentQuestion) {
  //       setDisableNext(false);
  //     } else {
  //       setDisableNext(true);
  //     }
  //     // console.log(ob.question, "question");
  //   });
  // };

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          gap: "60px",
        }}
      >
        <div
          className="footercircle"
          style={{ marginLeft: "30px", fontSize: "25px" }}
        ></div>

        <div
          style={{
            display: "flex",

            fontSize: "15px",
            gap: "20px",
          }}
        >
          <p>Never submit password! Submission guidelines</p>

          <p>
            <FaRegArrowAltCircleDown />
          </p>
        </div>
      </div>

      <div
        style={{
          marginRight: "30px",
          display: "flex",
          gap: "20px",
          backgroundColor: "transparent",
          border: "none",
        }}
      >
        <button className="updownbutton" onClick={handlePrev}>
          <IoIosArrowUp />
        </button>
        <button
          className="updownbutton"
          disabled={disableNext}
          onClick={tempFunNext}
        >
          <IoIosArrowDown />
        </button>
      </div>
    </div>
  );
};
