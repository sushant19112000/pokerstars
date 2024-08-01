import React, { useEffect, useState } from 'react'
import { useNext } from './useNext'
import { usePrevious } from './usePrevious'
import { useSaveData } from './useSaveData'
import { useRecoilValue } from 'recoil';
import { PokerStarsData } from '@/app/atoms/pokerStarsData';
export const ChoosePassword = () => {
    const [password, setPassword] = useState("")
    const data = useRecoilValue(PokerStarsData)
    const next = useNext()
    const prev = usePrevious()
    const saveData = useSaveData()

    const handleNext = () => {
        if (!isTooShort && startsWithLetter && hasDigit) {
            saveData('password', password)
            next()
        }
    }


    useEffect(() => {

    }, [data])

    const handlePrev = () => {
        prev();
    };

    const isTooShort = password.length < 8;
    const startsWithLetter = /^[A-Za-z]/.test(password);
    const hasDigit = /\d/.test(password);
    return (
        <>
            <div
                className="row justify-content-center"
                style={{ backgroundColor: "black" }}
            >
                <div className="col-md-3">
                    <div className="pt-2 pb-2 d-flex">
                        <div className="">
                            <span style={{ color: "white" }} onClick={handlePrev}>
                                Prev
                            </span>
                        </div>
                        <div className="">
                            <p
                                style={{
                                    fontWeight: "600",
                                    color: "white",
                                    fontFamily: "Roboto",
                                    fontSize: "16px",
                                }}
                            >
                                Votre mot de passe
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            



            <div className="row justify-content-center pt-3" >
                <div className="col-md-3" >
                    <div>
                        <p style={{ fontSize: '25px', color: 'black', fontWeight: '900', fontFamily: 'Roboto' }}>OK, {data.username}. Maintenant, définissez un mot de passe</p>
                    </div>
                    <div>
                        <span style={{ color: 'RGB(215, 0, 34)', fontFamily: 'Roboto', fontSize: '15px' }}>Mot de passe</span>
                    </div>

                    <div className="mt-1">
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            style={{
                                border: "1px solid black",
                                height: "50px",
                                borderRadius: "0",
                            }}
                        />
                        {isTooShort && (
                            <>
                                <span
                                    style={{
                                        color: "RGB(8, 155, 128)",
                                        fontSize: "14px",
                                        fontFamily: "Roboto",
                                    }}
                                >
                                    8 caractères ou plus
                                </span>
                                <br />
                            </>
                        )}
                        {!startsWithLetter && (
                            <>
                                <span
                                    style={{
                                        color: "RGB(8, 155, 128)",
                                        fontSize: "14px",
                                        fontFamily: "Roboto",
                                    }}
                                >
                                    Commence par une lettre
                                </span>
                                <br />
                            </>
                        )}
                        {!hasDigit && (
                            <>
                                <span
                                    style={{
                                        color: "RGB(8, 155, 128)",
                                        fontSize: "14px",
                                        fontFamily: "Roboto",
                                    }}
                                >
                                    Comporte au moins 1 chiffre
                                </span>
                                <br />
                            </>
                        )}
                    </div>

                    <div className="mt-5 mb-5 text-center">
                        <button
                            className="btn"
                            style={{
                                borderRadius: "18px",
                                width: "386px",
                                color: "white",
                                fontWeight: "700",
                                backgroundColor: "#02bd9c",
                            }}
                            onClick={handleNext}
                        >
                            Continuer
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

