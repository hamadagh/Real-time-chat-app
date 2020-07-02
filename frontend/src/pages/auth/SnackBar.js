import React, { useState, useEffect } from "react";
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

function SnackBar({ snackBar }) {
  const classes = useStyles();
  const [snackBarSev, setSnackBarSev] = useState("");
  const [open, setOpen] = useState(true);
  console.log(snackBar);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return setOpen(false);
    }
    setOpen(false);
  };

  useEffect(() => {
    setSnackBarSev(snackBar);
  });
  if (snackBarSev === "success") {
    return (
      <div>
        <div className={classes.snackbar}>
          <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
            <Alert severity="success" onClose={handleClose}>
              You Signed Up Successfully !
            </Alert>
          </Snackbar>
        </div>
      </div>
    );
  } else if (snackBarSev === "error") {
    return (
      <div>
        <div className={classes.snackbar}>
          <Snackbar open={true} autoHideDuration={6000}>
            <Alert severity="error">check email or password!</Alert>
          </Snackbar>
        </div>
      </div>
    );
  } else return null;
}

export default SnackBar;
