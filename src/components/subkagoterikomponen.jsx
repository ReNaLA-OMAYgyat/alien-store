import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api"; // axios instance

export default function SubcategoriesGrid() {
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    api.get("/subcategories")
      .then((res) => {
        setSubcategories(res.data); // asumsi API balikin array subcategories
      })
      .catch((err) => console.error("Gagal ambil subcategories:", err));
  }, []);

  return (
    <div className="container py-4">
      <h3 className="fw-bold mb-4 text-center display-6 text-dark">
        🔗 Subcategories
      </h3>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {subcategories.map((sub) => (
          <Link
            to={`/subcategory/${sub.id}`}
            key={sub.id}
            className="text-decoration-none text-dark text-center"
          >
            {/* Icon bulat */}
            <div
              className="d-flex align-items-center justify-content-center rounded-circle shadow"
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "#333",
              }}
            >
              <i className={`bi ${sub.icon || "bi-grid"} text-white fs-4`}></i>
            </div>
            {/* Nama */}
            <div className="small mt-2 fw-semibold">{sub.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
