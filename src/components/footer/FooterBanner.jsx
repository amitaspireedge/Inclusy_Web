import React from 'react'

export default function FooterBanner() {
  return (
    <div className="banner pt-5 pb-5 mt-5" style={{background:"var(--text-main)"}}>
        <div className="container">
        <div className="d-flex col-md-9 m-auto align-items-center flex-wrap">
        <div className="col-md-2 col-sm-12 mb-4">
        <img src="images/mobile.png"/>
        </div>
        <div className="col-md-8 col-sm-12 mb-3">
        <h4 style={{color:"#fff"}}>What are you waiting for?</h4>
        <p style={{color:"#fff"}}>Get the Inclusy Jobs app</p>
        </div>
        <div className="col-md-2 col-sm-12">
        <div className="d-block btn btn-primary border-0 pt-3 pb-3" style={{background: "#fff", color:"var(--text-main)"}}>
        <strong>Get The App</strong>
        </div>
        </div>
        </div>
        </div>
        </div>
  )
}
