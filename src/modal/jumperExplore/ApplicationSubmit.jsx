import React from 'react'
import { Modal,Button } from 'react-bootstrap'


export default function ApplicationSubmit() {
  return (
    <Modal show centered size="md" >
      <Modal.Body>
        <div variant="link" className="col-md-12 p-0 m-0 w-full cursor-pointer"  aria-label="Close">
            <span aria-hidden="true" className=''>&times;</span>
        </div>
        <div class="modal-body">
        <div className="p-3 w-full d-flex justify-content-center align-items-center">
        <i className="bi bi-check-circle-fill" style={{ fontSize: '60px', color: '#1dd1a1' }}></i> 
        </div>
        <div className="content-box d-flex flex-column justify-content-center align-items-center text-center mx-auto ">
        <div className="content" style={{}}>We've Sent Your Application</div>
        <div className="content">You Will Be Contected By Email Or Phone Once Your Application Has Been Reviewed.</div>
        <div className="content">Best Of Luck!</div>
        </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}
