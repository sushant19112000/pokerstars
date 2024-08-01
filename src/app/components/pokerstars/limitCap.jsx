import React, { useState } from "react";
import { useNext } from "./useNext";
import { usePrevious } from "./usePrevious";
import { useSaveData } from "./useSaveData";
import { weeklyLimits } from "./weeklyLimits";
import { GrPrevious } from 'react-icons/gr'
import { useSaveMultipleData } from "./useSaveDataMultiple";
export const LimitCap = () => {
  const [weeklyLimit, setWeeklyLimit] = useState("");
  const [sevenLimit, setSevenLimit] = useState("");
  const next = useNext();
  const prev = usePrevious();
  const saveData = useSaveMultipleData();

  const handleNext = () => {
    if (weeklyLimit && sevenLimit) {
      saveData({
        weeklylimit:weeklyLimit,
        sevenlimit:sevenLimit
      })
  
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
                Limites de jeu responsable
              </p>
            </div>
          </div> */}
            <div className="pt-4 pb-4 d-flex">
            <div className="">
              <span style={{ color: "white" }} onClick={handlePrev}>
                <GrPrevious />
              </span>
            </div>
            <div className="" style={{ marginLeft: '20%' }}>
              <p
                className=""
                style={{
                  fontWeight: "600",
                  color: "white",
                  fontFamily: "Roboto",
                  fontSize: "16px",
                }}
              >
               Limites de jeu responsable
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
              Limite cumulée
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
              La limite de mises cumulées est un plafonnement des montants que
              vous pouvez dépenser aux jeux de poker en argent réel et aux paris
              sportifs.
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
              Limite de mise sur sept jours au poker
            </span>
          </div>

          <div
            className="mt-1 d-flex align-items-center"
            style={{ border: "1px solid black" }}
          >
            <div
              className="d-flex "
              style={{ backgroundColor: "rgb(247, 247, 224)" }}
            >
              <div
                className="d-flex "
                style={{ backgroundColor: "rgb(247, 247, 224)" }}
                data-testid=""
              >
                <picture>
                  {" "}
                  <img
                    src="/pokerstars/eu.227190d1.svg"
                    style={{ borderRadius: "50%" }}
                    height={20}
                    width={20}
                    alt=""
                  />
                </picture>
              </div>
              <div style={{ border: "none" }} disabled="">
                <span className="px-2" style={{}} value="EUR">
                  EUR
                </span>
              </div>
            </div>

            <select
              className="form-select "
              defaultValue="France"
              style={{ borderLeft: "0", backgroundColor: "transparent" }}
              onChange={(e) => setWeeklyLimit(e.target.value)}
            >
              <option></option>
              {weeklyLimits.map((limit, index) => (
                <option key={index} value={limit}>
                  {limit}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-3">
            <span
              style={{
                color: "RGB(215, 0, 34)",
                fontFamily: "Roboto",
                fontSize: "15px",
              }}
            >
              Limite de mises sur sept jours aux paris sportifs
            </span>
          </div>

          <div
            className="mt-1 d-flex align-items-center"
            style={{ border: "1px solid black" }}
          >
            <div
              className="d-flex"
              style={{ backgroundColor: "rgb(247, 247, 224)" }}
            >
              <div className="d-flex" data-testid="">
                <picture>
                  {" "}
                  <img
                    src="/pokerstars/eu.227190d1.svg"
                    className=""
                    style={{ borderRadius: "50%" }}
                    height={20}
                    width={20}
                    alt=""
                  />
                </picture>
              </div>
              <div style={{ border: "none" }} disabled="">
                <span className="px-2" style={{}} value="EUR">
                  EUR
                </span>
              </div>
            </div>
            <select
              id="stateOfBirth"
              className="form-select"
              style={{ borderLeft: "0" }}
              onChange={(e) => setSevenLimit(e.target.value)}
              data-testid="state-of-birth"
            >
              <option></option>
              {weeklyLimits.map((limit, index) => (
                <option key={index}>{limit}</option>
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
              Continuer
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
