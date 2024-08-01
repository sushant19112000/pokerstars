import { useRecoilState } from "recoil";
import { GitexSurvey2024State } from "@/app/atoms/gitexSurvey2024";

export const useUpload = () => {
  const [data, setData] = useRecoilState(GitexSurvey2024State);


  const handleUpload = async () => {
    if (data.length !== 0) {
      const uploadData = {
        data: JSON.stringify(data),
      };
      const response = await fetch(`/api/gitexsurey2024`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(uploadData),
      });
      if (response.ok) {
        return true;
      } else {
        return false;
      }
    }
  };
console.log(handleUpload)
  return handleUpload

};


