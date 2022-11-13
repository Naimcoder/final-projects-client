import React from 'react';
import contact from '../../../../assets/images/appointment.png'
const Contact = () => {
    return (
        <section style={
            {background: `url(${contact})`}

            }>
            <div className='py-5 w-full h-72'>
              <h2 className='text-center'>contact</h2>
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, sint ipsa? Corrupti dolores, incidunt alias debitis et consequuntur ullam magni cupiditate blanditiis quis? Minima, maxime ad vit</p>
            </div>
        </section>
    );
};

export default Contact;