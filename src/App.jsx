import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Navbar from "./components/navbar";
import Beranda from "./pages/beranda";
import Daftar from "./pages/daftar";

export default function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/daftar" && (
        <Navbar />
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/beranda" element={<Beranda />} />
      </Routes>
    </>
  );
}
