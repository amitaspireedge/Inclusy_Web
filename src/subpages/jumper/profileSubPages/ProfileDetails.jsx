import React from 'react'
import WorkExperience from '../../../modal/jumperProfile/WorkExperience'

export default function ProfileDetails() {
  return (
    <>
    <div class=" border rounded rounded-3 p-3">
          <div class=" w-100 rounded" style={{background:"#F4F3F5"}}>
            <div class="upload__box col-md-12 m-auto mb-3 ">
              <div class="p-3 w-100">
                <div class="upload__btn-box d-flex flex-column align-items-center">
                  <i class='bx bx-cloud-upload mb-4 p-3 back-yellow text-white text-22 full-border-radius'></i>
                  <label class="upload__btn col-md-2 m-auto back-till">
                    <p class="m-0 p-0 text-center">Upload images</p>
                    <input type="file" multiple="" data-max_length="20" class="upload__inputfile"/>
                  </label>
                </div>
                <div class="upload__img-wrap d-flex flex-wrap"></div>
              </div>
            </div>
          </div>
          <div class="d-flex p-3 mt-3 rounded align-items-center mb-3 justify-content-between" style={{background: "#F4F3F5"}}>
            <div class="" style={{color:"var(--text-main)"}}><strong>Work Experience</strong> </div>
            
            <div class="" style={{color:"var(--text-main)"}}><div class="" data-toggle="modal" ><i class='bx bx-plus-circle' style={{color:"#8C1D4B",fontSize:"35px"}}></i></div>
            </div>
          </div>

          <div class="p-3 mt-3 d-flex align-items-center justify-content-between rounded rounded-2 " style={{background:"#F4F3F5"}}>
            <div class="w-100" style={{color:"var(--text-main)"}}>
              <input type="email" class="w-100 border-0 " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="German - Spoken: L1 " style={{background: "#F4F3F5",height: "40px",color:"#000",fontSize:"16px"}}/>
            </div>
            <div class="" style={{color: "var(--text-main)"}}><div class="" data-toggle="modal" ><i class='bx bx-plus-circle' style={{color:"#8C1D4B",fontSize:"35px"}}></i></div>
            </div>
          </div>

          <div class="d-flex p-3 mt-3 rounded align-items-center mb-3 justify-content-between" style={{background:"#F4F3F5"}}>
            <div class="" style={{color:"var(--text-main)"}}><strong>Education</strong></div>
            
            <div class="" style={{color: "var(--text-main)"}}><div class="" data-toggle="modal" ><i class='bx bx-plus-circle' style={{color:"#8C1D4B",fontSize:"35px"}}></i></div>
            </div>
          </div>

          <div class="d-flex p-3 mt-3 rounded align-items-center mb-3 justify-content-between" style={{background:"#F4F3F5"}}>
            <div class="" style={{color:"var(--text-main)"}}><strong>Certificates and diplomas</strong></div>
            
            <div class="" style={{color:"var(--text-main)"}}><div class="" data-toggle="modal" ><i class='bx bx-plus-circle' style={{color:"#8C1D4B",fontSize:"35px"}}></i></div>
            </div>
          </div>

          <div class="d-flex p-3 mt-3 rounded align-items-center mb-3 justify-content-between" style={{background: "#F4F3F5"}}>
            <div class="" style={{color: "var(--text-main)"}}><strong>Employment references</strong> </div>
            
            <div class="" style={{color: "var(--text-main)"}}><div class="" data-toggle="modal" ><i class='bx bx-plus-circle' style={{color:"#8C1D4B",fontSize:"35px"}}></i></div>
            </div>
          </div>


          <div class="d-flex p-3 mt-3 rounded align-items-center mb-3 justify-content-between" style={{background: "#F4F3F5"}}>
            <div class="" style={{color: "var(--text-main)"}}><strong>Passport, ID, or Residential permit</strong> </div>
           
            <div class="" style={{color: "var(--text-main)"}}><div  class="" data-toggle="modal" ><i class='bx bx-plus-circle' style={{color:"#8C1D4B",fontSize:"35px"}}></i></div>
            </div>
          </div>
        </div>

        <WorkExperience/>
        </>
  )
}
