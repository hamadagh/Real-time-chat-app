import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Index = () => {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      history.push("/register");
    } else {
      history.push("/Dashboard");
    }
  }, []);
};

export default Index;
