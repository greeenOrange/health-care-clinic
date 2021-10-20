import React from 'react';
import { Link } from 'react-router-dom';
import './Doctor.css'

const Doctor = ({doctor}) => {
    const {name, img, age, title} = doctor
    return (
        <div className='col-md-4 mt-2 doctors'>
            <img className='w-75' src={img} alt="" />
            <h3>{name}</h3>
            <h5>age: {age}</h5>
            <h6><span>{title}</span></h6><br/>
            <Link to={`/booking/${name}`}><button className='btn btn-dark' type="submit">Get Appoinment</button></Link>
        </div>
    );
};

export default Doctor;