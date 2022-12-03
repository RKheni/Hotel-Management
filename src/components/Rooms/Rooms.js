import React, { useState, useEffect } from 'react'
import Dashboard from '../Dashboard/Dashboard';
import dashboardStyles from "../Dashboard/Dashboard.module.css"
import styles from "./Rooms.module.css"
import { useNavigate } from 'react-router-dom'
import { bookroomCollectionRef } from '../../lib/firestore.collections'
import { doc, getDocs, deleteDoc} from "firebase/firestore";

function Rooms() {
    const navigate = useNavigate();

    const [allData, setAllData] = useState([]);

    useEffect(() => {
      const fetchAllData = async () => {
        const data = await getDocs(bookroomCollectionRef);
        setAllData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
  
      fetchAllData();
    }, []);

    // Delete Data when click on delete button
    const handleDelete = async (val) => {
      // await deleteDoc(doc(bookroomCollectionRef, val));
    }

  return (
    <>
      {/* Sidebar */}
      <Dashboard/>

      {/* Rooms Form */}
      <div className={styles.containerRight}>
        <form className={styles.form} >
          <h3 className={dashboardStyles.titleRight}>Rooms Information</h3>

          {/* Add Room Button */}
          <button className={styles.buttonPlus} 
            onClick={() => {navigate('/bookroom')}}>
                <img className={styles.imgPlus} src="plus.png" height="35" alt='plus icon' /> 
                <b>Add Room</b>
          </button>
            
          {/* Display Book Room data in Tabular formate */}
          <table className="table table-bordered">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Check In Date</th>
                <th scope="col">Check Out Date</th>
                <th scope="col">Room Type</th>
                <th scope="col">Occupancy</th>
                <th scope="col">No of Room</th>
                <th scope="col">Room Size</th>
                <th scope="col">No of Bed</th>
                <th scope="col">Amenities</th>
                <th scope="col">Price/Night</th>
                <th scope="col">Delete Booking</th>
                </tr>
            </thead>

            <tbody>
              {allData.map((val, id) => {
                return (
                <tr key={id}>
                  <td>{val.id}</td>
                  <td>{val.checkInDate}</td>
                  <td>{val.checkOutDate}</td>
                  <td>{val.roomType}</td>
                  <td>{val.occupancy}</td>
                  <td>{val.noOfRoom}</td>
                  <td>{val.roomSize}</td>
                  <td>{val.noOfBed}</td>
                  <td>{val.amenitie}</td>
                  <td>{val.priceNight}</td>
                  <td><button className={styles.buttonDelete} 
                        onClick={() => handleDelete(val)} 
                      >
                      <img className={styles.imgDelete} src="delete.png" height="35" alt='delete icon' />
                    </button>
                  </td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </form>
      </div>
    </>
  )
}

export default Rooms
