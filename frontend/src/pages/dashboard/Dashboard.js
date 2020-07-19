import React from "react";
import Navbar from "./components/Navbar";
import io from "socket.io-client";
import "./dashboard.css";

function Dashboard() {
  const socket = io.connect("http://localhost:3001");
  return (
    <div className="dashboard">
      <div className="dashboard-navbar">
        <Navbar />
      </div>
      <div className="dashboard-body">
        <div className="chat-users">
          <h3>Users</h3>
        </div>
        <div className="chat-board">
          <h3>Chat title</h3>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
