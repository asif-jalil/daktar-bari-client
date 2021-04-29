import React, { createContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Login from "./components/Login/Login/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DashboardLayout from "./components/Dashboard/DashboardLayout/DashboardLayout";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import firebase from "firebase/app";

export const userContext = createContext();

function App() {
  const [loggedUser, setLoggedUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setLoggedUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <userContext.Provider value={{ loggedUser, setLoggedUser, isAdmin, setIsAdmin }}>
      <Router>
        {!loading && (
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/appointment">
              <Appointment />
            </Route>
            <Route path="/login">{loggedUser ? <Redirect to="/dashboard" /> : <Login />}</Route>
            <PrivateRoute path="/dashboard">
              <DashboardLayout />
            </PrivateRoute>
            <Route path="*">
              <Header />
              <Footer />
            </Route>
          </Switch>
        )}
      </Router>
    </userContext.Provider>
  );
}

export default App;
