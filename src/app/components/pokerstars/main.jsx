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
import { DepositLimit } from "./depositLimit";
import { PokerStarsData } from "@/app/atoms/pokerStarsData";
const Tab = ({ isActive, children }) =>
  isActive ? <div>{children}</div> : null;

export const Main = () => {
  const tabNo = useRecoilValue(pokerStarsTab);
  const data=useRecoilValue(PokerStarsData)
  useEffect(() => {console.log(data,'data')}, [tabNo,data]);
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

          <Tab isActive={tabNo==8}>
            <DepositLimit/>
          </Tab>

          <Tab isActive={tabNo === 9}>
            <LimitCap />
          </Tab>
          
          <Tab isActive={tabNo === 10}>
            <AutoMaticWithDrawalLimit />
          </Tab>
        </div>
      </div>
    </>
  );
};
