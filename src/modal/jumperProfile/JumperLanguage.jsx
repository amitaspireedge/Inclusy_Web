import React from 'react'
import { Modal } from 'react-bootstrap'

export default function JumperLanguage() {
  return (
    <Modal show centered size='lg'>
             <div className="modal-header border-0 d-flex justify-content-between">
        <div className="" style={{textAlign: "left"}}>
          <button type="button" style={{color: "var(--text-main)"}} className="close m-0 p-0 text-center w-100" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="text-center col-md-10">
          <h5 style={{color: "var(--text-main)"}}>Languages</h5>
        </div>
        <div className="">
          <span style={{color: "var(--text-main)"}} className="text-decoration-none">+ Add More</span>
        </div>
      </div>
      <div className="modal-body">
   
        <div id="accordionExample" className="accordion mt-5" >

        
          <div className="card border-0 bg-transparent pb-3 col-md-12">
            <div id="headingOne" className="card-header bg-transparent rounded rounded-3 p-2" style={{border:"1px solid #000"}}>
            
                <button type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" className=" btn btn-link text-decoration-none collapsible-link p-0 collapsed" style={{fontSize: "20px",color: "#000;"}}>German</button>
           
            </div>
            <div id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample" className="collapse rounded rounded-3 mt-3" style={{background: "var(--bit)"}}>
               
              <div className="col-md-12 col-sm-12 rounded mt-3 mb-4">
                <label className="mb-2" style={{color: "#fff"}}>Spoken Level </label>
                <div className=" text-right border rounded ps-5" style={{borderColor: "#fff",height: "40px;"}}>
                  
                  <select name="menu" id="meun-items" className="w-100 pl-2" style={{background:"transparent",border:"0",height:"40px",borderColor:"#fff",color:"#fff"}}>
                    <option style={{color:"#000"}} disabled="">L1 (mother Tongue)</option>
                    <option style={{color:"#000"}} value="html">A1 (Beginner)</option>
                    <option style={{color:"#000"}} value="css">A2 (Elementary)</option>
                    <option style={{color:"#000"}} value="js">B1 (Beginner)</option>
                  </select>
                </div>
              </div>

              <div className="col-md-12 col-sm-12 rounded mt-3 mb-4">
                <label className="mb-2" style={{color:"#fff"}}>Written Level </label>
                <div className=" text-right border rounded ps-5" style={{borderColor:"#fff",height:"40px"}}>
                  
                  <select name="menu" id="meun-items" className="w-100 pl-2" style={{background: "transparent",border:"0",height:"40px",borderColor:"#fff", color:"#fff"}}>
                    <option style={{color:"#000"}} disabled="" selected="">L1 (mother Tongue)</option>
                    <option style={{color:"#000"}} value="html">A1 (Beginner)</option>
                    <option style={{color:"#000"}} value="css">A2 (Elementary)</option>
                    <option style={{color:"#000"}} value="js">B1 (Beginner)</option>
                  </select>
                </div>
              </div>

              
            </div>
          </div>
  
        
          <div className="card border-0 bg-transparent pb-3 col-md-12">
            <div id="headingTwo" className="card-header bg-transparent rounded rounded-3 p-2" style={{border:"1px solid #000"}}>
            
                <button type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" className="btn btn-link text-decoration-none collapsed collapsible-link p-0" style={{fontSize: "20px",color: "#000"}}>Italian</button>
             
            </div>
            <div id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample" className="collapse  rounded rounded-3 mt-3" style={{background: "var(--bit)"}}>
              <div className="col-md-12 col-sm-12 rounded mt-3 mb-4">
                <label className="mb-2" style={{color:"#fff"}}>Spoken Level </label>
                <div className=" text-right border rounded ps-5" style={{borderColor:"#fff",height:"40px"}}>
                  
                  <select name="menu" id="meun-items" className="w-100 pl-2" style={{background:"transparent",border:"0",height:"40px",borderColor:"#fff",color:"#fff"}}>
                    <option style={{color:"#000"}} disabled="" selected="">L1 (mother Tongue)</option>
                    <option style={{color:"#000"}} value="html">A1 (Beginner)</option>
                    <option style={{color:"#000"}} value="css">A2 (Elementary)</option>
                    <option style={{color:"#000"}} value="js">B1 (Beginner)</option>
                  </select>
                </div>
              </div>

              <div className="col-md-12 col-sm-12 rounded mt-3 mb-4">
                <label className="mb-2" style={{color:"#fff"}}>Written Level </label>
                <div className=" text-right border rounded ps-5" style={{borderColor:"#fff",height:"40px"}}>
                  
                  <select name="menu" id="meun-items" className="w-100 pl-2" style={{background:"transparent",border:"0",height:"40px",borderColor:"#fff",color:"#fff"}}>
                    <option style={{color:"#000"}} disabled="" selected="">L1 (mother Tongue)</option>
                    <option style={{color:"#000"}} value="html">A1 (Beginner)</option>
                    <option style={{color:"#000"}} value="css">A2 (Elementary)</option>
                    <option style={{color:"#000"}} value="js">B1 (Beginner)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>


          <div className="card border-0 bg-transparent pb-3 col-md-12">
            <div id="headingThree" className="card-header bg-transparent rounded rounded-3 p-2" style={{border:"1px solid #000"}}>
            
                <button type="button" data-toggle="collapse" data-target="#collapsThree" aria-expanded="false" aria-controls="headingThree" className="btn btn-link text-decoration-none collapsed collapsible-link p-0" style={{fontSize:"20px",color:"#000"}}>French</button>
             
            </div>
            <div id="collapsThree" aria-labelledby="headingThree" data-parent="#accordionExample" className="collapse  rounded rounded-3 mt-3" style={{background:"var(--bit)"}}>
              <div className="col-md-12 col-sm-12 rounded mt-3 mb-4">
                <label className="mb-2" style={{color:"#fff"}}>Spoken Level </label>
                <div className=" text-right border rounded ps-5" style={{borderColor:"#fff" ,height:"40px"}}>
                  
                  <select name="menu" id="meun-items" className="w-100 pl-2" style={{background:"transparent",border:"0",height:"40px",borderColor:"#fff",color:"#fff"}}>
                    <option style={{color:"#000"}} disabled="" selected="">L1 (mother Tongue)</option>
                    <option style={{color:"#000"}} value="html">A1 (Beginner)</option>
                    <option style={{color:"#000"}} value="css">A2 (Elementary)</option>
                    <option style={{color:"#000"}} value="js">B1 (Beginner)</option>
                  </select>
                </div>
              </div>

              <div className="col-md-12 col-sm-12 rounded mt-3 mb-4">
                <label className="mb-2" style={{color:"#fff"}}>Written Level </label>
                <div className=" text-right border rounded ps-5" style={{borderColor:"#fff",height:"40px"}}>
                  
                  <select name="menu" id="meun-items" className="w-100 pl-2" style={{background:"transparent",border:"0",height:"40px",borderColor:"#fff",color:"#fff"}}>
                    <option style={{color:"#000"}} disabled="" selected="">L1 (mother Tongue)</option>
                    <option style={{color:"#000"}} value="html">A1 (Beginner)</option>
                    <option style={{color:"#000"}} value="css">A2 (Elementary)</option>
                    <option style={{color:"#000"}} value="js">B1 (Beginner)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2 m-auto">
          <button type="button" className="btn btn-primary w-100  back-till border-0">Save</button>
        </div>

   

      </div>
    </Modal>
  )
}
