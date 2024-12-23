import React from 'react'
import { Modal } from 'react-bootstrap'

export default function LogOut() {
  return (
    <Modal show centered size='lg'>
        <div className="logOut" id="logout" tabindex="-1" role="dialog" aria-labelledby="change_password" >
  <div className="mod" style={{maxWidth: "1000px"}}>
    <div className="moda pb-5">
      <div className="modal-header border-0">
      
        <div className="text-center col-md-12">
          <h5 style={{color:"var(--text-main)"}}>Log-Out</h5>
        </div>


        
      </div>
      
      <div className="col-md-12 text-center mt-3 mb-3">
        <i className='bx bx-log-out' style={{color:"var(--till)",fontSize:"50px",lineHeight:"normal"}}></i>
        <h5>Are You Sure You Want To<br/>
          Log-Out?</h5>
      </div>

     <div className="d-flex col-md-4 m-auto">
      <div className="col-md-6 m-auto pt-3 ">
        <button type="button" className="btn btn-primary w-100 border-0" style={{backgroundColor:"#E4E4E4",color:"#000"}}>Cancel</button>
      </div>
      <div className="col-md-6 m-auto pt-3 ">
        <button type="button" className="btn btn-primary w-100 border-0" style={{background: "var(--till)"}}>Log-Out</button>
      </div>
    </div>
    </div>
  </div>
</div>

    </Modal>
  )
}
