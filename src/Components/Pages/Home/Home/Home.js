import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contacts/Contact';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import ServicePart from '../ServicePart/ServicePart';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='mx-5'>
         <Banner></Banner>
         <InfoCards></InfoCards>
         <Services></Services>
         <ServicePart></ServicePart>
         <MakeAppoinment></MakeAppoinment>
         <Testimonials></Testimonials>
         <Contact></Contact>
        </div>
    );
};

export default Home;