import React from 'react'

export default function JumperExploreDetails() {
  return (
    <div className="col-md-6 mobile-none ">
                    <div className=" bg-[#0d6efd] rounded-lg p-3 mb-3" style={{background: "var(--grey)"}}>
                        <div className="d-flex align-items-center">
                            <div className="col-md-12 p-0">
                                        <h5>Sozialarbeiter:in WSH | 60% - 80% |&nbsp;CHF 20.00/h</h5>
                               
                                <div className="d-flex flex-wrap ">
                                    <div className="col-md-5 col-sm-12 p-0">
                                        <span className="pb-2 d-block">Soziale Dienste Stadt Zürich</span>
                                    </div>
                                    <div className="col-md-3 col-sm-12">
                                        <div className="d-flex align-items-center">
                                            <span style={{color:"var(--bit)"}}>Get Direction</span>
                                            <i className=' ml-2 bx bx-right-top-arrow-circle' style={{color: "var(--bit)",fontSize:"22px"}}></i>
                                        </div>
                                      
                                    </div>
                                </div>
                               
                                <div className="d-flex flex-wrap col-md-12 p-0 mt-3">
                                    <div className="col-md-3 d-flex align-items-center p-0 col-sm-12">
                                        <i className="bx bx-car mr-2" style={{fontSize:"24px", color:"grey"}}></i>
                                        <p className="p-0 m-0">1h 15 min</p>
                                    </div>
                                    <div className="col-md-3 d-flex align-items-center p-0 col-sm-12">
                                        <i className="bx bx-train mr-2" style={{fontSize:"24px", color:"grey"}}></i>
                                        <p className="p-0 m-0">1h 15 min</p>
                                    </div>
                                    <div className="col-md-6 d-flex align-items-center p-0 col-sm-12">
                                        <i className="bx bx-location-plus mr-1" style={{fontSize:"24px", color:"grey"}}></i>
                                        <p className="p-0 m-0">Musterstrasse 33, 8000 Basel</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-block rounded-circle pl-2 pr-2 pt-2 pb-1 share position-absolute" style={{background:"var(--text-main)",top:"300px", width:"40px", height:"40px", right:"23px"}}> <i className='bx bxs-share-alt' style={{color:"#fff",fontSize:"30px",lineHeight:"30px"}}></i></div>
                        <div className="d-flex col-md-7 p-0 mt-3">
                            <div className="col-md-6 pt-3 p-0" style={{marginRight:"20px"}}>
                                <button type="button" data-toggle="modal" data-target="#basicModal" className="d-block w-100 border-0 text-center pt-1 pb-1 rounded rounded-2" style={{color:"#fff",background:"var(--till)",lineHeight:"30px"}}>Apply</button>
                            </div>
                            <div className="col-md-6  pt-3 p-0">
                                <button type="button" className="btn btn-primary w-100 border-0" style={{backgroundColor:"#E4E4E4",color:"#000"}}>Not Interested</button>
                            </div>

                        </div>
                        <h5 className="mt-4">Required experience</h5>
                        <span className="pb-2 d-block">1 year of&nbsp;Logistician or similar experience.</span>
                        <h5 className="mt-3">Description</h5>
                        <span className="pb-2 d-block">Ziel und Zweck der Stelle
                        Die in den vorgelagerten Prozesse generierten Versandboxen, müssen, abgestimmt auf die 
                        Tourenplanung, auf Paletten gestapelt, geprüft und gekennzeichnet werden. Die Zeitgerechte 
                        Bereitstellung der fertiggestellten Paletten sind für die Beladung der Lastwagen notwendig. Die 
                        administrative Abarbeitung des gesamten Prozesses sichert die Qualtitätsanforderungen</span>
                        <a className="d-block text-center" style={{color:"#000"}}>READ MORE</a>
                        <h5 className="mt-4">Location</h5>
                        <div className="responsive-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889"
                            width="100%" height="300" frameborder="0" style={{border:"0"}} allowfullscreen=""></iframe>
                        </div>
                    </div>
                    </div>
                   
  )
}
