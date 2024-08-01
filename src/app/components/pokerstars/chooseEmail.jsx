import React, { useState } from "react";
import { useNext } from "./useNext";
import { usePrevious } from "./usePrevious";
import { useSaveData } from "./useSaveData";
import { GrPrevious } from 'react-icons/gr'
export const ChooseEmail = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const next = useNext();
  const prev = usePrevious();
  const saveData = useSaveData();

  const handleNext = () => {
    if (email != "") {
      saveData("email", email);
    }
    next();
  };

  const handlePrev = () => {
    prev();
  };

  const validateEmail = (email) => {
    // Basic email regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleChange = (e) => {
    const temp = e.target.value;
    setEmail(temp);
    if (validateEmail(email)) {
      setError("");
    } else {
      setError("L'adresse e-mail n'est pas valide");
    }
  };

  return (
    <>
      <div
        className="row justify-content-center"
        style={{ backgroundColor: "black" }}
      >
        <div className="col-md-3">
          {/* <div className="pt-2 pb-2 d-flex">
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
                Votre adresse e-mail
              </p>
            </div>
          </div> */}
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
                Votre adresse e-mail
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
              Quelle est votre adresse e-mail ?
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
              Nous l'utiliserons pour vous contacter à propos de votre compte et
              vous apporter aide et assistance.
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
              E-mail
            </span>
          </div>

          <div className="mt-1">
            <input
              onChange={handleChange}
              className="form-control"
              style={{
                border: "1px solid black",
                height: "50px",
                borderRadius: "0",
              }}
            />

            {error && (
              <>
                <span
                  style={{
                    color: "RGB(8, 155, 128)",
                    fontSize: "14px",
                    fontFamily: "Roboto",
                  }}
                >
                  L'adresse e-mail n'est pas valide
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
