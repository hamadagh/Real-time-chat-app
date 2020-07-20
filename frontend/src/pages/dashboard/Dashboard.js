import React from "react";
import Navbar from "./components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./dashboard.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "90%",
    },
  },
}));

const Dashboard = ({ socket }) => {
  const classes = useStyles();

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
          <div className="board-header">
            <h3>Tech Team</h3>
          </div>
          <div className="board-content">
            <div className="received-message">
              <span className="received">Tamim: </span>Moin
            </div>
            <div className="sent-message">
              <span className="sent">Hamada: </span>Sabahoo!
            </div>
          </div>
          <div className="board-input">
            <div>
              <TextField id="filled-basic" label="Filled" variant="filled" />
            </div>
            <div>
              <button className="send-button">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
