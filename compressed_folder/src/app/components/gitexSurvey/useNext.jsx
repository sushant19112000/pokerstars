import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { GitexSurvey2024StateTab } from "@/app/atoms/gitexSurvey2024TabNo";
export const useNext = () => {
  const [tab, setTab] = useRecoilState(GitexSurvey2024StateTab);
  useEffect(() => {}, [tab]);
  const handleNext = () => {
    setTab((prevTab) => {
      const newTab = prevTab + 1;
      // console.log('New Tab:', newTab);
      return newTab;
    });
    // setTimeout(() => {
    // }, 1000); // Adjust the delay (in milliseconds) as needed
  };
  return handleNext;
};
