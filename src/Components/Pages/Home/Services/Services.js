import React from 'react';
import serviceOne from '../../../../assets/images/fluoride.png'
import serviceTow from '../../../../assets/images/cavity.png'
import serviceThree from '../../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Services = () => {
    const serviceData=[
        {
            id:1,
            title:'Fluoride Treatment',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:serviceOne
        },
        {
            id:2,
            title:'Cavity Filling',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:serviceTow
        },
        {
            id:3,
            title:'Teeth Whitening',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:serviceThree
        },
    ]
    return (
        <div className='text-center'>
            <div className='py-10'>
                <h2 className='text-primary'>OUR SERVICES</h2>
                <h3 className='text-3xl font-medium'>Services We Provide</h3>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8'>
             {
                serviceData.map(service=><ServiceCard key={service.id}service={service}></ServiceCard>)
             }
            </div>
        </div>
    );
};

export default Services;