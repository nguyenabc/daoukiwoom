import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const RequiredAuth = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

  const userLogined = () => {
    if (user) {
      auth?.updateUserLogined(user);
    }
  };

  useEffect(() => {
    userLogined();
  }, []);

  if (!auth?.isAuthen && !user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequiredAuth;
