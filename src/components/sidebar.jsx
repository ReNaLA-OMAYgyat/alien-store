// src/components/Sidebar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";  // <<-- tambahin ini

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div
      className="text-white p-3 d-flex flex-column shadow"
      style={{
        width: "250px",
        background: "linear-gradient(180deg, #111 0%, #1f1f1f 100%)",
        borderRight: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="d-flex align-items-center justify-content-center mb-4">
        <i className="bi bi-bag-check-fill me-2" style={{ fontSize: 20 }}></i>
        <h4 className="fw-bold m-0">AlienStore</h4>
      </div>

      <ul className="nav flex-column">
        <li className="nav-item mb-1">
          <a
            href="#"
            className="nav-link text-white d-flex align-items-center gap-2 px-2 py-2 rounded-2"
          >
            <i className="bi bi-speedometer2"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-item mb-1">
          <a
            href="#"
            className="nav-link text-white d-flex align-items-center gap-2 px-2 py-2 rounded-2 bg-primary bg-opacity-25"
          >
            <i className="bi bi-folder2"></i>
            <span>Subcategories</span>
          </a>
        </li>
      </ul>

      {/* Logout Button */}
      <div className="mt-auto">
        <button
          onClick={handleLogout}
          className="btn btn-danger w-100 d-flex align-items-center justify-content-center gap-2"
        >
          <i className="bi bi-box-arrow-right"></i>
          Logout
        </button>
        <div className="pt-3 small text-secondary text-center">
          <span className="d-block">v1.0</span>
        </div>
      </div>
    </div>
  );
}
