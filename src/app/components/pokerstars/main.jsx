// import React from "react";
// import { Home } from "./home";
// import Contact from "./contact";
// import { useEffect } from "react";
// import { useRecoilValue } from "recoil";
// import { GitexSurvey2024StateTab } from "@/app/atoms/gitexSurvey2024TabNo";
// import { QuestionsMapper } from "../gitexSurvey/questionsMapper";
// import { TermsCondition } from "../gitexSurvey/Terms&condition";
// const Tab = ({ isActive, children }) =>
//   isActive ? <div>{children}</div> : null;
import "./main.css"
import Hero from "./hero";
import Section2 from "./section2";
import Section3 from "./section3";
import Heading from "./heading";
import Info from "./info";
import Corousel from "./Carousel";

export const Main = () => {
  // const tabNo = useRecoilValue(GitexSurvey2024StateTab);
  // useEffect(() => {}, [tabNo]);
  return (
    // <>
    //   <div
    //     style={{
    //       backgroundImage: 'url("/glitex_survey_bgimg.png")',
    //       backgroundSize: "cover",
    //       backgroundPosition: "center",
    //       height: "1000px",
    //     }}
    //   >
    //     <div>
    //       <Tab isActive={tabNo === 1}>
    //         <Home />
    //       </Tab>
    //       <Tab isActive={tabNo === 2}>
    //         <Contact />
    //       </Tab>
    //       <Tab isActive={tabNo > 2 && tabNo < 18}>
    //         <>
    //           <QuestionsMapper tab={tabNo} />
    //         </>
    //       </Tab>
    //       <Tab isActive={tabNo === 18}>
    //         <TermsCondition />
    //       </Tab>
    //     </div>
    //   </div>
    // </>
    <>
    <Hero/>
    {/* <Section2/> */}
    {/* <Section3/> */}
    {/* <Corousel/> */}
    {/* <Heading/>
    <Info/> */}
    </>

  );
};
