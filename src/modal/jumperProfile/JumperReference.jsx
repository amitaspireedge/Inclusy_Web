import React from 'react'
import { Modal } from 'react-bootstrap'

export default function JumperReference() {
  return (
   <Modal show centered size='lg'>
        <div className="jumperreference" id="references" tabindex="-1" role="dialog" aria-labelledby="references" aria-hidden="true">
      <div className="" style={{maxWidth: "1000px"}}>
      <div className="modal-content pb-3">
      <div className="modal-header border-0">
        <div className="" style={{textAlign:"left"}}>
          <button type="button" style={{color:"var(--text-main)"}} className="close m-0 p-0 text-center w-100" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="text-center col-md-11 pr-5">
          <h5 style={{color:"var(--text-main)"}}>Add reference letter</h5>
        </div>
      </div>
      <div className="modal-body">
      <div className=" w-100 rounded" style={{background:"#F4F3F5"}}>
        <div className="upload__box col-md-12 m-auto mb-3 ">
          <div className="p-3 w-100">
            <div className="upload__btn-box d-flex flex-column align-items-center">
              <i className="bx bx-cloud-upload mb-4 p-3 back-yellow text-white text-22 full-border-radius"></i>
              <label className=" col-md-2 m-auto">
                <p className="m-0 p-0 text-center"><strong style={{cursor:"pointer"}}>Reference Letter</strong> </p>
                <input type="file" multiple="" data-max_length="20" className="upload__inputfile"/>
              </label>
            </div>
            <div className="upload__img-wrap d-flex flex-wrap"></div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
   </Modal>
  )
}
