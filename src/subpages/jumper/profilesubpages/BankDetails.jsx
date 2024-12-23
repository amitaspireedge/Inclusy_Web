import React from 'react'
import AddBankDetails from '../../../modal/jumperSubNavBar/AddBankDetails'

export default function BankDetails() {
  return (
    
    
    <>
    <div className="tab col-md-12 p-3 border mb-5 rounded rounded-2">
      <div className="tab-pane mb-5 p-3" id="tabs-3" role="tabpanel">
  <h5 style={{color:"var(--text-main)"}}>Bank account details</h5>
  <div className="text-center mt-5 mb-5">
    <div className="col-md-1 m-auto rounded-circle"><i className='bx bxs-bank' style={{color:"#00B38A",fontSize:"50px",lineHeight:"normal"}} ></i></div>
    <h3 className="mt-3 mb-3">Add your bank account details</h3>
    <p style={{color:"var(--text-main)"}}>You’ll receive payments from us after you complete shifts.</p>
  </div>
  <div className="col-md-4 m-auto">
    <span data-toggle="modal" data-target="#bank_account" className="btn btn-primary w-100  back-till border-0">Add Bank Account Details</span>
  </div>
    </div>
    </div>


    {/* <AddBankDetails/> */}
    </>

  )
}
