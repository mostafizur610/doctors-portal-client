import React from 'react';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <h2>This is home</h2>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Care></Care>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;