import React from "react";
import "./CallToAction.css";
import doctor from "../../../images/doctor.png";
import { Col, Container, Row } from "react-bootstrap";

const CallToAction = () => {
  return (
    <section className="c2a">
      <Container>
        <Row>
          <Col md={6}>
            <div className="c2a-img">
              <img src={doctor} alt="" className="img-fluid" />
            </div>
          </Col>
          <Col md={6}>
            <div className="c2a-content">
              <div className="section-title">
                <h5>APPOINTMENT</h5>
                <h3>
                  Make an appointment <br /> Today
                </h3>
              </div>
              <p>It is a long established fact that a reader will be distractedby the readable content of a page when looking at its</p>
              <a href="/about" className="button main-btn">
                Learn More
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallToAction;
