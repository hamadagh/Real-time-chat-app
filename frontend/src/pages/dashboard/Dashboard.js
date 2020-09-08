import React from "react";
import Navbar from "./components/Navbar";
import "./dashboard.css";

const Dashboard = ({ socket }) => {
  return (
    <div className="dashboard">
      <div className="dashboard-navbar">
        <Navbar />
      </div>
    </div>
  );
};

export default Dashboard;
