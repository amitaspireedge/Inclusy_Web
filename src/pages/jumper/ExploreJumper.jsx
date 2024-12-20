import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import JumperExploreTile from '../../components/jumperExplore/JumperExploreTile'
import JumperExploreTileHalf from '../../components/jumperExplore/JumperExploreTileHalf'
import JumperExploreDetails from '../../components/jumperExplore/JumperExploreDetails'
import Steps from '../../modal/jumperExplore/Steps'
import UploadCv from '../../modal/jumperExplore/UploadCv'
import GermanKnoledge from '../../modal/jumperExplore/GermanKnoledge'
import Direction from '../../modal/jumperExplore/Direction'
import ApplicationSubmit from '../../modal/jumperExplore/ApplicationSubmit'


export default function ExploreJumper() {
  return (
    <>
    <style type='text/css'>
      {`.nav-tabs,.nav-tabs .nav-link {
  border: 0;,
  }
  .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
  background-color: var(--yellow) !important;
  color: #fff !important;
  }
 
  .nav-tabs .nav-link {
  border-radius: 5px;
  }
  .engagements .nav-item:hover::after {
  display: none;
  outline:none
  }
  input:focus-visible {
  outline: none;
} `}
    </style>



    <div className='explorepage'>
        <div className="navbar ">
            <Navbar/>
        </div>

        <div class="container" style={{marginTop:"150px"}}>
        <div className="d-flex flex-wrap">
        <div className="col-md-9 col-12 p-0">
        <ul className="nav nav-tabs mb-3" role="tablist">
		    <li className="nav-item col-12 col-md-3 text-center mb-2 m-0 p-0">
		    <span className="nav-link active p-2 w-100 " data-toggle="tab"  role="tab">Jumper positions</span>
		    </li>
		    <li className="nav-item col-12 col-md-3 text-center " style={{marginLeft:"15px"}}>
			  <span className="nav-link p-2 w-100 " data-toggle="tab" role="tab">Permanent positions</span>
		    </li>
		    </ul>
        </div>
        <div className="col-md-3 col-12 p-3" style={{borderRadius: "30px",border: "1px solid #000"}}>
        <div className="search d-flex align-items-center justify-content-between">
        <input type="text"placeholder="Search" className="border-0 w-100 "/>
        <i className='bx bx-search' ></i>
        </div>
        </div>
        </div>
        </div>

        {/* <div className="exploreJumperFeed container px-4 mt-5">
        <JumperExploreTile/>
        <JumperExploreTile/>
        <JumperExploreTile/>
        <JumperExploreTile/>
        <JumperExploreTile/>
        </div> */}

        <div className="exploreJumperFeed d-flex container px-4 mt-5">
        <JumperExploreTileHalf/>
        <JumperExploreDetails/>
        </div>

        <div className="pagination"></div>

        <div className="footer">
            <Footer/>
        </div>
    </div>


    <div className="modals w-full">
      {/* <Steps/> */}
      {/* <UploadCv/> */}
      {/* <GermanKnoledge/> */}
      {/* <Direction/> */}
      <ApplicationSubmit/>
    </div>
    </>
  )
}
