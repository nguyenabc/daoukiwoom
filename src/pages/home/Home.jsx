import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "./Home.css";

const Home = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <p>
      Welcome {auth.user}!{" "}
      <button
        onClick={() => {
          auth.signOut(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </p>
  );
};

export default Home;
