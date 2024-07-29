import React from "react";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { pokerStarsTab } from "@/app/atoms/pokerStarsTab";
import { ChooseCounty } from "./chooseCounty";
import { ChooseUsername } from "./chooseUsername";

import Hero from "./hero";
import "./main.css";
import ValidateNameAndSurname from "./FirstNameLastName";

import { ChoosePassword } from "./choosePassword";
import { ChooseEmail } from "./chooseEmail";
import { ChooseDate } from "./chooseDate";
import "./main.css";
import { ChooseCountryStateCityOfBirth } from "./chooseCountryStateCityOfBirth";
import { ChooseAddressFname } from "./chooseAddressFname";
import { LimitCap } from "./limitCap";
import { AutoMaticWithDrawalLimit } from "./automaticWithDrawalLimit";
const Tab = ({ isActive, children }) =>
  isActive ? <div>{children}</div> : null;

export const Main = () => {
  const tabNo = useRecoilValue(pokerStarsTab);
  useEffect(() => {}, [tabNo]);
  return (
    <>
      <div>
        <div>
          <Tab isActive={tabNo === 1}>
            <ChooseCounty />
          </Tab>
          <Tab isActive={tabNo === 2}>
            <ChooseUsername />
          </Tab>
          <Tab isActive={tabNo == 3}>
            <ChoosePassword />
          </Tab>
          <Tab isActive={tabNo === 4}>
            <ChooseEmail />
          </Tab>
          <Tab isActive={tabNo === 5}>
            <ChooseDate />
          </Tab>
          <Tab isActive={tabNo === 6}>
            <ChooseCountryStateCityOfBirth />
          </Tab>

          <Tab isActive={tabNo === 7}>
            <ChooseAddressFname />
          </Tab>

          <Tab isActive={tabNo === 8}>
            <LimitCap />
          </Tab>

          <Tab isActive={tabNo === 9}>
            <AutoMaticWithDrawalLimit />
          </Tab>
        </div>
      </div>
    </>
  );
};
