import React, {useState} from 'react';
import styles from "./BookRoom.module.css"
import Dashboard from '../Dashboard/Dashboard';
import dashboardStyles from "../Dashboard/Dashboard.module.css"
import {bookroomCollectionRef} from '../../lib/firestore.collections'
import { addDoc } from 'firebase/firestore';
import Select from 'react-select';
import { storage } from '../../lib/init-firebase'
import { ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'
import { useNavigate } from 'react-router-dom'


function BookRoom() {
  const navigate = useNavigate();

  const roomTypes = [
    { value: 'Deluxe', label: 'Deluxe' },
    { value: 'Luxury', label: 'Luxury' },
    { value: 'Standard', label: 'Standard' },
    { value: 'King Room', label: 'King Room' }
  ];

  const amenities = [
    { value: 'Breakfast', label: 'Breakfast' },
    { value: 'Dinner', label: 'Dinner' },
    { value: 'Free Wifi', label: 'Free WiFi' },
    { value: 'Garden', label: 'Garden' },
    { value: 'Free Parking', label: 'Free Parking' },
    { value: 'Swimming Pool', label: 'Swimming Pool' },
    { value: '24-hour Front Desk', label: '24-Hour Front Desk' },
    { value: 'Air Conditioning', label: 'Air Conditioning' },
    { value: 'House Keeping', label: 'House Keeping' }
  ];

  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [roomType,setRoomType] = useState('Deluxe');
  const [occupancy,setOccupancy] = useState('');
  const [noOfRoom,setNoOfRoom] = useState('');
  const [roomSize,setRoomSize] = useState('');
  const [noOfBed,setNoofBed] = useState('');
  const [amenitie,setAmenitie] = useState([]);
  const [imgUpload,setImgUpload] = useState(null);
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

  const handleChange = (e) => {
    setAmenitie(Array.isArray(e) ? e.map(x => x.value) : []);
  }

  // Store Booking Information 
  const handleBookRoom  = e => {
    e.preventDefault();
      // If Input value is empty display Error Massage
      if(checkInDate === '' || checkOutDate === '' || roomType === '' || occupancy === 0 || noOfRoom === 0 || roomSize === '' || noOfBed === 0 || amenitie === [] || priceNight === '' || imgUpload == null) {    
        setErrorMsg("Fill all fields!");
          return
      }
      
      // Validate CheckOutDate is greater than CheckInDate
      if (checkInDate !== '' && checkOutDate !== '') {
        if (Date.parse(checkInDate) > Date.parse(checkOutDate)) {
            setErrorMsg("Check Out Date must be greater than Check In Date!");
            return
        }
    }

    setErrorMsg('');

      const imageRef = ref(storage, `images/${imgUpload.name + v4()}`);
      uploadBytes(imageRef, imgUpload).then(() => {
      })

        // Add room booking infomation to firestore --- bookroom
        addDoc(bookroomCollectionRef, {checkInDate, checkOutDate, roomType, occupancy, noOfRoom, roomSize, noOfBed, amenitie, priceNight})
        .then(response => {
          console.log(' ID:' + response.id)
          console.log('Book Room Data: ' + checkInDate, checkOutDate, roomType, occupancy, noOfRoom, roomSize, noOfBed, amenitie, priceNight);   
        }).catch(err => console.log(err.message));

      // Navigate to Rooms Page
      navigate('/rooms')
  } 

  return (
    <>
      {/* Sidebar */}
      <Dashboard/>

      {/* Book Room Form */}
      <div className={dashboardStyles.containerRight}>
        <form className={dashboardStyles.form} onSubmit={handleBookRoom}>
          <h3 className={dashboardStyles.titleRight}>Book Room</h3>
            <div className="form-group row my-2">
                <label className="col-sm-5 col-form-label">Check-In Date</label>
                <div className="col-sm-7">
                    <input type="date" className="form-control" 
                      id='checkInDate'
                      value={checkInDate}
                      onChange = {handleInputChange} 
                    />
                </div>
            </div>
            <div className="form-group row my-2">
                <label className="col-sm-5 col-form-label">Check-Out Date</label>
                <div className="col-sm-7">
                    <input type="date" className="form-control" 
                      id='checkOutDate'
                      value={checkOutDate}
                      onChange = {handleInputChange}
                    />
                </div>
            </div>
            <div className="form-group row my-2">
                <label className="col-sm-5 col-form-label">Room Type</label>
                <div className="col-sm-7">
                    <select className="form-control" id='roomType' value={roomType} onChange={handleInputChange}>
                      {roomTypes.map((rtype, key) => (
                        <option key={key} value={rtype.value}>{rtype.label}</option>
                      ))}
                    </select>
                </div>
            </div>
            <div className="form-group row my-2">
                <label className="col-sm-5 col-form-label">Occupancy</label>
                <div className="col-sm-7">
                    <input type="number" className="form-control" 
                      id='occupancy'
                      placeholder='0'
                      value={occupancy}
                      onChange = {handleInputChange}
                    />
                </div>
            </div>
            <div className="form-group row my-2">
                <label className="col-sm-5 col-form-label">No Of Room</label>
                <div className="col-sm-7">
                    <input type="number" className="form-control" 
                      id='noOfRoom'
                      placeholder='0'
                      value={noOfRoom}
                      onChange = {handleInputChange}
                    />
                </div>
            </div>
            <div className="form-group row my-2">
                <label className="col-sm-5 col-form-label">Room Size</label>
                <div className="col-sm-7">
                    <input type="text" className="form-control" 
                      id='roomSize'
                      value={roomSize}
                      onChange = {handleInputChange}
                    />
                </div>
            </div>
            <div className="form-group row my-2">
                <label className="col-sm-5 col-form-label">No Of Bed</label>
                <div className="col-sm-7">
                    <input type="number" className="form-control" 
                       id='noOfBed'
                       placeholder='0'
                       value={noOfBed}
                       onChange = {handleInputChange}
                    />
                </div>
            </div>
            <div className="form-group row my-2">
                <label className="col-sm-5 col-form-label">Amenities</label>
                <div className="col-sm-7">
                    <Select isMulti={true} options={amenities} 
                      value={amenities.filter(obj => amenitie.includes(obj.value))}
                      onChange={handleChange} />
                </div>
            </div>
            <div className="form-group row my-2">
                <label className="col-sm-5 col-form-label">Price/Night</label>
                <div className="col-sm-7">
                    <input type="text" className="form-control" 
                      id='priceNight'
                      value={priceNight}
                      onChange = {handleInputChange}
                    />
                </div>
            </div>
            <div className="form-group my-2">
                <label className="col-form-label">Upload Image</label>
                    <input type="file" className="form-control" 
                      id= 'imageUrl'
                      onChange = {(e) => {setImgUpload(e.target.files[0])}}
                    />
            </div>
            <br/>  
            <b className={styles.error}>{errorMsg}</b>
            
            <div className="form-group row">
                <button type="submit" className="col-10 btn btn-primary">
                  Book Now
                </button>
            </div>
        </form>
      </div>
    </>
  )
}

export default BookRoom
