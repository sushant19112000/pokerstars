import { useRecoilState } from "recoil";
import { PokerStarsData } from "@/app/atoms/pokerStarsData";

export const useSaveMultipleData = () => {
  const [pokerStarsState, setPokerStarsState] = useRecoilState(PokerStarsData);

  const handleSaveMultipleData = (updates) => {
    // Create a copy of the current state
    const updatedData = { ...pokerStarsState };
    
    // Apply all updates
    for (const [key, value] of Object.entries(updates)) {
      updatedData[key] = value;
    }

    // Update state with new data
    setPokerStarsState(updatedData);
  };

  return handleSaveMultipleData;
};
