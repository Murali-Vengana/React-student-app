import React from "react";
import logo from "../images/logo.jpeg";
import { Link } from "react-router-dom";
const LeftPanel = () => {
  return (
    <div className="left-panel">
      <div className="college-logo">
        <img
          src={logo}
          alt="ABC College"
          style={{ width: "100px", height: "auto" }}
        />
      </div>
      {/* Menu items */}
      <div>Dashboard</div>
      <Link to="/students">Students</Link>
      <div>Faculty</div>
      <div>Courses</div>
      <div>Fees</div>
    </div>
  );
};
export default LeftPanel;