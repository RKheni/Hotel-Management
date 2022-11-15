import React from 'react'
import "./Home.css"

function Home(props) {
  return (
    <div className='Home'>
    <h2>{props.fullName ? `Welcome - ${props.fullName}` : "Login please"}</h2>    </div>
  )
}

export default Home
