import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./dashboard.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  button: {
    width: "35vw",
    height: "10vh",
  },
}));

const Dashboard = ({ socket }) => {
  const classes = useStyles();
  return (
    <div className="dashboard">
      <div className={classes.root} id="chat-rooms">
        <Link to="/dashboard/devteam">
          <Button variant="outlined" color="primary" className={classes.button}>
            <span>Development Team</span>
          </Button>
        </Link>
        <Link to="/dashboard/marketingteam">
          <Button variant="outlined" color="primary" className={classes.button}>
            <span>Marketing Team</span>
          </Button>
        </Link>
        <Link to="/dashboard/designteam">
          <Button variant="outlined" color="primary" className={classes.button}>
            <span>Design Team</span>
          </Button>
        </Link>
        <Link to="/dashboard/financeteam">
          <Button variant="outlined" color="primary" className={classes.button}>
            <span>Finance Team</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
