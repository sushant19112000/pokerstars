import { useRecoilState } from "recoil";
import { PokerStarsData } from "@/app/atoms/pokerStarsData";

export const useUpload = () => {
  const handleUpload = async (sdata) => {

    console.log(sdata,"uploaded data")
      const response = await fetch(`/api/pokerstars`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(sdata),
      });
      if (response.ok) {
        return true;
      } else {
        return false;
      }
    
  };

  return handleUpload

};


