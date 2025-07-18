import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

export default function Logout() {
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
   
   
    localStorage.removeItem("token");

   
  
    setUser(null);

   console.log("navigating")
    navigate("/login");
  }, []);

  return( 
    <>
    <h1>Logout</h1>
    </>

  );
}
