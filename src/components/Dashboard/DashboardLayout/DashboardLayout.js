import React, { useContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import AddDoctor from "../DashDoctors/AddDoctor/AddDoctor";
import DashAppointments from "../DashAppointments/DashAppointments";
import Dashboard from "../Dashboard/Dashboard";
import Sidebar from "../Sidebar/Sidebar";
import "./DashboardLayout.css";
import DashDoctors from "../DashDoctors/DashDoctors/DashDoctors";
import { userContext } from "../../../App";

const Layout = () => {
  const { loggedUser, isAdmin, setIsAdmin } = useContext(userContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://shrouded-brook-48467.herokuapp.com/checkAdmin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: loggedUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data);
        setLoading(false);
      });
  }, [loggedUser.email, setIsAdmin]);

  return (
    <main>
      <Sidebar />
      {!loading && (
        <section className="dashboard-content">
          <Switch>
            {isAdmin && (
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
            )}
            <Route path="/dashboard/appointments">
              <DashAppointments />
            </Route>
            {isAdmin && (
              <Route path="/dashboard/doctors">
                <DashDoctors />
              </Route>
            )}
            {isAdmin && (
              <Route path="/dashboard/add-doctor">
                <AddDoctor />
              </Route>
            )}
          </Switch>
        </section>
      )}
    </main>
  );
};

export default Layout;
