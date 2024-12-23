import React from 'react'
import { Modal,Button } from 'react-bootstrap'


export default function Direction() {
  return (
    <Modal show onHide={()=>{}} size="lg" aria-labelledby="directions-modal" centered>
      
      <Modal.Body>
      <div className="d-flex ps-3 col-md-12 align-items-center justify-content-between mb-3 w-100">
          <div className="col-md-1">
          <span style={{ fontSize: '30px', color: '#000' }}>
              <i className="bx bx-chevron-left"></i>
            </span>
          </div>

          <div className="text-center col-md-9">
            <h4>Directions</h4>
          </div>

          <div variant="link" className="col-md-1 p-0 m-0 text-center cursor-pointer"  aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </div>
        </div>
        <div className="modal-body">
          <ul variant="tabs" className="mb-3">
            <li className="col-sm-12 col-md-3 text-center mb-2 m-0 p-0">
              <div eventKey="transit" className="p-2 w-100 d-flex justify-content-center align-items-center">
                <i className="bx bx-train mr-2" style={{ fontSize: '24px', color: 'grey' }} />
                <span>Transit</span>
              </div>
            </li>
            <li className="col-sm-12 col-md-3 text-center m-0">
              <div eventKey="driving" className="p-2 w-100 d-flex justify-content-center align-items-center">
                <i className="bx bx-bus " style={{ fontSize: '24px', color: 'grey' }}  />
                <span>Driving</span>
              </div>
            </li> 
          </ul>

          <div>
            <div eventKey="transit">
              <div className="d-flex align-items-center pb-3">
                <div className="col-md-11 d-flex p-0">
                  <i className='bx bx-location-plus mr-2' style={{ fontSize: '22px' }}  />
                  <p className="m-0 p-0">Flughafenstraße 1-3, Hamburg, 22335</p>
                </div>
                <div className="col-md-1 p-0">
                  <span variant="link" style={{ fontSize: '12px', color: '#8C1D4B' }}>
                    Your Address
                  </span>
                </div>
              </div>
              <div style={{ borderBottom: '1px solid #000' }}></div>

              <div className="d-flex align-items-center pt-3">
                <i className='bx bx-location-plus mr-2' style={{ fontSize: '22px' }} />
                <p className="m-0 p-0">Flughafenstraße 1-3, Hamburg, 22335</p>
              </div>

              <textarea className="form-control mb-3 border mt-5" id="exampleFormControlTextarea1" placeholder="Flughafenstraße 1-3, Hamburg, 22335" rows="3" style={{height:"100px", resize:"none"}}></textarea>


              <div className="col-md-12 d-flex justify-content-end p-0">
                <div className="col-md-2 p-0 pt-2 d-flex justify-content-end">
                  <Button variant="primary" className="back-till border-0">
                    Save
                  </Button>
                </div>
              </div>

              <div className="d-flex mt-3 justify-content-between">
                <div className="col-md-9 p-0">
                  <p className="p-0" style={{ color: '#000', fontSize: '12px' }}>
                    Change Address
                  </p>
                </div>
                <div className="col-md-3 p-0">
                  <p className="p-0 w-100" style={{ color: 'red', fontSize: '12px' }}>
                    Travel time: 9 h 51 min (859.7 km)
                  </p>
                </div>
              </div>

              <div className="col-md-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=..."
                  width="100%"
                  height="200"
                  style={{ border: '0' }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div eventKey="driving" className="rounded-lg p-3">
              <h5>Driving</h5>
            </div>
          </div>
        </div>

        <div className="col-md-4 m-auto pt-4">
          <Button variant="primary" className="w-100 back-till border-0">
            Send Application
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}
