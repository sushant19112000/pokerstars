import React, { useState } from "react";
import { useNext } from "./useNext";
import { usePrevious } from "./usePrevious";
import { useSaveData } from "./useSaveData";
export const ChooseUsername = () => {
  const [username, setUsername] = useState("");

  const next = useNext();
  const prev = usePrevious();
  const saveData = useSaveData();

  const handleNext = () => {
    if (username.length > 4) {
      saveData("username", username);
      next();
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
          <div className="pt-2 pb-2 d-flex">
            <div className="">
              <span style={{ color: "white" }} onClick={handlePrev}>
                Prev
              </span>
            </div>
            <div className="">
              <p
                style={{
                  fontWeight: "600",
                  color: "white",
                  fontFamily: "Roboto",
                  fontSize: "16px",
                }}
              >
                Votre nom d'utilisateur
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
              Créons votre nom d'utilisateur
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
              Vous utiliserez ce nom lorsque vous jouerez à nos jeux.
            </p>
          </div>

          <div>
            <span
              style={{
                color: "RGB(215, 0, 34)",
                fontFamily: "Roboto",
                fontSize: "15px",
              }}
            >
              Nom d'utilisateur
            </span>
          </div>

          <div className="mt-1">
            <input
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
              style={{
                border: "1px solid black",
                height: "50px",
                borderRadius: "0",
              }}
            />

            {username.length <= 4 && (
              <>
                <span
                  style={{
                    color: "RGB(8, 155, 128)",
                    fontSize: "14px",
                    fontFamily: "Roboto",
                  }}
                >
                  4 caractères ou plus
                </span>
              </>
            )}
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
              Continuer
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
