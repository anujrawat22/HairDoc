import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const Dena = (props) => {
  const { children } = props;
  const t = localStorage.getItem("token");
  const [isauth, setisauth] = useState(t || "hi");
  // useEffect(()=>{

  // },[])

  return (
    <AuthContext.Provider value={{ isauth }}>{children}</AuthContext.Provider>
  );
};

export default Dena;
