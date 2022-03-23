import React from "react";
import Footer from "../../components/Footer/Footer";
import TopNavigate from "../../components/Navigate/TopNavigate/TopNavigate";
import ServiceTemplate from "../../components/ServiceTemplate/ServiceTemplate";
import Tabs from "../../components/Tabs/Tabs";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="home-page">
        <TopNavigate />
        <div className="introduction">
          <div className="left">
            <p>
              Asia IT <br /> Market Place
            </p>
          </div>
          <div className="right">
            <Tabs />
          </div>
        </div>
      </div>
      <div className="highlight">
        <p>
          You are now viewing an <b>IT Software</b> that has been verified by{" "}
          <b>over 1 million users</b>
        </p>
      </div>
      <div className="services">
        <p className="title">IT CLOUD SEA'S IT SERVICE</p>
        <ServiceTemplate />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
