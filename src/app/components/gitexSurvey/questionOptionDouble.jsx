import React, { useEffect, useState } from 'react'
import { useSaveData } from './useSaveData'
import { useNext } from './useNext'
import { indexToAlphabet } from '@/app/middleware/indexToAlphabet'
import './main.css';
import { FaAngleRight } from "react-icons/fa6";
export const QuestionOptionDouble = ({ data }) => {
    const [selectedAnswers, setSelectedAnswers] = useState([])
    const [disable, setDisable] = useState(false)
    const next = useNext()
    const saveData = useSaveData()

    const handleDoubleSelect = (answer) => {
        if (selectedAnswers.length < 2) {
            setSelectedAnswers((prevSelectedAnswers) => {
                const index = prevSelectedAnswers.indexOf(answer);
                if (index !== -1) {
                    return prevSelectedAnswers.filter((item) => item !== answer);
                } else {
                    return [...prevSelectedAnswers, answer];
                }
            });
        }
        else {
            setDisable(true)
            setSelectedAnswers((prevSelectedAnswers) => {
                const index = prevSelectedAnswers.indexOf(answer);
                if (index !== -1) {
                    return prevSelectedAnswers.filter((item) => item !== answer);
                } else {
                    return [...prevSelectedAnswers, answer];
                }
            });
        }
    };

    const handleColor = (type, answer) => {
        const index = selectedAnswers.indexOf(answer);
        if (type == "fontColor") {
            if (index !== -1) {
                return 'black'
            } else {
                return 'white'
            }
        }
        if (type == "backgroundColor") {
            if (index !== -1) {
                return "#ccd0d4"
            } else {
                return "transparent"
            }
        }
    }

    const checkDisbaled = (answer) => {
        if (disable == true) {
            const index = selectedAnswers.indexOf(answer);
            return index != -1 ? true : false;
        }
    }


    const handleNext = () => {
        if (selectedAnswers.length == 2) {
            saveData(data.questionNumber, selectedAnswers)
            next()
        }
    }

    return (
        <div className='row'>
            <div className="col-md-9 pb-5">
                <div style={{ marginTop: '80px' }}>

                    <h3
                        style={{
                            color: "gray",
                            fontSize: "15px",
                            fontWeight: "700",
                            paddingTop: "20px",
                        }}
                    >
                        Question {data.questionNumber}
                    </h3>

                    <h2
                        style={{ fontSize: "25px", fontWeight: "600", color: "white" }}
                        className="mb-5"
                    >
                        {data.question}
                        <>
                            <p
                                style={{
                                    color: "gray",
                                    fontWeight: "600",
                                    fontSize: "20px",
                                }}
                            >
                                Please select top two.
                            </p>
                        </>
                    </h2>
                    <div style={{}}>
                        <p
                            style={{
                                color: "white",
                                fontWeight: "600",
                                fontSize: "15px",
                                marginTop: "10px",
                            }}
                        >
                            Choose any 2
                        </p>
                    </div>
                    {data.answers.map((answer, index) => (
                        <>
                            <div className="col-md-5" aria-disabled={(() => checkDisbaled(answer))} >
                                <div
                                    className="row choice mb-2 rounded"
                                    style={{

                                        border: "1px solid grey",
                                        marginLeft: "2px",
                                        color:
                                            handleColor("fontColor", answer),
                                        backgroundColor: handleColor('backgroundColor', answer)
                                    }}
                                    onClick={() => handleDoubleSelect(answer)}
                                >
                                    <div className="d-flex p-2">
                                        <div style={{ width: "95%" }}>{answer}</div>
                                        <div className="w-5 circle">{indexToAlphabet(index)}</div>
                                    </div>
                                </div>
                            </div>


                        </>
                    ))}
                </div>

                <button
                    className="btn btn-danger"
                    style={{
                        //   padding: "15px 35px",
                        borderRadius: "50px",
                        fontSize: "15px",
                        marginTop: "30px",


                    }}

                    onClick={handleNext}
                >
                    <span>
                        Next

                    </span>
                    <FaAngleRight />
                </button>
            </div>
        </div>
    )
}
