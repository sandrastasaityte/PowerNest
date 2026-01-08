// src/Components/Admin/Admin.jsx
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className={`admin ${open ? "open" : ""}`}>
      <aside className="admin-sidebar">
        <div className="admin-top">
          <h2 className="admin-logo">PowerNest</h2>
          <button
            className="admin-toggle"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle sidebar"
          >
            ☰
          </button>
        </div>

        <nav className="admin-nav">
          <NavLink to="dashboard">Dashboard</NavLink>
          <NavLink to="add-product">Add Product</NavLink>
          <NavLink to="products">Products</NavLink>
          <NavLink to="orders">Orders</NavLink>
        </nav>
      </aside>

      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Admin;
