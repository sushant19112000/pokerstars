import { useRecoilState } from "recoil";
import { PokerStarsData } from "@/app/atoms/pokerStarsData";

export const useSaveData = () => {
  const [pokerStarsState, setpokerStarsState] =
    useRecoilState(PokerStarsData);
  const handleSaveData = (key, value) => {
    const oldData={...pokerStarsState}
    oldData[key]=value
    setpokerStarsState(oldData);
  };
  return handleSaveData;
};
