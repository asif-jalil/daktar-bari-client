import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Container, Row, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Login.css";
import loginImg from "../../../images/login.png";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebase.config";
import { userContext } from "../../../App";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [isNew, setIsNew] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const { isAdmin } = useContext(userContext);
  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || !isAdmin ? { from: { pathname: "/dashboard/appointments" } } : { from: { pathname: "/dashboard" } };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onLoginSubmit = (data) => {
    setErrorMsg("");
    setSuccessMsg("");

    if (isNew) {
      if (data.password === data.confirmPassword) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(data.email, data.password)
          .then((userCredential) => {
            handleUpdateProfile(data.name);
            setIsNew(false);
            setSuccessMsg("You have SuccessFully Created Your Account.");
            reset();
          })
          .catch((error) => {
            const errorMessage = error.message;
            setErrorMsg(errorMessage);
          });
      } else {
        setErrorMsg("Password And Confirm Password Not Matched");
      }
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password)
        .then((result) => {
          // const { displayName, email } = result.user;
          // const signedInUser = { name: displayName, email };
          // setLoggedUser(signedInUser);
          storeAuthToken();
          // history.push(from);
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    }
  };

  const handleUpdateProfile = (name) => {
    const user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        // Update successful.
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
        history.push(from);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section className="login">
      <Container>
        <Row>
          <Col md={5}>
            <Card className="border-0 shadow">
              <Card.Body>
                <Card.Title className="text-center mb-5">Login / Register</Card.Title>
                {successMsg && <Alert variant="success">{successMsg}</Alert>}
                {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
                <form id="log-reg-form" className="log-reg-form mb-4" onSubmit={handleSubmit(onLoginSubmit)}>
                  {isNew && (
                    <div className="mb-4">
                      <input className="form-control" {...register("name", { required: true })} placeholder="Your Name" />
                      {errors.name && <span className="error">This field is required</span>}
                    </div>
                  )}

                  <div className="mb-4">
                    <input className="form-control" {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })} placeholder="Email Address*" />
                    {errors.email && <span className="error">This field is required</span>}
                  </div>

                  <div className="mb-4">
                    <input type="password" className="form-control" {...register("password", { required: true })} placeholder="Password" />
                    {errors.password && <span className="error">This field is required</span>}
                  </div>

                  {isNew && (
                    <div className="mb-4">
                      <input type="password" className="form-control" {...register("confirmPassword", { required: true })} placeholder="Confirm Password" />
                      {errors.confirmPassword && <span className="error">This field is required</span>}
                    </div>
                  )}

                  <button className="button main-btn w-100">{isNew ? "Create Account" : "Login"}</button>
                </form>
                {!isNew ? (
                  <p>
                    New Here?{" "}
                    <span onClick={() => setIsNew(true)} className="theme-text">
                      Create An Account
                    </span>
                  </p>
                ) : (
                  <p>
                    Already Have An Account?{" "}
                    <span onClick={() => setIsNew(false)} className="theme-text">
                      Login
                    </span>
                  </p>
                )}
                <p>
                  Wanna Go Home?{" "}
                  <Link to="/">
                    <span className="theme-text">Click Here</span>
                  </Link>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <div className="login-img">
        <img src={loginImg} alt="" />
      </div>
    </section>
  );
};

export default Login;
