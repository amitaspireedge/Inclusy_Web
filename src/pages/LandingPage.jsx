import React from 'react'

export default function LandingPage() {
  return (



<>
    <style>{`
 	.form-control{
	border: 1px solid #000;
	font-size: 20px;
	color: #000;
	margin-bottom: 20px;
}

.form-control::placeholder{
	color: #000;
	font-size: 20px;
}`}
 </style> 


    <div className="card login-form">
	<div className="card-body">
		    <div className="col-md-4 mb-4 m-auto pb-5 "><img src="images/logo.png" alt='' className="logo-img"/></div>
	

		    <div className="col-5 col-md-3 col-xs-6  m-auto pt-5 mb-3 text-center p-0 " style={{marginTop: "60px"}}>
			<div className="pt-5 pb-5 rounded-circle col-md-12 m-auto p-0" style={{background: "var(--bit)",color: "#fff"}}><i className="bx bx-log-in" style={{fontSize: "50px",lineHeight:"normal"}}></i></div>
			<div className="p-2 w-100 rounded rounded-3 mt-4 d-block" style={{background: "#CFA716", color: "#fff"}}>Login / Register</div>
		  </div>
    </div>
	</div>
    </>
  )
}
