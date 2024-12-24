import React from 'react'
import ChangePassword from '../../../modal/jumperSetting/ChangePassword'
import LogOut from '../../../modal/jumperSetting/LogOut'

export default function Account() {
  return (


    <>
    <div class="tab-pane active  p-3 border mb-5 rounded rounded-2" id="tabs-1" role="tabpanel">
	   <div class="d-flex">
      <div class=" col-md-12 rounded mb-3 p-0">
        <div class="text-center" style={{color:"var(--text-main)"}}><h5 class="m-0" style={{color:"var(--text-main)"}}>Account Setting</h5></div>
        <div class="col-md-12 col-sm-12">
          <input type="email" class="rounded  mt-4 pl-4 border w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" style={{height:"40px",color:"#000",fontSize:"16px",borderColor:"#000"}}/>
        </div>
        <div class="col-md-12 col-sm-12 mt-4">
          <div class="d-flex align-items-center justify-content-between rounded rounded-2 border" style={{borderColor:"#000"}}>
            <div class="col-md-11 p-0" style={{color:"var(--text-main)"}}>
              <input type="email" class="w-100 border-0 pl-4 rounded rounded-2 " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" style={{height:"40px",color:"#000",fontSize:"16px"}}/>
            </div>
            <div class="p-0 col-md-1 text-right pr-3 pt-1"> <i class="bx bxs-pencil" style={{color:"#5F6368",fontSize:"25px"}}></i></div>
          </div>
        </div>

        <div class="col-md-12 col-sm-12 pe-3 rounded mt-4 ">
          <div class=" text-right border ps-5 rounded" style={{borderColor:"#000",height:"40px"}}>
            <select name="menu" id="meun-items" class="w-100 pl-4 " style={{background:"transparent",border:"none",height:"40px",borderColor:"#000"}}>
              <option value="job profile">Active</option>
              <option value="html">Active</option>
              <option value="css">Deactive </option>
            </select>
          </div>
        </div>
      </div>
     </div>
   <div class="d-flex col-md-6 m-auto pt-5 pb-3">
     <div class="col-md-6 ">
      <button type="button" class="btn btn-primary w-100  back-till border-0" data-toggle="modal" data-target="#change_password">Change Password</button>
    </div>
     <div class="col-md-6 ">
      <button type="button" class="btn btn-primary w-100  back-till border-0" data-toggle="modal" data-target="#logout">Log-Out</button>
    </div>
  </div>
   </div>

{/* <ChangePassword/> */}
{/* <LogOut/> */}

</>
  )
}
