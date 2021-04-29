import React from "react";
import "./DoctorCard.css";
import { Col } from "react-bootstrap";

const DoctorCard = ({ doctor }) => {
  const { doctorImg, doctorName, doctorEmail } = doctor;

  return (
    <Col md={4}>
      <div className="single-doctor">
        {typeof doctorImg === "string" ? (
          <img className="mr-3" src={`https://shrouded-brook-48467.herokuapp.com/${doctorImg}`} alt="" />
        ) : (
          <img className="mr-3" src={`data:image/jpeg;base64, ${doctorImg.img}`} alt="" />
        )}
        <h6>{doctorName}</h6>
        <span>
          <i className="fas fa-envelope"></i> {doctorEmail}
        </span>
      </div>
    </Col>
  );
};

export default DoctorCard;
