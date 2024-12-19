import React from 'react'

export default function Navbar() {
  return (
    <div className="navigation-wrap bg-light start-header start-style">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-md navbar-light">
          
            <span className="navbar-brand"><img src="images/logo.png" alt=""/></span>  
            
            <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse text-center align-items-center" id="navbarSupportedContent">
              <ul className="navbar-nav  ">
                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                  <span className="nav-link dropdown-toggle" data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false">Explore</span>
              </li>
               
                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                  <a className="nav-link dropdown-toggle" data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false">Engagements</a>
                </li>
                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                  <span className="nav-link" >Profile</span>
                </li>
                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                  <span className="nav-link" >Settings</span>
                </li>
                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                  <span className="nav-link" >Feedbacks</span>
                </li>
               
              </ul>
            </div>

            <div className="right-bar">
               <ul className="d-flex align-items-center">
              <li className="mr-3"><select name="menu" id="meun-items" className="bg-transparent border-0">
              <option disabled="" selected="">German</option>
              <option value="html">German</option>
              <option value="css">German</option>
              <option value="js">German</option>
              <option value="c">C German</option>
            </select></li>
                <li style={{marginLeft:"10px"}}>Support</li>
              </ul>
                 
            </div>
            
          </nav>    
        </div>
      </div>
    </div>
  </div>
  )
}
