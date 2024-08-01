import React, { useState } from "react";
import { useNext } from "./useNext";
import { usePrevious } from "./usePrevious";
import { useSaveData } from "./useSaveData";
import { countries } from "./countries";
import { statesOfBirth } from "./stateofBirth";
export const ChooseAddressFname = () => {
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [address, setAddress] = useState("")
    const [postCode, setPostCode] = useState("")
    const next = useNext()
    const prev = usePrevious()
    const saveData = useSaveData()

    const handleNext = () => {
        if (isValid()) {
            saveData("state", state)
            saveData("address", address)
            saveData("postcode", postCode)
            saveData("city", city)
            next()
        }
    }

    const handlePrev = () => {
        prev()
    }

    const isValid = () => {
        return state != "" && country != "" && city != "" && address != "" && postCode != ""
    }



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
                Votre adresse
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
              Où habitez-vous donc, fname ?
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
              Nous utiliserons votre adresse pour éviter la fraude et vérifier
              votre compte.
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
              Pays
            </span>
          </div>

                    <div className='mt-1'>
                        <input   className='form-control' style={{ border: '1px solid black', height: '50px', borderRadius: '0' }} onChange={((e)=>setCountry(e.target.value))} />


                    </div>


          <div>
            <span
              style={{
                color: "RGB(215, 0, 34)",
                fontFamily: "Roboto",
                fontSize: "15px",
              }}
            >
              Adresse
            </span>
          </div>

                    <div className='mt-1'>
                        <input onChange={((e) => setAddress(e.target.value))} className='form-control' style={{ border: '1px solid black', height: '50px', borderRadius: '0' }} />
                        {address.length <= 4 && (
                            <>
                                <span style={{ color: 'RGB(8, 155, 128)', fontSize: '14px', fontFamily: 'Roboto' }}>Veuillez réessayer. Ceci doit comporter au moins 4 caractères.</span>
                            </>
                        )}

                    </div>






                    <div className='mt-3'>
                        <span style={{ color: 'RGB(215, 0, 34)', fontFamily: 'Roboto', fontSize: '15px' }}>Département de naissance</span>

                    </div>

                    <div className='mt-1'>
                        
                        <input  className='form-control' style={{ border: '1px solid black', height: '50px', borderRadius: '0' }} onChange={((e)=>setState(e.target.value))} />


            
                    </div>



                    <div className='mt-3'>
                        <span style={{ color: 'RGB(215, 0, 34)', fontFamily: 'Roboto', fontSize: '15px' }}>Ville de naissance</span>

                    </div>

                    <div className='mt-1'>
                    <input   className='form-control' style={{ border: '1px solid black', height: '50px', borderRadius: '0' }} onChange={((e)=>setCity(e.target.value))} />
                    </div>

          <div className="mt-3">
            <span
              style={{
                color: "RGB(215, 0, 34)",
                fontFamily: "Roboto",
                fontSize: "15px",
              }}
            >
              Code postal
            </span>
          </div>

                    <div className='mt-1'>
                        <input onChange={((e) => setPostCode(e.target.value))} className='form-control' style={{ border: '1px solid black', height: '50px', borderRadius: '0' }} />


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
