import React from 'react'

export default function Registration() {
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
}
select{
    width:100px;
    outline: none;
    border:0;
    padding: 1rem;
    font-size: 1.1rem;
    border-radius: 0.5rem;
    box-shadow: 0;
    cursor: pointer;
    background: transparent;
}
.contact-number select {
  padding: 0;
}
.gender .input-radio.on:checked {
    background-color: var(--bit);

}
@media only screen and (max-width: 767px) {
  h3{
  font-size: 22px;
  text-align: center;
  line-height: 30px;
  }
  .number select{
    width: 70px;
  }
  
}`}
</style>



<div className="card login-form create-account">
      <div className="card-body">
        <div className="col-md-4 mb-4 m-auto"><img src="/images/logo.png" alt='' className=" logo-img"/></div>
        <div className="d-flex align-items-center mt-5 flex-wrap">
          <div className="col-md-9 text-left col-sm-12">
            <h3 className="card-title margin-off dark-text-color text-uppercase"><strong>Create Your Jumper Account</strong></h3>
          </div>
          <div className="col-md-3 text-right col-sm-12">
            <select name="menu" id="meun-items">
              <option disabled >German</option>
              <option >German</option>
              <option >German</option>
              <option >German</option>
              <option >C German</option>
            </select>
          </div>
        </div>
        <div className="card-text mt-5 margin-off">
            {/* <div className="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> */}
          <form>
            <div className="form-group mb-3 gender">
              <label>Select Your Gender</label>
              <div className="form d-flex mt-3 mb-4">
                <label className="">
                <input type="radio" className="input-radio on" name="pilih" /> Male</label>
                <label className='' style={{marginLeft:"1rem"}}>
                <input type="radio" className="input-radio on" name="pilih"/> Female</label>
              </div>
              </div>
              <input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone Number* " />
              <input type="password" className="form-control form-control-sm" id="exampleInputPassword1" placeholder="Your Pronounce" />
              <input type="date" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone Number* " />
                <div className="d-flex contact-number">
              	<div className="col-md-3 pe-3 p-0 col-sm-3 number">
              		 <div className=" text-right  form-control">
            <select name="menu" id="meun-items">
              <option disabled >+44</option>
              <option >+445</option>
              <option >+0</option>
              <option >+655</option>
              <option >+000</option>
            </select>
          </div>
              	</div>
              	<div className="col-md-9 p-0 pl-3 pad-off col-sm-9">
                <input type="text" className="form-control form-control-sm" id="exampleInputPassword1" placeholder="Mobile Number" />
        
              	</div>
              </div>
               <input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email " />
              <input type="password" className="form-control form-control-sm" id="exampleInputPassword1" placeholder="Password" />

            <div className="col-md-3 p-0 pt-3 m-auto"><button type="submit" className="col-md-12 btn btn-primary btn-block back-yellow border-0 pt-3 pb-3 text-15"><strong>Create Account</strong> </button></div>

             <div className="col-md-12 text-center pt-5 "><p className="text-15 text-black">Already Have An Account? <strong>Sign-In now</strong></p></div>

            <div className="sign-up mt-3">
              <span className="dark-text-color" style={{fontSize: "12px"}}>Create A Company Account</span>
            </div>
          </form>
        </div>
      </div>
    </div>



</>
  )
}
