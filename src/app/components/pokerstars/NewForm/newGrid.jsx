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

const boldStyle = { fontWeight: "bold" };

const ResponsiveLayout = () => {
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
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 left-column d-flex flex-column vh-100">
          <nav className="navbar navbar-expand-lg navbar-dark ms-4">
            <Svg />
          </nav>

          <img
            src="/pokerimages/istockphoto-1437726104-612x612.jpg"
            className="img-left mt-5"
            alt="Placeholder"
          />
        </div>
        <div className="col-md-8 right-column vh-100" style={{backgroundColor:"black" ,color:"white"}}>
          <div className="row justify-content-center round">
            <div className="">
              <div className="shadow-lg">
                <div className=" inner-card">
                  <div
                    style={{
                      backgroundColor: "black",
                  
                      color: "white",
                      fontWeight: "bolder",
                    }}
                    className="text-center mb-2 pt-4"
                  >
                    <h3 style={{ fontWeight: "bolder" }}>
                      Informations de compte
                    </h3>
                  </div>

                  <form onSubmit={handleNext} className="" style={{backgroundColor:"black"}}>
                    <div className="row justify-content-center pt-3">
                      <div className="col-lg-5 col-md-6 col-sm-12">
                        <div className="form-group mb-4 ">
                          <label style={{color:'white'}} htmlFor="inputEmail4" >
                            Dans quel pays habitez-vous ?
                          </label>
                          <select
                            onChange={(e) => {
                              setCountry(e.target.value);
                            }}
                            className="form-select form-input-border"
                            required
                            style={{backgroundColor:'transparent',borderTop:'0',borderBottom:'1px solid silver',borderRight:'0',borderLeft:'0',borderRadius:'0px',outline:'none',color:'white'}}
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
                            className="form-control "
                            placeholder=""
                            required
                            style={{backgroundColor:'transparent',borderTop:'0',borderBottom:'1px solid silver',borderRight:'0',borderLeft:'0',borderRadius:'0px'}}
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
                            style={{backgroundColor:'transparent',borderTop:'0',borderBottom:'1px solid silver',borderRight:'0',borderLeft:'0',borderRadius:'0px'}}
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
                            style={{backgroundColor:'transparent',borderTop:'0',borderBottom:'1px solid silver',borderRight:'0',borderLeft:'0',borderRadius:'0px'}}
                          />
                        </div>
                      </div>

                      <div className="col-lg-5 col-md-6 col-sm-12">
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
                            style={{backgroundColor:'transparent',borderTop:'0',borderBottom:'1px solid silver',borderRight:'0',borderLeft:'0',borderRadius:'0px'}}
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
                            style={{backgroundColor:'transparent',borderTop:'0',borderBottom:'1px solid silver',borderRight:'0',borderLeft:'0',borderRadius:'0px'}}
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
                            style={{backgroundColor:'transparent',borderTop:'0',borderBottom:'1px solid silver',borderRight:'0',borderLeft:'0',borderRadius:'0px'}}
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
                                  backgroundColor:'transparent',
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
                        className="col-lg-10 col-md-10 col-sm-10"
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
                            className="mb-4"
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
                                style={{backgroundColor:'transparent',borderTop:'0',borderBottom:'1px solid silver',borderRight:'0',borderLeft:'0',borderRadius:'0px'}}
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
                                style={{backgroundColor:'transparent',borderTop:'0',borderBottom:'1px solid silver',borderRight:'0',borderLeft:'0',borderRadius:'0px'}}
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
                                style={{backgroundColor:'transparent',borderTop:'0',borderBottom:'1px solid silver',borderRight:'0',borderLeft:'0',borderRadius:'0px'}}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row justify-content-center py-3">
                      <div className="col-10 d-flex justify-content-between flex-wrap">
                        <button
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
                        </button>
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
  );
};

export default ResponsiveLayout;
