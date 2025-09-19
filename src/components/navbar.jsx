// src/components/Navbar.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsLightning, BsPerson, BsBag } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineArrowRight } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          AlienStore
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="d-lg-flex align-items-lg-center justify-content-between w-100 gap-3">
           

            {/* Tengah: Link navigasi */}
            <ul className="navbar-nav fw-bold gap-3 mx-lg-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/beranda">
                  Beranda
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/produk">
                  Produk
                </Link>
              </li>
              {role === "Admin" && (
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link
                  className="nav-link d-flex align-items-center"
                  to="/cart"
                >
                  <i className="bi bi-cart3"></i>
                </Link>
              </li>
            </ul>

            {/* Kanan: Login & Register atau Logout */}
            <div className="d-flex gap-2">
              {!isLoggedIn ? (
                <>
                  <Link className="btn btn-outline-secondary" to="/login">
                    Masuk
                  </Link>
                  <Link className="btn btn-outline-secondary" to="/daftar">
                    Daftar
                  </Link>
                </>
              ) : (
                <button className="btn btn-danger" onClick={handleLogout}>
                  Keluar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Search and social */}
      <div className="container-fluid bg-light py-3 d-flex align-items-center">
        <div className="d-flex align-items-center flex-grow-1 me-3">
          <label className="me-2 mb-0 text-dark">Search items:</label>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search..." />
            <span className="input-group-text bg-white">
              <AiOutlineSearch />
            </span>
          </div>
        </div>

        <button className="btn btn-warning me-3">
          <AiOutlineArrowRight />
        </button>

        <div className="d-flex gap-2">
          <div className="btn btn-primary rounded-circle p-2"><FaFacebookF className="text-white" /></div>
          <div className="btn btn-primary rounded-circle p-2"><FaInstagram className="text-white" /></div>
          <div className="btn btn-primary rounded-circle p-2"><FaTwitter className="text-white" /></div>
        </div>
      </div>
    </div>
  );
}
