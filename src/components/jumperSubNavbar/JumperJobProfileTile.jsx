import React from 'react'

export default function JumperJobProfileTile() {
  return (
    <div className='jumperJobProfile'>
      <div className="col-md-12 rounded rounded-2 d-flex p-3 flex-wrap" style={{background:"#F4F3F5"}}>
         <div className="col-md-10 p-0 col-sm-12">
           <h5 className="mb-4">Acute-care (foreign degrees) · Foreign degree</h5>
           <span>Under review. Please <span style={{color: "var(--bit)"}} className="border-bottom ml-2"> Upload Your CV</span></span>
         </div>

         <div className="col-md-2 p-0 col-sm-12 text-right">
              <div className="d-flex align-items-center mb-2 justify-content-end">
                <div className="dot mr-3" style={{background:"var(--yellow)",height:"16px",width:"16px",borderRadius:"10px"}}></div>
                <p style={{color:"var(--bit)",fontSize:"22px"}} className="p-0 m-0">In Review</p>
              </div>
              <i className="bx bxs-trash" style={{color:"red",fontSize:"22px"}}></i>
         </div>
      </div>
    </div>
  )
}
