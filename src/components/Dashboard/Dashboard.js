import React from 'react'
import styles from "./Dashboard.module.css"
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className={styles.sidebar}>
            <h3 className={styles.titleSidebar}>Dashboard</h3>
              <Link to="/rooms">
                <img className='img-fulid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6am2BbpC1hQ0n1aZTVKKfu7jlGfwJLr6EEAQr6tgwxuAoDXEa1XrlV9oc3XpPZYtAO5I&usqp=CAU" alt="rooms img" />
              Rooms</Link>
              <Link to="/bookings">
              <img className='img-fulid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMhRx1cPQjhhIMY53rY9pXVudC1Vd_lGm88Q&usqp=CAU" alt="bokkings img" />
              Bookings</Link>
              <Link to="/staff">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1pl-aMHnpZZSCtB-F86sYyPHks4QUmYmZBg&usqp=CAU" alt="staff img" />
              Staff</Link>
          </div>
  )
}

export default Dashboard
