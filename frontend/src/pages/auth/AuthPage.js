import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import SnackBar from "./SnackBar";

function AuthPage({ setupSocket }) {
  const [signIn, setSignIn] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState("");

  const handleSignIn = () => {
    setSignIn(true);
  };
  const handleSignUp = () => {
    setSignIn(false);
  };

  if (signIn) {
    return (
      <div>
        <SignIn
          passedFunction={handleSignUp}
          openSnackBar={setOpenSnackBar}
          setupSocket={setupSocket}
        />
        <SnackBar snackBar={openSnackBar} />
      </div>
    );
  } else {
    return (
      <div>
        <SignUp passedFunction={handleSignIn} openSnackBar={setOpenSnackBar} />
        <SnackBar snackBar={openSnackBar} />
      </div>
    );
  }
}

export default AuthPage;
