import { useState } from "react";
import { useSaveData } from "./useSaveData";
import { usePrevious } from "./usePrevious";
import { useNext } from "./useNext";
import { GrPrevious } from 'react-icons/gr'
export default function ChooseGender() {
  const [gender, setGender] = useState("");

  // const [nameerror, setNameError] = useState("");

  const next = useNext();
  const prev = usePrevious();
  const saveData = useSaveData();

  const handleNext = () => {
    if (gender != "") {
      saveData("gender", gender);
      next();
    }
  };

  const handlePrev = () => {
    prev();
  };

  // const validateName = (name) => {
  //   const ValidName = /\d+/;
  //   return ValidName.test(name);
  // };

  // const handleChange = (e) => {
  //     const temp = e.target.value
  //     setEmail(temp)
  //     if (validateEmail(email)) {
  //         setError('');
  //     } else {
  //         setError("L'adresse e-mail n'est pas valide");
  //     }

  // }
  const handleChange = (e) => {
    const temp = e.target.value;
    setGender(temp);
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
                Votre genre
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
              Quel est votre sexe ?
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
              Veuillez sélectionner le sexe indiqué sur votre pièce d’identité.
            </p>
          </div>

          <div>
            <span
              style={{
                fontFamily: "Roboto",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              Sexe
            </span>
          </div>

          <div
            className="mt-1 d-flex align-items-center "
            style={{ gap: "15px", alignItems: "center", fontWeight: "900" }}
          >
            <input
              type="radio"
              onChange={handleChange}
              value="Homme"
              name="gender"
              className=""
              style={{
                border: "1px solid black",
                height:'40px',
                width:'20px',
                borderRadius: "0",
              }}
            />

            <p className="mt-3"><span style={{ color: 'RGB(215, 0, 34)', fontFamily: 'Roboto', fontSize: '20px' }}>Homme</span></p>
          </div>

          <div
            className="mt-1 d-flex align-items-center "
            style={{ gap: "15px", alignItems: "center", fontWeight: "900" }}
          >
            <input
              type="radio"
              onChange={handleChange}
              value="Femme"
              name="gender"
              style={{
                border: "1px solid black",
                height:'40px',
                width:'20px',
                borderRadius: "0",
              }}
            />

            <p className="mt-3"><span style={{ color: 'RGB(215, 0, 34)', fontFamily: 'Roboto', fontSize: '20px' }}>Femme</span></p>
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
