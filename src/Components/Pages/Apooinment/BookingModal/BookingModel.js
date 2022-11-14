import { format } from "date-fns";
import React from "react";

const BookingModel = ({ optionModal, selectedDate }) => {
  const { name, slots } = optionModal;
  const date = format(selectedDate, "PP");
  const handleSubmit =event=>{
    event.preventDefault()
    const from= event.target;
    const solt=from.solt.value
    const names=from.name.value;
    const email= from.email.value;
    const number=from.number.value;
    console.log(date,solt ,name,email,number)
    const booking={
        selectedDate:date,
        selectedName:name ,
        priaent:names,
        email,
        number
    }
    console.log(booking)
  }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-slate-300">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={date}
              disabled
              className="input w-full py-5 my-2 "
            />
            <br></br>
            <select name="solt" className="select select-bordered w-full">
                {
                 slots.map(solt=><option key={solt} value={solt}>{solt}</option>)
                }
            </select>
            <input
              type="text"
              placeholder="Your Name"
              className="input w-full  py-5 my-2 "
              name="name"
            />
            <br></br>
            <input
              type="number"
              placeholder="Enter Your Number"
              className="input w-full py-5 my-2"
              name="number"
            />
            <br></br>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input w-full  py-5 "
              name="email"
            />
            <br></br>
            <button className="btn w-full  btn-primary my-3" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModel;
