import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import "./Header.css";

export default function Header() {
  const { user } = useContext(AppContext);

  return (
    <div className="header">
      <h1>MERN Frontend</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">MyCart</Link>
       
        {
          user?.role === "admin" && <Link to="/admin">Admin</Link>
        } 
        {/* <Link to="/admin">Admin</Link>  */}
        <Link to="/order">MyOrder</Link>

        {user?.token ? (
          <Link to="/profile">Profile</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
}
