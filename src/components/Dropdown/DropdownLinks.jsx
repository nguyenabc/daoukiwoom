import React from "react";
import "./DropdownLinks.css";

const DropdownLinks = ({ labelName, links }) => {
  return (
    <>
      <div className="dropdown-links">
        <button className="drop-button">
          {labelName || "Dropdown"} <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          {links &&
            links.map((link) => (
              <a key={link?.label} href={link?.url || "#"}>
                {link?.label || ""}
              </a>
            ))}
        </div>
      </div>
    </>
  );
};

export default DropdownLinks;
