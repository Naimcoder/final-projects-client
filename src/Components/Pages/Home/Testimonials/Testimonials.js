import React from "react";
import quite from "../../../../assets/icons/quote.svg";
import peopleOne from '../../../../assets/images/people1.png'
import peopleTow from '../../../../assets/images/people2.png'
import peopleThree from '../../../../assets/images/people3.png'
import TestimonialsCard from "../TestimonialsCard.js/TestimonialsCard";
const Testimonials = () => {
  const textData = [
    {
      id: 1,
      descriprion: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      authorName: "Winson Herry",
      authorimg: peopleOne,
    },
    {
      id: 2,
      descriprion: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      authorName: "Tome Herry",
      authorimg: peopleTow,
    },
    {
      id: 3,
      descriprion: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      authorName: "josnas kerry",
      authorimg: peopleThree,
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold   text-primary">Testimonial</h3>
          <h2 className="lg:text-4xl text-2xl  font-medium">What Our Patients Says</h2>
        </div>
        <div>
          <img className="lg:w-1/2 w-40" src={quite} alt="" />
        </div>
      </div>
      <div className="my-8 grid grid-cols-1 lg:grid-cols-3  md:grid-cols-2 gap-4">
      {
        textData.map(tcard=><TestimonialsCard key={tcard} tests={tcard}></TestimonialsCard>)
      }
      </div>
    </div>
  );
};

export default Testimonials;
