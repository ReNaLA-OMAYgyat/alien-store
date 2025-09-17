import React from "react";
import "./card.css"; // import css custom

export default function ProductCard({ product, onAddToCart, onCheckout }) {
  return (
    <div className="col-6 col-md-3">
      <div className="product-card">
        <div className="product-img">
            {product.stok === 0 && <span className="badge-soldout">Stok Habis</span>}

          <img
            src={product.image_url || "/contoh.png"}
            alt={product.name}
            className="img-fluid"
          />
        </div>
        <div className="product-body">
          <h6 className="product-title">{product.nama}</h6>
          <p className="product-price">Rp {product.harga}</p>
          <div className="product-actions">
            <button
              className="btn-cart"
              onClick={() => onAddToCart(product)}
            >
              Keranjang
            </button>
            <button
              className="btn-checkout"
              onClick={() => onCheckout(product)}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
