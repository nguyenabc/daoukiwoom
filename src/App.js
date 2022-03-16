import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RequiredAuth from "./auth/RequiredAuth";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import AuthProvider from "./store/auth-context";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />}></Route>
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        ></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
