import React,{useState} from 'react';
import styles from "./Signin.module.css"
import {Link, useNavigate} from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/init-firebase';

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');

  const [errorMsg, setErrorMsg] = useState('');
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleInputChange = e => {
    const {id , value} = e.target;
    if(id === "email"){
        setEmail(value);
    }
    if(id === "password"){
        setPassword(value);
    }
  }

  // Login Registered User  
  const handleSignin  = e => {
    e.preventDefault();
      // If Input value is empty display Error Massage
      if(email === '' || password === '') {
          setErrorMsg("Fill all fields!");
          return
      }
      setErrorMsg('');

      setSubmitButtonDisabled(true);
      signInWithEmailAndPassword(auth, email, password)
        .then(async(res) => {
          setSubmitButtonDisabled(false);
            
          // Navigate to Home page
          navigate('/');
        }).catch((err) => {
            setSubmitButtonDisabled(false);
            setErrorMsg(err.message)
        });

        console.log('Sign In successfully!');
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSignin}>
        <div className={styles.content}>
          <h3 className={styles.title}>Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span>
              <Link to="/signup">Sign Up</Link>
              </span>
            </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email address"
              id='email'
              value={email} 
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              id='password'
              value={password} 
              onChange={handleInputChange}
            />
            <br/>
            <b className={styles.error}>{errorMsg}</b>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" disabled={submitButtonDisabled}>
              Sign In
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
