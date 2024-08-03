// src/components/ResponsiveLayout.js
import "bootstrap/dist/css/bootstrap.min.css";
import "./ResponsiveLayout.css";
import Svg from "./svg";
import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { countries } from "./countries.js";
import { useNext } from "./useNext.jsx";
import { useSaveMultipleData } from "./useSaveData.jsx";
const boldStyle = { fontWeight: "bold", color: '#05D6AE' };
const inputStyle = { backgroundColor: 'transparent', borderTop: '0', borderBottom: '1px solid silver', borderRight: '0', borderLeft: '0', borderRadius: '0px', color: 'white', outline: 'transparent' }
export const Form1 = () => {
  const [country, setCountry] = useState("France");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [dateofbirth, setDateOfBirth] = useState("");
  const [countryofbirth, setCountryOfBirth] = useState("France");
  const [stateofbirth, setStateOfBirth] = useState("");
  const [cityofbirth, setCityOfBirth] = useState("");
  const [firstname, setFirstName] = useState("");
  const [gender, setGender] = useState("");
  const [lastname, setLastName] = useState("");

  const [error, setError] = useState("");
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
  console.log(country, "selected country");
  const next = useNext();
  const saveData = useSaveMultipleData();
  const handleNext = (e) => {
    e.preventDefault();
    saveData({
      countryf1: country,
      username: username,
      password: password,
      email: email,
      dob: dateofbirth,
      firstname: firstname,
      lastname: lastname,
      gender: gender,
      countryofbirth: countryofbirth,
      stateofbirth: stateofbirth,
      cityofbirth: cityofbirth,
    });
    next();
  };
  return (
    <>
      <div style={{ backgroundColor: '   #1c1c1c' }}>
        <nav className="navbar navbar-expand-lg navbar-dark ms-4 py-4">
          <Svg />
        </nav>
      </div>

      <div className="container-fluid">

        <div className="row">
          <div className="col-md-4 left-column d-flex flex-column ">

            <img
              src="/pokerimages/istockphoto-1437726104-612x612.jpg"
              className="w-100  mt-md-5"
              alt="Placeholder"
            />
          </div>
          <div className="col-md-8 right-column " style={{ backgroundColor: "black", color: "white" }}>
            <div className="row justify-content-center round">
              <div className="">
                <div className="shadow-lg">
                  <div className=" inner-card " style={{ backgroundColor: 'red' }}>



                    <form onSubmit={handleNext} className="" style={{ backgroundColor: "black" }}>
                      <div className="row justify-content-center ">
                        <div className="col-10">
                          <div className="col-12 col-md-9 col-lg-7 pb-4">
                            <div
                              style={{
                                backgroundColor: "black",
                                color: "white",
                                fontWeight: "bolder",
                                paddingTop: '50px'
                              }}
                              className=" text-start mb-2"
                            >
                              <h3 className="" style={{ fontWeight: "900" }}>
                                Informations de compte
                              </h3>
                            </div>
                          </div>
                        </div>

                        <div className="col-10 col-md-6 col-lg-5">

                          <div className="form-group mb-4 ">
                            <label style={boldStyle} htmlFor="inputEmail4" >
                              Dans quel pays habitez-vous ?
                            </label>
                            <select
                              onChange={(e) => {
                                setCountry(e.target.value);
                              }}
                              className="form-select form-input-border"
                              required
                              style={inputStyle}
                            >
                              {countries.map((country, index) => (
                                <option key={index}>{country}</option>
                              ))}
                            </select>
                          </div>
                          <div className="form-group mb-4">
                            <label style={boldStyle} htmlFor="Mobile-Number">
                              Mot de passe
                            </label>
                            <input
                              onChange={(e) => setPassword(e.target.value)}
                              type="text"
                              className="form-control"
                              placeholder=""
                              required

                              style={inputStyle}
                            />
                            {password.length <= 8 && (
                              <>
                                <span
                                  style={{
                                    color: "RGB(8, 155, 128)",
                                    fontSize: "14px",
                                    fontFamily: "Roboto",
                                  }}
                                >
                                  8 caractères ou plus
                                </span>
                                <br />
                              </>
                            )}
                          </div>
                          <div className="form-group mb-4">
                            <label style={boldStyle} htmlFor="time">
                              Date de naissance
                            </label>
                            <input
                              onChange={(e) => {
                                setDateOfBirth(e.target.value);
                              }}
                              type="date"
                              className="form-control"
                              id="time"
                              placeholder="dd/mm/yyyy"
                              required
                              style={inputStyle}
                            />
                          </div>
                          <div className="form-group mb-4">
                            <label style={boldStyle} htmlFor="time">
                              Nom de famille
                            </label>
                            <input
                              onChange={(e) => {
                                setLastName(e.target.value);
                              }}
                              type="text"
                              className="form-control"
                              id="time"
                              placeholder=""
                              required
                              style={inputStyle}
                            />
                          </div>
                        </div>

                        <div className="col-10 col-md-6 col-lg-5">
                          <div className="form-group mb-4">
                            <label style={boldStyle} htmlFor="last-name">
                              Nom d'utilisateur
                            </label>
                            <input
                              onChange={(e) => setUsername(e.target.value)}
                              type="text"
                              className="form-control"
                              id="last-name"
                              placeholder=""
                              required
                              style={inputStyle}
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
                          <div className="form-group mb-4">
                            <label style={boldStyle} htmlFor="email">
                              E-mail
                            </label>
                            <input
                              onChange={(e) => setEmail(e.target.value)}
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder=""
                              required
                              style={inputStyle}
                            />

                            {/* {error && (
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
                        )} */}
                          </div>

                          <div className="form-group mb-4">
                            <label style={boldStyle} htmlFor="last-name">
                              Prénom
                            </label>
                            <input
                              onChange={(e) => {
                                setFirstName(e.target.value);
                              }}
                              type="text"
                              className="form-control"
                              id="last-name"
                              placeholder=""
                              required
                              style={inputStyle}
                            />
                          </div>

                          <div className="form-group mb-4">
                            <label style={boldStyle} htmlFor="email">
                              Sexe
                            </label>
                            <div className="d-flex mt-2 " style={{ gap: "10px" }}>
                              <div className="d-flex align-items-center">
                                <input
                                  onChange={(e) => {
                                    setGender(e.target.value);
                                  }}
                                  type="radio"
                                  value="Homme"
                                  required
                                  name="gender"
                                  style={{
                                    border: "1px solid black",
                                    height: "20px",
                                    backgroundColor: '',
                                    width: "20px",
                                    marginRight: "8px",
                                  }}
                                />
                                <span style={boldStyle} htmlFor="skill">
                                  Homme
                                </span>
                              </div>
                              <div className="d-flex align-items-center">
                                <input
                                  onChange={(e) => {
                                    setGender(e.target.value);
                                  }}
                                  type="radio"
                                  value="Femme"
                                  required
                                  name="gender"
                                  style={{
                                    border: "1px solid black",
                                    height: "20px",
                                    width: "20px",
                                    marginRight: "8px",
                                  }}
                                />
                                <span style={boldStyle} htmlFor="skill">
                                  Femme
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>



                        <div
                          className="col-12 col-md-12  col-lg-10 "
                          id="secondary-div-center"
                        >
                          <div>
                            <h5
                              style={{
                                fontSize: "25px",
                                fontWeight: "bolder",
                                background:
                                  "linear-gradient(to right, #D70022, #190A05)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                              }}
                              className=" text-center text-md-start mb-4"
                            >
                              Où êtes-vous né(e) ?
                            </h5>
                            <div className="row justify-content-center justify-content-md-start">
                              <div className="col-10 col-md-6 mb-3">
                                <label style={boldStyle} htmlFor="birth-country">
                                  Pays de naissance
                                </label>
                                <select
                                  onChange={(e) => {
                                    setCountryOfBirth(e.target.value);
                                  }}
                                  className="form-select"
                                  required
                                  style={inputStyle}
                                >
                                  {countries.map((country, index) => (
                                    <option key={index}>{country}</option>
                                  ))}
                                </select>
                              </div>

                              <div className="col-10 col-md-6 mb-2">
                                <label style={boldStyle} htmlFor="Mobile-Number">
                                  Département de naissance
                                </label>
                                <input
                                  onChange={(e) => {
                                    setStateOfBirth(e.target.value);
                                  }}
                                  type="text"
                                  className="form-control"
                                  id="Mobile-Number"
                                  placeholder=""
                                  required
                                  style={inputStyle}
                                />
                              </div>
                              <div className="col-10 col-md-6">
                                <label style={boldStyle} htmlFor="last-name">
                                  Ville de naissance
                                </label>
                                <input
                                  onChange={(e) => {
                                    setCityOfBirth(e.target.value);
                                  }}
                                  type="text"
                                  className="form-control"
                                  id="last-name"
                                  placeholder=""
                                  required
                                  style={inputStyle}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row justify-content-center py-5">
                        <div className="col-10 d-flex justify-content-between flex-wrap">
                          {/* <button
                          className="btn mb-3 mb-md-0"
                          disabled
                          style={{
                            borderRadius: "18px",
                            width: "100%",
                            maxWidth: "186px",
                            color: "white",
                            fontWeight: "700",
                            backgroundColor: "#000000",
                          }}
                        >
                          <GrFormPrevious style={{ fontSize: "25px" }} />{" "}
                          Précédent
                        </button>
                        <button
                          className="btn"
                          type="submit"
                          style={{
                            borderRadius: "18px",
                            width: "100%",
                            maxWidth: "186px",
                            color: "white",
                            fontWeight: "700",
                            background:
                              "-webkit-linear-gradient(to bottom, #870000, #190a05)",
                            background:
                              "linear-gradient(to bottom, #FF0000, #190a05)",
                          }}
                        >
                          Continuer{" "}
                          <MdNavigateNext style={{ fontSize: "25px" }} />
                        </button> */}
                          <div className="button-box">
                            <button
                              className="btn custom-btn py-2 px-4 position-relative"

                              style={{ borderRadius: "50px" }}
                            >
                              <span>
                                {" "}
                                <GrFormPrevious style={{ fontSize: "25px" }} />{" "}
                                Précédent{" "}
                              </span>
                            </button>
                            <style jsx>{`
                        .custom-btn {
                          color: #05d6ae;
                          border: 2px solid #05d6ae;
                          text-transform: uppercase;
                          overflow: hidden;
                          transition: color 400ms;
                        }

                        .custom-btn::before {
                          content: "";
                          position: absolute;
                          border-radius: 50%;
                          top: 0;
                          left: 0;
                          right: 0;
                          bottom: 0;
                          background: #05d6ae;
                          z-index: -1;
                          transition: transform 400ms ease-out;
                          transform: scaleX(0);
                          transform-origin: left;
                        }

                        .custom-btn:hover::before {
                          transform: scaleX(1);
                        }

                        .custom-btn:hover {
                          color: #ffffff;
                        }
                      `}</style>
                          </div>






                          <div className="button-box">
                            <button
                              className="btn custom-btn py-2 px-4 position-relative"
                              style={{ borderRadius: "50px" }}
                            >
                              <span>
                                Continuer{" "}
                                <MdNavigateNext style={{ fontSize: "25px" }} />

                              </span>
                            </button>

                            <style jsx>{`
                        .custom-btn {
                          color: #05d6ae;
                          border: 2px solid #05d6ae;
                          text-transform: uppercase;
                          overflow: hidden;
                          transition: color 400ms;
                        }

                        .custom-btn::before {
                          content: "";
                          position: absolute;
                          border-radius: 50%;
                          top: 0;
                          left: 0;
                          right: 0;
                          bottom: 0;
                          background: #05d6ae;
                          z-index: -1;
                          transition: transform 400ms ease-out;
                          transform: scaleX(0);
                          transform-origin: left;
                        }

                        .custom-btn:hover::before {
                          transform: scaleX(1);
                        }

                        .custom-btn:hover {
                          color: #ffffff;
                        }
                      `}</style>
                          </div>

                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


