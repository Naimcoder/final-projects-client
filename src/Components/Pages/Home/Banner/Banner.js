import React from 'react';
import './Banner.css';
import chair from '../../../../assets/images/chair.png'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
    <div className="img  z-10 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex  flex-col-reverse items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6  pl-12">
                <h1 className='lg:text-5xl pt-5 font-medium text-4xl'>Your New Smile Starts Here</h1>
           <p className='py-5 font-normal lg:text-base text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
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
          <div className="px-5 lg:w-1/2">
            <img
              className="object-cover w-full  rounded shadow-lg sm:h-96"
              src={chair}
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default Banner;