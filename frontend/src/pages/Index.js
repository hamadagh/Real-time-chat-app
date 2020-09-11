import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Index = () => {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      return history.push("/register");
    } else {
      return history.push("/dashboard");
    }
  }, []);
  return null;
};

export default Index;
