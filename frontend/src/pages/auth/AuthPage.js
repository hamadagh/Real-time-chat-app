import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function AuthPage() {
  const [signIn, setSignIn] = useState(false);

  if (signIn) {
    return <SignIn />;
  } else {
    return <SignUp />;
  }
}

export default AuthPage;
