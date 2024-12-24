import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navigation-wrap bg-light start-header start-style">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-md navbar-light">
          
            <span className="navbar-brand"><img src="/images/logo.png" alt=""/></span>  
            
            <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse text-center align-items-center" id="navbarSupportedContent">
              <ul className="navbar-nav  ">
                <NavLink to='/jumper/explore' className={({ isActive }) => isActive ? "nav-item pl-4 pl-md-0 ml-0 ml-md-4 text-dark active" : "nav-item pl-4 pl-md-0 ml-0 ml-md-4 text-dark"}>
                <li>
                  <span className="nav-link dropdown-toggle" data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false">Explore</span>
                </li>
                </NavLink>
                <NavLink to='/jumper/engagement' className={({ isActive }) => isActive ? "nav-item pl-4 pl-md-0 ml-0 ml-md-4 text-dark active" : "nav-item pl-4 pl-md-0 ml-0 ml-md-4 text-dark"}>
                <li>
                  <a className="nav-link dropdown-toggle" data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false">Engagements</a>
                </li>
                </NavLink>
                <NavLink to='/jumper/profile' className={({ isActive }) => isActive ? "nav-item pl-4 pl-md-0 ml-0 ml-md-4 text-dark active" : "nav-item pl-4 pl-md-0 ml-0 ml-md-4 text-dark"}>
                <li>
                  <span className="nav-link dropdown-toggle" data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false" >Profile</span>
                </li>
                </NavLink>
                <NavLink to='/jumper/setting/account' className={({ isActive }) => isActive ? "nav-item pl-4 pl-md-0 ml-0 ml-md-4 active text-dark" : "nav-item pl-4 pl-md-0 ml-0 ml-md-4 text-dark"}>
                <li>
                  <span className="nav-link dropdown-toggle" data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false" >Settings</span>
                </li>
                </NavLink>
                <NavLink to='' className={({ isActive }) => isActive ? "nav-item pl-4 pl-md-0 ml-0 ml-md-4 text-dark" : "nav-item pl-4 pl-md-0 ml-0 ml-md-4 text-dark"}>
                <li>
                  <span className="nav-link dropdown-toggle" data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false" >Feedbacks</span>
                </li>
                </NavLink>
               
              </ul>
            </div>

            <div className="right-bar">
               <ul className="d-flex align-items-center">
              <li className="mr-3"><select name="menu" id="meun-items" className="bg-transparent border-0">
              <option disabled="">German</option>
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
