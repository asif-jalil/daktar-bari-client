import React, { useState } from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const onChangeDate = (date) => {
    setSelectedDate(date);
  };

  return (
    <main>
      <Header />
      <AppointmentBanner onChangeDate={onChangeDate} selectedDate={selectedDate} />
      <AvailableAppointment selectedDate={selectedDate} />
      <Footer />
    </main>
  );
};

export default Appointment;
