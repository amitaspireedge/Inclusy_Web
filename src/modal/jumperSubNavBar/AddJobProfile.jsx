import React from 'react'
import { Modal } from 'react-bootstrap'

export default function AddJobProfile() {
  return (
    <Modal show centered size='lg'>
        <div className="addJobProfile" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
      <div className="" style={{maxWidth:"1000px"}}>
        <div className="modal-content pb-3">
          <div className="modal-header border-0">
            <div className=" ps-3">
              <button type="button" style={{color:"var(--text-main)"}} className="close m-0 p-0 pl-3 w-100 text-left" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="text-center pr-5 w-100">
              <h5 >Add job profile</h5>
            </div>
            
          </div>
          <div className="modal-body">
         
            <div className="col-md-12 col-sm-12 pe-3 rounded mt-3 ">
              
              <div className=" text-right border ps-5 rounded" style={{borderColor: "#000",height:"40px"}}>
             
                <select name="menu" id="meun-items" className="w-100 pl-4 " style={{background:"transparent",border:"0",height:"40px",borderColor:"#000;"}}>
                  <option value="job profile">job profile</option>
                  <option value="html">Acute-care</option>
                  <option value="css">Automative Assistant With Fedral VET Certificate </option>
                  <option value="js">+655</option>
                  <option value="c">+000</option>
                </select>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 pe-3 rounded mt-3 mb-3 ">
              
              <div className=" text-right border ps-5 rounded" style={{borderColor: "#000",height:"40px"}}>
             
                <select name="menu" id="meun-items" className="w-100 pl-4 " style={{background:"transparent",border:"0",height:"40px",borderColor:"#000"}}>
                  <option value="Experience">Experience</option>
                  <option value="html">5 Year+</option>
                  <option value="css">Fresher</option>
                  <option value="js">7 Year+</option>
                  <option value="c">7 Year+</option>
                </select>
              </div>
            </div>
            <div className="col-md-2 m-auto">
              <button type="button" className="btn btn-primary w-100  back-till border-0">Save</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </Modal>
  )
}
