import React, { useState } from 'react'
import { indexToAlphabet } from '@/app/middleware/indexToAlphabet'
import { useNext } from './useNext';
import { useSaveData } from './useSaveData';
import './main.css';
export const QuestionOptionSingle = ({ data }) => {
  const [selected, setSelected] = useState("")
  const next = useNext()
  const saveData = useSaveData()
  const autoSave = (e) => {
    setSelected(e)
    saveData(data.questionNumber, e)
    next()
  }
  return (
    <>
      <main className="container" style={{ height: "100vh" }}>
        <div className="row justify-content-center">
          <div className="col-md-9">
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
              </h2>
              {data.answers.map((answer, index) => (
                <>
                  <div className="col-md-5" key={index}>
                    <div
                      className="row choice mb-2 rounded"
                      style={{

                        border: "1px solid grey",
                        marginLeft: "2px",
                        color:
                          selected == answer ? "black" : "white",
                        backgroundColor:
                          selected == answer
                            ? "#ccd0d4"
                            : "transparent",
                      }}
                      onClick={() => autoSave(answer)}
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
          </div>
        </div>
      </main>
    </>
  )
}


