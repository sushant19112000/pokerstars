import { AfricaSurveyState } from "@/app/atoms/africaSurvey";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { HiCheck } from "react-icons/hi";
import { agreeTerms } from "./data";
import Link from "next/link";
const indexToAlphabet = (index) => String.fromCharCode(65 + index); // 65 is the char code for 'A'
export const UploadSurvey = ({nextTab}) => {
  const [data, setData] = useRecoilState(AfricaSurveyState);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [uploaded, setUploaded] = useState(false);

  console.log(JSON.stringify(data), "data stringfied")

  const handleUpload = async () => {
    if (selectedAnswer!="" && data != []) {
      const uploadData = {
        data: JSON.stringify(data)
      }
      const response = await fetch(`/api/africaSurvey`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(uploadData)
      });
      if (response.ok) {
        setUploaded(true)
        nextTab(10)
      }
    }
  }
  return (
    <div className="row justify-content-center">
      <div className=" col-md-8">
        <h3
          style={{
            color: "gray",
            fontSize: "15px",
            fontWeight: "700",
            paddingTop: "50px",
          }}
        >
          Question 8
        </h3>
        <h1
          style={{
            fontSize: "25px",
            fontWeight: "600",
            color: "white",
            width: "70%",
            lineHeight: "40px",
          }}
        >
          Yes, I authorise Lynchpin Media to receive my personal contact details
          data for the purpose of sending information on products, services
          and/or events. For more information, <br />
          please view the Lynchpin Media privacy policy{" "}
          <span>
            <Link href="#" style={{ color: "white" }}>
              here
            </Link>
          </span>
        </h1>
        <h1
          style={{
            fontSize: "25px",
            fontWeight: "600",
            color: "white",
            width: "70%",
            lineHeight: "40px",
            marginTop: "20px",
          }}
        >
          We use the business contact details collected here for specific
          activities, where we consider there to be legitimate interest. This
          can include sending you business communications about similar services
          and products. You will always have the opportunity to opt out of
          future communications from us.
        </h1>

        <div>{/* options here */}</div>

        {agreeTerms.answers.map((answer, index) => (
          <>
            <div className="col-md-5">
              <div
                className="row choice mb-2 rounded"
                style={{

                  border: "1px solid grey",
                  marginLeft: "2px",
                  color:
                    selectedAnswer == answer ? "black" : "white",
                  backgroundColor:
                    selectedAnswer == answer
                      ? "#ccd0d4"
                      : "transparent",
                }}
                onClick={() => setSelectedAnswer(answer)}
              >
                <div className="d-flex p-2">
                  <div style={{ width: "95%" }}>{answer}</div>
                  <div className="w-5 circle">{indexToAlphabet(index)}</div>
                </div>
              </div>
            </div>
          </>
        ))}

        <div
          className="d-flex"
          style={{ justifyContent: "flex-start", marginTop: "30px" }}
        >
          <button
            className="btn btn-warning"
            style={{
              padding: "15px 30px",
              borderRadius: "50px",
              fontSize: "15px",
              color: "black",
              fontWeight: "900",
            }}
            onClick={handleUpload}
          >
            <span>SUBMIT</span>
            <HiCheck
              style={{
                marginLeft: "10px",
                fontWeight: "900",
                fontSize: "20px",
              }}
            />
          </button>
          <button
            style={{
              padding: "15px 30px",
              fontSize: "11px",
              backgroundColor: "transparent",
              color: "gray",
              fontWeight: "700",
              border: "none",
            }}
            onClick={handleUpload}
          >
            <span>
              Press <b style={{ color: "white" }}>ENTER</b> key to submit
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
