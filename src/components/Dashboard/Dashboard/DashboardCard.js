import React from "react";
import { Card, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import "./DashboardCard.css";

const DashboardCard = ({ item }) => {
  const { number, title, bg, link } = item;
  const history = useHistory();

  const handleMove = () => {
    history.push(link);
  };

  return (
    <Col lg={3} sm={6}>
      <Card onClick={handleMove} className="text-white dashboard-card" style={{ background: bg }}>
        <Card.Body className="d-flex align-items-center justify-content-center">
          <div className="dashboard-card-number">{number}</div>
          <div className="dashboard-card-text">{title}</div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DashboardCard;
