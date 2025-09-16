import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Navbar from "./components/navbar";
import Beranda from "./pages/beranda";
import Daftar from "./pages/daftar";
import Fashion from "./pages/fashion";
import PrivateRouteAdmin from "./components/ProtecRoute";
export default function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" &&
        location.pathname !== "/daftar" &&
        location.pathname !== "/dashboard" && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/beranda" replace />} />

        <Route path="/login" element={<Login />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRouteAdmin>
              <Dashboard />
            </PrivateRouteAdmin>
          }
        />

        <Route path="/beranda" element={<Beranda />} />
        <Route path="/fashion" element={<Fashion />} />

        <Route path="*" element={<Navigate to="/beranda" replace />} />
      </Routes>
    </>
  );
}
