import React, { useState } from "react";

const authProvider = {
  isAuthenticate: false,
  signIn: (callback) => {
    authProvider.isAuthenticate = true;
    setTimeout(callback, 100);
  },
  signOut: (callback) => {
    authProvider.isAuthenticate = false;
    setTimeout(callback, 100);
  },
};

const AuthContext = React.createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const signIn = (newUser, callback) => {
    return authProvider.signIn(() => {
      setUser(newUser);
      callback();
    });
  };

  const signOut = (callback) => {
    return authProvider.signOut(() => {
      setUser(null);
      callback();
    });
  };

  const value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext };
