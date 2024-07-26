import Link from "next/link";
import React from "react";
import { HiCheck } from "react-icons/hi";
// import { agreeTerms } from "./data2";
import { FaAngleRight } from "react-icons/fa6";
const indexToAlphabet = (index) => String.fromCharCode(65 + index); // 65 is the char code for 'A'
export const TermsCondition = ({nextTab}) => {
//   const [africaSurveystate, setAfricaSurveyState] =
//     useRecoilState(AfricaSurveyState);
//   const [next, setNext] = useState(false);
//   const [selectedAnswer, setSelectedAnswer] = useState("");
//   const handleNext = (e) => {
//     setSelectedAnswer(e)
//     const newObj = {
//       question: 14,
//       answer: e,
//     };
//     setAfricaSurveyState([...africaSurveystate, newObj]);
//     setTimeout(() => {
//       nextTab(16);
//     }, 1000); // Adjust the delay (in milliseconds) as needed
//   };
//   const Skip=()=>{
//     nextTab(16);
//   }
  return (
    <>
      <div
        className="row justify-content-center"
      
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
            Yes, I authorise Lynchpin Media and associated partners to this report to receive my personal contact details for the purpose of sending information on products, services and/or events. 
            For more information, please view the Lynchpin Media privacy policy {" "}
            <span>
              <Link href="https://www.lynchpinmedia.com/privacy-policy/" style={{textDecoration:''}}>
                    here
              </Link>
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
           We use the business contact details collected here for specific activities, where we consider there to be legitimate interest. This can include sending you business communications about similar services and products. You will always have the opportunity to opt out of future communications from us.  <br />{" "}
          
          </h1>

          

          {/* {agreeTerms.answers.map((answer, index) => ( */}
            <>
              <div className="col-md-5 mt-3" >
                <div
                  className="row choice mb-2 rounded"
                //   style={{

                //     border: "1px solid grey",
                //     marginLeft: "2px",
                //     color:
                //       selectedAnswer == answer ? "black" : "white",
                //     backgroundColor:
                //       selectedAnswer == answer
                //         ? "#ccd0d4"
                //         : "transparent",
                //   }}
                  onClick={() => handleNext(answer)}
                >
                  <div className="d-flex p-2">
                    <div style={{ width: "95%" }}>Yes I agree to these terms</div>
                    <div className="w-5 circle">A</div>
                  </div>
                </div>
              </div>
            </>
          {/* ))} */}

          <div
            className="d-flex"
            style={{  alignItems:"center", marginTop: "30px" ,gap:"20px"}}
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
              SUBMIT
            </Link>
            <FaAngleRight />
          </button>
          <p className="" style={{color:"white" ,fontSize:"small", marginTop:"15px"}}>Press <b>ENTER</b> key to submit</p>
          </div>
        </div>
      </div>
    </>
  );
};
