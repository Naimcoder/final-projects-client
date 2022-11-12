import React from 'react';
import clock from '../../../../assets/icons/clock.svg'
import marker from '../../../../assets/icons/marker.svg'
import contact from '../../../../assets/icons/phone.svg'
import InfoCard from '../InfoCard/InfoCard';
const InfoCards = () => {

    const infoData=[
   {
    id: 1,
    name:'Opening Hours',
    description:'Open 9.00am to 5.00pm everyday',
    icon:clock,
    bgClass:'bg-gradient-to-r  from-primary  to-secondary'
   },
   {
    id: 2,
    name:'Visit our location',
    description:'Brooklyn, NY 10036, United States',
    icon:marker,
    bgClass:'bg-accent'
   },
   {
    id: 3,
    name:'Contact us now',
    description:'+000 123 456789',
    icon:contact,
    bgClass:'bg-gradient-to-r from-primary  to-secondary'
   },

    ]
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-5'>
            {
             infoData.map(info=><InfoCard key={info.id} info={info}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;