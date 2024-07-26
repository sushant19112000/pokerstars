import React, { useEffect, useState } from 'react'
import { useSaveData } from './useSaveData'

export const QuestionOptionDouble = () => {
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
        <div>
            {answers.map((answer, index) => (
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

            <div >
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}
