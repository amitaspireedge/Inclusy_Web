import React from 'react'

export default function Login() {
  return (











    

    <>
    {/* Inline <style> tag in the return statement */}
    <style>
        {`
          .form-control {
            border: 1px solid #000;
            font-size: 20px;
            color: #000;
            margin-bottom: 20px;
          }
          .form-control::placeholder {
            color: #000;
            font-size: 20px;
          }
        `}
      </style>


    <div className="card login-form border-0">
	<div className="card-body border-0">
		<div className="col-md-4 mb-4 m-auto">
        <img src="../images/logo.png" alt='' className="logo-img"/>
        </div>
		<div className="d-flex align-items-center mt-5 justify-between ">
			<div className="col-8 col-md-10 ">
				<h3 className="card-title text-left margin-off dark-text-color">
          <strong>SIGN IN WITH INCLUSY</strong>
        </h3>
			</div>
			<div className="col-4 col-md-2 d-flex justify-end ">
			 <select name="menu" id="meun-items" className=''>
                <option disabled >Select Cource</option>
                <option value="html">German</option>
                <option value="css">German</option>
                <option value="js">German</option>
                <option value="c">C German</option>
            </select>
			</div>
		</div>
	
		<div className="card-text mt-5 margin-off">
			
			{/* <div className="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div>  */}
			<form className="" >
				{/* <!-- to error: add className "has-danger" --> */}
				<div className="form-group mb-5">
					<input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
				</div>
				<div className="form-group">
					<input type="password" className="form-control form-control-sm" id="exampleInputPassword1" placeholder="Password" />
					<span style={{float:"right"}} classNameName="text-black pt-3 text-15">Forgot password?</span>
				</div>
				<div className="col-md-3  p-0 pt-5 m-auto">
                <button type="submit" className=" col-12 btn btn-primary border-0 pt-3 pb-3 text-15" style={{background:"#CFA716"}}>
                <strong>Continue</strong> 
                </button>
        </div>
				<div className="col-md-12 text-center mt-5 ">
				  <input type="checkbox" name="send_newsletter" id="send_newsletter" value="yes" className='' />
          <label htmlFor="send_newsletter" className=' text-15 text-black' style={{ marginLeft: '10px' }} >Keep Me Signed In</label>
        </div>
				<div className="sign-up mt-3">
					 <span className="dark-text-color ">Create A Company Account</span>
				</div>
				
			</form>
		</div>

</div>
    </div>
    </>
  )
}
