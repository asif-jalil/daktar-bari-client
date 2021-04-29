import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = ({ testimonial }) => {
  const { name, img, desc, designation } = testimonial;

  return (
    <div className="testimonial-item">
      <p>{desc}</p>
      <div className="testimonial-person">
        <img src={img} alt="" />
        <div>
          <h6>{name}</h6>
          <span>{designation}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
