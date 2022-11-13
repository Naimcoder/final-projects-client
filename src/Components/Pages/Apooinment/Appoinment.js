import React, { useState } from 'react';
import AppoinmentBanner from './AppoinmentBanner/AppoinmentBanner';
import ApporinmentService from './ApporinmentService/ApporinmentService';

const Appoinment = () => {
    const [setDate,setUserDate]=useState( new Date())
    return (
        <div>
           <AppoinmentBanner
           setDate={setDate}
           setUserDate={setUserDate}
           ></AppoinmentBanner>
           <ApporinmentService setDate={setDate}></ApporinmentService>
        </div>
    );
};

export default Appoinment;