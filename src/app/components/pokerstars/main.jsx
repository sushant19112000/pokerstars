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
<<<<<<< HEAD
import Hero from "./hero";
import "./main.css"
import ValidateNameAndSurname from "./FirstNameLastName";
// const Tab = ({ isActive, children }) =>
//   isActive ? <div>{children}</div> : null;
=======
import { ChoosePassword } from "./choosePassword";
import { ChooseEmail } from "./chooseEmail";
import { ChooseDate } from "./chooseDate";
const Tab = ({ isActive, children }) =>
  isActive ? <div>{children}</div> : null;
>>>>>>> 21bba3c23d4837da76f6d62858c3f7ed60690faf

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
          <Tab isActive={tabNo === 5}>
            <ChooseDate/>
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
