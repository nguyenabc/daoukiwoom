import React from "react";
import "./PriceBox.css";

const PriceBox = ({ title, hint, price, currency, time }) => {
  return (
    <>
      <div className="price-box">
        <p className="title">{title}</p>
        <p className="hint">{hint}</p>
        <div className="price">
          <p className="number">{price}</p>
          <div className="currency">
            <p>{currency}</p>
            <p>{`Per ${time}`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceBox;
