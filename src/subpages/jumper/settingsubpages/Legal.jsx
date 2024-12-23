import React from 'react'

export default function Legal() {
  return (
    <div className="legal mb-5 p-3" id="tabs-3" role="tabpanel">
  <div className="d-flex align-items-center justify-content-between mb-4">
    <div className="col-md-11 p-0" style={{color:"var(--text-main)"}}>
      <h5>Terms and conditions</h5>
    </div>
    <span className="p-0 col-md-1 text-right pr-3 pt-1"> <i className='bx bx-chevron-right' style={{color:"#5F6368",fontSize:"30px"}}></i></span>
  </div>

  <div className="d-flex align-items-center justify-content-between mb-4">
    <div className="col-md-11 p-0" style={{color: "var(--text-main)"}}>
      <h5>privacy and cookies policy </h5>
    </div>
    <span className="p-0 col-md-1 text-right pr-3 pt-1"> <i className='bx bx-chevron-right' style={{color:"#5F6368",fontSize:"30px"}}></i></span>
  </div>
  <div className="d-flex align-items-center justify-content-between mb-4">
    <div className="col-md-11 p-0" style={{color: "var(--text-main)"}}>
      <h5>GAV Personal verleih  </h5>
    </div>
    <span className="p-0 col-md-1 text-right pr-3 pt-1"> <i className='bx bx-chevron-right' style={{color:"#5F6368",fontSize:"30px"}}></i></span>
  </div>
 
</div>
  )
}
