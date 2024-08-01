import React, { useState } from "react";
import { useNext } from "./useNext";
import { usePrevious } from "./usePrevious";
import { useSaveData } from "./useSaveData";
import Link from "next/link";

export const ChooseDate = () => {
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const [isChecked, setChecked] = useState(false);
  const next = useNext();
  const prev = usePrevious();
  const saveData = useSaveData();

  const handleNext = () => {
    if (isValidDate(date)) {
      saveData("dob", date); // Save the valid date
      next();
    } else {
      setError("Veuillez entrer une date valide au format dd/MM/yyyy.");
    }
  };

  // Validation function for dd/MM/yyyy format
  const isValidDate = (dateStr) => {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!regex.test(dateStr)) return false;

    const [day, month, year] = dateStr.split("/").map(Number);
    const dateObj = new Date(year, month - 1, day);
    return (
      dateObj.getDate() === day &&
      dateObj.getMonth() === month - 1 &&
      dateObj.getFullYear() === year
    );
  };

  const handlePrev = () => {
    prev();
  };

  const handleChange = (e) => {
    const temp = e.target.value;
    setDate(temp);
  };

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
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
              ></p>
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
              Les aspects légaux...
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
              Nous avons besoin de votre date de naissance pour confirmer que
              vous avez plus de 18 ans.
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
              Date de naissance
            </span>
          </div>

          <div className="mt-1">
            <input
              type="text"
              value={date}
              onChange={handleChange}
              placeholder="dd/MM/yyyy"
              className="form-control"
              style={{
                border: "1px solid black",
                height: "50px",
                borderRadius: "0",
              }}
            />
            {error && (
              <span
                style={{
                  color: "RGB(8, 155, 128)",
                  fontSize: "14px",
                  fontFamily: "Roboto",
                }}
              >
                {error}
              </span>
            )}
          </div>

          <div className="mt-3">
            <div className="d-flex">
              <div>
                <input
                  className="form-check me-2"
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
              </div>
              <div>
                <p
                  className=""
                  style={{
                    fontSize: "14px",
                    fontFamily: "Roboto",
                    color: "black",
                    fontWeight: "500",
                    marginTop: "2.5px",
                  }}
                >
                  Je confirme que j'ai au moins 18 ans et que j'ai lu et compris
                  les
                  <Link style={{ color: "#089b80" }} href="/">
                    Modalités générales
                  </Link>{" "}
                  ainsi que la
                  <Link style={{ color: "#089b80" }} href="/">
                    Politique de confidentialité
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 mb-5 text-center">
            <button
              className="btn w-100"
              style={{
                borderRadius: "18px",
                color: "white",
                fontWeight: "700",
                backgroundColor: "#02bd9c",
              }}
              onClick={handleNext}
            >
              Créer un compte
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
