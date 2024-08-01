import { useState } from "react";
import { useSaveData } from "./useSaveData";
import { usePrevious } from "./usePrevious";
import { useNext } from "./useNext";
import { GrPrevious } from 'react-icons/gr'
import { useSaveMultipleData } from "./useSaveDataMultiple";
export default function FirstNameLastName() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [nameerror, setNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const next = useNext();
  const prev = usePrevious();
  const saveData = useSaveMultipleData();

  const handleNext = () => {
    if (name!="" && surname!=""){
      saveData({
        firstname:name,
        lastname:surname
      })
      next();

    }
    
  };

  const handlePrev = () => {
    prev();
  };

  const validateName = (name) => {
    const ValidName = /\d+/;
    return ValidName.test(name);
  };

  const ValidSurname = (surname) => {
    const ValidSurname = /\d+/;
    return ValidSurname.test(surname);
  };

  // const handleChange = (e) => {
  //     const temp = e.target.value
  //     setEmail(temp)
  //     if (validateEmail(email)) {
  //         setError('');
  //     } else {
  //         setError("L'adresse e-mail n'est pas valide");
  //     }

  // }
  const handleChangeName = (e) => {
    const temp = e.target.value;
    setName(temp);
    if (validateName(name)) {
      setNameError("Le nom que vous avez saisi est invalide.");
    } else {
      setNameError("");
    }
  };
  const handleChangeSurname = (e) => {
    const temp = e.target.value;
    setSurname(temp);
    if (ValidSurname(surname)) {
      setSurnameError("Le nom que vous avez saisi est invalide.");
    } else {
      setSurnameError("");
    }
  };

  return (
    <>
      <div
        className="row justify-content-center"
        style={{ backgroundColor: "black" }}
      >
        <div className="col-md-3">
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
                Votre prénom et nom de famille
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
              Quel est votre nom ?
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
              Nous Veuillez renseigner votre nom légal complet afin que nous
              puissions vous identifier
            </p>
          </div>

          <div>
            <span style={{ fontFamily: "Roboto", fontSize: "15px" }}>
              Prénom
            </span>
          </div>

          <div className="mt-1">
            <input
              onChange={handleChangeName}
              className="form-control"
              style={{
                border: "1px solid black",
                height: "50px",
                borderRadius: "0",
              }}
            />

            {nameerror && (
              <>
                <span
                  style={{
                    color: "red",
                    fontSize: "14px",
                    fontFamily: "Roboto",
                  }}
                >
                  L'adresse e-mail n'est pas valide
                </span>
              </>
            )}
          </div>

          <div>
            <span style={{ fontFamily: "Roboto", fontSize: "15px" }}>
              Nom de famille
            </span>
          </div>

          <div className="mt-1">
            <input
              onChange={handleChangeSurname}
              className="form-control"
              style={{
                border: "1px solid black",
                height: "50px",
                borderRadius: "0",
              }}
            />

            {surnameError && (
              <>
                <span
                  style={{
                    color: "red",
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
}
