import React, { useEffect } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { useNext } from "./useNext";

export const Home = () => {
  const next = useNext();
  useEffect(() => {}, [next]);

  const handleNext = () => {
    next();
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        textAlign: "center",
      }}
    >
      <div className="text-center">
        <picture>
          <img
            src="/glitex_survey_logo.png"
            alt="Survey Logo"
            className="img-fluid mb-4"
          />
        </picture>
        <div className="col-md-8 mx-auto">
          <h1 style={{ fontSize: "30px", fontWeight: 900, color: "white" }}>
            In this survey, we explore the digital technology priorities for
            CIOs and the wider C-suite looking ahead.
          </h1>
          <p
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "gray",
              marginTop: "20px",
            }}
          >
            Got a moment to share your thoughts?
          </p>
          <button
            className="btn "
            style={{
              padding: "15px 35px",
              borderRadius: "50px",
              fontSize: "15px",
              marginTop: "30px",
              backgroundColor: "#AC1817",
              color: "white",
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
              BEGIN
            </span>
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};
