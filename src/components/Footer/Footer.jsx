import React from "react";
import IndoOffice from "../Address/IndoOffice/IndoOffice";
import KoreaOffice from "../Address/KoreaOffice/KoreaOffice";
import VietNamOffice from "../Address/VietNamOffice/VietNamOffice";
import PriceBox from "../Boxes/PriceBox";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="price-container">
          <PriceBox
            title="Free Test"
            hint="Organize across all apps by hand"
            price="0"
            currency="$"
            time="Month"
          />
          <PriceBox
            title="Low Price"
            hint="Monthly Fixed Amount"
            price="200.000"
            currency="$"
            time="Month"
          />
          <PriceBox
            title="Easy Using Methods"
            hint="Various Manuals"
            price="200.000"
            currency="$"
            time="Month"
          />
          <PriceBox
            title="Verified IT Service"
            hint="On sale in 4 countries"
            price="0"
            currency="VND"
            time="Month"
          />
        </div>
        <div className="about-container">
          <div className="office-info border-right">
            <VietNamOffice />
          </div>
          <div className="office-info border-right">
            <IndoOffice />
          </div>
          <div className="office-info">
            <KoreaOffice />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
