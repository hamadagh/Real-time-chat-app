import React from "react";
import Navbar from "./components/Navbar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { blue } from "@material-ui/core/colors";
import "./dashboard.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "90vw",
    },
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    "&:hover": {
      backgroundColor: blue[700],
    },
  },
}))(Button);

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
              <ColorButton variant="contained" color="primary">
                Custom CSS
              </ColorButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
