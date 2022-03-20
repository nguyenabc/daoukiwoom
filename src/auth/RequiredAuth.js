import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const RequiredAuth = ({ children }) => {
  let auth = useAuth();
  let location = useLocation();

  if (!auth?.isAuthen) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequiredAuth;
