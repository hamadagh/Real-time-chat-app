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

function SignIn() {
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
      <h2>Sign in</h2>
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

      <p>
        Not registered yet? <a>Sign up</a>
      </p>
    </div>
  );
}

export default SignIn;
