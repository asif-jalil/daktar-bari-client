import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Container, Row, Table, Spinner } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { userContext } from "../../../App";
import "./DashAppointments.css";

const Appointments = () => {
  const { loggedUser } = useContext(userContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bookedAppointment, setBookedAppointment] = useState([]);
  const [loader, setLoader] = useState(false);
  const onChangeDate = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    setLoader(true);
    fetch("https://shrouded-brook-48467.herokuapp.com/appointmentByDate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date: selectedDate.toDateString(), email: loggedUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setBookedAppointment(data);
        setLoader(false);
      });
  }, [selectedDate, loggedUser]);

  return (
    <Container fluid>
      <h3 className="dashboard-page-title">Appointments</h3>
      <Row>
        <Col lg={6}>
          <Calendar onChange={onChangeDate} value={selectedDate} className="dashboard-calender shadow" />
        </Col>
        <Col lg={6}>
          <Card className="border-0 shadow dashboard-appointments">
            <Card.Body>
              <Card.Title className="theme-text mb-5 d-flex justify-content-between">
                <span>Appointments</span>
                <small className="text-secondary">{selectedDate.toDateString()}</small>
              </Card.Title>
              <Table borderless>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Schedule</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {loader && <Spinner animation="border" />}
                  {!loader &&
                    bookedAppointment.map((appointment) => (
                      <tr>
                        <td>{appointment.patientName}</td>
                        <td>{appointment.appointmentTime}</td>
                        <td>
                          <select className="form-control">
                            <option value="notVisited">Not Visited</option>
                            <option value="visited">Visited</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  {!loader && !bookedAppointment.length && (
                    <tr>
                      <td colspan="3">
                        <h6 className="text-center theme-text">There is no appointment today</h6>
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Appointments;
