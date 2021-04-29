import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import DashDoctorCard from "./DashDoctorCard";
import "./DashDoctor.css";

const DashDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [status, setStatus] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch("https://shrouded-brook-48467.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
        setLoader(false);
      });
  }, [status]);

  const handleRemoveDoctor = (id) => {
    setStatus(false);
    fetch(`https://shrouded-brook-48467.herokuapp.com/removeDoctor?id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setStatus(true);
        }
      });
  };

  return (
    <Container fluid>
      <h3 className="dashboard-page-title">
        Doctors{" "}
        <Link to="add-doctor" className="button main-btn-sm ml-5">
          Add New
        </Link>
      </h3>
      <div className="dashboard-total-doctors">
        {loader ? (
          <Spinner animation="border"></Spinner>
        ) : (
          <Row>
            {doctors.map((doctor, idx) => (
              <DashDoctorCard key={idx} doctor={doctor} handleRemoveDoctor={handleRemoveDoctor} />
            ))}
          </Row>
        )}
      </div>
    </Container>
  );
};

export default DashDoctors;
