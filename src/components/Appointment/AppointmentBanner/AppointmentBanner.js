import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bannerImg from "../../../images/banner-img.jpg";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./AppointmentBanner.css";

const AppointmentBanner = ({ onChangeDate, selectedDate }) => {
  return (
    <section className="banner">
      <Container>
        <Row>
          <Col md={6}>
            <div className="banner-calender-wrapper">
              <h2 className="mb-4">Appointment</h2>
              <Calendar onChange={onChangeDate} value={selectedDate} className="banner-calender shadow" minDate={new Date()} />
            </div>
          </Col>

          <Col md={6}>
            <div className="banner-img">
              <img src={bannerImg} className="img-fluid" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AppointmentBanner;
