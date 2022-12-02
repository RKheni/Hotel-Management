import React, { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import SignIn from "./components/SignIn/Signin.js"
import Navbar from './components/Navbar';
import SignUp from './components/Signup/Signup.js';
import BookRoom from './components/BookRoom/BookRoom.js'
import { auth } from './lib/init-firebase';
import Rooms from './components/Rooms/Rooms.js';
import About from './components/About/About.js';

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
            {/* Navbar Left Side Links */}
            <Route path="/" element={<Home fullName={userName} />} />
            <Route path="/about" element={<About/>} />

            {/* Navbar Right Side Links */}
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/signup" element={<SignUp/>} />

            {/* Sidebar Links */}
            <Route path="/bookroom" element={<BookRoom/>} />
            <Route path="/rooms" element={<Rooms/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
