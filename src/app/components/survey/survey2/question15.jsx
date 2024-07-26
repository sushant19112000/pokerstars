import Link from "next/link";
import React from "react";
import { HiCheck } from "react-icons/hi";
import { useRecoilState } from "recoil";
import { AfricaSurveyState } from "@/app/atoms/africaSurvey";
import { useState } from "react";
export const Question15 = ({nextTab}) => {
  const [data, setData] = useRecoilState(AfricaSurveyState);
  const [uploaded, setUploaded] = useState(false);
  console.log(JSON.stringify(data), "data stringfied")
  
  const handleUpload = async () => {
    if (data != []) {
      const uploadData = {
        data: JSON.stringify(data)
      }
      const response = await fetch(`/api/survey2`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(uploadData)
      });
      if (response.ok) {
        
        setUploaded(true)
        nextTab(17)
      }
    }
  }
  return (
    <div
      className="row justify-content-center"
      style={{ backgroundColor: "black", height: "100vh" }}
    >
      <div className=" col-md-8">
        <h3
          style={{
            color: "gray",
            fontSize: "15px",
            fontWeight: "700",
            paddingTop: "50px",
          }}
        >
          Question 15
        </h3>
        <h1
          style={{
            fontSize: "25px",
            fontWeight: "600",
            color: "white",
            width: "77%",
            lineHeight: "40px",
          }}
        >
          Yes, I authorise CrowdStrike to receive my personal contact details
          data for the purpose of sending CrowdStrike information on products,
          services and/or events. For more information, please view the
          CrowdStrike Privacy Policy{" "}
          <span>
            <Link href="https://www.crowdstrike.co.uk/privacy-notice/">here</Link>
          </span>
          <br />
          <span style={{ fontSize: "20px", textDecorationLine: "none" }}>
            <Link href="https://www.crowdstrike.co.uk/privacy-notice/">Privacy Policy</Link>
          </span>
        </h1>

        <div>{/* options here */}</div>

        <div
          className="d-flex"
          style={{ justifyContent: "flex-start", marginTop: "30px" }}
        >
          <button
            className="btn "
            style={{
              padding: "15px 30px",
              borderRadius: "50px",
              fontSize: "15px",
              color: "white",
              fontWeight: "900",
              backgroundColor: "red",
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
