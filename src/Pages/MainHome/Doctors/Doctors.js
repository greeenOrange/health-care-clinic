import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(()=>{
        fetch('doctor.json')
        .then(res => res.json())
        .then(data =>{
            setDoctors(data);
        })
    },[])
    return (
        <div id='doctors' className='container my-4'>
            <div className="row">
            {
                doctors.map(doctor=><Doctor
                key={doctor.name}
                doctor={doctor}
                ></Doctor>)
            }
            </div>
        </div>
    );
};

export default Doctors;