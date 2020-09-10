import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function AuthPage({ setupSocket }) {
  const [signIn, setSignIn] = useState(false);

  const handleSignIn = () => {
    setSignIn(true);
  };
  const handleSignUp = () => {
    setSignIn(false);
  };

  if (signIn) {
    return (
      <div>
        <SignIn passedFunction={handleSignUp} setupSocket={setupSocket} />
      </div>
    );
  } else {
    return (
      <div>
        <SignUp passedFunction={handleSignIn} />
      </div>
    );
  }
}

export default AuthPage;
