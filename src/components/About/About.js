import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import dashboardStyles from "../Dashboard/Dashboard.module.css"
import styles from "./About.module.css"


function About() {
  return (
    <>
      {/* Sidebar */}
      <Dashboard/>

      {/* Home Page */}
      <div className={dashboardStyles.containerRight}>
        <form className={styles.form}>
          <h2>About Page</h2> 
        </form>   
      </div>
    </>
  )
}

export default About
