import React, { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import SignIn from "./components/SignIn/Signin.js"
import Navbar from './components/Navbar';
import SignUp from './components/Signup/Signup.js';
import { auth } from './lib/init-firebase';

function App() {
  
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home fullName={userName} />} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/signup" element={<SignUp/>} />

          </Routes>
      </Router>
    </div>
  );
}

export default App;
