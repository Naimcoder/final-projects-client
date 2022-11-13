import React from 'react';
import { Link } from 'react-router-dom';
import items from '../../../../assets/images/treatment.png';


const ServicePart = () => {
    return (
        <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex  flex-col items-center justify-between lg:flex-row">
        <div className="px-5 lg:w-1/2">
            <img 
              className="object-cover w-full rounded shadow-lg sm:h-96"
              src={items}
              alt=""
            />
          </div>
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6  pl-12">
                <h1 className='lg:text-4xl pt-5 font-medium text-3xl'>Exceptional Dental Care, on Your Terms</h1>
           <p className='py-5 font-normal lg:text-base text-sm'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
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
    );
};

export default ServicePart;