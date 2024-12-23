import React from 'react'
import { Modal } from 'react-bootstrap'

export default function JumperIDdocument() {
  return (
    <Modal show centered size='lg'>
        <div className="jumjper_id_document" id="permit" tabindex="-1" role="dialog" aria-labelledby="permit" aria-hidden="true">
      <div className="" style={{maxWidth:"1000px"}}>
      <div className="modal-content pb-3">
      <div className="modal-header border-0">
        <div className="" style={{textAlign:"left"}}>
          <button type="button" style={{color: "var(--text-main)"}} className="close m-0 p-0 text-center w-100" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="text-center col-md-11 pr-5">
          <h5 style={{color:"var(--text-main)"}}>Passport, ID, or Residental permit</h5>
        </div>
      </div>
      <div className="modal-body">

        <div className="col-md-12 col-sm-12 rounded mt-3">
          <div className=" text-right border rounded ps-5" style={{borderColor:" #000",height:" 40px"}}>
            <select name="menu" id="meun-items" className="w-100 pl-2" style={{background: "transparent",border:"0",height:"40px",borderColor:"#000"}}>
              <option disabled="">Skills</option>
              <option value="html">aaa</option>
              <option value="css">bbb</option>
              <option value="js">ccc</option>
              <option value="c">ddd</option>
            </select>
          </div>
        </div>

        <div className="d-flex flex-wrap mt-4">
          <div className="col-md-6 col-sm-12">
            <div className=" w-100 rounded border" style={{borderColor:" #000"}}>
              <div className="upload__box col-md-12 m-auto mb-3 ">
                <div className=" p-2 w-100">
                  <div className="text-left col-md-12">Photo of the Front</div>
                  <div className="upload__btn-box d-flex flex-column align-items-center mt-5">
                    <i className="bx bx-cloud-upload mb-4 p-3 back-yellow text-white text-22 full-border-radius"></i>
                    <label className=" col-md-12">
                      <p className="m-0 p-0 text-center"><strong style={{cursor: "pointer"}}>Photo of the front Side Of The Passport </strong> </p>
                      <input type="file" multiple="" data-max_length="20" className="upload__inputfile"/>
                    </label>
                  </div>
                  <div className="upload__img-wrap d-flex flex-wrap"></div>
                </div>
              </div>
            </div>
            <p className="mt-3">PNG, JPG, JPEG supported (up to 20MB)</p>
          </div>

          <div className="col-md-6 col-sm-12">
            <div className=" w-100 rounded border" style={{borderColor: "#000"}}>
              <div className="upload__box col-md-12 m-auto mb-3 ">
                <div className=" p-2 w-100">
                  <div className="text-left col-md-12">Photo of the Front</div>
                  <div className="upload__btn-box d-flex flex-column align-items-center mt-5">
                    <i className="bx bx-cloud-upload mb-4 p-3 back-yellow text-white text-22 full-border-radius"></i>
                    <label className=" col-md-12">
                      <p className="m-0 p-0 text-center"><strong style={{cursor:"pointer"}}>Photo of the Back Side Of The Passport</strong> </p>
                      <input type="file" multiple="" data-max_length="20" className="upload__inputfile"/>
                    </label>
                  </div>
                  <div className="upload__img-wrap d-flex flex-wrap"></div>
                </div>
              </div>
            </div>
            <p className="mt-3">PNG, JPG, JPEG supported (up to 20MB)</p>
          </div>
        </div>

      </div>
      </div>
      </div>
      </div>
    </Modal>
  )
}
