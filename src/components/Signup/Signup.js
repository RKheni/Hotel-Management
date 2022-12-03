import React, { useState } from 'react'
import styles from "./Signup.module.css"
import {Link, useNavigate} from 'react-router-dom'
import {signupCollectionRef} from '../../lib/firestore.collections'
import {addDoc} from 'firebase/firestore';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../lib/init-firebase';

function Signup() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');

  const [errorMsg, setErrorMsg] = useState('');

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
  const handleSignup  = e => {
    e.preventDefault();
        // If Input value is empty display Error Massage
        if(fullName === '' || email === '' || password === '' || confirmPassword === '') {
            setErrorMsg("Fill all fields!");
            return
        }
        setErrorMsg('');

        if (password === confirmPassword){
          // Create a New user in Firestore Authentication
          createUserWithEmailAndPassword(auth, email, password)
          .then(async(res) => {
            const user = res.user;
            await updateProfile(user, {
              displayName: fullName,
            })

            // Add a created user to firestore --- signup
            addDoc(signupCollectionRef, {fullName, email, password, confirmPassword}).then(response => {
              console.log(' ID:' + response.id)
              console.log('User Data: ' + fullName, email, password, confirmPassword);   
            }).catch(error => console.log(error.message));

            // Navigate to Home page
            navigate('/');
          }).catch((err) => {
            setErrorMsg(err.message)
          });

          console.log('Sign Up successfully!');
        } else {
          setErrorMsg("Password not match!");
        }
  } 

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSignup}>
        <div className={styles.content}>
          <h3 className={styles.title}>Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span>
              <Link to="/signin">Sign In</Link>
            </span>
          </div>
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
            <label>Email </label>
            <input
              type="email"
              className="form-control mt-1"
              id='email'
              value={email}
              onChange = {handleInputChange}
              placeholder="Enter Email Address"
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
              placeholder="Enter Password"
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
            <br/>
            <b className={styles.error}>{errorMsg}</b>
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary"> Sign Up </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Signup
