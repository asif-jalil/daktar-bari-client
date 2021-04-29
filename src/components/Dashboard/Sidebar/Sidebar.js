import React, { useContext, useState } from "react";
import { Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "./Sidebar.css";
import { userContext } from "../../../App";

const Sidebar = () => {
  const { loggedUser, setLoggedUser, isAdmin } = useContext(userContext);
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setLoggedUser({});
        sessionStorage.removeItem("token");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <aside className={`sidebar py-4 ${sidebarActive ? "active" : ""}`}>
      <Button onClick={toggleSidebar} className="sidebar-toggle d-block d-xl-none" variant="warning">
        {sidebarActive ? <i className="far fa-times"></i> : <i className="fas fa-bars"></i>}
      </Button>
      <h4 className="text-center text-white mb-5">{loggedUser.displayName}</h4>
      <Nav className="flex-column px-4">
        {isAdmin && (
          <NavLink exact to="/dashboard" className="nav-link">
            <i className="far fa-home"></i> Dashboard
          </NavLink>
        )}
        <NavLink to="/dashboard/appointments" className="nav-link">
          <i className="far fa-calendar"></i> Appointments
        </NavLink>
        {isAdmin && (
          <>
            <NavLink to="/dashboard/doctors" className="nav-link">
              <i className="fas fa-user-md"></i> Doctors
            </NavLink>
            <NavLink to="/dashboard/patients" className="nav-link">
              <i className="far fa-user-friends"></i> Patients
            </NavLink>
            <NavLink to="/dashboard/settings" className="nav-link">
              <i className="far fa-cog"></i> Settings
            </NavLink>
          </>
        )}
        <NavLink exact to="/" className="nav-link">
          <i className="far fa-home"></i> Home
        </NavLink>
        <NavLink onClick={handleLogout} exact to="/" className="nav-link mt-auto">
          <i className="fas fa-sign-out-alt"></i> Logout
        </NavLink>
      </Nav>
    </aside>
  );
};

export default Sidebar;
