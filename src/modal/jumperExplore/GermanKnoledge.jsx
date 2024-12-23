import React from 'react'
import { Modal,Button, Form } from 'react-bootstrap'


export default function GermanKnoledge() {
  return (
    <Modal show onHide={()=>{}} size="lg" centered>

      <Modal.Body>
      <div className="d-flex ps-3 col-md-12 align-items-center justify-content-between mb-3">
          <div className="col-md-1">
            <a href="##" style={{ fontSize: '30px', color: '#000' }}>
              <i className="bx bx-chevron-left"></i>
            </a>
          </div>

          <div className="text-center col-md-9">
            <h4>What’s your knowledge of German?</h4>
            <p className="p-0 m-0">This job requires an Advanced level of German</p>
          </div>

          <Button variant="link" className="col-md-1 close m-0 p-0 text-center" >
            <span aria-hidden="true">&times;</span>
          </Button>
        </div>
        <div className="col-md-12 text-center">
        <div className="btn-group col-xs-12">
					      <div className="select">
					          <input type="checkbox" id="item_1"/>
					          <label className="border rounded-2 rounded pl-3 pr-3 mr-3 pt-2 pb-2" style={{color:"#000",fontSize:"18px",marginRight:"20px"}} htmlFor="item_1">None</label>
					      </div>
					      
					      <div className="select">
					          <input type="checkbox" id="item_2"/>
					          <label className="border rounded-2 rounded pl-3 pr-3 mr-3 pt-2 pb-2" style={{color:"#000",fontSize:"18px"}} htmlFor="item_2">Basic</label>
					      </div>
					      
					      <div className="select">
					          <input type="checkbox" id="item_3"/>
					          <label className="border rounded-2 rounded pl-3 pr-3 mr-3 pt-2 pb-2" style={{color:"#000",fontSize:"18px"}} htmlFor="item_3">Intermediate</label>
					      </div>
					      
					      <div className="select">
					          <input type="checkbox" id="item_4"/>
					          <label className="border rounded-2 rounded pl-3 pr-3 mr-3 pt-2 pb-2" style={{color:"#000",fontSize:"18px"}} htmlFor="item_4">Advanced</label>
					      </div>
					       <div className="select">
					          <input type="checkbox" id="item_5"/>
					          <label className="border rounded-2 rounded pl-3 pr-3 mr-3 pt-2 pb-2" style={{color:"#000",fontSize:"18px"}} htmlFor="item_4">Native</label>
					      </div>
                        </div>
        </div>

        <div className="col-md-2 m-auto pt-4">
          <Button variant="primary" className="w-100 back-till border-0">
            Continue
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}
