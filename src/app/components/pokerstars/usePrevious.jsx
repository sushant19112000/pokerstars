import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { pokerStarsTab } from "@/app/atoms/pokerStarsTab";
export const usePrevious= () => {
  const [tab, setTab] = useRecoilState(pokerStarsTab);
  useEffect(() => {}, [tab]);
  const handlePrevious = () => {
    if (tab>1){
        setTab((prevTab) => {
            const newTab = prevTab -1;
            // console.log('New Tab:', newTab);
            return newTab;
          });
    }
  
    // setTimeout(() => {
    // }, 1000); // Adjust the delay (in milliseconds) as needed
  };
  return handlePrevious;
};
