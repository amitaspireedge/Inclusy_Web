import React from 'react'

export default function JumperInfo() {
  return (



<>
<style type="text/css">
 {`.nav-tabs,.nav-tabs .nav-link {
  border: 0;
  }
  .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
  background-color: var(--yellow);
  color: #fff !important;
  }
 
  .nav-tabs .nav-link {
  border-radius: 5px;
  }
  .engagements .nav-item:hover::after {
  display: none;
  }

  @media only screen and (max-width: 575px) {
  .flex-xs-column-reverse{
   flex-direction: column-reverse;
  }
}`}
</style>


    <div class="">
          <div class="col-md-3 col-12 p-0">
            <img src="images/profile.png" style={{borderRadius:"5px"}} class="w-100"/>
            <div class="position-absolute" style={{bottom:"-5px",left:"-5px"}}><i class="bx bx-pencil p-2 border-radius" style={{borderRadius:"8px", background:"#F4F3F5", color:"#8C1D4B", border:"5px solid #fff", fontSize:"18px"}}></i></div>
          </div>
          <div class="col-md-8 col-12 mt-4 p-0 pl-4">
            <h3>Markus Loiola</h3>
            <div class="d-flex">
              <div className=''><i class="bx bxs-star mr-1" style={{color:"#CFA716", fontSize:"22px"}}></i></div>
              <div className=''><i class="bx bxs-star mr-1" style={{color:"#CFA716", fontSize:"22px"}}></i></div>
              <div className=''><i class="bx bxs-star mr-1" style={{color:"#CFA716", fontSize:"22px"}}></i></div>
              <div className=''><i class="bx bxs-star mr-1" style={{color:"#CFA716", fontSize:"22px"}}></i></div>
              <div className=''><i class="bx bxs-star" style={{color:"#D9D9D9",fontSize:"22px"}}></i></div>
            </div>
          </div>
          <div class="mb-3 mt-3">
            <h3>Contact Info</h3>
          </div>
          <div class="d-flex col-md-12 p-0 align-items-center mb-3">
            <i class="bx bxs-phone mr-2" style={{fontSize:"22px", color:"var(--text-main)"}}></i>
            <span style={{fontSize:"22px", color:"var(--text-main)"}}>+41 79 123 45 67</span>
          </div>
          <div class="d-flex col-md-12 p-0 align-items-center mb-3">
            <i class="bx bxs-envelope mr-2" style={{fontSize:"22px",color:"var(--text-main)"}}></i>
            <span style={{fontSize:"22px", color:"var(--text-main)"}}>markus.loiola@gmail.com</span>
          </div>
          <div class="d-flex col-md-12 p-0 align-items-center mb-3">
            <i class="bx bxs-location-plus mr-2" style={{fontSize:"22px", color:"var(--text-main)"}}></i>
            <span style={{fontSize:"22px", color:"var(--text-main)"}}>flughafenstarbe 13, 8000 Zürich.</span>
          </div>
          <div class="d-flex justify-content-between col-md-12 p-0 mt-3">
            <div class="col-md-11 p-0">
              <h4>About Me</h4>
            </div>
            <div class="col-md-1"><span style={{color:"#000"}} class="border-bottom">Help</span></div>
          </div>
          <p>Surprise hiring managers with a great ‘About me’ section. We recommend you use this section to shows your unique skills, experience and career goals.</p>
          <textarea class="form-control mb-3" id="exampleFormControlTextarea1" rows="3" style={{height:"200px", border:"1px solid #000", resize:"none"}}></textarea>
          <button type="submit" class="col-md-3 m-auto btn btn-primary border-0 pt-3 pb-3" style={{background:"var(--yellow)"}}><strong>Continue</strong> </button>
</div>
</>
  )
}
