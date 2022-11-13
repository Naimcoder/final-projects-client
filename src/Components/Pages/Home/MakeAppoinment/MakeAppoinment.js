import React from "react";
import { Link } from "react-router-dom";
import doctor from "../../../../assets/images/doctor.png";
import bgdoctor from '../../../../assets/images/appointment.png'
const MakeAppoinment = () => {
  return (
    <section style={{ background: `url(${bgdoctor})`}} className="lg:my-20">
      <div className="flex  flex-col items-center  justify-around lg:flex-row">
        <div className="  -mt-40 md:block lg:block hidden">
          <img src={doctor} alt="" />
        </div>
        <div>
          <div className="mb-10  lg:pr-5 lg:mb-0 ">
            <div className="max-w-xl mb-6 pt-5 pl-12 text-white">
              <h2 className="text-lg font-semibold  text-primary">Appointment</h2>
              <h1 className="lg:text-4xl pt-5 font-medium text-2xl">
                Make an appointment Today
              </h1>
              <p className="py-5 font-normal lg:text-base text-sm text-white">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
              </p>
            </div>
            <div className="flex flex-col  items-start md:flex-row">
              <Link
                to="/"
                className="bg-gradient-to-r   from-primary  to-secondary ml-12 inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md  bg-blue-800 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppoinment;
