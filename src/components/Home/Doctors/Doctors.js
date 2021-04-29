import React, { useEffect, useState } from "react";
import "./Doctors.css";
import { Container, Row } from "react-bootstrap";
import DoctorCard from "./DoctorCard";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("https://shrouded-brook-48467.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDoctors(data);
      });
  }, []);

  return (
    <section className="doctors">
      <Container>
        <div className="section-title">
          <h5>Doctors</h5>
        </div>
        <div className="doctor-wrapper">
          <Row>
            {doctors.map((doctor, idx) => (
              <DoctorCard key={idx} doctor={doctor}></DoctorCard>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Doctors;
