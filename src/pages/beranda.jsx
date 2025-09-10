import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // import js
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    // Inisialisasi carousel secara manual
    const carouselEl = document.getElementById("heroCarousel");
    if (window.bootstrap && carouselEl) {
      new window.bootstrap.Carousel(carouselEl, {
        interval: 2000,
        ride: "carousel",
      });
    }
  }, []);
  //API atau data statis
  const products = [
    {
      img: "/contoh.png",
      title: "Nike Air Max",
      price: "Rp 1.500.000",
      label: "Best",
    },
    {
      img: "/contoh.png",
      title: "Adidas Ultraboost",
      price: "Rp 1.800.000",
      label: "New",
    },
    {
      img: "/contoh.png",
      title: "Adidas Ultraboost",
      price: "Rp 1.800.000",
      label: "Best",
    },
    {
      img: "/contoh.png",
      title: "Converse Chuck 70",
      price: "Rp 950.000",
      label: "New",
    },
  ];

  return (
    <div
      className="py-4"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #2a55e2ff 50%, #f0fdfa 50%)",
      }}
    >
      <div className="container">
        {/* Carousel */}
        <div
          id="heroCarousel"
          className="carousel slide mb-5"
          data-bs-ride="carousel"
          data-bs-interval="2000" // Carousel akan berganti setiap 3 detik
        >
          <div className="carousel-inner rounded shadow">
            <div className="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1528701800489-20be9c1a2d6d?auto=format&fit=crop&w=1200&q=80"
                className="d-block w-100"
                alt="Sepatu 1"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                <h5>Nike Air Max</h5>
                <p>Kenyamanan dan gaya dalam satu langkah.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1606813902901-3bdb6be9f46c?auto=format&fit=crop&w=1200&q=80"
                className="d-block w-100"
                alt="Sepatu 2"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                <h5>Adidas Ultraboost</h5>
                <p>Rasakan lari tanpa batas.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1521575107034-2e99d63a9c03?auto=format&fit=crop&w=1200&q=80"
                className="d-block w-100"
                alt="Sepatu 3"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                <h5>Converse Chuck 70</h5>
                <p>Classic never goes out of style.</p>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
        </div>

        {/* Best Seller */}
        <h3 className="fw-bold mb-4 text-center">Best Seller</h3>
        <div className="row g-3">
          {products.map((product, idx) => (
            <div className="col-6 col-md-3" key={idx}>
              <div className="card product-card border-0 h-100 shadow-sm position-relative overflow-hidden">
                {/* Label */}
                <span
                  className={`badge position-absolute top-0 start-0 m-2 px-3 py-2 rounded-pill fw-semibold ${
                    product.label === "Best"
                      ? "bg-warning text-dark"
                      : "bg-success"
                  }`}
                  style={{
                    zIndex: 2,
                    fontSize: "0.9rem",
                    letterSpacing: "1px",
                  }}
                >
                  {product.label}
                </span>
                {/* Gambar */}
                <div className="overflow-hidden rounded-4">
                  <img
                    src={product.img}
                    className="card-img-top product-img"
                    alt={product.title}
                    style={{
                      height: "160px",
                      objectFit: "cover",
                      transition: "transform 0.4s",
                    }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{product.title}</h5>
                  <p className="card-text text-muted mb-3">{product.price}</p>
                  <Link
                    to="/checkout"
                    className="btn btn-primary w-100 mt-auto rounded-3 shadow-sm"
                    style={{
                      fontSize: "1rem",
                      padding: "6px 0",
                      textAlign: "center",
                    }}
                  >
                    Buy Now!
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Custom CSS */}
        <style>{`
        .product-card {
          border-radius: 1.2rem;
         box-shadow: 0 4px 24px 0 rgba(0,0,0,0.07);
          transition: transform 0.2s, box-shadow 0.2s;
          }
          .product-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 8px 32px 0 rgba(0,0,0,0.13);
        }
        .product-img:hover {
          transform: scale(1.07);
        }
      `}</style>
      </div>
    </div>
  );
}
