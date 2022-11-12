import React from "react";

const InfoCard = ({info}) => {
    const {name,description,icon,bgClass}=info
  return (
    <div className={`card card-side px-5  shadow-xl ${bgClass}`}>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{name}</h2>
        <p className=" text-white">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
