import React from "react";
import { AuthContext } from "../store/auth-context";

export const useAuth = () => {
  return React.useContext(AuthContext);
};
