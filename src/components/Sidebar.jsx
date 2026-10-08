
import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div id="sidebar">

        <h2>Admin Panel</h2>

        <Link to="/dashboard">Dashboard</Link>

        <Link to="/products">Products</Link>

        <Link to="/orders">Orders</Link>

        <Link to="/users">Users</Link>

        <Link to="/settings">Settings</Link>

      </div>
    </>
  );
}

export default Sidebar;

