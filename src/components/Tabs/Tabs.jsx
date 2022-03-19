import React from "react";
import "./Tabs.css";

const Tabs = () => {
  return (
    <div>
      <div className="tab-btn">
        <a href="#" className="active">
          Now
        </a>
        <a href="#">Future</a>
      </div>
      <div className="tab-content">
        <div>
          <p className="number">6</p>
          <p className="text">different IT Software Networks</p>
        </div>
        <div>
          <p className="number">32</p>
          <p className="text">partners</p>
        </div>
        <div>
          <p className="number">4</p>
          <p className="text">countries</p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
