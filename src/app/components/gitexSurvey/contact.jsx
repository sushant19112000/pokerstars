import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
import { useNext } from "./useNext";
import { useSkip } from "./useSkip";
import { useSaveData } from "./useSaveData";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [industry, setIndustry] = useState("");
  const [company, setCompany] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [businessEmail, setBussinessEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [jobTitle, setTitle] = useState("");
  const [organisationLocation, setOrganisationLocation] = useState("");
  const [industrySector, setIndustrySector] = useState("");
  const [address, setAddress] = useState("");

  const inValidData = () => {
    return (
      !firstName ||
      !lastName ||
      !industry ||
      !company ||
      !companySize ||
      !businessEmail ||
      !phoneNumber ||
      !jobTitle ||
      !organisationLocation ||
      !industrySector ||
      !address
    );
  };

  const next = useNext();
  const skip = useSkip();
  const autoSave = useSaveData();

  const handleSubmit = () => {
    const data = {
      firstName,
      lastName,
      industry,
      company,
      companySize,
      businessEmail,
      phoneNumber,
      jobTitle,
      organisationLocation,
      industrySector,
      address,
    };

    if (!inValidData()) {
      const contactData = {
        contactForm: data,
      };

      console.log(contactData);
      autoSave(data.questionNumber, contactData);
      next();
    } else {
      console.log("Invalid data, fill all fields.");
    }
  };

  const handleSkip = () => {
    skip();
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <h3
          style={{
            color: "gray",
            fontSize: "15px",
            fontWeight: "700",
            paddingTop: "80px",
          }}
        >
          Question 1
        </h3>
        <h1 style={{ fontSize: "25px", fontWeight: "600", color: "white" }}>
          Tell us about yourself
        </h1>

        <div className="row justify-content-center col-md-12">
          <div className="col-md-6">
            <style>
              {`
                input::placeholder {
                  color: gray;
                  font-weight: 900;
                }
              `}
            </style>
            <div className="ms-2 col-md-10" style={{ marginTop: "20px" }}>
              <input
                className="col col-lg-6"
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  fontWeight: "600",
                  fontSize: "15px",
                  width: "100%",
                  border: "1px solid #e5e5e5",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  outline: "none",
                  color: "white",
                  backgroundColor: "transparent",
                }}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name *"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="ms-2 col-md-10" style={{ marginTop: "20px" }}>
              <input
                className="col col-lg-6"
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  fontWeight: "600",
                  fontSize: "15px",
                  width: "100%",
                  border: "1px solid #e5e5e5",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  outline: "none",
                  color: "white",
                  backgroundColor: "transparent",
                }}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name *"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="ms-2 col-md-10" style={{ marginTop: "20px" }}>
              <input
                className="col col-lg-6"
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  fontWeight: "600",
                  fontSize: "15px",
                  width: "100%",
                  border: "1px solid #e5e5e5",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  outline: "none",
                  color: "white",
                  backgroundColor: "transparent",
                }}
                onChange={(e) => setIndustry(e.target.value)}
                placeholder="Industry *"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="ms-2 col-md-10" style={{ marginTop: "20px" }}>
              <input
                className="col col-lg-6"
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  fontWeight: "600",
                  fontSize: "15px",
                  width: "100%",
                  border: "1px solid #e5e5e5",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  outline: "none",
                  color: "white",
                  backgroundColor: "transparent",
                }}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company *"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="ms-2 col-md-10" style={{ marginTop: "20px" }}>
              <input
                className="col col-lg-6"
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  fontWeight: "600",
                  fontSize: "15px",
                  width: "100%",
                  border: "1px solid #e5e5e5",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  outline: "none",
                  color: "white",
                  backgroundColor: "transparent",
                }}
                onChange={(e) => setCompanySize(e.target.value)}
                placeholder="Company Size *"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="ms-2 col-md-10" style={{ marginTop: "20px" }}>
              <input
                className="col col-lg-6"
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  fontWeight: "600",
                  fontSize: "15px",
                  width: "100%",
                  border: "1px solid #e5e5e5",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  outline: "none",
                  color: "white",
                  backgroundColor: "transparent",
                }}
                onChange={(e) => setBussinessEmail(e.target.value)}
                placeholder="Business Email *"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="ms-2 col-md-10" style={{ marginTop: "20px" }}>
              <input
                className="col col-lg-6"
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  fontWeight: "600",
                  fontSize: "15px",
                  width: "100%",
                  border: "1px solid #e5e5e5",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  outline: "none",
                  color: "white",
                  backgroundColor: "transparent",
                }}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone Number *"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="ms-2 col-md-10" style={{ marginTop: "20px" }}>
              <input
                className="col col-lg-6"
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  fontWeight: "600",
                  fontSize: "15px",
                  width: "100%",
                  border: "1px solid #e5e5e5",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  outline: "none",
                  color: "white",
                  backgroundColor: "transparent",
                }}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Job Title *"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="ms-2 col-md-10" style={{ marginTop: "20px" }}>
              <input
                className="col col-lg-6"
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  fontWeight: "600",
                  fontSize: "15px",
                  width: "100%",
                  border: "1px solid #e5e5e5",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  outline: "none",
                  color: "white",
                  backgroundColor: "transparent",
                }}
                onChange={(e) => setOrganisationLocation(e.target.value)}
                placeholder="Organisation Location *"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="ms-2 col-md-10" style={{ marginTop: "20px" }}>
              <input
                className="col col-lg-6"
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  fontWeight: "600",
                  fontSize: "15px",
                  width: "100%",
                  border: "1px solid #e5e5e5",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  outline: "none",
                  color: "white",
                  backgroundColor: "transparent",
                }}
                onChange={(e) => setIndustrySector(e.target.value)}
                placeholder="Industry Sector *"
              />
            </div>
          </div>
          <div className="">
            <div className="ms-2 col-md-5" style={{ marginTop: "20px" }}>
              <input
                className="col col-lg-6"
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  fontWeight: "600",
                  fontSize: "15px",
                  width: "100%",
                  border: "1px solid #e5e5e5",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  outline: "none",
                  color: "white",
                  backgroundColor: "transparent",
                }}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address *"
              />
            </div>
          </div>
        </div>

        <div
          className="d-flex"
          style={{ justifyContent: "flex-start", marginTop: "30px" }}
        >
          <button
            className="btn"
            style={{
              padding: "15px 35px",
              borderRadius: "50px",
              fontSize: "15px",
              backgroundColor: "#AC1817",
              color: "white",
            }}
            onClick={handleSubmit}
          >
            <Link
              className="start-link"
              style={{
                fontWeight: 900,
                paddingRight: "10px",
                color: "white",
                textDecoration: "none",
              }}
              href=""
            >
              NEXT
            </Link>
            <FaAngleRight />
          </button>
          <button
            className=""
            style={{
              padding: "15px 30px",
              fontSize: "15px",
              backgroundColor: "transparent",
              color: "white",
              fontWeight: "900",
              border: "none",
            }}
            onClick={handleSkip}
          >
            <span>SKIP</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
