import React from 'react'
import Dashboard from '../Dashboard/Dashboard';
import dashboardStyles from "../Dashboard/Dashboard.module.css"
import styles from "./Rooms.module.css"
import {useNavigate} from 'react-router-dom'


function Rooms() {
    const navigate = useNavigate();

  return (
    <>
    <div className={dashboardStyles.SplitPane}>
      {/* Left Split */}
      <Dashboard/>

      {/* Right Split */}
      <div className={dashboardStyles.SplitPaneRight}>
        <div className={dashboardStyles.containerRight}>
        <form className={styles.form} >
          <h3 className={dashboardStyles.titleRight}>Room Information</h3>

          {/* Add Room Button */}
          <button className={styles.buttonPlus} 
            onClick={() => {navigate('/bookroom')}}>
                <img className={styles.imgPlus} src="plus.png" height="35" alt='plus icon' /> 
                <b>Add Room</b>
          </button>
            
          <table className="table table-bordered">
            <thead>
                <tr>
                <th scope="col">Check In Date</th>
                <th scope="col">Check Out Date</th>
                <th scope="col">Room Type</th>
                <th scope="col">Occupancy</th>
                <th scope="col">No of Room</th>
                <th scope="col">Room Size</th>
                <th scope="col">No of Bed</th>
                <th scope="col">Amenities</th>
                <th scope="col">Price/Night</th>
                <th scope="col">Image Url</th>
                <th scope="col">Delete Booking</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                <td>11/12/2023</td>
                <td>13/12/2023</td>
                <td>deluxe</td>
                <td>3</td>
                <td>1</td>
                <td>21m</td>
                <td>1</td>
                <td>Breakfast, Dinner, Free Parking</td>
                <td>15000</td>
                <td>img.jpgfddfg2365-gf212hhfgh</td>
                <td><button className={styles.buttonDelete}>
                    <img className={styles.imgDelete} src="delete.png" height="35" alt='delete icon' />
                </button></td>
                </tr>

                <tr>
                <td>01/12/2023</td>
                <td>05/12/2023</td>
                <td>Luxury</td>
                <td>4</td>
                <td>2</td>
                <td>30m</td>
                <td>2</td>
                <td>Breakfast, Free Parking, Swimming Pool, Non-Smoking Rooms</td>
                <td>55000</td>
                <td>img2.jpgfddfg2365-gf212hhfgh-dfgdfg</td>
                <td><button className={styles.buttonDelete}>
                    <img className={styles.imgDelete} src="delete.png" height="35" alt='delete icon' />
                </button></td>
                </tr>
            </tbody>
          </table>
        </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Rooms
