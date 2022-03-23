import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import DropdownLinks from "../../Dropdown/DropdownLinks";
import "./TopNavigate.css";

const NAVIGATE_LINKS = [
  "Auto Homepage",
  "Sales",
  "CRM",
  "Electronic office",
  "Cloud ERP",
  "SSL",
];

const TopNavigate = () => {
  const auth = useAuth();

  const logOutHandler = () => auth?.signOut();

  return (
    <div>
      <div className="top-bar">
        <DropdownLinks
          labelName="EN"
          links={[
            { url: "", label: "English" },
            { url: "", label: "Vietnamese" },
          ]}
        />
        <DropdownLinks
          labelName="Company"
          links={[
            { url: "", label: "Company A" },
            { url: "", label: "Company B" },
          ]}
        />
        <DropdownLinks
          labelName="Partner Market Place"
          links={[{ url: "", label: "Company C" }]}
        />
        <div>
          <button
            name="logout-btn"
            className="logout-btn"
            onClick={logOutHandler}
          >
            <i className="fa fa-sign-out"></i> Log out
          </button>
        </div>
      </div>
      <div className="navigation">
        <div className="logo-container">
          <div>
            <img src="/logo.png" alt="logo" />
          </div>
          <div>
            <a href="#">
              <img src="/home-icon.svg"></img> Home
            </a>
          </div>
        </div>
        <div className="nav-link">
          {NAVIGATE_LINKS.map((item) => (
            <div key={item}>
              <a href="#">{item}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopNavigate;
