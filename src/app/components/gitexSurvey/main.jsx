import React from "react";
import { Home } from "./home";
import Contact from "./contact";
import { questionsData } from "@/app/data/gitexSurvey2024Data/data";
import { useState,useEffect } from "react";
import { TermsCondition } from "./Terms&condition";
import { useRecoilState } from "recoil";
import { GitexSurvey2024StateTab } from "@/app/atoms/gitexSurvey2024TabNo";
const Tab = ({ isActive, children }) => (isActive ? <div>{children}</div> : null);

export const Main = () => {
  
  const [tabNo, setTabNo] = useRecoilState(GitexSurvey2024StateTab);
  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center "
        style={{
          backgroundImage: 'url("/glitex_survey_bgimg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        {/* <Home /> */}
        {/* <Contact /> */}
        {/* <Question/> */}
        {/* <TermsCondition /> */}
        <div>

          //home
          <Tab isActive={tabNo === 1}>
            <Home/>
          </Tab>
          <Tab isActive={tabNo===2}>
            <Contact />
          </Tab>

          //questions section
          <Tab isActive={tabNo>2 && tabNo<18}>
              <>
               2 to 17 questions
              </>
          </Tab>

          //last terms and conditions
          <Tab isActive={tabNo === 18}>
             <TermsCondition/>
          </Tab>
        </div>
      </div>


    </>
  );
};
