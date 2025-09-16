import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

export default function Fashion() {
  const [subcategories, setSubcategories] = useState([]);
  const [fashionCategoryId, setFashionCategoryId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [catRes, subRes] = await Promise.all([
        api.get("/user-login-categories"),
        api.get("/user-login-subcategories"),
      ]);
      const fashionCat = catRes.data.find(
        (c) => String(c.name).toLowerCase() === "fashion"
      );
      const fashionId = fashionCat?.id ?? null;
      setFashionCategoryId(fashionId);
      const filtered = fashionId
        ? subRes.data.filter(
            (sc) => String(sc.category_id) === String(fashionId)
          )
        : [];
      setSubcategories(filtered);
    } catch (err) {
      console.error("Gagal ambil data Fashion:", err);
      setSubcategories([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <h3 className="fw-bold mb-4">Subkategori Fashion</h3>

      <div className="row g-4">
        {loading ? (
          <div className="col-12 text-center text-secondary">Memuat…</div>
        ) : subcategories.length === 0 ? (
          <div className="col-12 text-center text-secondary">
            Belum ada subkategori Fashion.
          </div>
        ) : (
          subcategories.map((s) => (
            <div className="col-6 col-md-3" key={s.id}>
              <div className="card h-100 shadow-sm p-3 text-center">
                <h5 className="card-title">{s.name}</h5>
                <div className="d-flex justify-content-center gap-2 mt-2">
                  <Link
                    to={`/fashion/${s.id}`}
                    className="btn btn-sm btn-outline-success"
                  >
                    Lihat Produk
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
