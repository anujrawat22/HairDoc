import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
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
      let token = localStorage.getItem("token")
      // let res = await fetch(`${process.env.REACT_APP_backendBaseURL}/check`, {
      //   headers: {
      //     authorization: `Bearer ${t}`,
      //   },
      // });
      // let { msg } = await res.json();
      // console.log(msg);
      if (!token) {
        setIsauth(false);
        setToken("");
      } else {
        setIsauth(true);
        setToken(t);
      }
    } catch (error) {
      console.log(error);
      setIsauth(false);
      setToken("");
    }
  };

  const navigateToPage = async()=>{
    setTimeout(()=>{
     navigate("/")
    },1000)
 }

  const handleLogin = async (email, password) => {
    const MySwal = withReactContent(Swal);
    let obj = { email, password };

    if (obj.email === "" || obj.password === "") {
      MySwal.fire("Please fill all details");
      return;
    }
    try {
      let response = await fetch("https://hairdocbackend.onrender.com/login", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-type": "application/json",
        },
      });
      let data = await response.json();
      console.log(data);

      if (data.token) {
        let token = data.token;
        localStorage.setItem("token", token);
        setIsauth(true);
        setToken(token);
        MySwal.fire({
          position: "center",
          icon: "success",
          title: "Login Sucessful",
          showConfirmButton: false,
          timer: 1000,
        });
          navigateToPage()
        
      } else {
        MySwal.fire(data.msg);
      }
    } catch (error) {
      alert(error);
      console.log("error", error);
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
