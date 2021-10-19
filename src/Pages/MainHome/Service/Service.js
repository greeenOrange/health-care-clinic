import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {name,img, title, cost, discription} = service
    return (
        <div className='col-md-6'>
            <div className="service-container">
            <img className='w-50' src={img} alt="" />
            <div className="service-details ms-2">
                <h3>{name}</h3>
                <p>{title}</p>
                <h5>Min Cost: $<span className='text-danger'>{cost}</span></h5>
               <Link to={`/booking/${name}`}><Button>learn More.</Button></Link>
            </div>
            </div>
        </div>
    );
};

export default Service;