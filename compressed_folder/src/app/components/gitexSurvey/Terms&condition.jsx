import Link from "next/link";
import React, { useState } from "react";
import { useSaveData } from "./useSaveData";
import { useNext } from "./useNext";
import { FaCheck } from "react-icons/fa6";
import { termAndCondition } from "@/app/data/gitexSurvey2024Data/termsAndConditon";
import {useUpload} from "./useUpload";
const indexToAlphabet = (index) => String.fromCharCode(65 + index); // 65 is the char code for 'A'

export const TermsCondition = () => {
  // // const handleUpload =()=>{
  // //   upload()
  // // }
  //   console.log(termAndCondition);
  //   const autoSave = (e) => {
  //     setSelected(e);
  //     saveData(termAndCondition.questionNumber, e);
  //     // setTimeout(() => {
  //     //   handleUpload()
  //     //   next();
  //     // }, 2000);

  //   };

  //   const handleNext = () => {
  //     autoSave();

  //   };

  const [selected, setSelected] = useState("");
  const next = useNext();
  const saveData = useSaveData();
  const autoUpload = useUpload();

  const autoSave = (e) => {
    setSelected(e);
    saveData(termAndCondition.questionNumber, e);
  };

// auto(qNo,data) 1sec then handleupload 


  const handleDataUpload = () => {
    autoUpload();
  };
  const handleNext = () => {
    autoSave(selected);
    handleDataUpload()
    next();
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h3
            style={{
              color: "gray",
              fontSize: "15px",
              fontWeight: "700",
              paddingTop: "50px",
            }}
          >
            Question 18
          </h3>
          <h1
            style={{
              fontSize: "25px",
              fontWeight: "600",
              color: "white",
              width: "80%",
              lineHeight: "40px",
            }}
          >
            Yes, I authorise Lynchpin Media and associated partners to this
            report to receive my personal contact details for the purpose of
            sending information on products, services and/or events. For more
            information, please view the Lynchpin Media privacy policy{" "}
            <span>
              <Link href="">here</Link>
            </span>
            .
          </h1>
          <h1
            style={{
              fontSize: "25px",
              fontWeight: "600",
              color: "white",
              width: "80%",
              lineHeight: "40px",
              marginTop: "20px",
            }}
          >
            We use the business contact details collected here for specific
            activities, where we consider there to be legitimate interest. This
            can include sending you business communications about similar
            services and products. You will always have the opportunity to opt
            out of future communications from us. <br />{" "}
          </h1>
          {termAndCondition.answers.map((answer, index) => (
            <div className="col-md-5" key={index}>
              <div
                className="row choice mb-2 rounded"
                style={{
                  border: "1px solid grey",
                  marginLeft: "2px",
                  color: selected == answer ? "black" : "white",
                  backgroundColor:
                    selected == answer ? "#ccd0d4" : "transparent",
                }}
                onClick={() => autoSave(answer)}
              >
                <div className="d-flex p-2">
                  <div style={{ width: "95%" }}>{answer}</div>
                  <div className="w-5 circle">{indexToAlphabet(index)}</div>
                </div>
              </div>
            </div>
          ))}

          <div
            className="d-flex"
            style={{ alignItems: "center", marginTop: "30px", gap: "20px" }}
          >
            <button
              className="btn btn-danger"
              style={{
                padding: "15px 35px",
                borderRadius: "50px",
                fontSize: "15px",
              }}
              onClick={handleNext}
            >
              <span
                className="start-link"
                style={{
                  fontWeight: 900,
                  paddingRight: "10px",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                SUBMIT
              </span>
              <FaCheck />
            </button>
            <p
              className=""
              style={{ color: "white", fontSize: "small", marginTop: "15px" }}
            >
              Press <b>ENTER</b> key to submit
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
