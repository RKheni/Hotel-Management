import React, { useState } from 'react'
// import { db } from '../lib/init-firebase';
import {registerCollectionRef} from '../lib/firestore.collections'
import {addDoc} from 'firebase/firestore';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');

  const handleInputChange = e => {
    const {id , value} = e.target;
    if(id === "fullName"){
        setFullName(value);
    }
    if(id === "email"){
        setEmail(value);
    }
    if(id === "password"){
        setPassword(value);
    }
    if(id === "confirmPassword"){
        setConfirmPassword(value);
    }

  }

  // Create a new user 
  const handleSubmit  = e => {
    e.preventDefault();
        if(fullName === '' && email === '' && password === '' && confirmPassword === '') {
            return
        }

        addDoc(registerCollectionRef, {fullName, email, password, confirmPassword}).then(response => {
          console.log(' ID:' + response.id)
          console.log('User Data: ' + fullName, email, password, confirmPassword);   
        }).catch(error => console.log(error.message));
        clearData();
  } 

  // Clear input values after form submit
  function clearData () {
    setFullName('');
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Registration</h3>
          {/* <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div> */}
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              id='fullName'
              value={fullName}
              onChange = {handleInputChange}
              placeholder="e.g. John Peter"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              id='email'
              value={email}
              onChange = {handleInputChange}
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              id='password'
              value={password}
              onChange = {handleInputChange}
              placeholder="Password"
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control mt-1"
              id='confirmPassword'
              value={confirmPassword}
              onChange = {handleInputChange}
              placeholder="Confirm Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
          {/* <p className="text-center mt-2">
            Forgot <a href="/">password?</a>
          </p> */}
        </div>
      </form>
    </div>
  )
}

export default Signup
