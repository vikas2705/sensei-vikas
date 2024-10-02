import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/auth";

function PrivateRoute({ component: Component, ...rest }) {
  const { authTokens } = useAuth();
  const subscription = window.localStorage.getItem("subscription")
    ? JSON.parse(window.localStorage.subscription)
    : { email: "" };

  return !authTokens ? (
    <Navigate to="/login" />
  ) : authTokens?.isLoggedIn === 1 &&
    authTokens?.email === subscription.email ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
}

export default PrivateRoute;
