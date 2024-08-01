import React, { useState } from "react";
import { useNext } from "./useNext";
import { usePrevious } from "./usePrevious";
import { useSaveData } from "./useSaveData";
export const DepositLimit = () => {
  const [depositLimit,setDepositLimit]=useState()
  const [error, setError] = useState("");
  const next = useNext();
  const prev = usePrevious();
  const saveData = useSaveData();
   


  const handleNext = () => {
    if (depositLimit>=7){
      saveData("depositlimit",7)
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
              Limite de dépôt
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
              La limite de dépôt est un plafonnement de l’argent que vous pouvez
              injecter dans votre compte chaque jour, semaine ou mois.
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
              Limite de 7 jours
            </span>
          </div>

          <div className="mt-1">
            <div className="d-flex">
              <input
                aria-invalid="false"
                autoComplete="off"
                placeholder=""
                style={{ outline: "none", borderRight: "0",borderBottom:'1px solid gray'}}
                type="tel"
                min={0}
                step="0.01"
                inputMode="decimal"
                className="px-5 py-2"
                defaultValue="5,00"
                onChange={((e)=>setDepositLimit(e.target.value))}
              />
              <div
                className="d-flex align-items-center px-2 "
                style={{
                  backgroundColor: "rgb(247, 247, 224)",
                  border: "1px solid gray",
                
                  borderLeft: "0",
                }}
              >
                <div className="d-flex">
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
              </div>
            </div>

            {error && (
              <>
                <div
                  style={{
                    border: "1px solid red",
                    marginTop: "10px",
                    padding: "10px",
                  }}
                >
                  <span
                    style={{
                      color: "red",
                      fontSize: "14px",
                      fontFamily: "Roboto",
                    }}
                  >
                    La limite de dépôt est peut-être trop basse. Le montant de
                    dépôt minimal pour certaines méthodes de paiement est
                    peut-être plus élevé que ça.
                  </span>
                </div>
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
