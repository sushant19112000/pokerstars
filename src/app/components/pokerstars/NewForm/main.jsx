import React, { useEffect } from "react";
import { Form1 } from "./form1";
import { Form2 } from "./form2";
import { useRecoilValue } from "recoil";
import { pokerStarsTab } from "@/app/atoms/pokerStarsTab";
import { PokerStarsData } from "@/app/atoms/pokerStarsData";
const Tab = ({ isActive, children }) =>
  isActive ? <div>{children}</div> : null;

export const Main = () => {
  const tabNo = useRecoilValue(pokerStarsTab);
  const data = useRecoilValue(PokerStarsData);
  useEffect(() => {
    console.log(data, "data");
  }, [tabNo, data]);
  return (
    <>
      <Tab isActive={tabNo === 1}>
        <Form1 />
      </Tab>
      <Tab isActive={tabNo === 2}>
        <Form2 />
      </Tab>
    </>
  );
};
