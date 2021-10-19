import React from 'react';
import './Contract.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
const Contract = () => {
    return (
        <div id='timetable' className='container my-4'>
            <div className="row">
                <div className="main-contract col">
                <div className="contract-info1 common-info">
                    <div className="details">
                    <h3>Doctors TimeTabel</h3>
                <p>Combining the best specialists and equipment to provide you nothing short of the best in healthcare</p>
                    </div>
                <button className='btn btn-dark'>View TimeTable <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></button>
                </div>

                {/* <div className="contract-info2 common-info">
                    <h3>working Time</h3>
                <div className="time">
                <p className=''>Monday to
                Friday  8.00-17.30</p>
                <p className=''>Saturday  9.00-17.00</p>
                <p className=''>Sunday  9.00-15.00</p>
                </div>
                </div> */}


                <div className="contract-info3 common-info">
                    <div className="details">
                    <h3>Emergency Cases</h3>
                <p>Call Any Time For Emegency We are available 24/7</p>
                <h3>+411 876993021</h3>
                    </div>
                <button className='btn btn-dark p-lg-2'>Call Us Now <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></button>
                </div>


                <div className="contract-info4 common-info">
                    <div className="details"><h3>Appointments</h3>
                <p>Book doctor appointment online instantly with top specialists</p></div>
                <button className='btn btn-dark p-2'>Make An Appointment <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Contract;