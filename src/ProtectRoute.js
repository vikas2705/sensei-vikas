import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/auth";

function ProtectRoute() {
  const { authTokens } = useAuth();

  return authTokens?.isLoggedIn === 1 ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectRoute;
