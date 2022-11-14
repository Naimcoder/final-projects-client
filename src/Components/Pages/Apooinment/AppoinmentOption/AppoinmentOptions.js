import React from 'react';

const AppoinmentOptions = ({option,setOptionModal}) => {
    const{name,slots}=option;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-xl font-semibold">{name}</h2>
          <p  className='text-center text-lg font-medium'>{slots.length > 0 ? slots[0]:'try Anorther Day'}</p>
          <p className='text-center text-lg'> {slots.length}{slots.length> 1 ? ' SPACES':'SPACE'} AVAILABLE</p>
          <div className="card-actions  justify-center">
            <label
            disabled={slots.length===0}
            onClick={()=>setOptionModal(option)}
             htmlFor="booking-modal"
              className="btn btn-primary py-4"
              >Book Appointment</label>
          </div>
        </div>
      </div>
    );
};

export default AppoinmentOptions;
