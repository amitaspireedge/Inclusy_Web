import React from 'react'
import WorkExperience from '../../../modal/jumperProfile/WorkExperience'
import JumperEducation from '../../../modal/jumperProfile/JumperEducation'
import JumperCertificate from '../../../modal/jumperProfile/JumperCertificate'
import JumperReference from '../../../modal/jumperProfile/JumperReference'
import JumperIDdocument from '../../../modal/jumperProfile/JumperIDdocument'
import JumperLanguage from '../../../modal/jumperProfile/JumperLanguage'

export default function ProfileDetails() {
  return (
    <>
    <div className=" border rounded rounded-3 p-3">
          <div className=" w-100 rounded" style={{background:"#F4F3F5"}}>
            <div className="upload__box col-md-12 m-auto mb-3 ">
              <div className="p-3 w-100">
                <div className="upload__btn-box d-flex flex-column align-items-center">
                  <i className='bx bx-cloud-upload mb-4 p-3 back-yellow text-white text-22 full-border-radius'></i>
                  <label className="upload__btn col-md-2 m-auto back-till">
                    <p className="m-0 p-0 text-center">Upload images</p>
                    <input type="file" multiple="" data-max_length="20" className="upload__inputfile"/>
                  </label>
                </div>
                <div className="upload__img-wrap d-flex flex-wrap"></div>
              </div>
            </div>
          </div>
          <div className="d-flex p-3 mt-3 rounded align-items-center mb-3 justify-content-between" style={{background: "#F4F3F5"}}>
            <div className="" style={{color:"var(--text-main)"}}><strong>Work Experience</strong> </div>
            
            <div className="" style={{color:"var(--text-main)"}}><div className="" data-toggle="modal" ><i className='bx bx-plus-circle' style={{color:"#8C1D4B",fontSize:"35px"}}></i></div>
            </div>
          </div>

          <div className="p-3 mt-3 d-flex align-items-center justify-content-between rounded rounded-2 " style={{background:"#F4F3F5"}}>
            <div className="w-100" style={{color:"var(--text-main)"}}>
              <input type="email" className="w-100 border-0 " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="German - Spoken: L1 " style={{background: "#F4F3F5",height: "40px",color:"#000",fontSize:"16px"}}/>
            </div>
            <div className="" style={{color: "var(--text-main)"}}><div className="" data-toggle="modal" ><i className='bx bx-plus-circle' style={{color:"#8C1D4B",fontSize:"35px"}}></i></div>
            </div>
          </div>

          <div className="d-flex p-3 mt-3 rounded align-items-center mb-3 justify-content-between" style={{background:"#F4F3F5"}}>
            <div className="" style={{color:"var(--text-main)"}}><strong>Education</strong></div>
            
            <div className="" style={{color: "var(--text-main)"}}><div className="" data-toggle="modal" ><i className='bx bx-plus-circle' style={{color:"#8C1D4B",fontSize:"35px"}}></i></div>
            </div>
          </div>

          <div className="d-flex p-3 mt-3 rounded align-items-center mb-3 justify-content-between" style={{background:"#F4F3F5"}}>
            <div className="" style={{color:"var(--text-main)"}}><strong>Certificates and diplomas</strong></div>
            
            <div className="" style={{color:"var(--text-main)"}}><div className="" data-toggle="modal" ><i className='bx bx-plus-circle' style={{color:"#8C1D4B",fontSize:"35px"}}></i></div>
            </div>
          </div>

          <div className="d-flex p-3 mt-3 rounded align-items-center mb-3 justify-content-between" style={{background: "#F4F3F5"}}>
            <div className="" style={{color: "var(--text-main)"}}><strong>Employment references</strong> </div>
            
            <div className="" style={{color: "var(--text-main)"}}><div className="" data-toggle="modal" ><i className='bx bx-plus-circle' style={{color:"#8C1D4B",fontSize:"35px"}}></i></div>
            </div>
          </div>


          <div className="d-flex p-3 mt-3 rounded align-items-center mb-3 justify-content-between" style={{background: "#F4F3F5"}}>
            <div className="" style={{color: "var(--text-main)"}}><strong>Passport, ID, or Residential permit</strong> </div>
           
            <div className="" style={{color: "var(--text-main)"}}><div  className="" data-toggle="modal" ><i className='bx bx-plus-circle' style={{color:"#8C1D4B",fontSize:"35px"}}></i></div>
            </div>
          </div>
        </div>

        {/* <WorkExperience/> */}
        {/* <JumperEducation/> */}
        {/* <JumperCertificate/> */}
        {/* <JumperReference/> */}
        {/* <JumperIDdocument/> */}
        {/* <JumperLanguage/> */}
        </>
  )
}
