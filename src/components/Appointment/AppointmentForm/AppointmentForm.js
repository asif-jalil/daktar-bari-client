import { Modal } from "react-bootstrap";
import React, { useContext } from "react";
import "./AppointmentForm.css";
import { useForm } from "react-hook-form";
import { bookingContext } from "../AvailableAppointment/AvailableAppointment";

const AppointmentForm = ({ appointment, show, handleClose, selectedDate, timeFrom, title }) => {
  const [setBookAppointment] = useContext(bookingContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onAppointmentSubmit = (data) => {
    setBookAppointment(false);
    const appointmentDetails = { package: title, appointmentTime: timeFrom, ...data, appointmentDate: selectedDate.toDateString() };

    fetch("https://shrouded-brook-48467.herokuapp.com/addAppointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentDetails),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          handleClose();
          setBookAppointment(true);
          reset();
        }
      });
  };

  return (
    <Modal className="appointment-modal" show={show} onHide={handleClose} animation={false} size="lg" centered>
      <Modal.Header>
        <Modal.Title>{appointment.title}</Modal.Title>
        <button type="button" className="button icon-btn" onClick={handleClose}>
          <i className="fal fa-times"></i>
        </button>
      </Modal.Header>
      <Modal.Body>
        <form id="appointment-form" className="appointment-form" onSubmit={handleSubmit(onAppointmentSubmit)}>
          <div className="mb-4">
            <input className="form-control" {...register("patientName", { required: true })} placeholder="Your Name" />
            {errors.patientName && <span className="error">This field is required</span>}
          </div>

          <div className="mb-4">
            <input className="form-control" {...register("patientPhone", { required: true })} placeholder="Phone Number" />
            {errors.patientPhone && <span className="error">This field is required</span>}
          </div>

          <div className="mb-4">
            <input className="form-control" {...register("patientEmail", { required: true, pattern: /\S+@\S+\.\S+/ })} placeholder="Email Address*" />
            {errors.patientEmail && <span className="error">This field is required</span>}
          </div>

          <Modal.Footer>
            <button className="button main-btn">Make Appointment</button>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AppointmentForm;
