import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import JumperInfo from '../../components/jumperinfo/JumperInfo'
import ProfileDetails from '../../subpages/jumper/profilesubpages/ProfileDetails'
import JumperJobProfile from '../../subpages/jumper/profilesubpages/JumperJobProfile'
import FooterBanner from '../../components/footer/FooterBanner'
import Payslip from '../../subpages/jumper/profilesubpages/Payslip'
import BankDetails from '../../subpages/jumper/profilesubpages/BankDetails'
import SocialSecurity from '../../subpages/jumper/profilesubpages/SocialSecurity'
import VideoRecording from '../../subpages/jumper/profilesubpages/VideoRecording'
import { Link, Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom'

export default function ProfileJumper() {
   const Navigate = useNavigate()





    return (

  


<>
<style type="text/css">
    {`.file {
    visibility: hidden;
    position: absolute;
    }
    /*collaps-arrow*/
.collapsible-link {
width: 100%;
position: relative;
text-align: left;
}

.collapsible-link::before {
content: "\f107";
position: absolute;
top: 50%;
right: 0.8rem;
transform: translateY(-50%);
display: block;
font-family: "FontAwesome";
font-size: 1.1rem;
}

.collapsible-link[aria-expanded="true"]::before {
content: "\f106";
}
    @media only screen and (max-width: 768px) {
    .pad-off{
    padding: 0 !important;
    }
    .browse {
    margin-top: 20px;
    }
    }
    .nav-tabs,.nav-tabs .nav-link {
  border: 0;
  }
  .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
  background-color: var(--yellow);
  color: #fff !important;
  }
 
  .nav-tabs .nav-link {
  border-radius: 5px;
  }
  .engagements .nav-item:hover::after {
  display: none;
  }

  @media only screen and (max-width: 575px) {
  .flex-xs-column-reverse{
   flex-direction: column-reverse;
  }
}`}
</style>
  






    <div className='profileJumper'>

        <div className="navbar">
            <Navbar/>
        </div>
        
        <div className="sub-navbar" style={{marginTop:"150px"}}>
        <div className="container mt-5">
        <ul className="nav nav-tabs border-0 d-flex justify-content-center" role="tablist">
		<li className="nav-item nav-item  col-sm-12 col-md-2 text-center mb-2 m-0 " onClick={()=>Navigate("/jumper/profile/job-profile")}>
			<span className="nav-link border w-100" data-toggle="tab" role="tab">Jumper Profile</span>
		</li>
		<li className="nav-item nav-item  col-sm-12 col-md-2 text-center mb-2  " onClick={()=>Navigate("/jumper/profile/payslip")}>
			<span className="nav-link border w-100" data-toggle="tab" role="tab">Payslips</span>
		</li>
        <li className="nav-item nav-item  col-sm-12 col-md-2 text-center mb-2  ">
			<span className="nav-link border w-100 " data-toggle="tab" role="tab" onClick={()=>Navigate("/jumper/profile/bank-details")}>Bank Account details</span>
		</li>
		<li className="nav-item nav-item  col-sm-12 col-md-2 text-center mb-2 m-0 ">
			<span className="nav-link border w-100" data-toggle="tab" role="tab" onClick={()=>Navigate("/jumper/profile/social-security_personal-details")}>Social Security</span>
		</li>
        <li className="nav-item nav-item  col-sm-12 col-md-2 text-center mb-2 m- ">
			<span className="nav-link border w-100 " data-toggle="tab" role="tab" onClick={()=>Navigate("/jumper/profile/video-recording")}>Video Recordings</span>
		</li>	
	    </ul>
        </div>
        </div>

        <div className="feed container d-flex flex-wrap mt-5 justify-content-center ">
        <div className="jumperinfo col-md-6 col-12 d-flex flex-wrap pr-5 pad-off" style={{padding:"20px"}}>
            <JumperInfo/>
        </div>
        <div className="profileSubPages col-12 col-md-6">
            <Routes>
                <Route path='/*' element={<ProfileDetails/>} />
                <Route path='/job-profile' element={<JumperJobProfile/>} />
                <Route path='/payslip' element={<Payslip/>} />
                <Route path='/bank-details' element={<BankDetails/>} />
                <Route path='/social-security_personal-details' element={<SocialSecurity/>} />
                <Route path='/video-recording' element={<VideoRecording/>} />
            </Routes>    
            <Outlet/>        
        </div>
        </div>

        <FooterBanner/>

        <div className="footer">
            <Footer/>
        </div>

      
    </div>
    </>
  )
}
