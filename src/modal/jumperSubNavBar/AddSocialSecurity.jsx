import React from 'react'
import { Modal } from 'react-bootstrap'

export default function AddSocialSecurity() {
  return (
    <Modal show centered size='xl'>
        <div className="addSocialSecurity" id="social_security" tabindex="-1" role="dialog" aria-labelledby="social_security" aria-hidden="true">
  <div className="modal-dialog" style={{maxWidth:"1000px"}}>
    <div className="m pb-3">
      <div className="modal-header border-0">
      
        <div className="text-center col-md-11">
          <h5 style={{color:"var(--text-main)"}}>Add social security details</h5>
        </div>
        <button type="button" style={{color:"var(--text-main)"}} className="close m-0 p-0 pl-3 w-100 text-left" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
        </button>
      </div>

      
      <div className="d-flex flex-wrap">
        <div className="col-md-8 col-sm-12 mb-2">
          <input type="text" className="rounded border-0 pl-4  w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="AHV number" style={{background:"var(--back-grey)", height:"40px",color:"#000",fontSize:"16px"}}/>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className=" text-right ps-5 rounded rounded-2 border" style={{height:"40px"}}>
             
            <select name="menu" id="meun-items" className="w-100 pl-4 " style={{background:"var(--back-grey)",border:"none",height:"40px",borderColor:"#000"}}>
              <option value="job profile">Marital status</option>
              <option value="html">Acute-care</option>
              <option value="css">Automative Assistant With Fedral VET Certificate </option>
              <option value="js">+655</option>
              <option value="c">+000</option>
            </select>
          </div>
        </div>

        <div className="d-flex flex-wrap ">
          <div className="col-md-7">
             <h6 className="mb-2">BVG Contributions (2nd Pillar)</h6>
             <p>You will be opted into BVG contributions automatically in the following cases:</p>
             <div className="d-flex align-items-center mb-2">
              <div className="dot mr-3" style={{background: "var(--back-grey)",height:"16px",width:"16px",borderRadius: "10px"}}></div>
              <p style={{fontSize:"13px"}} className="p-0 m-0">if a work contract is longer than three months,</p>
            </div>
            <div className="d-flex align-items-center mb-2">
              <div className="dot mr-3" style={{background:"var(--back-grey)",height:"16px",width:"16px",borderRadius:"10px"}}></div>
              <p style={{fontSize:"13px"}} className="p-0 m-0">if a work contract is longer than three months,</p>
            </div>
            <div className="d-flex align-items-center mb-2">
              <div className="dot mr-3" style={{background:"var(--back-grey)",height:"16px",width:"16px",borderRadius:"10px"}}></div>
              <p style={{fontSize:"13px"}} className="p-0 m-0">if a work contract is longer than three months,</p>
            </div>
            
          </div>

          <div className="col-md-5 text-right">
            <p style={{fontSize:"11px"}}>A portion of your wage will be contributed to the BVG fund. Coople will also contribute the same amount to your BVG fund. This will help you build up a retirement pension.</p>
            <div className="col-md-12 text-right mt-2">
              <input type="checkbox" name="send_newsletter" id="send_newsletter" value="yes"/>
                      <label htmlFor="send_newsletter" style={{fontSize: "11px"}}>Opt-in for BVG contributions</label>
                    </div>
         </div>
        </div>

        <div className="col-lg-12">
          <h6 className="mb-3 mt-3">Social support</h6>
       

          <div className="col-md-12 mt-3 p-0 ">
            <div className="col-md-12 d-flex">
                   <input type="checkbox" name="send_newsletter" id="send_newsletter" value="yes"/>
                    <label for="" className="ml-2 m-0">I am responsible for paying child maintenance</label>
                  </div>
                  <div className="col-md-12">
                    <p className="ml-4" style={{fontSize:"13px"}}>Let us know if you are currently receiving unemployment benefits. We will send you a “Zwischenverdienst” report monthly which you can present to the unemployment office. To know how the report looks like <span className="border-bottom" style={{color:"#000"}}>Download It Here.</span> </p>
                  </div>
                  </div>

          <div className="col-md-12 mt-3 p-0 ">
            <div className="col-md-12 d-flex">
                   <input type="checkbox" name="send_newsletter" id="send_newsletter" value="yes"/>
                    <label for="" className="ml-2 m-0">I receive unemployment benefits</label>
                  </div>
                  <div className="col-md-12">
                    <p className="ml-4" style={{fontSize:"13px"}}>Let us know if you are currently receiving unemployment benefits. We will send you a “Zwischenverdienst” report monthly which you can present to the unemployment office. To know how the report looks like <span className="border-bottom" style={{color:"#000"}}>Download It Here.</span> </p>
                  </div>
                  </div>
         
          <h6 className="mb-3 mt-3">Pension</h6>

          <div className="d-flex align-items-center mb-2">
            <div className="dot mr-3" style={{background:"var(--back-grey)",height:"16px",width:"16px",borderRadius:"10px"}}></div>
            <p style={{fontSize:"13px"}} className="p-0 m-0">I am not in early retirement and I do not receive disability benefits</p>
          </div>

          <div className="d-flex align-items-center mb-2">
            <div className="dot mr-3" style={{background:"var(--back-grey)",height:"16px",width:"16px",borderRadius:"10px"}}></div>
            <p style={{fontSize:"13px"}} className="p-0 m-0">I am retired or in early retirement and receive a pension If you’ve retired you only need to contribute to AHV (1st Pillar) if you earn more than 1400 CHF per month.</p>
          </div>

          <div className="d-flex align-items-center mb-2">
            <div className="dot mr-3" style={{background: "var(--back-grey)",height:"16px",width:"27px",borderRadius:"10px"}}></div>
            <p style={{fontSize:"13px"}} className="p-0 m-0">I have a disability and receive a pension from the DI (IV/spanI)
              If you are receiving a disability pension then you might not need to contribute to BVG (2nd Pillar). After selecting this option please remember to send us proof of your disability by Completing This Form</p>
          </div>

          <div className="d-flex flex-wrap align-items-center mt-3 mb-3">
            <div className="col-md-3 col-sm-12">
              <h6>Degree of disability (%) :</h6>
            </div>
            <div className="col-md-9 col-sm-12 d-flex p-0">
             <div className="col-md-8 col-sm-8"> <input type="text" className="rounded border-0 pl-4  w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0" style={{background:"var(--back-grey)", height:"40px",color:"#000",fontSize: "16px"}}/></div>
             <div className="col-md-4 d-flex col-sm-12 col-sm-4 p-0">
              <span style={{color:"#000;"}}><i className='bx bx-plus p-2 border rounded rounded-2 mr-3'></i></span>
              <span style={{color:"#000"}}> <i className='bx bx-minus p-2 border rounded rounded-2' ></i></span>
            </div>
            </div>
          </div>
        </div>
      </div>
    

      <div className="col-md-2 m-auto ">
        <button type="button" className="btn btn-primary w-100  back-till border-0">Save</button>
      </div>
    </div>
  </div>
</div>

    </Modal>
  )
}
