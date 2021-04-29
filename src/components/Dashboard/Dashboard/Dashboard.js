import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./Dashboard.css";
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
  const [totalAppointment, setTotalAppointment] = useState(0);
  const [todaysAppointment, setTodaysAppointment] = useState(0);
  const [totalDoctor, setTotalDoctor] = useState(0);

  useEffect(() => {
    fetch("https://shrouded-brook-48467.herokuapp.com/appointments")
      .then((res) => res.json())
      .then((data) => {
        setTotalAppointment(data.length);
      });
  }, []);

  useEffect(() => {
    fetch("https://shrouded-brook-48467.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => {
        setTotalDoctor(data.length);
      });
  }, []);

  useEffect(() => {
    fetch("https://shrouded-brook-48467.herokuapp.com/appointmentByDate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date: new Date().toDateString() }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodaysAppointment(data.length);
      });
  }, []);

  const dashboardItems = [
    {
      number: "09",
      title: "Pending Appointments",
      bg: "#F1536E",
      link: "/dashboard",
    },
    {
      number: todaysAppointment,
      title: "Todays Appointments",
      bg: "#3DA5F4",
      link: "/dashboard/appointments",
    },
    {
      number: totalAppointment,
      title: "Total Appointments",
      bg: "#00C689",
      link: "/dashboard",
    },
    {
      number: totalDoctor,
      title: "Total Doctor",
      bg: "#FDA006",
      link: "/dashboard/doctors",
    },
  ];

  return (
    <Container fluid>
      <h3 className="dashboard-page-title">Dashboard</h3>
      <Row>
        {dashboardItems.map((item, idx) => (
          <DashboardCard key={idx} item={item} />
        ))}
      </Row>
    </Container>
  );
};

export default Dashboard;
