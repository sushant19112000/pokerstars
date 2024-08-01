import { useRecoilState } from "recoil";
import { PokerStarsData } from "@/app/atoms/pokerStarsData";

export const useSaveData = () => {
  const [pokerStarsState, setpokerStarsState] =
    useRecoilState(PokerStarsData);
  const handleSaveData = (key, value) => {
    const oldData={...pokerStarsState}
    console.log(key,oldData[key],'key','value')
    oldData[key]=value
    setpokerStarsState(oldData);
    // console.log(pokerStarsState[key],'data saved')
  };
  return handleSaveData;
};


