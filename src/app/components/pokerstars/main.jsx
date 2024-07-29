// import React from "react";
// import { useEffect } from "react";
// import { useRecoilValue } from "recoil";
// import { pokerStarsTab } from "@/app/atoms/pokerStarsTab";
// import { ChooseCounty } from "./chooseCounty";
// import { ChooseUsername } from "./chooseUsername";
// import { ChoosePassword } from "./choosePassword";
// import { ChooseEmail } from "./chooseEmail";
import CenterMode from "./Carousel";
import Carousel from "./Carousel";
import { ChooseUsername } from "./chooseUsername";
import Hero from "./hero";
import "./main.css"
import ValidateNameAndSurname from "./ValidateNameAndSurname";
// const Tab = ({ isActive, children }) =>
//   isActive ? <div>{children}</div> : null;

export const Main = () => {
  // const tabNo = useRecoilValue(pokerStarsTab);
  // useEffect(() => {}, [tabNo]);
  return (
    <>
      {/* <div
      >
        <div>
          <Tab isActive={tabNo === 1}>
             <ChooseCounty/>
          </Tab>
          <Tab isActive={tabNo === 2}>
            <ChooseUsername />
          </Tab>
          <Tab isActive={tabNo==3}>
             <ChoosePassword/>
          </Tab>
          <Tab isActive={tabNo ===4}>
             <ChooseEmail/>
          </Tab>
        </div>
      </div> */}
      {/* <Hero/> */}
      {/* <Carousel/> */}
      {/* <CenterMode/> */}
      <ChooseUsername/>
      {/* <ValidateNameAndSurname/> */}
    </>
  );
};
