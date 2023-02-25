import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const Dena = (props) => {
  const navigate = useNavigate();
  const { children } = props;
  const t = localStorage.getItem("token");
  const [isauth, setIsauth] = useState(t ? true : false);
  const [token, setToken] = useState(t || "");

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      let res = await fetch(`${process.env.REACT_APP_backendBaseURL}/check`, {
        headers: {
          authorization: `Bearer ${t}`
        }
      });
      let { msg } = await res.json();
      console.log(msg);
      if (msg === "please login") {
        setIsauth(false);
        setToken("");
      } else if (msg === "authorized") {
        setIsauth(true);
        setToken(t);
      }
    } catch (error) {
      console.log(error);
      setIsauth(false);
      setToken("");
    }
  };

  const handleLogin = async (email, password) => {
    let obj = { email, password };

    if (obj.email == "" || obj.password == "") {
      alert("Please fill all the details");
      return;
    }
    try {
      let response = await fetch("http://localhost:8080/login", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-type": "application/json"
        }
      });
      let data = await response.json();
      let token = data.token;
      localStorage.setItem("token", token);

      if (token) {
        setIsauth(true);
        setToken(token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    setIsauth(false);
    setToken("");
    localStorage.removeItem("token");
  };

  const authState = { isauth, token, handleLogin, handleLogout };

  return (
    <AuthContext.Provider value={{ authState }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Dena;
