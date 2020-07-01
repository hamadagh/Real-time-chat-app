import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function AuthPage() {
  const [signIn, setSignIn] = useState(false);

  const handleSignIn = () => {
    setSignIn(true);
  };
  const handleSignUp = () => {
    setSignIn(false);
  };

  if (signIn) {
    return <SignIn passedFunction={handleSignUp} />;
  } else {
    return <SignUp passedFunction={handleSignIn} />;
  }
}

export default AuthPage;
