import React from "react";
import "./Service.css";
import { Container, Row } from "react-bootstrap";
import fluorideIcon from "../../../images/service/1.svg";
import cavityIcon from "../../../images/service/2.svg";
import teethIcon from "../../../images/service/3.svg";
import ServiceCard from "./ServiceCard";

const serviceInfo = [
  {
    icon: fluorideIcon,
    title: "Fluoride Treatment",
    desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the typesetting indust Ipsum has been the",
  },
  {
    icon: cavityIcon,
    title: "Cavity Filling",
    desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the typesetting indust Ipsum has been the",
  },
  {
    icon: teethIcon,
    title: "Teeth Whitening",
    desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the typesetting indust Ipsum has been the",
  },
];

const Service = () => {
  return (
    <section className="service">
      <Container>
        <div className="section-title">
          <h5>Our Services</h5>
          <h3>Services We Provide</h3>
        </div>
        <Row>
          {serviceInfo.map((info, idx) => (
            <ServiceCard key={idx} info={info}></ServiceCard>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Service;
