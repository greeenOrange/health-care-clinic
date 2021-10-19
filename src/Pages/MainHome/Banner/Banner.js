import React from 'react';
import { Button} from 'react-bootstrap';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const Banner = () => {
    return (
        <div className='banner-container'>
        <div className="blr">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="banner-info">
                        <h2>Hello! Welcome to</h2>
                        <h4> Global Doctore clinic</h4>
                        <p>We are here to service you  24/7 From routine wellness & preventive health care to innovative life-saving treatments and diagnostic services, </p>
                        <Button variant="btn-lg btn-success text-center">Learn More <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;