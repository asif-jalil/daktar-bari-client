import React from "react";
import "./ServiceCard.css";
import { Col } from "react-bootstrap";

const ServiceCard = ({ info }) => {
  const { title, icon, desc } = info;

  return (
    <Col md={4}>
      <div className="service-item">
        <div className="icon">
          <img src={icon} alt="" />
        </div>
        <div className="detail">
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </Col>
  );
};

export default ServiceCard;
