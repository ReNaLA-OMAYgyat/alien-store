import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import api from "../api"; // asumsi kamu sudah punya file api.js

export default function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Inisialisasi carousel
    const carouselEl = document.getElementById("heroCarousel");
    if (window.bootstrap && carouselEl) {
      new window.bootstrap.Carousel(carouselEl, { interval: 2500, ride: "carousel" });
    }

    // Ambil kategori dari API
    api.get("/categories")
      .then((res) => {
        setCategories(res.data); // sesuaikan dengan struktur respon API-mu
      })
      .catch(() => {
        // fallback jika API gagal
        setCategories([
          { id: 1, name: "Fashion", icon: "bi-bag-check-fill" },
          { id: 2, name: "F&B", icon: "bi-cup-straw" },
          { id: 3, name: "Sembako", icon: "bi-basket" },
        ]);
      });
  }, []);

  const products = [
    { img: "/contoh.png", title: "Nike Air Max", price: "Rp 1.500.000", label: "Best" },
    { img: "/contoh.png", title: "Adidas Ultraboost", price: "Rp 1.800.000", label: "New" },
    { img: "/contoh.png", title: "Adidas Ultraboost", price: "Rp 1.800.000", label: "Best" },
    { img: "/contoh.png", title: "Converse Chuck 70", price: "Rp 950.000", label: "New" },
  ];

  return (
    <div
      className="py-4"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eef2f3 0%, #8e9eab 100%)",
      }}
    >
      <div className="container">
        {/* Carousel */}
        <div id="heroCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
          <div className="carousel-inner rounded-4 shadow-lg overflow-hidden">
            <div className="carousel-item active">
              <img
                src="https://graphicsfamily.com/wp-content/uploads/edd/2020/12/Free-Nike-Air-Max-Shoe-Mockup.jpg"
                className="d-block w-100"
                alt="Sepatu 1"
                style={{ height: "420px", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 px-3 py-2">
                <h3 className="fw-bold text-light">Nike Air Max</h3>
                <p className="text-light">Kenyamanan dan gaya dalam satu langkah.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyJQcSWQBH0LHXuEfun1X-RlA4lXqA_GWksQ&s"
                className="d-block w-100"
                alt="Sepatu 2"
                style={{ height: "420px", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 px-3 py-2">
                <h3 className="fw-bold text-light">Adidas Ultraboost</h3>
                <p className="text-light">Rasakan lari tanpa batas.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1521575107034-2e99d63a9c03?auto=format&fit=crop&w=1200&q=80"
                className="d-block w-100"
                alt="Sepatu 3"
                style={{ height: "420px", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 px-3 py-2">
                <h3 className="fw-bold text-light">Converse Chuck 70</h3>
                <p className="text-light">Classic never goes out of style.</p>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>

        {/* Categories */}
        <h3 className="fw-bold mb-4 text-center display-6 text-dark">🛒 Categories</h3>
        <div className="row g-4 mb-5">
          {categories.map((cat) => (
            <div className="col-4 col-md-4" key={cat.id}>
            <Link to={`/${cat.name.toLowerCase()}`} className="text-decoration-none text-dark">
  <div className="card h-100 border-0 shadow-sm category-card d-flex align-items-center justify-content-center">
    <i className={`bi ${cat.icon} fs-1 mb-2 text-primary`}></i>
    <h6 className="fw-bold">{cat.name}</h6>
  </div>
</Link>

            </div>
          ))}
        </div>

        {/* Best Seller */}
        <h3 className="fw-bold mb-4 text-center display-6 text-dark">🔥 Best Seller</h3>
        <div className="row g-4">
          {products.map((product, idx) => (
            <div className="col-6 col-md-3" key={idx}>
              <div className="card product-card h-100 border-0 shadow-lg overflow-hidden">
                <span
                  className={`badge position-absolute top-0 start-0 m-2 px-3 py-2 rounded-pill fw-semibold ${
                    product.label === "Best" ? "bg-warning text-dark" : "bg-success"
                  }`}
                  style={{ zIndex: 2, fontSize: "0.85rem", letterSpacing: "1px" }}
                >
                  {product.label}
                </span>

                <div className="overflow-hidden">
                  <img
                    src={product.img}
                    className="card-img-top product-img"
                    alt={product.title}
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                </div>

                <div className="card-body d-flex flex-column text-center">
                  <h5 className="card-title fw-bold">{product.title}</h5>
                  <p className="card-text text-muted mb-3">{product.price}</p>
                  <Link
                    to="/checkout"
                    className="btn btn-gradient w-100 mt-auto rounded-3 fw-semibold shadow-sm"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom CSS */}
        <style>{`
          .category-card {
            border-radius: 1rem;
            padding: 20px;
            transition: all 0.3s ease-in-out;
          }
          .category-card:hover {
            transform: translateY(-6px);
            background: #f8fafc;
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          }
          .product-card {
            border-radius: 1.3rem;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease-in-out;
          }
          .product-card:hover {
            transform: translateY(-6px) scale(1.02);
            box-shadow: 0 8px 30px rgba(0,0,0,0.15);
          }
          .product-img {
            transition: transform 0.5s ease;
          }
          .product-img:hover {
            transform: scale(1.1);
          }
          .btn-gradient {
            background: linear-gradient(90deg, #667eea, #764ba2);
            border: none;
            color: white;
            transition: all 0.3s ease;
          }
          .btn-gradient:hover {
            background: linear-gradient(90deg, #5a67d8, #6b46c1);
            transform: translateY(-2px);
          }
        `}</style>
      </div>
    </div>
  );
}
