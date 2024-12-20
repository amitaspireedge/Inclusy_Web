import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import JumperExploreTileHalf from '../../components/jumperExplore/JumperExploreTileHalf'

export default function EngagementJumper() {
  return (


    <>
    <style type="text/css">
    {`.nav-tabs,.nav-tabs .nav-link {
    border: 0;
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
    }`}
 </style>




    <div className='engagementJumper'>
        <div className="navbar">
            <Navbar/>
        </div>

        <div className="container" style={{marginTop:"150px"}} >
        <ul class="nav nav-tabs" role="tablist">
		<li class="nav-item  col-sm-12 col-md-1 text-center mb-3 ml-0" style={{marginLeft:"0"}}>
		    <span class="nav-link active p-2 w-100 " data-toggle="tab" role="tab" style={{background: "var(--grey)"}}>Applied</span>
		</li>
		<li class="nav-item col-sm-12 col-md-2 text-center m-0">
			<span class="nav-link p-2 w-100 " data-toggle="tab" role="tab" style={{background: "var(--grey)"}}>Unsuccessful Applications</span>
		</li>
	    </ul>
        </div>

        <div className="container">
            <JumperExploreTileHalf/>
        </div>

        <div className="footer">
            <Footer/>
        </div>
    </div>
    </>
  )
}
