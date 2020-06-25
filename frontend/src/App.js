import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthPage from "./pages/auth/AuthPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={AuthPage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
