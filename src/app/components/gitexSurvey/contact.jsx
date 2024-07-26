import { wrap } from "framer-motion";
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { AfricaSurveyState } from "@/app/atoms/africaSurvey";
const Contact = ({ nextTab }) => {
  //   const [surveyData, setSurveyData] = useRecoilState(AfricaSurveyState)
  //   const handleNext = () => {
  //     nextTab(9)
  //   }
  //   const [country, setCountry] = useState("")
  //   const [fullName, setFullName] = useState("")
  //   const [jobTitle, setJobTitle] = useState("")
  //   const [email, setEmail] = useState("")
  //   const [contact, setContact] = useState("")
  //   const [company, setCompany] = useState("")

  //   const inValidData = () => {
  //     if ( country == "" || fullName == "" || jobTitle == "" || email == "" || company == ""){
  //       return true
  //     }
  //     return false
  //   }

  //   const handleSubmit = () => {
  //     console.log("handlesubmit clicked")
  //     const data = {
  //       country: country,
  //       fullName: fullName,
  //       jobTitle: jobTitle,
  //       email: email,
  //       contact: contact,
  //       company: company
  //     }
  //     console.log(data)
  //     if (inValidData()==false) {
  //       const data = {
  //         country: country,
  //         fullName: fullName,
  //         jobTitle: jobTitle,
  //         email: email,
  //         contact: contact,
  //         company: company
  //       }
  //       const contactData = {
  //         contactForm: data
  //       }
  //       console.log(contactData)
  //       setSurveyData([...surveyData, contactData])
  //       nextTab(9)
  //     }
  //   }

  return (
    <div className="row justify-content-center">
      <div className=" col-md-8">
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

        <div className="row justify-conent-center" style={{}}>
          <div className="col-md-6">
            <style>
              {`
          input::placeholder {
            color: gray;
            font-weight: 900;
          }
        `}
            </style>
            <div
              className="ms-2 col-md-10"
              style={{
                marginTop: "20px",
                display: "flex",
                display: "wrap",
              }}
            >
              <input
                className="col col-lg-6"
                style={{
                  display: "inline-block",
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
                onChange={(e) => setCountry(e.target.value)}
                placeholder=" First Name*"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="ms-2 col-md-10"
              style={{
                marginTop: "20px",
                display: "flex",
                display: "wrap",
              }}
            >
              <input
                className="col col-lg-6"
                style={{
                  display: "inline-block",
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
                placeholder=" Last Name *"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="ms-2 col-md-10"
              style={{
                marginTop: "20px",
                display: "flex",
                display: "wrap",
              }}
            >
              <input
                className="col col-lg-6"
                style={{
                  display: "inline-block",
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
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder=" Industry *"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="ms-2 col-md-10"
              style={{
                marginTop: "20px",
                display: "flex",
                display: "wrap",
              }}
            >
              <input
                className="col col-lg-6"
                style={{
                  display: "inline-block",
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
                onChange={(e) => setFullName(e.target.value)}
                placeholder="  Company *"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="ms-2 col-md-10"
              style={{
                marginTop: "20px",
                display: "flex",
                display: "wrap",
              }}
            >
              <input
                className="col col-lg-6"
                style={{
                  display: "inline-block",
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
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Company Size *"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="ms-2 col-md-10"
              style={{
                marginTop: "20px",
                display: "flex",
                display: "wrap",
              }}
            >
              <input
                className="col col-lg-6"
                style={{
                  display: "inline-block",
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
                onChange={(e) => setContact(e.target.value)}
                placeholder=" Business Email *"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="ms-2 col-md-10"
              style={{
                marginTop: "20px",
                display: "flex",
                display: "wrap",
              }}
            >
              <input
                className="col col-lg-6"
                style={{
                  display: "inline-block",
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
                onChange={(e) => setContact(e.target.value)}
                placeholder="Phone Number *"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="ms-2 col-md-10"
              style={{
                marginTop: "20px",
                display: "flex",
                display: "wrap",
              }}
            >
              <input
                className="col col-lg-6"
                style={{
                  display: "inline-block",
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
                onChange={(e) => setContact(e.target.value)}
                placeholder=" Job Title *"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="ms-2 col-md-10"
              style={{
                marginTop: "20px",
                display: "flex",
                display: "wrap",
              }}
            >
              <input
                className="col col-lg-6"
                style={{
                  display: "inline-block",
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
                onChange={(e) => setContact(e.target.value)}
                placeholder=" Organisation Location *"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="ms-2 col-md-10"
              style={{
                marginTop: "20px",
                display: "flex",
                display: "wrap",
              }}
            >
              <input
                className="col col-lg-6"
                style={{
                  display: "inline-block",
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
                onChange={(e) => setContact(e.target.value)}
                placeholder=" Indusrty Setor? *"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="ms-2 col-md-10"
              style={{
                marginTop: "20px",
                display: "flex",
                display: "wrap",
              }}
            >
              <input
                className="col col-lg-6"
                style={{
                  display: "inline-block",
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
                onChange={(e) => setContact(e.target.value)}
                placeholder=" Address *"
              />
            </div>
          </div>
        </div>

        <div
          className="d-flex"
          style={{ justifyContent: "flex-start", marginTop: "30px" }}
        >
          <button
            className="btn btn-danger"
            style={{
              padding: "15px 35px",
              borderRadius: "50px",
              fontSize: "15px",
            }}
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
            //   onClick={handleNext}
          >
            <span>SKIP</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
