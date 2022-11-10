import React,{useState} from 'react';
import "./Auth.css"

function Auth(props) {

  const [data,setData] = useState({
    email:"",
    password:""
  })
  
  const {email,password} = data;
  
  const changeHandler = e => {
    setData({...data,[e.target.name]:[e.target.value]});
  }
  
  const submitHandler = e => {
    e.preventDefault();
    alert("Email: " + email + "  Password: " + password)
    console.log(data);
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={submitHandler}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              name="email" value={email} onChange={changeHandler}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              name="password" value={password} onChange={changeHandler}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" name='submit'>
              Submit
            </button>
          </div>
          {/* <p className="forgot-password text-right mt-2">
            Forgot <a href="/">password?</a>
          </p> */}
        </div>
      </form>
    </div>
  )
}

export default Auth
