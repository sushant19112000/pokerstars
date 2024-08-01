import React from "react";
import { useNext } from "./useNext";
import { color } from "framer-motion";
import ReactFlagsSelect from "react-flags-select";
import { Fr } from "react-flags-select";
import { useState } from "react";
import { useSaveData } from "./useSaveData";

export const ChooseCounty = () => {
  const [selected, setSelected] = useState("");
  const next = useNext();
  const saveData = useSaveData();

    const handleNext = () => {
        if (selected != "") {
            saveData("countryf1", selected)
            next()
       
        }
    }
  
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <div className="row pt-3  justify-content-center">
          <div className="col-md-3 text-center">
            <picture>
              <img
                className="img-fluid w-100"
                src="/pokerstars/welcome.e24dab14.jpg"
                alt=""
              />
            </picture>

            <div className="pt-2">
              <p
                style={{
                  fontWeight: "600",
                  color: "white",
                  fontFamily: "Roboto",
                  fontSize: "16px",
                }}
              >
                Pays de résidence
              </p>
            </div>
          </div>
        </div>
      </div>
    

      <div className="pt-3">
        <div className="row justify-content-center">
          <div className="col-md-3 ">
            <div>
              <p
                style={{
                  fontSize: "25px",
                  color: "black",
                  fontWeight: "900",
                  fontFamily: "Roboto",
                }}
              >
                Dans quel pays habitez-vous ?
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
                Nous l'utiliserons afin de nous assurer que vous utilisez la
                bonne version de PokerStars Sports pour votre pays.
              </p>
            </div>

            <ReactFlagsSelect
              selected={selected}
              onSelect={(code) => setSelected(code)}
              searchable
            />
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
                Continuer
              </button>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleNext}>Next</button>
    </>
  );
};
