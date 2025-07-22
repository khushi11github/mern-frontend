import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Admin.css";
export default function Admin() {
  return (
    <div className="admin-container">
      <nav className="admin-nav">
        <Link to="/admin" className="admin-link">Users</Link>
        <Link to="/admin/products" className="admin-link">Products</Link>
        <Link to="/admin/orders" className="admin-link">Orders</Link>
      </nav>
      <div className="admin-outlet">
        <Outlet />
      </div>
    </div>
  );
}
