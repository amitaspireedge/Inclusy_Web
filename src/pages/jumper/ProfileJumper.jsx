import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import JumperInfo from '../../components/jumperinfo/JumperInfo'
import ProfileDetails from '../../subpages/jumper/profileSubPages/ProfileDetails'

export default function ProfileJumper() {
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
        <div class="container mt-5">
        <ul class="nav nav-tabs border-0 d-flex justify-content-center" role="tablist">
		<li class="nav-item nav-item  col-sm-12 col-md-2 text-center mb-2 m-0 ">
			<span class="nav-link border w-100" data-toggle="tab" role="tab">Jumper Profile</span>
		</li>
		<li class="nav-item nav-item  col-sm-12 col-md-2 text-center mb-2  ">
			<span class="nav-link border w-100" data-toggle="tab" role="tab">Payslips</span>
		</li>
        <li class="nav-item nav-item  col-sm-12 col-md-2 text-center mb-2  ">
			<span class="nav-link border w-100 " data-toggle="tab" role="tab">Bank Account details</span>
		</li>
		<li class="nav-item nav-item  col-sm-12 col-md-2 text-center mb-2 m-0 ">
			<span class="nav-link border w-100" data-toggle="tab" role="tab">Social Security</span>
		</li>
        <li class="nav-item nav-item  col-sm-12 col-md-2 text-center mb-2 m- ">
			<span class="nav-link border w-100 " data-toggle="tab" role="tab">Video Recordings</span>
		</li>	
	    </ul>
        </div>
        </div>

        <div className="feed container d-flex flex-wrap mt-5 justify-content-center ">
        <div className="jumperinfo col-md-6 col-12 d-flex flex-wrap pr-5 pad-off" style={{padding:"20px"}}>
            <JumperInfo/>
        </div>
        <div className="profileSubPages col-12 col-md-6">
            <ProfileDetails/>
        </div>
        </div>

        <div class="banner pt-5 pb-5 mt-5" style={{background:"var(--text-main)"}}>
        <div class="container">
        <div class="d-flex col-md-9 m-auto align-items-center flex-wrap">
        <div class="col-md-2 col-sm-12 mb-4">
        <img src="images/mobile.png"/>
        </div>
        <div class="col-md-8 col-sm-12 mb-3">
        <h4 style={{color:"#fff"}}>What are you waiting for?</h4>
        <p style={{color:"#fff"}}>Get the Inclusy Jobs app</p>
        </div>
        <div class="col-md-2 col-sm-12">
        <div class="d-block btn btn-primary border-0 pt-3 pb-3" style={{background: "#fff", color:"var(--text-main)"}}>
        <strong>Get The App</strong>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div className="footer">
            <Footer/>
        </div>

      
    </div>
    </>
  )
}
