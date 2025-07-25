import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import { FaUserCircle,FaHome ,FaSignInAlt, FaSignOutAlt, FaShoppingCart,FaUserShield,FaBoxOpen } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  const { user } = useContext(AppContext);


  return (
    <div className="header">
      <h1><i>Wick & Whim</i></h1>
      <div className="nav-links">
        <Link to="/"><FaHome/>Home</Link>
        <Link to="/cart"><FaShoppingCart />MyCart</Link>
        {
          user?.token && <Link to="/logout"> <FaSignOutAlt/>Logout</Link>
        }

       
        {
          user?.role === "admin" && <Link to="/admin"><FaUserShield/>Admin</Link>
        } 
        <Link to="/order"><FaBoxOpen/>MyOrder</Link>

        {user?.token ? (
          <Link to="/profile"><FaUserCircle size={32} color="#555" /></Link>
        ) : (
          <Link to="/login"><FaSignInAlt/>Login</Link>
        )}
      </div>
    </div>
  );
}
