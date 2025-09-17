// src/CartPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch cart items from Laravel
  useEffect(() => {
    axios.get("http://localhost:8000/api/carts", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"), // if using Sanctum/Passport/JWT
      },
    })
    .then(res => {
      setCartItems(res.data); // depends on how your CartController returns data
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
      setLoading(false);
    });
  }, []);

  // Update quantity
  const updateQuantity = async (id, quantity) => {
    try {
      await axios.put(`http://localhost:8000/api/carts/${id}`, { quantity });
      setCartItems(prev =>
        prev.map(item => item.id === id ? { ...item, quantity } : item)
      );
    } catch (err) {
      console.error(err);
    }
  };

  // Remove item
  const removeItem = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/carts/${id}`);
      setCartItems(prev => prev.filter(item => item.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // Calculate total
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (loading) return <p className="text-center mt-5">Loading cart...</p>;

  return (
    <div className="container my-5">
      <h1 className="mb-4">Shopping Cart</h1>
      <div className="row">
        {/* Cart Items */}
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body">
              {cartItems.length > 0 ? (
                cartItems.map(item => (
                  <div key={item.id} className="d-flex align-items-center justify-content-between border-bottom py-3">
                    <div className="d-flex align-items-center gap-3">
                      <img src={item.image_url} alt={item.name} className="rounded" width="80" height="80" />
                      <div>
                        <h5 className="mb-1">{item.name}</h5>
                        <p className="text-muted mb-0">${item.price}</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>

                    <p className="fw-bold mb-0">${item.price * item.quantity}</p>
                    <button className="btn btn-link text-danger p-0" onClick={() => removeItem(item.id)}>
                      Remove
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-muted">Your cart is empty.</p>
              )}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="col-md-4 mt-4 mt-md-0">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Order Summary</h5>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>${totalPrice}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping</span>
                <span>$5</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>${totalPrice + 5}</span>
              </div>
              <button className="btn btn-primary w-100 mt-3">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
