import React, { useContext } from "react";
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { userContext } from "../../App";
import logo from "../../images/teeth.svg"
import "./Header.css";

const Header = () => {
  const { loggedUser, isAdmin } = useContext(userContext);

  return (
    <header className="home-header">
      <Navbar expand="lg">
        <NavbarBrand><img src={logo} alt=""/> Daktar Bari</NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink className="nav-link dark" exact to="/">
              Home
            </NavLink>
            <NavLink className="nav-link dark" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link dark" to="/service">
              Dental Service
            </NavLink>
            <NavLink className="nav-link dark" to="/appointment">
              Appointment
            </NavLink>
            <NavLink className="nav-link dark" to="/blog">
              Blog
            </NavLink>
            {loggedUser?.email ? (
              <>
                <NavLink className="nav-link dark" to={isAdmin ? "/dashboard" : "/dashboard/appointments"}>
                  Dashboard ({loggedUser.displayName})
                </NavLink>
              </>
            ) : (
              <NavLink className="nav-link dark" to="/login">
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
