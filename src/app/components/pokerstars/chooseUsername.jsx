import React, { useState } from 'react'
import { useNext } from './useNext'
import { usePrevious } from './usePrevious'
import { useSaveData } from './useSaveData'
export const ChooseUsername = () => {
    const [username, setUsername] = useState("")

    const next = useNext()
    const prev = usePrevious()
    const saveData = useSaveData()

    const handleNext = () => {
        if (username.length > 4) {
            saveData("username", username)
            next()
        }

    }

    const handlePrev = () => {
        prev()
    }


    return (
        <>
            <div className="row justify-content-center" style={{ backgroundColor: 'black' }}>
                <div className="col-md-3" >
                    <div className='pt-2 pb-2 d-flex' >
                        <div className=''>
                            <span style={{ color: 'white' }} onClick={handlePrev}>Prev</span>
                        </div>
                        <div className=''>
                            <p style={{ fontWeight: '600', color: 'white', fontFamily: 'Roboto', fontSize: '16px' }}>Votre nom d'utilisateur</p>

                        </div>
                    </div>

                </div>
            </div>

            <div className="row justify-content-center mt-2">
                <div className="col-md-3 text-center">
                    <div className="_88e00b5 text-center ">
                        <div className="_7c374bc d-flex justify-content-center">
                            <svg className='me-2' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" width="24" height="24" rx="12" fill="#000" />
                                <path d="M13.553 17H12.28V8.571l-2.55.937V8.359L13.354 7h.199V17z" fill="#fff" />
                            </svg>
                            <p className='' style={{ fontSize: '14px', fontFamily: 'Roboto', color: 'black', fontWeight: '500', marginTop: '2.5px' }}>Informations de compte</p>
                            <div>
                                <svg width="41" height="20" viewBox="0 0 41 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 10H1" stroke="#000" strokeLinecap="round" />
                                    <path d="M33.93 14h-5.59v-.78l2.953-3.28c.438-.497.738-.899.902-1.208.168-.312.252-.634.252-.966 0-.446-.135-.81-.404-1.096-.27-.285-.629-.428-1.078-.428-.54 0-.96.154-1.26.463-.297.305-.445.73-.445 1.277h-1.084c0-.785.252-1.42.756-1.904.508-.484 1.185-.726 2.033-.726.793 0 1.42.209 1.88.627.462.414.692.966.692 1.658 0 .84-.535 1.84-1.605 3l-2.285 2.478h4.283V14z" fill="#000" />
                                    <rect x="21.5" y="0.5" width="19" height="19" rx="9.5" stroke="#000" />
                                </svg>
                                <svg width="41" height="20" viewBox="0 0 41 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 10H1" stroke="#000" strokeLinecap="round" />
                                    <path d="M29.916 9.207h.814c.512-.008.915-.143 1.207-.404.293-.262.44-.616.44-1.06 0-1-.498-1.5-1.494-1.5-.469 0-.844.134-1.125.403-.277.266-.416.62-.416 1.061h-1.084c0-.676.246-1.236.738-1.682.496-.449 1.125-.673 1.887-.673.805 0 1.435.212 1.892.638.457.426.686 1.018.686 1.776 0 .37-.121.73-.363 1.078a2.158 2.158 0 01-.979.779c.469.148.83.395 1.084.738.258.344.387.764.387 1.26 0 .766-.25 1.373-.75 1.822-.5.45-1.15.674-1.951.674-.801 0-1.453-.217-1.957-.65-.5-.434-.75-1.006-.75-1.717h1.09c0 .45.146.809.439 1.078.293.27.686.404 1.178.404.523 0 .924-.136 1.2-.41.278-.273.417-.666.417-1.177 0-.497-.153-.877-.457-1.143-.305-.266-.744-.402-1.319-.41h-.814v-.885z" fill="#000" />
                                    <rect x="21.5" y="0.5" width="19" height="19" rx="9.5" stroke="#000" />
                                </svg>
                                <svg width="41" height="20" viewBox="0 0 41 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 10H1" stroke="#000" strokeLinecap="round" />
                                    <path d="M38.355 7.973L31 16.247l-7.355-8.274L26.25 4.5h9.5l2.605 3.473z" stroke="#572DA5" />
                                    <path d="M31 16.25L27 8l-.75-3.5M31 16.25L35 8l.75-3.5M23.5 8h15" stroke="#572DA5" />
                                    <path d="M27 8l4-3.5L35 8" stroke="#572DA5" strokeLinejoin="round" />
                                    <rect x="21.5" y="0.5" width="19" height="19" rx="9.5" stroke="#572DA5" />
                                </svg>

                            </div>
                        </div>

                    </div>

                </div>


            </div>




            <div className="row justify-content-center pt-3" >
                <div className="col-md-3" >
                    <div>
                        <p style={{ fontSize: '25px', color: 'black', fontWeight: '900', fontFamily: 'Roboto' }}>Créons votre nom d'utilisateur</p>
                    </div>

                    <div>
                        <p style={{ fontSize: '14px', fontFamily: 'Roboto', color: 'RGB(102, 102, 102)' }}>Vous utiliserez ce nom lorsque vous jouerez à nos jeux.</p>
                    </div>


                    <div>
                        <span style={{ color: 'RGB(215, 0, 34)', fontFamily: 'Roboto', fontSize: '15px' }}>Nom d'utilisateur</span>

                    </div>

                    <div className='mt-1'>
                        <input onChange={((e) => setUsername(e.target.value))} className='form-control' style={{ border: '1px solid black', height: '50px', borderRadius: '0' }} />

                        {username.length <= 4 && (
                            <>
                                <span style={{ color: 'RGB(8, 155, 128)', fontSize: '14px', fontFamily: 'Roboto' }}>4 caractères ou plus</span>
                            </>
                        )}
                    </div>


                    <div className='mt-5 mb-5 text-center'>
                        <button className='btn' style={{ borderRadius: '18px', width: '386px', color: 'white', fontWeight: '700', backgroundColor: '#02bd9c' }} onClick={handleNext}>Continuer</button>
                    </div>




                </div>
            </div>
        </>

    )
}
