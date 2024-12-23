import React from 'react'
import AddSocialSecurity from '../../../modal/jumperSubNavBar/AddSocialSecurity'
import AddPersonalDetails from '../../../modal/jumperSubNavBar/AddPersonalDetails'

export default function SocialSecurity() {
  return (
    <>
    <div className="tab col-md-12 p-3 border mb-5 rounded rounded-2">
    <div className="tab-pane " id="tabs-4" role="tabpanel">
  <div className=" p-3">
  <h5 style={{color:"var(--text-main)"}}>Social security</h5>
  <div className="text-center mt-2 mb-5 rounded border rounded-2 p-3" style={{borderColor:"#000"}}>
    <div className="col-md-1 m-auto"><img src="images/security.png"/></div>
    <h3 className="mt-3 mb-3">Add your social security details</h3>
    <p style={{color:"var(--text-main)"}}>This helps us make sure you are taxed correctly and accrue the right pension.</p>
    <div className="col-md-4 m-auto">
      <span data-toggle="modal" data-target="#social_security" className="btn btn-primary w-100  back-till border-0">Add Social Security Info</span>
    </div>
  </div>
 
  </div>
  <div className="p-3 ">
  <h5 style={{color:"var(--text-main)"}}>Personal Details</h5>
  <div className="text-center mt-2 mb-5 rounded rounded-2 border p-3" style={{borderColor:"#000"}}>
    <div className="col-md-1 m-auto"><div className="col-md-1 m-auto"><img src="images/details.png"/></div></div>
    <h3 className="mt-3 mb-3">Add Personal details</h3>
    <p style={{color:"var(--text-main)"}}>This helps us make sure you are taxed correctly and accrue the right pension.</p>
    <div className="col-md-4 m-auto">
      <span data-toggle="modal" data-target="#personal_info" className="btn btn-primary w-100  back-till border-0">Add Personal Info</span>
    </div>
  </div>
  
</div>
</div>
    </div>



    {/* <AddSocialSecurity/> */}
    <AddPersonalDetails/>
    </>
  )
}
