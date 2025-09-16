import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    // cek token di localStorage (anggap token disimpan saat login)
    const token = localStorage.getItem("token");
    const savedRole = localStorage.getItem("role") || "";
    setIsLoggedIn(!!token);
    setRole(savedRole);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

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
            {/* Kiri: Menu & Search */}
            <div className="d-flex gap-2 mb-2 mb-lg-0">
              <button className="btn btn-outline-secondary d-flex align-items-center gap-1">
                <i className="bi bi-list"></i> Menu
              </button>
              <button className="btn btn-outline-secondary d-flex align-items-center gap-1">
                <i className="bi bi-search"></i> Search
              </button>
            </div>

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
                  to="/keranjang"
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
    </nav>
  );
}

export default Navbar;
