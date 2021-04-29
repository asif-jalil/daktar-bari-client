import jwt_decode from "jwt-decode";
import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { userContext } from "../../../App";

export const isLoggedIn = () => {
  const jwtToken = sessionStorage.getItem("token");

  if (!jwtToken) {
    return false;
  }

  const decodeToken = jwt_decode(jwtToken);
  const currentTime = new Date().getTime() / 1000;
  console.log(decodeToken);

  return decodeToken.exp > currentTime;
};

const PrivateRoute = ({ children, ...rest }) => {
  const { loggedUser } = useContext(userContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedUser.email || isLoggedIn() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
