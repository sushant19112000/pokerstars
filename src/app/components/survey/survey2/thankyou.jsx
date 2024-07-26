import React from 'react'
import Image from 'next/image'
export const Thankyou = () => {
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
            Thankyou for Completing Managing risk and complexity in a hybrid and multi-cloud world -a CXO
            Priorities survey in collaboration with Crowdstrike
          </p>
        </div>
      </div>
    )
}
