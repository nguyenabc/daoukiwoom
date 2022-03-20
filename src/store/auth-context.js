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
      setIsAuthen(true);
    }
    return isAuthenticated;
  };

  const signOut = () => {
    setUser(null);
    setIsAuthen(false);
    navigate("/");
  };

  const value = { isAuthen, user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext };
