import React from 'react'
import Account from '../../subpages/jumper/settingsubpages/Account'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import AboutUs from '../../subpages/jumper/settingsubpages/AboutUs'
import Legal from '../../subpages/jumper/settingsubpages/Legal'

export default function SettingJumper() {
  return (



    <>

<style type="text/css">
{` .nav-tabs,.nav-tabs .nav-link {
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





    <div className='engagementJumper'>
    <div className="navbar">
        <Navbar/>
    </div>
    <div class="main-panel mt-5 pt-5 engagements">
    <div class="container mt-5">
    <ul class="nav nav-tabs border-0 d-flex justify-content-center" role="tablist">
		<li class="nav-item nav-item col-sm-12 col-md-2 text-center mb-2 m-0 ">
			<span class="nav-link border w-100 active" data-toggle="tab" role="tab">Account</span>
		</li>
		<li class="nav-item nav-item  col-sm-12 col-md-2 text-center mb-2 m-0 ">
			<span class="nav-link border w-100" data-toggle="tab" role="tab">About Us</span>
		</li>
        <li class="nav-item nav-item  col-sm-12 col-md-2 text-center mb-2 m-0 ">
			<span class="nav-link border w-100 " data-toggle="tab" role="tab">Legal</span>
		</li>
	</ul>
    

    {/* setting subpages */}

    <div class="mt-5">
	<div class="col-xl-12 col-lg-12 p-0 ">
	<div class="tab-content col-md-8 m-auto">
    {/* <Account/> */}
    {/* <AboutUs/> */}
    <Legal/>



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
