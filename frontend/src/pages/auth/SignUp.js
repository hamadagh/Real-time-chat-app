import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./AuthStyle.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& label": {
      color: "white",
    },
  },
  button: {
    margin: theme.spacing(1),
    width: "32ch",
  },
}));

function SignUp() {
  const classes = useStyles();

  return (
    <div className="sign-up">
      <h2>Sign up</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Email"
          variant="filled"
          className="input-field"
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="filled"
          className="input-field"
        />
      </form>
      <Button className={classes.button} variant="contained" color="primary">
        Create Account
      </Button>
      <p>
        Have an account?<a>Log in</a>
      </p>
    </div>
  );
}

export default SignUp;
