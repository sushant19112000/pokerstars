import Image from "next/image";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";

export const Home2 = ({ nextTab }) => {
  const handleNext = () => {
    nextTab(2);
  };
  return (
    <div
      className="container d-flex flex-column align-items-center"
      style={{ textAlign: "center", paddingTop: "10%" }}
    >
      <Image src="/CrowdStrike.png" alt="img" width={700} height={150} />
      <div className="row justify-content-center">
        <p
          style={{
            fontSize: "30px",
            fontWeight: "800",
            color: "white",
            width: "70%",
            lineHeight: "40px",
            paddingTop: "20px",
          }}
        >
          Managing risk and complexity in a hybrid and multi-cloud world -a CXO
          Priorities survey in collaboration with Crowdstrike
        </p>
      </div>

      <button
        className="btn "
        style={{
          padding: "15px 35px",
          borderRadius: "50px",
          fontSize: "15px",
          marginTop: "30px",
          backgroundColor: "red",
          color: "white",
          fontWeight: "900",
          gap: "10px",
          color: "white",
          textDecoration: "none",
        }}
        onClick={handleNext}
      >
        BEGIN
        <FaAngleRight style={{ marginLeft: "10px" }} />
      </button>
    </div>
  );
};
