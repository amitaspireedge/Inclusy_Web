import React from 'react'

export default function Payslip() {
  return (
    <div class="tab col-md-12 p-3 border mb-5 rounded rounded-2">
    <div className="tab-pane p-3" id="tabs-2" role="tabpanel">
    <h5 style={{color:"var(--text-main)"}}>PaySlips</h5>
    <div className="text-center mt-5 mb-5">
      <div className="p-3  m-auto rounded-circle" style={{width:"60px",background:"#00B38A"}}><i className='bx bx-wallet' style={{color:"#fff",fontSize:"26px",lineHeight:"normal"}} ></i></div>
      <h3 className="mt-3 mb-3">No payslips yet</h3>
      <p style={{color:"var(--text-main)"}}>Once you’ve started working, we’ll show your payslips here.</p>
    </div>
 </div> 
 </div>
  )
}
