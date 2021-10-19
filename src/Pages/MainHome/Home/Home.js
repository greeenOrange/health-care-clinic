import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contract from '../Contract/Contract';
import Doctors from '../Doctors/Doctors';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id='#home'>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Contract></Contract>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;