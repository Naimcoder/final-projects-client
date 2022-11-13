import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../../assets/images/chair.png';
import img from '../../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
const AppoinmentBanner = ({setDate,setUserDate}) => {
    return (
       <section style={{
  background: `url(${img})`
       }}>
        <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex  flex-col-reverse items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <DayPicker
          mode='single'
          selected={setDate}
          onSelect={setUserDate}
          ></DayPicker>
          <p>You Have Selected Date: {format(setDate,'PP')}</p>
          </div>
          <div className="px-5 lg:w-1/2">
            <img
              className="object-cover w-full  rounded shadow-lg sm:h-96"
              src={chair}
              alt=""
            />
          </div>
        </div>
      </div>
       </section>
    );
};

export default AppoinmentBanner;