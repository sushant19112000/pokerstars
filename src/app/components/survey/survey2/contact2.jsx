import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { AfricaSurveyState } from "@/app/atoms/africaSurvey";
export const Contact2 = ({ nextTab }) => {

  const [surveyData, setSurveyData] =
    useRecoilState(AfricaSurveyState);
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [contact, setContact] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [company, setCompany] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [industry, setIndustry] = useState("")
  const [companySize,setCompanySize] = useState("")
  


  const inValidData = () => {
    if ( country == "" || fullName == ""|| email == "" || company == "" || city=="" || jobTitle=="" || industry=="" || companySize==""){
      return true
    }
    return false
  }


  const handleSubmit = () => {
    console.log("handle click"
    )
    const data = {
      country: country,
      fullName: fullName,
      jobTitle: jobTitle,
      email: email,
      contact: contact,
      company: company,
      industry:industry,
      city:city,
      jobTitle:jobTitle,
      companySize:companySize
    }

    console.log(data)
    if (inValidData()==false) {
      const data = {
        country: country,
        fullName: fullName,
        jobTitle: jobTitle,
        email: email,
        contact: contact,
        company: company,
        industry:industry,
        city:city,
        jobTitle:jobTitle,
        companySize:companySize
      }
      const contactData = {
        contactForm: data
      }
      console.log(contactData)
      setSurveyData([...surveyData, contactData])
      nextTab(15)
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
            paddingTop: "80px",
          }}
        >
          Question 13
        </h3>
        <h1 style={{ fontSize: "25px", fontWeight: "600", color: "white" }}>
          * Please complete the following contact form
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
                  onChange={((e) => (setFullName(e.target.value)))}
                  placeholder="  Full name * "
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
                  onChange={((e)=>(setEmail(e.target.value)))}
                  placeholder=" Email *"
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
                  onChange={((e)=>(setContact(e.target.value)))}
                  placeholder="Phone Number*"
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
                  onChange={((e)=>(setCity(e.target.value)))}
                  placeholder="  City *"
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
                  onChange={((e)=>(setCountry(e.target.value)))}
                  placeholder=" Country *"
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
                  onChange={((e)=>(setCompany(e.target.value)))}
                  placeholder=" Company *"
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
                  onChange={((e)=>(setJobTitle(e.target.value)))}
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
                  onChange={((e)=>(setIndustry(e.target.value)))}
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
                  onChange={((e)=>(setCompanySize(e.target.value)))}
                  placeholder=" Company Size *"
                />
              </div>
            </div>
          </div>

          <div
            className="d-flex"
            style={{ justifyContent: "flex-start", marginTop: "30px" }}
          >
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
              onClick={handleSubmit}
            >
              NEXT
              <FaAngleRight style={{ marginRight: "10px" }} />
            </button>
          </div>
        
      </div>
    </div>
  );
};
