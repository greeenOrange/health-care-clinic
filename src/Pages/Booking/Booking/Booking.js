import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Booking.css'
const Booking = () => {
    const {bookingId} = useParams()
    const [servicesDetails, setServicesDetails] = useState([])
    const [singleService, setSingleService] = useState({})
    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServicesDetails(data))
    },[])

    useEffect(() =>{
        const foundService = servicesDetails.find(serviceDetails => serviceDetails.name === bookingId)
        setSingleService(foundService);
    },[servicesDetails])
    return (
        <div className='booking-section'>
            <h2>{bookingId}</h2>
            <img className='w-25' src={singleService?.img} alt="" />
            <h4>{singleService?.title}</h4>
            <h3>Cost: ${singleService?.cost}</h3>
            <p className='w-50 mx-auto'>{singleService?.discription}</p>
            <Link to='/'><button className='btn btn-dark'>Go Back</button></Link>
        </div>
    );
};

export default Booking;