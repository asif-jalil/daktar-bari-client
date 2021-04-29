import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import bannerImg from "../../../images/banner-doctor.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="banner">
      <Container>
        <Row className="align-items-center">
          <Col md={5}>
            <div className="banner-content">
              <h1>
              It’s time to <br/> smile again.
              </h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the</p>
              <Link to="/appointment" className="button main-btn text-uppercase">
                Get Appointment
              </Link>
            </div>
          </Col>

          <Col md={7}>
            <div className="banner-img">
              <img src={bannerImg} className="img-fluid" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
