import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticate, getUser } from "../auth/authenticate";

const AuthContext = React.createContext(null);

export default function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isAuthen, setIsAuthen] = useState(false);

  const signIn = async (userLogin) => {
    const isAuthenticated = await authenticate(userLogin);
    if (isAuthenticated) {
      setUser(getUser(userLogin));
      localStorage.setItem("user", JSON.stringify(getUser(userLogin)));
      setIsAuthen(true);
    }
    return isAuthenticated;
  };

  const signOut = () => {
    setUser(null);
    setIsAuthen(false);
    localStorage.removeItem("user");
    navigate("/");
  };

  const updateUserLogined = (userInfo) => {
    setUser(userInfo);
    setIsAuthen(true);
  };

  const value = { isAuthen, user, signIn, signOut, updateUserLogined };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext };
