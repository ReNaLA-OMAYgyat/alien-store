import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Cart() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">🛒 Keranjang Belanja</h2>
      
      {/* Jika kosong */}
      <div className="alert alert-warning text-center" role="alert">
        Keranjang masih kosong, yuk pilih produk dulu!
      </div>

      {/* Tabel keranjang (nanti kalau ada data) */}
      <table className="table table-striped table-hover shadow-sm">
        <thead className="table-dark">
          <tr>
            <th scope="col">Produk</th>
            <th scope="col">Harga</th>
            <th scope="col">Jumlah</th>
            <th scope="col">Subtotal</th>
            <th scope="col">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {/* Data produk akan masuk di sini */}
          <tr>
            <td colSpan="5" className="text-center text-muted">
              Belum ada item di keranjang
            </td>
          </tr>
        </tbody>
      </table>

      {/* Bagian total & tombol checkout */}
      <div className="d-flex justify-content-between align-items-center mt-4 p-3 border rounded shadow-sm bg-light">
        <h4>Total: Rp 0</h4>
        <button className="btn btn-success btn-lg" disabled>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
