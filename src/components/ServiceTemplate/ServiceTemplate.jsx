import React from "react";
import LabelIcons from "../Icons/LabelIcons";
import "./ServiceTemplate.css";

const ServiceTemplate = () => {
  return (
    <>
      <div className="service-container">
        <div>
          <img src="/assets.svg" alt="" />
        </div>
        <div>
          <p className="service-title">ASSETS</p>
          <div className="asset-service">
            <LabelIcons label="Inventory Management" iconName="G-Book" />
          </div>
        </div>
      </div>

      <div className="service-container dark">
        <div>
          <p className="service-title">ACCOUNTING</p>
          <div>
            <LabelIcons label="Accounting" iconName="G-Book" />
          </div>
        </div>
        <div>
          <img src="/accounting.svg" alt="" />
        </div>
      </div>

      <div className="service-container">
        <div>
          <img src="/hrandadmin.svg" alt="" />
        </div>
        <div>
          <p className="service-title">HR & ADMIN</p>
          <div className="hr-admin-service">
            <LabelIcons label="Webmail" iconName="E-office" />
            <LabelIcons label="E-Approval" iconName="E-office" />
            <LabelIcons label="E-Document" iconName="E-office" />
            <LabelIcons label="E-Check in.out" iconName="E-office" />
            <LabelIcons label="Co-work/Project" iconName="E-office" />
          </div>
        </div>
      </div>

      <div className="service-container dark">
        <div>
          <p className="service-title">SALES</p>
          <div>
            <LabelIcons
              label={
                <>
                  {"Create HomePage"} <br /> {"Youtube & Instagram"}
                </>
              }
              iconName="Fieldmake"
            />
          </div>
        </div>
        <div>
          <img src="/sales.svg" alt="" />
        </div>
      </div>

      <div className="service-container">
        <div>
          <img src="/customer.svg" alt="" />
        </div>
        <div>
          <p className="service-title">CUSTOMER</p>
          <div>
            <LabelIcons label="Customer Request Management" iconName="OQUFIE" />
          </div>
        </div>
      </div>

      <div className="service-container dark">
        <div>
          <p className="service-title">SECURITY</p>
          <div>
            <LabelIcons label="SSL server" iconName="SECTIGO" />
          </div>
        </div>
        <div>
          <img src="/security.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default ServiceTemplate;
