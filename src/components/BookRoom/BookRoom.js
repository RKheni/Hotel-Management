import React, {useState} from 'react';
import styles from "./BookRoom.module.css"
import {bookroomCollectionRef} from '../../lib/firestore.collections'
import { addDoc } from 'firebase/firestore';

function BookRoom() {

  const roomTypes = [
    { value: 'Deluxe', label: 'Deluxe' },
    { value: 'Luxury', label: 'Luxury' },
    { value: 'Standard', label: 'Standard' },
    { value: 'King Room', label: 'King Room' }
  ];

  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [roomType,setRoomType] = useState('Deluxe');
  const [occupancy,setOccupancy] = useState('');
  const [noOfRoom,setNoOfRoom] = useState('');
  const [roomSize,setRoomSize] = useState('');
  const [noOfBed,setNoofBed] = useState('');
  const [priceNight,setPriceNight] = useState('');

  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = e => {
    const {id , value} = e.target;
    if(id === "checkInDate"){
      setCheckInDate(value);
    }
    if(id === "checkOutDate"){
      setCheckOutDate(value);
    }
    if(id === "roomType"){
      setRoomType(value);
    }
    if(id === "occupancy"){
      setOccupancy(value);
    }
    if(id === "noOfRoom"){
      setNoOfRoom(value);
    }
    if(id === "roomSize"){
      setRoomSize(value);
    }
    if(id === "noOfBed"){
      setNoofBed(value);
    }
    if(id === "priceNight"){
      setPriceNight(value);
    }
  }

  // Store Booking Information 
  const handleSignup  = e => {
    e.preventDefault();
      // If Input value is empty display Error Massage
      if(checkInDate === '' || checkOutDate === '' || roomType === '' || occupancy === 0 || noOfRoom === 0 || roomSize === '' || noOfBed === 0 || priceNight === '') {
        setErrorMsg("Fill all fields!");
          return
      }
      setErrorMsg('');

        // Add room booking infomation to firestore --- bookroom
        addDoc(bookroomCollectionRef, {checkInDate, checkOutDate, roomType, occupancy, noOfRoom, roomSize, noOfBed, priceNight})
        .then(response => {
          console.log(' ID:' + response.id)
          console.log('Book Room Data: ' + checkInDate, checkOutDate, roomType, occupancy, noOfRoom, roomSize, noOfBed, priceNight);   
        }).catch(err => console.log(err.message));

      console.log('Room Book successfully!');
  } 

  return (
    <>
    <div className={styles.SplitPane}>
      {/* Left Split */}
      <div className={styles.SplitPaneLeft}>
          <h3 className={styles.title}>Amenities</h3>
          <div className='d-flex flex-column' style={{textAlign: 'left', paddingLeft: '20px'}}>
            <div className="d-inline-flex flex-row">
              <img className='img-fulid' src="https://www.pngitem.com/pimgs/m/20-204209_bouquet-flowers-png-icon-free-download-file-flower.png" alt="garden img" />
              <p id='garden'>Garden</p>
            </div>
            <div className="d-inline-flex flex-row">
              <img className='img-fulid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZNQMAn91_0d-9Ds172uay1mLb6A8qDfmgA&usqp=CAU" alt="swimming pool img" />
              <p id='swimmingpool'>Swimming Pool</p>
            </div>
            <div className="d-inline-flex flex-row">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgcekgM_WmDCW8EvY18PneD_bRwrfluZyEgg&usqp=CAU" alt="free wifi img" />
              <p id='freewifi'>Free WiFi</p>
            </div>
            <div className="d-inline-flex flex-row">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSal4yjZiLFSMIfqGy-FUjJWRT45Osm-h5jBA&usqp=CAU" alt="free parking img" />
              <p id='freeparking'>Free Parking</p>
            </div>
            <div className="d-inline-flex flex-row">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZAE0742DUCUkpVWOzItsrEbujtQhapScifA&usqp=CAU" alt="air conditioning img" />
              <p id='airconditioning'>Air Conditioning</p>
            </div>
            <div className="d-inline-flex flex-row">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6DIcUisnRJYUcrv5Jcdi-Gn5kptdGiZwbw&usqp=CAU" alt="front desk img" />
              <p id='frontdesk'>24-hour Front Desk</p>
            </div>
            <div className="d-inline-flex flex-row">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLwMl_mD2oHbwVKeMQqLT3ao9bCSVQVZqhyw&usqp=CAU" alt="house keeping img" />
              <p id='housekeeping'>Daily House Keeping</p>
            </div>
            <div className="d-inline-flex flex-row">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQGK16u2UfXr5Z3DoUBTS73htG0QHIYOYiIA&usqp=CAU" alt="non-smoking rooms img" />
              <p id='nonsmokingrooms'>Non-Smoking Rooms</p>
            </div>
          </div>
      </div>

      {/* Right Split */}
      <div className={styles.SplitPaneRight}>
        <div className={styles.containerRight}>
          <form className={styles.form} onSubmit={handleSignup}>
            <div className={styles.content}>
              <h3 className={styles.title}>Book Room</h3>
              <div className="form-group mt-3">
                  <label>Check-In Date</label>
                  <input
                    type="date"
                    className="form-control mt-1"
                    id='checkInDate'
                    value={checkInDate}
                    onChange = {handleInputChange}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Check-Out Date</label>
                  <input
                    type="date"
                    className="form-control mt-1"
                    id='checkOutDate'
                    value={checkOutDate}
                    onChange = {handleInputChange}
                  />
                </div>
                <div className="form-group mt-3 dropdown">
                  <label>Room Type</label>
                  <select className="form-control mt-1" id='roomType' value={roomType} onChange={handleInputChange}>
                      {roomTypes.map((rtype, key) => (
                        <option key={key} value={rtype.value}>{rtype.label}</option>
                      ))}
                    </select>
                </div>
                <div className="form-group mt-3">
                  <label>Occupancy</label>
                  <input
                    type="number"
                    className="form-control mt-1"
                    id='occupancy'
                    placeholder='0'
                    value={occupancy}
                    onChange = {handleInputChange}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>No of Rooms</label>
                  <input
                    type="number"
                    className="form-control mt-1"
                    id='noOfRoom'
                    placeholder='0'
                    value={noOfRoom}
                    onChange = {handleInputChange}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Room Size</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    id='roomSize'
                    value={roomSize}
                    onChange = {handleInputChange}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>No of Bed</label>
                  <input
                    type="number"
                    className="form-control mt-1"
                    id='noOfBed'
                    placeholder='0'
                    value={noOfBed}
                    onChange = {handleInputChange}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Price/Night</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    id='priceNight'
                    value={priceNight}
                    onChange = {handleInputChange}
                  />
                </div>
                <br/>
                <b className={styles.error}>{errorMsg}</b>

                <div className="d-grid gap-2 mt-3">
                <button type="bookNow" className="btn btn-primary">
                  Book Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default BookRoom
