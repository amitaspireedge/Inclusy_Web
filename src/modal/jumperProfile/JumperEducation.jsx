import React from 'react'
import { Modal } from 'react-bootstrap'

export default function JumperEducation() {
  return (
   <Modal show centered size="lg">
     <div className="" id="education" tabindex="-1" role="dialog" aria-labelledby="education" aria-hidden="true">
      <div className="" style={{maxWidth:"1000px"}}>
        <div className="modal-content pb-3">
          <div className="modal-header border-0">
            <div className="col-md-1" style={{textAlign:"left"}}>
              <button type="button" style={{color:"var(--text-main)"}} className="close m-0 p-0 text-center w-100" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="text-center col-md-10">
              <h5 style={{color:"var(--text-main)"}}>Education</h5>
            </div>
            <div className="col-md-1 text-right">
              <i className='bx bxs-trash' style={{color:"red"}}></i>
              
            </div>
          </div>
          <div className="modal-body">
            <div className="col-md-12 col-sm-12">
              <input type="text" className="rounded  mt-3 pl-2 border w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="School" style={{height:"40px",color:"#000",fontSize:"16px",borderColor: "#000" }}/>
            </div>
            <div className="col-md-12 col-sm-12">
              <input type="text" className="rounded  mt-3 pl-2 border w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Degree, field of study" style={{height:"40px",color:"#000",fontSize:"16px",borderColor: "#000"}}/>
            </div>
            <div className="col-md-12">
              <textarea className="rounded w-100 mt-3 p-3" id="exampleFormControlTextarea1" rows="3" style={{height: "100px",border:"1px solid #000", resize:"none"}} placeholder="Location"></textarea>
            </div>
            <div className="d-flex align-items-center mt-3 ">
              <div className="col-md-6 pe-3">
                <div className=" border rounded" style={{borderColor:"#000",height:"40px"}}>
                  <input type="date" className="form-control-sm w-100 p-3" style={{background: "transparent",border:"0",height:"40px",borderColor:"#000"}} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Start Date "/>
                </div>
              </div>
              <div className="col-md-6">
                <div className=" border rounded" style={{borderColor:"#000",height:"40px"}}>
                  <input type="date" className="form-control-sm w-100 p-3" style={{background: "transparent",border:"0",height:"40px",borderColor:"#000"}} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="End Date "/>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 rounded mt-3">
              <div className=" text-right border rounded ps-5" style={{borderColor:"#000",height:"40px"}}>
                <select name="menu" id="meun-items" className="w-100 pl-2" style={{background: "transparent",border:"0",height:"40px",borderColor:"#000"}}>
                  <option disabled="" selected="">Skills</option>
                  <option value="html">+445</option>
                  <option value="css">+0</option>
                  <option value="js">+655</option>
                  <option value="c">+000</option>
                </select>
              </div>
            </div>
            <div className="form-group col-md-12 mt-3">
              <input type="file" name="img[]" className="file"/>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-white" id="basic-addon1" style={{borderColor:"#000"}}><i className="fas fa-paperclip"></i></span>
                </div>
                <input type="text" className="form-control bg-white border-left-0 p-0" disabled placeholder="Upload File" aria-label="Upload File" aria-describedby="basic-addon1" style={{borderColor:"#000",height: "40px;"}}/>
                <div className="input-group-append col-md-2  p-0">
                  <button className="browse w-100 text-center border-0" id="basic-addon2" style={{height:"40px",color:" #000"}}><i className="fas fa-search"></i> Browse</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 m-auto ">
            <button type="button" className="btn btn-primary w-100  back-till border-0">Save</button>
          </div>
        </div>
      </div>
    </div>
   </Modal>
  )
}
