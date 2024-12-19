import React from 'react'
import { Modal,Button } from 'react-bootstrap'


export default function UploadCv() {
  return (
    <Modal show onHide={()=>{}} size="lg" centered>

      <Modal.Body>
      <div className="d-flex ps-3 col-md-12 align-items-center justify-content-between mb-3">
          <div className="col-md-1">
            <span style={{ fontSize: '30px', color: '#000' }}>
              <i className="bx bx-chevron-left"></i>
            </span>
          </div>

          <div className="text-center col-md-9">
            <h4>Upload Your CV</h4>
            <span
              className="p-0 m-0 text-decoration-none"
              style={{ borderBottom: '1px solid #000', color: '#000' }}
            >
              How To Create Impactful CV
            </span>
          </div>

          <Button variant="link" className="col-md-1 close m-0 p-0 text-center">
            <span aria-hidden="true" className=''>&times;</span>
          </Button>
        </div>
        <div className="w-100 rounded">
          <div className="upload__box col-md-12 m-auto mb-3">
            <div className="p-3 w-100">
              <div className="upload__btn-box d-flex flex-column align-items-center">
                <i
                  className="bx bx-cloud-upload mb-4 p-3 rounded-circle"
                  style={{ background: '#DDDDDD', color: 'var(--text-main)', fontSize: '50px' }}
                ></i>
                <label className="col-md-8 m-auto">
                  <p className="m-0 p-0 text-center">
                    <strong style={{ cursor: 'pointer' }}>
                      Boost your chances of getting hired and help us verify your experience with a great CV. Please
                      upload a PDF, DOC or DOCX file.
                    </strong>
                  </p>
                  <input type="file" multiple="" data-max_length="20" className="upload__inputfile" />
                </label>
              </div>
              <div className="upload__img-wrap d-flex flex-wrap"></div>
            </div>
          </div>
        </div>

        <div className="d-flex col-md-6 m-auto pt-5 pb-3">
          <div className="col-md-6">
            <Button variant="primary" className="w-100 back-till border-0">
              Upload
            </Button>
          </div>
          <div className="col-md-6">
            <Button variant="link" className="w-100 bg-transparent" style={{ color: 'var(--text-main)' }}>
              I’ll Do It later
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}
