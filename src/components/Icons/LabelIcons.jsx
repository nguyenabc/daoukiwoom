import React from "react";
import "./LabelIcons.css";

const LabelIcons = ({ label, iconName }) => {
  return (
    <>
      <div className="label-container">
        <p className="label">{label}</p>
        <label className="icon">{iconName}</label>
      </div>
    </>
  );
};

export default LabelIcons;
