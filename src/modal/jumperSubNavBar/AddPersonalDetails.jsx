import React from 'react'
import { Modal } from 'react-bootstrap'

export default function AddPersonalDetails() {
  return (
    <Modal show centered size='xl'>
        <div class="addPersonalDetails" id="personal_info" tabindex="-1" role="dialog" aria-labelledby="personal_info" aria-hidden="true">
  <div class="modal-dialog" style={{maxWidth:"1000px"}}>
    <div class=" pb-3">
      <div class="modal-header border-0">
      
        <div class="text-center col-md-11">
          <h5 style={{color:"var(--text-main)"}}>Add Personal details</h5>
        </div>
        <button type="button" style={{color:"var(--text-main)"}} className="close m-0 p-0 pl-3 w-100 text-left" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="d-flex flex-wrap">
        <div class="col-md-6 col-sm-12">
          <input type="text" class="rounded  mt-4 pl-4 border w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Title" style={{height:"40px",color:"#000",fontSize:"16px",borderColor:"#000"}}/>
        </div>
        <div class="col-md-6 col-sm-12">
          <input type="text" class="rounded  mt-4 pl-4 border w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Pronounce" style={{height:"40px",color:"#000",fontSize:"16px",borderColor:"#000"}}/>
        </div>
      </div>
      
      <div class="d-flex flex-wrap ">
       <div class="col-md-6 col-sm-12 mt-4">
        <div class="d-flex align-items-center justify-content-between rounded rounded-2 " style={{background:"#F4F3F5"}}>
          <div class="pt-1 pb-1 " style={{color:"var(--text-main)"}}>
            <input type="email" class="w-100 border-0 pl-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" style={{background:"#F4F3F5",height:"40px",color:"#000",fontSize:"16px"}}/>
          </div>
          <div class=" pr-4"> <i class="bx bxs-pencil" style={{color:"#5F6368",fontSize:"25px"}}></i></div>
        </div>
      </div>

      <div class="col-md-6 col-sm-12 mt-4">
        <div class="d-flex align-items-center justify-content-between rounded rounded-2 " style={{background:"#F4F3F5"}}>
          <div class="pt-1 pb-1 " style={{color:"var(--text-main)"}}>
            <input type="email" class="w-100 border-0 pl-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name" style={{background:"#F4F3F5",height:"40px",color:"#000",fontSize:"16px"}}/>
          </div>
          <div class=" pr-4"> <i class="bx bxs-pencil" style={{color:"#5F6368",fontSize:"25px"}}></i></div>
        </div>
      </div>

      </div>


      <div class="d-flex flex-wrap ">
        <div class="col-md-6 col-sm-12 mt-4">
         <div class="d-flex align-items-center justify-content-between rounded rounded-2 " style={{background:"#F4F3F5"}}>
           <div class="pt-1 pb-1 " style={{color:"var(--text-main)"}}>
             <input type="email" class="w-100 border-0 pl-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="DD.MM.YYYY" style={{background:"#F4F3F5",height:"40px",color:"#000",fontSize:"16px"}}/>
           </div>
          
         </div>
       </div>
 
       <div class="col-md-6 col-sm-12 mt-4">
         <div class="d-flex align-items-center justify-content-between rounded rounded-2 " style={{background:"#F4F3F5"}}>
           <div class="pt-1 pb-1 " style={{color:"var(--text-main)"}}>
             <input type="email" class="w-100 border-0 pl-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Sex" style={{background:"#F4F3F5",height:"40px",color:"#000",fontSize:"16px"}}/>
           </div>
           
         </div>
       </div>
 
       </div>




      <div class="d-flex flex-wrap">
        <div class="col-md-6 col-sm-12">
          <input type="text" class="rounded  mt-4 pl-4 border w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="address" style={{height:"40px",color:"#000",fontSize:"16px",borderColor:"#000"}}/>
        </div>
        <div class="col-md-6 col-sm-12 pe-3 rounded mt-3 ">
              
          <div class=" text-right border ps-5 rounded" style={{borderColor:"#000",height:"40px"}}>
         
            <select name="menu" id="meun-items" class="w-100 pl-4 " style={{background:"transparent",border:"none",height:"40px",borderColor:"#000"}}>
              <option value="job profile">City</option>
              <option value="html">aaa</option>
              <option value="css">bbb </option>
              <option value="js">ccc</option>
              <option value="c">ddd</option>
            </select>
          </div>
        </div>
      </div>

      <div class="d-flex flex-wrap">
        <div class="col-md-6 col-sm-12">
          <input type="text" class="rounded  mt-4 pl-4 border w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="PLZ" style={{height:"40px",color:"#000",fontSize:"16px",borderColor:"#000"}}/>
        </div>
        <div class="col-md-6 col-sm-12 pe-3 rounded mt-3 ">
              
          <div class=" text-right border ps-5 rounded" style={{borderColor:"#000",height:"40px"}}>
         
            <select name="menu" id="meun-items" class="w-100 pl-4 " style={{background:"transparent",border:"none",height:"40px",borderColor:"#000"}}>
              <option value="job profile">Country</option>
              <option value="html">aaa</option>
              <option value="css">bbb </option>
              <option value="js">ccc</option>
              <option value="c">ddd</option>
            </select>
          </div>
        </div>
      </div>

      <div class="d-flex flex-wrap">
        <div class="col-md-6 col-sm-12 pe-3 rounded mt-3 ">
              
          <div class=" text-right border ps-5 rounded" style={{borderColor:"#000",height:"40px"}}>
         
            <select name="menu" id="meun-items" class="w-100 pl-4 " style={{background:"transparent",border:"none",height:"40px",borderColor:"#000"}}>
              <option value="job profile">Home Town</option>
              <option value="html">aaa</option>
              <option value="css">bbb </option>
              <option value="js">ccc</option>
              <option value="c">ddd</option>
            </select>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 pe-3 rounded mt-3 ">
              
          <div class=" text-right border ps-5 rounded" style={{borderColor:"#000",height:"40px"}}>
         
            <select name="menu" id="meun-items" class="w-100 pl-4 " style={{background:"transparent",border:"none",height:"40px",borderColor:"#000"}}>
              <option value="job profile">Residence Permit</option>
              <option value="html">aaa</option>
              <option value="css">bbb </option>
              <option value="js">ccc</option>
              <option value="c">ddd</option>
            </select>
          </div>
        </div>
      </div>

      <div class="d-flex flex-wrap">
        <div class="col-md-6 col-sm-12 pe-3 rounded mt-3 ">
              
          <div class=" text-right border ps-5 rounded" style={{borderColor:"#000",height:"40px"}}>
            <select name="menu" id="meun-items" class="w-100 pl-4 " style={{background:"transparent",border:"none",height:"40px",borderColor:"#000"}}>
              <option value="job profile">Nationality</option>
              <option value="html">aaa</option>
              <option value="css">bbb </option>
              <option value="js">ccc</option>
              <option value="c">ddd</option>
            </select>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <input type="text" class="rounded  mt-4 pl-4 border w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Marital Status Since" style={{height:"40px",color:"#000",fontSize:"16px",borderColor:"#000"}}/>
        </div>
      </div>


      <div class="d-flex flex-wrap">
        <div class="col-md-6 col-sm-12 pe-3 rounded mt-3 ">
              
          <div class=" text-right border ps-5 rounded" style={{borderColor:"#000",height:"40px"}}>
         
            <select name="menu" id="meun-items" class="w-100 pl-4 " style={{background:"transparent",border:"none",height:"40px",borderColor:"#000"}}>
              <option value="job profile">Marital Status</option>
              <option value="html">aaa</option>
              <option value="css">bbb </option>
              <option value="js">ccc</option>
              <option value="c">ddd</option>
            </select>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 pe-3 rounded mt-3 ">
              
          <div class=" text-right border ps-5 rounded" style={{borderColor:"#000",height:"40px"}}>
         
            <select name="menu" id="meun-items" class="w-100 pl-4 " style={{background:"transparent",border:"0",height:"40px",borderColor:"#000"}}>
              <option value="job profile">Living In Cohabitation</option>
              <option value="html">aaa</option>
              <option value="css">bbb </option>
              <option value="js">ccc</option>
              <option value="c">ddd</option>
            </select>
          </div>
        </div>
      </div>

      <div class="col-md-12 d-flex align-items-center mt-3 mb-3">
        <h6 class="mr-4">Languages</h6>
               <div class="mr-4"> 
                    <input type="checkbox" name="send_newsletter" id="send_newsletter" />
                     <label for="" style={{fontSize: "14px"}}>German</label>
              </div>
              <div class="mr-4"> 
                <input type="checkbox" name="send_newsletter" id="send_newsletter" value="yes"/>
                 <label for="" style={{fontSize: "14px"}}>Italian</label>
          </div>
          <div class="mr-4"> 
            <input type="checkbox" name="send_newsletter" id="send_newsletter" value="yes"/>
             <label for="" style={{fontSize: "14px"}}>Spanish</label>
      </div>
      <div class="mr-4"> 
        <input type="checkbox" name="send_newsletter" id="send_newsletter" value="yes"/>
         <label for="" style={{fontSize: "14px"}}>French</label>
  </div>
  <div class="mr-4"> 
    <input type="checkbox" name="send_newsletter" id="send_newsletter" value="yes"/>
     <label for="" style={{fontSize: "14px"}}>English</label>
</div>

              
       </div>

      <div class="col-md-2 m-auto ">
        <button type="button" class="btn btn-primary w-100  back-till border-0">Save</button>
      </div>
    </div>
  </div>
</div>

    </Modal>
  )
}
