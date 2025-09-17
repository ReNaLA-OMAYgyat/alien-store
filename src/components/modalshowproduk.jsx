import React from "react";

export default function ModalShowDetail({ show, onClose, productDetail }) {
  if (!show || !productDetail) return null;

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ background: "rgba(0,0,0,0.5)", zIndex: 1060 }}>
      <div className="bg-white rounded shadow" style={{ width: 500, maxHeight: "80vh", overflowY: "auto" }}>
        <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
          <h5 className="m-0">Detail Produk</h5>
          <button className="btn btn-sm btn-outline-secondary" onClick={onClose}>✕</button>
        </div>
        <div className="p-3">
          {Object.entries(productDetail).map(([key, value]) => (
            <div key={key} className="mb-2">
              <strong>{key}:</strong> {value?.toString() || "-"}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
