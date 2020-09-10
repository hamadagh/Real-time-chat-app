import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./dashboard.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "35vw",
      height: "10vh",
    },
  },
}));

const Dashboard = ({ socket }) => {
  const classes = useStyles();
  return (
    <div className="dashboard">
      <div className={classes.root} id="chat-room">
        <Button variant="outlined" color="primary">
          Development Team
        </Button>
        <Button variant="outlined" color="primary">
          Marketing Team
        </Button>
        <Button variant="outlined" color="primary">
          Design Team
        </Button>
        <Button variant="outlined" color="primary">
          Finance Team
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
