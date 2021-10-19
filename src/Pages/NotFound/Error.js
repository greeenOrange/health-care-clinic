import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'
const Error = () => {
    return (
        <div>
            <h2 className='text-danger mx-auto'>This Page is not Found 404</h2>
            <Link to='/'><button className='btn btn-dark'>Go Back</button></Link>
        </div>
    );
};

export default Error;