import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const [msgUsername, setMsgUsername] = useState(false);
  const [msgPassword, setMsgPassword] = useState(false);
  const [msgAuthentication, setAuthentication] = useState(false);

  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const userName = formData.get("username");
    const passWord = formData.get("password");

    if (userName && passWord) {
      const user = {
        userName,
        passWord,
      };

      const isAuthen = await auth?.signIn(user);
      isAuthen
        ? navigate(from !== "/login" && from !== "/" ? from : "/home", {
            replace: true,
          })
        : setAuthentication(true);
      return;
    }

    userName ? setMsgUsername(false) : setMsgUsername(true);
    passWord ? setMsgPassword(false) : setMsgPassword(true);
    return;
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit}>
          {msgAuthentication && (
            <p className="message">
              * Your username or password is not correct. Please check again!
            </p>
          )}
          <input type="text" name="username" placeholder="username" />
          {msgUsername && (
            <p className="message">* Please input your username.</p>
          )}

          <input type="password" name="password" placeholder="password" />
          {msgPassword && (
            <p className="message">* Please input your password.</p>
          )}

          <button>login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
