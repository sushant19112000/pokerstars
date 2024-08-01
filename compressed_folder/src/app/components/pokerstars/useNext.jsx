import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { pokerStarsTab } from "@/app/atoms/pokerStarsTab";
export const useNext = () => {
  const [tab, setTab] = useRecoilState(pokerStarsTab);
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
