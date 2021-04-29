import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const footerBlock1 = ["Emergency Dental Care", "Check Up", "Treatment of Personal Diseases", "Tooth Extraction", "Check Up"];
const socialInfo = [
  {
    icon: "fab fa-facebook-f",
    link: "https://facebook.com",
  },
  {
    icon: "fab fa-twitter",
    link: "https://facebook.com",
  },
  {
    icon: "fab fa-linkedin-in",
    link: "https://facebook.com",
  },
];

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col lg={3} md={6}>
            <div className="mb-4">
              <h5 className="footer-header">Useful Links</h5>
              <ul className="footer-list">
                {footerBlock1.map((info, idx) => (
                  <li key={idx}>
                    <a href="/blog">{info}</a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="mb-4">
              <h5 className="footer-header">Services</h5>
              <ul className="footer-list">
                {footerBlock1.map((info, idx) => (
                  <li key={idx}>
                    <a href="/blog">{info}</a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="mb-4">
              <h5 className="footer-header">Oral Health</h5>
              <ul className="footer-list">
                {footerBlock1.map((info, idx) => (
                  <li key={idx}>
                    <a href="/blog">{info}</a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="mb-5">
              <h5 className="footer-header">Our Address</h5>
              <p className="footer-text">New York - 101010 Hudson Yards</p>
              <div className="footer-social">
                {socialInfo.map((info, idx) => (
                  <span key={idx}>
                    <a href={info.link}>
                      <i className={info.icon}></i>
                    </a>
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h6 className="text-secondary mb-3">Call Now</h6>
              <span className="button main-btn">+2025550295</span>
            </div>
          </Col>
        </Row>
        <div className="copyright">
          <p>Copyright 2020 All Rights Reserved</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
