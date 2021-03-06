import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthPage from "./pages/auth/AuthPage";
import Index from "./pages/Index";
import io from "socket.io-client";
import Dashboard from "./pages/dashboard/Dashboard";
import DevTeam from "./pages/dashboard/components/ChatRoom";
import "./App.css";

function App() {
  const [newSocket, setNewSocket] = useState(null);

  const setupSocket = () => {
    const token = localStorage.getItem("token");
    if (token.length > 0 && !newSocket) {
      const socket = io("http://localhost:3001", {
        query: {
          token: localStorage.getItem("token"),
        },
      });

      socket.on("disconnect", () => {
        setNewSocket(null);
        setTimeout(setupSocket, 3000);
        console.log(`${socket.id} is disconnected`);
      });

      socket.on("connect", () => {
        console.log(`${socket.id} is connected`);
      });

      setNewSocket(socket);
    }
  };

  useEffect(() => {}, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Index} exact />
        <Route
          path="/register"
          render={() => <AuthPage setupSocket={setupSocket} />}
          exact
        />
        <Route
          path="/dashboard"
          render={() => <Dashboard socket={newSocket} />}
          exact
        />
        <Route
          path="/dashboard/Chatroom:id"
          render={() => <DevTeam socket={newSocket} />}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
