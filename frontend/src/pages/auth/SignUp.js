import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
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
  snackbar: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const SignUp = ({ passedFunction }, props) => {
  const classes = useStyles();
  const nameRef = React.createRef();
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const [openSnackBar, setOpenSnackBar] = React.useState(false);

  const signUserUp = (props) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    axios
      .post(
        "http://localhost:3001/user/register",
        `name=${name}&email=${email}&password=${password}`
      )
      .then((res) => {
        console.log("user created !!");
        setOpenSnackBar(true);
        props.history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="sign-up">
      <div className="sign-up-form">
        <h2 className="sign-up-title">Sign up</h2>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={signUserUp}
        >
          <TextField
            id="outlined-basic"
            label="Username"
            variant="filled"
            className="input-field"
            inputRef={nameRef}
          />
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
            onClick={signUserUp}
          >
            Create Account
          </Button>
        </form>
        <div className={classes.snackbar}>
          <Snackbar open={openSnackBar} autoHideDuration={6000}>
            <Alert severity="success">You Signed Up Successfully !</Alert>
          </Snackbar>
        </div>
        <p className="sign-up-footer">
          Have an account?{" "}
          <span className="log-in-button" onClick={() => passedFunction()}>
            Log in
          </span>
        </p>
      </div>
      <div className="sign-up-caroussel"></div>
    </div>
  );
};

export default SignUp;
