import React from "react";
import "./Testimonial.css";
import { Container } from "react-bootstrap";
import person1 from "../../../images/users/1.png";
import person2 from "../../../images/users/2.png";
import person3 from "../../../images/users/3.png";
import TestimonialCard from "./TestimonialCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const testimonialData = [
  {
    desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content",
    img: person1,
    name: "Winson Herry",
    designation: "California",
  },
  {
    desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content",
    img: person2,
    name: "Winson Herry",
    designation: "California",
  },
  {
    desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content",
    img: person3,
    name: "Winson Herry",
    designation: "California",
  },
  {
    desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content",
    img: person1,
    name: "Winson Herry",
    designation: "California",
  },
  {
    desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content",
    img: person2,
    name: "Winson Herry",
    designation: "California",
  },
  {
    desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content",
    img: person3,
    name: "Winson Herry",
    designation: "California",
  },
  {
    desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content",
    img: person1,
    name: "Winson Herry",
    designation: "California",
  },
  {
    desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content",
    img: person2,
    name: "Winson Herry",
    designation: "California",
  },
  {
    desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content",
    img: person3,
    name: "Winson Herry",
    designation: "California",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial">
      <Container>
        <div className="section-title">
          <h5>TESTIMONIAL</h5>
          <h3>
            What’s Our Patients <br /> Says
          </h3>
        </div>
        <Slider {...settings}>
          {testimonialData.map((testimonial, idx) => (
            <TestimonialCard key={idx} testimonial={testimonial}></TestimonialCard>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Testimonial;
