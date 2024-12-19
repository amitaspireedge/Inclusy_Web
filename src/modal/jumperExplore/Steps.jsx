import React from 'react'
import { Modal,Button } from 'react-bootstrap'

export default function Steps() {



    
  return (
    <Modal show onHide={()=>{}} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Step Process</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div id="steps" className="d-flex">
          {/* Step 1 */}
          <div className="ps-3 pe-2 information" data-desc="Listing information text-center">
            <p className="text-center">
              <strong className="text-center">
                <span style={{ fontSize: '30px', color: '#2F4858' }}>
                  Step <strong style={{ color: '#8C1D4B' }}> 1</strong>
                </span>
              </strong>
            </p>
            <p className="text-center">Apply</p>
            <p className="text-center">
              Your CV will be sent to the company for review. If necessary, you may be asked to provide additional
              information for your profile.
            </p>
          </div>
          <div className="mt-3" style={{ width: '40%', background: '#8C1D4B', height: '1px' }}></div>

          {/* Step 2 */}
          <div className="ps-3 pe-2 information" data-desc="Listing information text-center">
            <p className="text-center">
              <strong className="text-center">
                <span style={{ fontSize: '30px', color: '#2F4858' }}>
                  Step <strong style={{ color: '#8C1D4B' }}> 2</strong>
                </span>
              </strong>
            </p>
            <p className="text-center">Screen</p>
            <p className="text-center">
            The company will review your skills, experience, and relevant qualifications.
            </p>
          </div>
          <div className="mt-3" style={{ width: '40%', background: '#8C1D4B', height: '1px' }}></div>

          {/* Step 3 */}
          <div className="ps-3 pe-2 information" data-desc="Listing information text-center">
            <p className="text-center">
              <strong className="text-center">
                <span style={{ fontSize: '30px', color: '#2F4858' }}>
                  Step <strong style={{ color: '#8C1D4B' }}> 3</strong>
                </span>
              </strong>
            </p>
            <p className="text-center">Match</p>
            <p className="text-center">
            You’ve been matched! Once you both agree, you'll start working together, with a possible call to discuss details if needed.
            </p>
          </div>
        </div>

        {/* Continue Button */}
        <div className="col-md-2 m-auto pt-4">
          <Button variant="primary" className="w-100 border-0">
            Continue
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}
