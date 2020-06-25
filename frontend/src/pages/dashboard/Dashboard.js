import React from "react";
import Navbar from "./components/Navbar";
import ChatBoard from "./components/ChatBoard";
import ChatGroups from "./components/ChatGroups";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-navbar">
        <Navbar />
      </div>
      <div className="dashboard-body">
        <ChatGroups />
        <ChatBoard />
      </div>
    </div>
  );
}

export default Dashboard;
