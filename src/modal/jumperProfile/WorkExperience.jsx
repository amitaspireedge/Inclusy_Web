import React from 'react'
import { Modal } from 'react-bootstrap'

export default function WorkExperience() {
  return (
    <Modal show onHide={()=>{}} size="lg">
        <Modal.Body>
        <div class="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
      <div class="modal-dialog" style={"max-width: 1000px"}>
        <div class="modal-content pb-3">
          <div class="modal-header border-0">
            <div class="w-100 ps-3">
              <button type="button" style="color: var(--text-main);" class="close m-0 p-0 text-center pl-3 w-100 text-left" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" style="color: var(--text-main);">&times;</span>
              </button>
            </div>
            <div class="text-center col-md-10">
              <h5 style="color: var(--text-main);">Work experience</h5>
            </div>
            <div class="col-md-1 text-right">
              <i class='bx bxs-trash' style="color: red;"></i>
            </div>
          </div>
          <div class="modal-body">
            <div class="d-flex flex-wrap">
              <div class="col-md-6 col-sm-12">
                <input type="text" class="rounded  mt-3 pl-2 border w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Company" style="height: 40px;color:#000;font-size: 16px;border-color: #000 !important"/>
              </div>
              <div class="col-md-6 col-sm-12">
                <input type="text" class="rounded  mt-3 pl-2 border w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Job Title" style="height: 40px;color:#000;font-size: 16px;border-color: #000 !important"/>
              </div>
            </div>
            <div class="col-md-12">
              <textarea class="rounded w-100 mt-3 p-3" id="exampleFormControlTextarea1" rows="3" style="height: 100px;border:1px solid #000" placeholder="Location"></textarea>
            </div>
            <div class="d-flex flex-wrap ">
              <div class="col-md-6 col-sm-12 pe-3 rounded mt-3 ">
                <div class=" text-right border ps-5 rounded" style="border-color: #000 !important;height: 40px;">
                  <select name="menu" id="meun-items" class="w-100 pl-2 " style="background: transparent;border:0;height: 40px;border-color: #000;">
                    <option disabled="" selected="">Employment</option>
                    <option value="html">+445</option>
                    <option value="css">+0</option>
                    <option value="js">+655</option>
                    <option value="c">+000</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6 col-sm-12 pe-3 rounded mt-3">
                <div class=" text-right border ps-5 rounded" style="border-color: #000 !important;height: 40px;">
                  <select name="menu" id="meun-items" class="w-100 pl-2 " style="background: transparent;border:0;height: 40px;border-color: #000;">
                    <option disabled="" selected="">Weekly Workload</option>
                    <option value="html">+445</option>
                    <option value="css">+0</option>
                    <option value="js">+655</option>
                    <option value="c">+000</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="d-flex align-items-center flex-wrap">
              <div class="col-md-4 col-sm-12 pe-3 ">
                <div class=" border rounded mt-3" style="border-color: #000 !important;height: 40px;">
                  <input type="date" class="form-control-sm w-100 p-3" style="background: transparent;border:0;height: 40px;border-color: #000;" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Start Date "/>
                </div>
              </div>
              <div class="col-md-4 col-sm-12">
                <div class=" border rounded mt-3" style="border-color: #000 !important;height: 40px;">
                  <input type="date" class="form-control-sm w-100 p-3" style="background: transparent;border:0;height: 40px;border-color: #000;" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="End Date "/>
                </div>
              </div>
              <div class="col-md-4 col-sm-12">
                <div class="mt-3">
                  <input type="checkbox" name="send_newsletter" id="send_newsletter" value="yes"/>
                  <label for="send_newsletter text-15 text-black" class="ml-2">I am currently working in this role</label>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-sm-12">
              <input type="email" class=" mt-3 pl-2 border w-100 rounded" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Responsibilities and accomplishments" style="height: 40px;color:#000;font-size: 16px;border-color: #000 !important"/>
            </div>
            <div class="col-md-12 col-sm-12 rounded mt-3">
              <div class=" text-right border rounded ps-5" style="border-color: #000 !important;height: 40px;">
                <select name="menu" id="meun-items" class="w-100 pl-2" style="background: transparent;border:0;height: 40px;border-color: #000;">
                  <option disabled="" selected="">Skills</option>
                  <option value="html">+445</option>
                  <option value="css">+0</option>
                  <option value="js">+655</option>
                  <option value="c">+000</option>
                </select>
              </div>
            </div>
            <div class="form-group col-md-12 mt-3">
              <input type="file" name="img[]" class="file"/>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-white" id="basic-addon1" style="border-color: #000 !important;"><i class="fas fa-paperclip"></i></span>
                </div>
                <input type="text" class="form-control bg-white border-left-0 p-0" disabled placeholder="Upload File" aria-label="Upload File" aria-describedby="basic-addon1" style="border-color: #000 !important;height: 40px;"/>
                <div class="input-group-append col-md-2  p-0">
                  <button class="browse w-100 text-center border-0" id="basic-addon2" style="height: 40px;color: #000;"><i class="fas fa-search"></i> Browse</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-2 m-auto">
            <button type="button" class="btn btn-primary w-100  back-till border-0">Save</button>
          </div>
        </div>
      </div>
        </div>
        </Modal.Body>

        <div class="col-md-2 m-auto">
            <button type="button" class="btn btn-primary w-100  back-till border-0">Save</button>
        </div>
      </Modal>
  )
}
