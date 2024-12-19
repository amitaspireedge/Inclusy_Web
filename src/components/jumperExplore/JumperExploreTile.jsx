import React from 'react'

export default function JumperExploreTile() {



    
  return (



    <div className="tab-content mt-2 col-md-12">
		<div className="tab-pane active" id="tabs-1" role="tabpanel">
        <div className=" bg-[#0d6efd] rounded-lg mb-3" style={{background: "var(--grey)"}}>
        <div className="d-flex align-items-center p-3">
          <div className="col-md-11 ml-3">
            <h4>Sozialarbeiter:in WSH | 60% - 80% | CHF 20.00/h</h4>
            <span className="pb-2 d-block">Soziale Dienste Stadt Zürich</span>
            <div className="d-flex flex-wrap col-md-8 p-0">
              <div className="col-md-2 d-flex align-items-center p-0 col-sm-12">
                <i className='bx bx-car mr-2' style={{fontSize:"24px",color:"grey"}}></i>
                <p className="p-0 m-0">1h 15 min</p>
              </div>
              <div className="col-md-2 d-flex align-items-center p-0 col-sm-12">
                <i className='bx bx-train mr-2' style={{fontSize:"24px",color:"grey"}}></i>
                <p className="p-0 m-0">1h 15 min</p>
              </div>
              <div className="col-md-6 d-flex align-items-center p-0 col-sm-12">
                <i className='bx bx-location-plus mr-1' style={{fontSize:"24px",color:"grey"}} ></i>
                <p className="p-0 m-0">Musterstrasse 33, 8000 Basel</p>
              </div>
            </div>
            </div>
            <div className="col-md-1 text-center">
             <span className="d-block p-3 rounded-circle" style={{background:"var(--yellow)",color:"#fff", maxWidth:"60px", height:"60px"}}> <i className='bx bx-right-arrow-alt' style={{fontSize: "30px"}}></i></span>
            </div>
          </div>
        </div>
		</div>
	</div>
  )
}
