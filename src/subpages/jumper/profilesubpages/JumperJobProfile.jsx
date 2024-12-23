import React from 'react'
import JumperJobProfileTile from '../../../components/jumperSubNavbar/JumperJobProfileTile'
import AddJobProfile from '../../../modal/jumperSubNavBar/AddJobProfile'

export default function JumperJobProfile() {
  return (

    <>
    <div className='jumperjobprofile'>
      <div className="tab-content col-md-12 p-3 border mb-5 rounded rounded-2">
      <div className="tab-pane active" id="tabs-1" role="tabpanel">
      <div className="d-flex">
      <div className="d-flex col-md-12 rounded align-items-center mb-3 justify-content-between p-0">
        <div className="" style={{color:"var(--text-main)"}}><h5 className="m-0" style={{color:"var(--text-main);"}}>Job Profiles</h5></div>
        <div className="" style={{color:"var(--text-main)"}}><span className="" data-toggle="modal" data-target="#basicModal"><i className='bx bxs-plus-circle' style={{color:"var(--yellow)",fontSize:"35px"}}></i></span>
        </div>
      </div>
      </div>
        <p>We'll tailor your search to these job profiles, and send you new job alerts in-app and by email.</p>
        <JumperJobProfileTile/>
        <JumperJobProfileTile/>
        <JumperJobProfileTile/>
        <JumperJobProfileTile/>
        <JumperJobProfileTile/>
      </div>
      </div>
    </div>

    
{/* addjobProfile modal */}
{/* <AddJobProfile/> */}
</>
  )
}
