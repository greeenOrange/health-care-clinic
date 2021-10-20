import React from 'react';
import './Contract.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Table } from 'react-bootstrap';
const Contract = () => {
    return (
        <div id='timetable' className='container me-4'>
            <div className="row">
                <div className="main-contract col-md-3">
                <div className="contract-info1">
                    <div className="details">
                    <h3>Doctors TimeTabel</h3>
                <p>Combining the best specialists and equipment to provide you nothing short of the best in healthcare</p>
                    </div>
                <button className='btn btn-dark'>View TimeTable <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></button>
                </div>
                </div>
                <div className='col-md-3'>
                <h3 className='bg-success'>Timetable</h3>
                <Table className='contract-info2' striped bordered hover>
                      <thead>
                        <tr>
                          <th>Working</th>
                          <th>Time</th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td>Monday-Friday</td>
                          <td>8.00-17.30</td>
                        </tr>
                        <tr>
                          <td>Saturday </td>
                          <td>9.00-17.00</td>
                        </tr>
                        <tr>
                          <td>Sunday</td>
                          <td>9.00-15.00</td>
                        </tr>
                        
                      </tbody>
                    </Table>
                </div>
                <div className='col-md-3'>
                 <div className="contract-info3">
                    <div className="details">
                    <h3>Emergency Cases</h3>
                <p>Call Any Time For Emegency We are available 24/7</p>
                <h3>+411 876993021</h3>
                    </div>
                <button className='btn btn-dark p-lg-2'>Call Us Now <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></button>
                </div>
                </div>

                <div className='col-md-3'>
                <div className="contract-info4">
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