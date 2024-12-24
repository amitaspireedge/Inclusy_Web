import React from 'react'
import FooterBanner from '../components/footer/FooterBanner'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

export default function PageNotFount() {
  return (
    <div className="pagenotfound mh-100">
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="feed container display-1" style={{marginTop:"100px"}}>
            <span>404 </span>
            <span>Page Not Found!</span>
        </div>
        <div className="footer position-absolute bottom-0 w-100">
            <FooterBanner/>
            <Footer/>
        </div>
    </div>
  )
}
