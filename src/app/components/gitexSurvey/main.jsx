import React from "react";
import { Home } from "./home";


import Contact from "./contact";
import { Question } from "./question2";
import { TermsCondition } from "./Terms&condition";
export const Main = () => {
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
        <TermsCondition />
      </div>
    </>
  );
};
