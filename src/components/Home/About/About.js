/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./About.css";
import { Col, Container, Row } from "react-bootstrap";
import baby from "../../../images/baby.png";

const About = () => {
  return (
    <section className="about">
      <Container>
        <Row className="align-items-center">
          <Col lg={5} md={6}>
            <div className="about-img">
              <img src={baby} alt="" className="img-fluid" />
            </div>
          </Col>
          <Col lg={7} md={6}>
            <div className="about-detail">
              <h3>
                Exceptional Dental <br /> Care, on Your Terms
              </h3>
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page{" "}
              </p>
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

export default About;
