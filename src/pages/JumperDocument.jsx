import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

export default function JumperDocument() {
  return (





    <div classNameName='jumperdocument'>

        <div classNameName="navbar">
            <Navbar/>
        </div>

        <div className="main-panel mt-5 pt-5">
        <div className="container">

        <div className="upload__box col-md-8 m-auto">
        <h3 className="mb-4 text-25">Upload CV</h3>
        <div className=" back-grey p-3 w-100">
     
        <div className="upload__btn-box d-flex flex-column align-items-center">
        <i className='bx bx-cloud-upload mb-4 p-3 back-yellow text-white text-22 full-border-radius'></i>
        <label className="upload__btn col-md-2 m-auto back-till">
          <p className="m-0 p-0">Upload images</p>
          <input type="file" multiple="" data-max_length="20" className="upload__inputfile" />
        </label>
        </div>

        <div className="upload__img-wrap"></div>
        </div>
        </div>

        <div className="up load__box col-md-8 m-auto">
        <h3 className="mb-4 text-25">Certificate Or Diploma</h3>
        <div className=" back-grey p-3 w-100">
     
        <div className="upload__btn-box d-flex flex-column align-items-center">
        <i className='bx bx-cloud-upload mb-4 p-3 back-yellow text-white text-22 full-border-radius'></i>
        <label className="upload__btn col-md-2 m-auto back-till">
          <p className="m-0 p-0">Upload images</p>
          <input type="file" multiple="" data-max_length="20" className="upload__inputfile"/>
        </label>
        </div>

        <div className="upload__img-wrap"></div>
        </div>
        </div>

        <div className="upload__box col-md-8 m-auto">
        <h3 className="mb-4 text-25">Job Reference</h3>
        <div className=" back-grey p-3 w-100">
     
        <div className="upload__btn-box d-flex flex-column align-items-center">
        <i className='bx bx-cloud-upload mb-4 p-3 back-yellow text-white text-22 full-border-radius'></i>
        <label className="upload__btn col-md-2 m-auto back-till">
          <p className="m-0 p-0">Upload images</p>
          <input type="file" multiple="" data-max_length="20" className="upload__inputfile"/>
        </label>
        </div>

        <div className="upload__img-wrap"></div>
        </div>
        </div>
        </div>
        </div>

        <div classNameName="">
            <Footer/>
        </div>

    </div>
  )
}
