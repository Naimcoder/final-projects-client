import React from "react";

const ServiceCard = ({service}) => {
    const {title,description,img}=service
  return (
    <div className="p-5  bg-white border rounded shadow-sm ">
          <div className="flex items-center justify-center  mb-4 rounded-full">
           <img className="mx-auto" src={img} alt="" />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-lg py-3">{title}</h6>
          <p className="text-base text-gray-900">
            {description}
          </p>
</div>
  );
};

export default ServiceCard;
