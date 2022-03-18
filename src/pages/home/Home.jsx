import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "./Home.css";

const Home = () => {
  const auth = useAuth();

  return (
    <p>
      Welcome {auth?.user?.name}!{" "}
      <button onClick={() => auth.signOut()}>Sign out</button>
    </p>
  );
};

export default Home;
