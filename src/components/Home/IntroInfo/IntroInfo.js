import React from "react";
import { Container, Row } from "react-bootstrap";
import InfoCard from "./InfoCard";

const infoList = [
  {
    title: "Opening Hours",
    desc: "Lorem Ipsum is simply dummy text of the pri",
    icon: "far fa-clock",
    background: "#f67062",
  },
  {
    title: "Visit our location",
    desc: "Brooklyn, NY 10036, United States",
    icon: "fas fa-map-marker-alt",
    background: "#3A4256",
  },
  {
    title: "Contact us now",
    desc: "+000 123 456789",
    icon: "fal fa-phone-alt",
    background: "#f67062",
  },
];

const IntroInfo = () => {
  return (
    <section className="intro-info">
      <Container>
        <Row>
          {infoList.map((info, idx) => (
            <InfoCard key={idx} info={info}></InfoCard>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default IntroInfo;
