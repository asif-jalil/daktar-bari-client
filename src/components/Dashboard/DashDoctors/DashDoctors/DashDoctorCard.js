import React, { useState } from "react";
import { Card, Col, Spinner } from "react-bootstrap";
import "./DashDoctorCard.css";

const DashDoctorCard = ({ doctor, handleRemoveDoctor }) => {
  const { _id, doctorImg, doctorName, specialist, doctorEmail } = doctor;
  const [loader, setLoader] = useState(false);

  const handleClick = () => {
    setLoader(true);
    handleRemoveDoctor(_id);
  };

  return (
    <Col md={6}>
      <Card className="shadow border-0 dashboard-doctor">
        <Card.Body className="d-flex align-items-start">
          {typeof doctorImg === "string" ? (
            <img className="mr-3" src={`https://shrouded-brook-48467.herokuapp.com/${doctorImg}`} alt="" />
          ) : (
            <img className="mr-3" src={`data:image/jpeg;base64, ${doctorImg.img}`} alt="" />
          )}

          <div>
            <Card.Title className="mb-3">{doctorName}</Card.Title>
            <Card.Subtitle className="mb-2">{specialist}</Card.Subtitle>
            <Card.Text>{doctorEmail}</Card.Text>
          </div>
          {loader ? (
            <Spinner animation="border"></Spinner>
          ) : (
            <button onClick={handleClick} className="button icon-btn">
              <i className="fas fa-trash"></i>
            </button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DashDoctorCard;
