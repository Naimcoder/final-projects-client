import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppoinmentOptions from '../AppoinmentOption/AppoinmentOptions';
import BookingModel from '../BookingModal/BookingModel';


const ApporinmentService = ({setDate}) => {
  const [appointmentoptions,setappinmentoptions]=useState([])
 const [optionModal,setOptionModal]=useState(null)

  useEffect(()=>{
   fetch('appoinmentOptioned.json')
   .then(res => res.json())
   .then(data => {
    setappinmentoptions(data)
    console.log(data)
})
  },[])


    return (

        <section>
           <div className='my-5'>
            <h2 className='text-center text-2xl font-bold'>Available Appointments on {format(setDate,'PP')}</h2>
            <div className='grid gird-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 my-6'>
             {
                appointmentoptions.map(option=><AppoinmentOptions key={option._id}option={option} 
                    setOptionModal={setOptionModal}
                ></AppoinmentOptions>)
             }
           </div>
           </div>
           {optionModal &&
             <BookingModel selectedDate={setDate} optionModal={optionModal}></BookingModel>
           }
        </section>
    );
};

export default ApporinmentService;