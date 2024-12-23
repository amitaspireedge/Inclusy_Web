import React from 'react'
import { Modal } from 'react-bootstrap'

export default function AddBankDetails() {
  return (
    <Modal show centered size='lg'>
        <div className="addbankdetails" id="bank_account" tabindex="-1" role="dialog" aria-labelledby="bank_account" aria-hidden="true">
        <div className="" style={{maxWidth:"1000px"}}>
        <div className=" pb-3">
        <div className="modal-header border-0">
      
        <div className="text-center col-md-11">
          <h5 style={{color:"var(--text-main)"}}>Add bank account details</h5>
        </div>
        <button type="button" style={{color:"var(--text-main)"}} className="close m-0 p-0 pl-3 w-100 text-left" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div className="col-md-12 col-sm-12">
        <input type="text" className="rounded  mt-4 pl-4 border w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="IBAN" style={{height:"40px",color:"#000",fontSize:"16px",borderColor:"#000"}}/>
      </div>
      <div className="col-md-12 col-sm-12">
        <input type="text" className="rounded  mt-4 pl-4 border w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Bank " style={{height:"40px",color:"#000",fontSize:"16px",borderColor:"#000"}}/>
      </div>
      <div className="d-flex flex-wrap">
        <div className="col-md-6 col-sm-12">
          <input type="text" className="rounded  mt-4 pl-4 border w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" style={{height:"40px",color:"#000",fontSize:"16px",borderColor:"#000"}}/>
        </div>
        <div className="col-md-6 col-sm-12">
          <input type="text" className="rounded  mt-4 pl-4 border w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name" style={{height:"40px",color:"#000",fontSize:"16px",borderColor:"#000"}}/>
        </div>
      </div>
      <div className="col-md-12 col-sm-12">
        <input type="text" className="rounded  mt-4 pl-4 border w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Address & number " style={{height:"40px",color:"#000",fontSize:"16px",borderColor:"#000"}}/>
      </div>
      <div className="d-flex flex-wrap">
        <div className="col-md-6 col-sm-12">
          <input type="text" className="rounded  mt-4 pl-4 border w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="PLZ" style={{height:"40px",color:"#000",fontSize:"16px",borderColor:"#000"}}/>
        </div>
        <div className="col-md-6 col-sm-12">
          <input type="text" className="rounded  mt-4 pl-4 border w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="City" style={{height:"40px",color:"#000",fontSize:"16px",borderColor:"#000"}}/>
        </div>
      </div>

      <div className="col-md-2 m-auto pt-3">
        <button type="button" className="btn btn-primary w-100  back-till border-0">Save</button>
      </div>
    </div>
  </div>
</div>
    </Modal>
  )
}
