import React, { createContext, useState } from "react";
import { Container, Row, Alert } from "react-bootstrap";
import "./AvailableAppointment.css";
import AvailableAppointmentCard from "./AvailableAppointmentCard";

const appointmentsInfo = [
  {
    title: "Teeth Orthodontics",
    timeFrom: "8:00 AM",
    timeTo: "9:00 AM",
    space: "10",
  },
  {
    title: "Cosmetic Dentistry",
    timeFrom: "10:05 am",
    timeTo: "11:30 am",
    space: "10",
  },
  {
    title: "Teeth Orthodontics",
    timeFrom: "8:00 AM",
    timeTo: "9:00 AM",
    space: "10",
  },
  {
    title: "Teeth Cleaning",
    timeFrom: "5:00 pm",
    timeTo: "6:30 pm",
    space: "10",
  },
  {
    title: "Cavity Protection",
    timeFrom: "7:00 am",
    timeTo: "8:30 am",
    space: "10",
  },
  {
    title: "Teeth Orthodontics",
    timeFrom: "8:00 AM",
    timeTo: "9:00 AM",
    space: "10",
  },
];

export const bookingContext = createContext();

const AvailableAppointment = ({ selectedDate }) => {
  const [bookAppointment, setBookAppointment] = useState(false);

  return (
    <bookingContext.Provider value={[setBookAppointment, bookAppointment]}>
      <section className="available-appointment">
        <Container>
          <div className="section-title">
            <h3>Available Appointments on {new Date(selectedDate).toDateString().split(" ").splice(1, 3).join(" ")}</h3>
          </div>
          <div className="available-appointment-card">
            {bookAppointment && <Alert variant="success">You have make an appointment successfully</Alert>}
            <Row>
              {appointmentsInfo.map((appointment, idx) => (
                <AvailableAppointmentCard key={idx} selectedDate={selectedDate} appointment={appointment}></AvailableAppointmentCard>
              ))}
            </Row>
          </div>
        </Container>
      </section>
    </bookingContext.Provider>
  );
};

export default AvailableAppointment;
