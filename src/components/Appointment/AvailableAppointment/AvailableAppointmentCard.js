import React, { useState } from "react";
import { Col } from "react-bootstrap";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import "./AvailableAppointmentCard.css";

const AvailableAppointmentCard = ({ appointment, onAppointmentSubmit, selectedDate }) => {
  const { title, timeFrom, timeTo, space } = appointment;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Col md={4}>
      <div className="available-appointment-card card shadow border-0">
        <div className="card-body">
          <h4>{title}</h4>
          <h6>
            {timeFrom} - {timeTo}
          </h6>
          <p>
            <small className="text-muted">{space} space available</small>
          </p>
          <button onClick={handleShow} className="button main-btn">
            Book Appointment
          </button>
          <AppointmentForm appointment={appointment} selectedDate={selectedDate} timeFrom={timeFrom} title={title} show={show} handleClose={handleClose} onAppointmentSubmit={onAppointmentSubmit} />
        </div>
      </div>
    </Col>
  );
};

export default AvailableAppointmentCard;
