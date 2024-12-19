import React from 'react'

export default function JumperExploreTileHalf() {
  return (
    <>
    <style type="text/css">
        {`.nav-tabs,.nav-tabs .nav-link {
          border: 0;
          }
          .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active,.nav-tabs .nav-link.active i {
          background-color: var(--yellow) !important;
          color: #fff !important;
          }
         
          .nav-tabs .nav-link {
          border-radius: 5px;
          }
          .engagements .nav-item:hover::after {
          display: none;
          }
          .mobile-accordian{
            display: none;
          }
          button:focus-visible{
            outline: 0 !important;
            border: 0 !important;
          }
          input:focus-visible {
          outline: none;
          } 
        
        
        .step {
          width: 40px;
          height: 40px;
          background-color:white;
          display: inline-block;
          border: 4px solid;
          border-color: transparent;
          border-radius: 50%;
          font-weight: 600;
          text-align: center;
          line-height: 35px;
        }

        /*select language*/
    .btn-group .select {
	 position: relative;
}
 .btn-group .select input:checked + label {
	 background-color:var(--yellow) !important;
	 color: #fff !important;
}
 .btn-group .select input:checked + label:hover, .btn-group .select input:checked + label:focus, .btn-group .select input:checked + label:active {
	 background-color:var(--yellow) !important;
}
 .btn-group .select input {
	 opacity: 0;
	 position: absolute;
}
 .btn-group .select .button_select {
	 margin: 0 10px 10px 0;
	 display: flex;
	 background-color: transparent;
}
 .btn-group .select .button_select:hover, .btn-group .select .button_select:focus, .btn-group .select .button_select:active {
	 background-color: transparent;
}
 .option {
	 position: relative;
}
 .option input {
	 opacity: 0;
	 position: absolute;
}
 .option input:checked + span {
	 background-color: #ffc107;
}
 .option input:checked + span:hover, .option input:checked + span:focus, .option input:checked + span:active {
	 background-color: #ffc107;
}
 .option .btn-option {
	 margin: 0 10px 10px 0;
	 display: flex;
	 background-color: transparent;
}
 .option .btn-option:hover, .option .btn-option:focus, .option .btn-option:active {
	 background-color: transparent;
}
        
        
          @media only screen and (max-width: 768px) {
            .mobile-accordian{
            display: block;
          }
          .mobile-none{
            display: none;
          }
          .information span{
          	font-size: 17px !important;
          }
          .information p {
          	font-size: 12px !important;
          }
          .btn-group, .btn-group-vertical {
            display: block;
          }
        
          }`}
    </style>
    
         <div className="tab col-lg-6 col-sm-12 p-0" style={{marginRight: "15px"}}>
             <div className="tab-pane rounded-lg p-3" id="tabs-2" role="tabpanel" style={{background:"var(--grey)"}}>
             {/* <div className="tab-pane rounded-lg bg-[#0d6efd] p-3" id="tabs-2" role="tabpanel" style={{border:"1px solid #00C6C3"}}> */}
                        <h4>Sozialarbeiter:in WSH | 60% - 80% | CHF 20.00/h</h4>
                        <span className=" pb-2 d-block">Soziale Dienste Stadt Zürich</span>
                        <div className="d-flex flex-wrap col-md-12">
                            <div className="col-md-3 d-flex align-items-center p-0 col-sm-12">
                                <i className='bx bx-car mr-2' style={{fontSize: "24px", color: "grey"}}></i>
                                <p className="p-0 m-0">1h 15 min</p>
                            </div>
                            <div className="col-md-3 d-flex align-items-center p-0 col-sm-12">
                                <i className='bx bx-train mr-2' style={{fontSize: "24px", color: "grey"}}></i>
                                <p className="p-0 m-0">1h 15 min</p>
                            </div>
                            <div className="col-md-6 d-flex align-items-center p-0 col-sm-12">
                                <i className='bx bx-location-plus mr-1' style={{fontSize: "24px",color: "grey"}}></i>
                                <p className="p-0 m-0">Musterstrasse 33, 8000 Basel</p>
                            </div>
                        </div>
                </div>
            </div>
    
    </>
  )
}
