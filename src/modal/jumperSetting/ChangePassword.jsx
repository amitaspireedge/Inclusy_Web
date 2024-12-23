import React from 'react'
import { Modal } from 'react-bootstrap'

export default function ChangePassword() {
  return (
    <Modal show centered size='lg'>
        <div className="changePassword" id="change_password" tabindex="-1" role="dialog" aria-labelledby="change_password" >
         <div className="modal-dialog" style={{maxWidth:"1000px"}}>
        <div className="moda pb-3">
        <div className="modal-header border-0">
      
        <div className="text-center col-md-12">
          <h5 style={{color:"var(--text-main)"}}>Change Password</h5>
        </div>
     
      </div>

      <div className="col-md-12 col-sm-12">
        <input type="text" className="rounded  mt-4 pl-4 border w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Current Password" style={{height:"40px",color:"#000",fontSize:"16px",borderColor:"#000" }}/>
      </div>

      <div className="col-md-12 col-sm-12">
        <input type="password" className="rounded  mt-4 pl-4 border w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="New Password" style={{height:"40px",color:"#000",fontSize:"16px",borderColor:"#000" }}/>
      </div>
    
      <div className="col-md-12 col-sm-12">
        <input type="password" className="rounded  mt-4 pl-4 border w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Confirm New Password" style={{height:"40px",color:"#000",fontSize:"16px",borderColor:"#000" }}/>
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
