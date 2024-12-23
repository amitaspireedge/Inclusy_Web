import React from 'react'

export default function AboutUs() {
  return (
    <div className="Aboutus p-3" id="tabs-2" role="tabpanel">
    <div className="d-flex align-items-center justify-content-between mb-4">
      <div className="col-md-11 p-0" style={{color:"var(--text-main)"}}>
        <h5>Rate Us On Google</h5>
      </div>
      <span className="p-0 col-md-1 text-right pr-3 pt-1"> <i className='bx bx-chevron-right' style={{color:"#5F6368",fontSize:"30px"}}></i></span>
    </div>

    <div className="d-flex align-items-center justify-content-between mb-4">
      <div className="col-md-11 p-0" style={{color:"var(--text-main)"}}>
        <h5>Share Your Feedback</h5>
      </div>
      <span className="p-0 col-md-1 text-right pr-3 pt-1"> <i className='bx bx-chevron-right' style={{color:"#5F6368",fontSize:"30px"}}></i></span>
    </div>

    <div className="mt-5 text-center col-md-12 pt-5">
      <h4 className="mt-2">Follow Us On</h4>
      <div className="d-flex justify-content-center align-items-center mt-5">
          <img src="images/twitter.png" className="mr-3" style={{maxWidth:"32px"}}/>
         <i className='bx bxl-facebook-circle mr-3' style={{fontSize:"40px",color:"var(--till)"}}></i>
         <i className='bx bxl-linkedin-square mr-3' style={{fontSize:"40px",color:"var(--till)"}}></i>
         <i className='bx bxl-instagram'style={{fontSize:"40px",color:"var(--till)"}} ></i>
      </div>
    </div>
   
   </div>
  )
}
