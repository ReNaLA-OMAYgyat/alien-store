// src/components/ProductCard.jsx
import React, { useState } from "react";
import axios from "axios";
import "./card.css";

export default function ProductCard({ product }) {
  const [localStock, setLocalStock] = useState(product.stok);
  const isOutOfStock = !localStock || localStock <= 0;

  // Helper to update stock in DB
  const updateStockInDB = async (newStock) => {
    try {
      await axios.put(
        `http://localhost:8000/api/products/${product.id}`,
        { stok: newStock },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
    } catch (err) {
      console.error("Error updating stock in DB:", err.response?.data || err);
    }
  };

  const handleAddToCart = async () => {
    if (isOutOfStock) {
      alert("Produk ini habis, tidak bisa ditambahkan ke keranjang.");
      return;
    }

    try {
      // Add to cart
      await axios.post(
        "http://localhost:8000/api/carts",
        {
          product_id: product.id,
          qty: 1,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      // Update stock both locally + in DB
      const newStock = localStock - 1;
      setLocalStock(newStock);
      await updateStockInDB(newStock);

      alert(`${product.nama} berhasil ditambahkan ke keranjang!`);
    } catch (err) {
      console.error("Error adding to cart:", err.response?.data || err);
      alert("Gagal menambahkan produk ke keranjang.");
    }
  };

  const handleCheckout = async () => {
    if (isOutOfStock) {
      alert("Produk habis, tidak bisa dibeli.");
      return;
    }

    try {
      await handleAddToCart();
      window.location.href = "/cart";
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="col-6 col-md-3">
      <div className="product-card">
        <div className="product-img">
          {isOutOfStock && <span className="badge-soldout">Stok Habis</span>}
          <img
            src={product.image_url || "/contoh.png"}
            alt={product.nama}
            className="img-fluid"
          />
        </div>
        <div className="product-body">
          <h6 className="product-title">{product.nama}</h6>
          <p className="product-price">Rp {product.harga}</p>
          <p className="product-stock">Sisa stok: {localStock}</p>
          <div className="product-actions">
            <button
              className="btn-cart"
              onClick={handleAddToCart}
              disabled={isOutOfStock}
            >
              Keranjang
            </button>
            <button
              className="btn-checkout"
              onClick={handleCheckout}
              disabled={isOutOfStock}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
