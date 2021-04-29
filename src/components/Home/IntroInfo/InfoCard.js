import React from "react";
import "./InfoCard.css";
import { Col } from "react-bootstrap";

const InfoCard = ({ info }) => {
  const { title, desc, icon, background } = info;

  return (
    <Col md={4}>
      <div style={{ background: background }} className="infocard">
        <div className="info-icon">
          <i className={icon}></i>
        </div>
        <div className="info-detail">
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </Col>
  );
};

export default InfoCard;
