import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRecoilState } from 'recoil';
import { AfricaSurveyState } from '@/app/atoms/africaSurvey';
export const Home = ({nextTab}) => {
    const [surveyData,setSurveyData]=useRecoilState(AfricaSurveyState)
    useEffect(()=>(
        setSurveyData([])
    ),[])
  const handleNext=()=>{
    nextTab(2)
  }
  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",

      paddingTop: "10%",
    }}
    className="row justify-content-center"
  >
    <div style={{}} className="col-md-8">
      <h1 style={{ fontSize: "30px", fontWeight: "900", color: "white" }}>
        Welcome to the Africa - CISO Cloud Security Readiness <br />{" "}
        Survey, a CXO Priorities survey in collaboration with <br /> Check
        Point Technologies.
      </h1>
      <p
        style={{
          fontSize: "20px",
          fontWeight: "700",
          color: "gray",
          marginTop: "20px",
        }}
      >
        This survey should take no more than five minutes to complete. We
        value your insights and thank you <br /> for your participation.
      </p>

      <button
        className="btn btn-warning"
        style={{
          padding: "15px 25px",
          borderRadius: "50px",
          fontSize: "15px",
          marginTop: "30px",
        }}
        onClick={handleNext}
      >
        <Link
          style={{
            fontWeight: "900",
            gap: "10px",
            color: "black",
            textDecoration: "none",
          }}
          href=""
        >
          BEGIN SURVEY
        </Link>
        {/* <FaAngleRight /> */}
      </button>
    </div>
  </div>
  )
}
