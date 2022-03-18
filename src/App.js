import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { getAllUserById } from "./auth/authenticate";
import RequiredAuth from "./auth/RequiredAuth";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import AuthProvider from "./store/auth-context";

function App() {
  const usersUpdater = async () => {
    const listUser = localStorage.getItem("users");
    if (!listUser) {
      await getAllUserById();
    }
  };

  useEffect(() => {
    usersUpdater();
  }, []);

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
