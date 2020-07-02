import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  snackbar: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function SnackBar() {
  const classes = useStyles();
  const [snackBarSev, setSnackBarSev] = React.useState();
  if (snackBarSev === "success") {
    return (
      <div>
        <div className={classes.snackbar}>
          <Snackbar open={openSnackBar} autoHideDuration={6000}>
            <Alert severity="success">You Signed Up Successfully !</Alert>
          </Snackbar>
        </div>
      </div>
    );
  } else if (snackBarSev === "error") {
    return (
      <div>
        <div className={classes.snackbar}>
          <Snackbar open={openSnackBar} autoHideDuration={6000}>
            <Alert severity="error">check email or password!</Alert>
          </Snackbar>
        </div>
      </div>
    );
  }
}

export default SnackBar;
