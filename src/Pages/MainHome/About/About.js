import React from 'react';
import './About.css'

const About = () => {
    return (
        <div id='about' className='container'>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://surgical-experts.de/wp-content/uploads/2014/09/Best-Doctors-Germany-Group.jpg" alt="" />
                </div>
                <div className="col-md-6">
                    <h2 className='text-success'>About us</h2>
                    <p>Global Doctor's Clinic has a robust presence across the healthcare ecosystem. From routine wellness & preventive health care to innovative life-saving treatments and diagnostic services, Global Doctor's  has touched more than 120 million lives from over 120 countries, offering the best clinical outcomes.</p>
                    <div className='about-us'>
                    <li>Most Advance Health Technogy</li>
                    <li>World Famous Qulified Doctors</li>
                    <li>Best Clinical OutComes</li>
                    <li>Great Care</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;