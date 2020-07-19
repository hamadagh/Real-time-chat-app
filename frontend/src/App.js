import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthPage from "./pages/auth/AuthPage";
import Index from "./pages/Index";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/register" component={AuthPage} exact />
        <Route path="/Dashboard" component={Dashboard} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
