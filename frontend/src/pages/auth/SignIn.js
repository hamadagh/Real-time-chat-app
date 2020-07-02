import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import "./AuthStyle.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      marginRight: "auto",
      marginLeft: "auto",
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
    marginRight: "auto",
    marginLeft: "auto",
  },
}));

const SignIn = ({ passedFunction }) => {
  const classes = useStyles();
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const signUserIn = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    axios
      .post(
        "http://localhost:3001/user/login",
        `email=${email}&password=${password}`
      )
      .then((res) => {
        console.log("user signed in successfully !!");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(email, password);
  };

  return (
    <div className="sign-in">
      <div className="sign-in-form">
        <h2 className="sign-in-title">Sign in</h2>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={signUserIn}
        >
          <TextField
            id="outlined-basic"
            label="Email"
            variant="filled"
            className="input-field"
            inputRef={emailRef}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="filled"
            className="input-field"
            inputRef={passwordRef}
          />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={signUserIn}
          >
            Sign In
          </Button>
        </form>
        <p className="sign-in-footer">
          Not registered yet?{" "}
          <span className="sign-up-button" onClick={() => passedFunction()}>
            Sign up
          </span>
        </p>
      </div>
      <div className="sign-in-caroussel"></div>
    </div>
  );
};

export default SignIn;
