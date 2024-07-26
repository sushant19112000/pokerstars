import React from 'react'
import Image from 'next/image'
export const Newfooter = () => {
    return (
        <div style={{ backgroundColor: 'black' }}>
            <div className='container pt-5 pb-5' >
                <div className='mt-4'>
                    <hr style={{ border: '1px solid white' }}></hr>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className='mt-4' >
                            <picture >
                                <Image src="/logos/martech-logo.svg" className="" alt="alt" width={200} height={200} />
                            </picture>
                        </div>
                        <div className="mt-4">
                            <p style={{ color: 'white', fontWeight: '900' }}>A Revvknew Media Brand</p>
                        </div>

                        <div className="mt-4">
                            <p style={{ color: 'white', fontWeight: '600', fontSize: '14px' }}>© Copyright 2024 Martech Avenue | 561 7th Ave, 4th floor, New York 10018</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row mt-5 justify-content-end">
                            <div className="col-md-10">

                                <div className='col-md-9 ms-md-3 '>
                                    <p style={{ color: 'white' }}>
                                        Signup to the Martech Avenue newsletter
                                        and never miss out on the latest news
                                    </p>
                                </div>
                                <div className="d-flex pb-2 pt-3" style={{ borderBottom: '1px solid white' }}>
                                    <input className='form-control' style={{ borderBottom: 'none', borderRight: 'none', borderLeft: 'none', borderTop: 'none', backgroundColor: 'transparent', borderRadius: '0', outline: 'none' }} />
                                    <button className='btn  btn-light' style={{ borderRadius: '0', width: '150px', fontWeight: '900' }}>Submit</button>
                                </div>

                                <div className='d-flex flex-column flex-md-row mt-5'>
                                    <div className='me-2 mb-2 mb-md-0' style={{ color: 'white' }}>
                                        Tools
                                    </div>
                                    <div className='me-2 mb-2 mb-md-0' style={{ color: 'white' }}>
                                        Compliance
                                    </div>
                                    <div className='me-2 mb-2 mb-md-0' style={{ color: 'white' }}>
                                        Resources
                                    </div>
                                    <div className='me-2 mb-2 mb-md-0' style={{ color: 'white' }}>
                                        ContactUs
                                    </div>
                                    <div style={{ color: 'white' }}>
                                        Privacy Policy

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
