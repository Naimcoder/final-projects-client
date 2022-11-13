import { format } from 'date-fns';
import React from 'react';

const ApporinmentService = ({setDate}) => {

    return (
        <section>
           <div className='my-5'>
            <h2 className='text-center text-2xl font-bold'>Available Appointments on {format(setDate,'PP')}</h2>
           </div>
        </section>
    );
};

export default ApporinmentService;