import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import dashboardStyles from "../Dashboard/Dashboard.module.css"
import styles from "./Home.module.css"

function Home(props) {
  return (
    <>
      {/* Sidebar */}
      <Dashboard/>

      {/* Home Page */}
      <div className={dashboardStyles.containerRight}>
        <form className={styles.form}>
          <h2>{props.fullName ? `Welcome - ${props.fullName}` : "Login please"}</h2> 
        </form>   
      </div>
    </>
  )
}

export default Home
