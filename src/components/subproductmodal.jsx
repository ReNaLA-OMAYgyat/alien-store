import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function ProductModal({
  show,
  handleClose,
  handleSave,
  product,
}) {
  const [nama, setNama] = useState("");
  const [merek, setMerek] = useState("");
  const [harga, setHarga] = useState("");
  const [stock, setStock] = useState("");
  const [subcategoryId, setSubcategoryId] = useState("");
  const [imageFile, setImageFile] = useState(null);

  // Isi form kalau ada data product (edit mode)
  useEffect(() => {
    if (product) {
      setNama(product.nama || "");
      setMerek(product.merek || "");
      setHarga(product.harga || "");
      setStock(product.stock || "");
      setSubcategoryId(product.subcategory_id || "");
      setImageFile(null);
    } else {
      setNama("");
      setMerek("");
      setHarga("");
      setStock("");
      setSubcategoryId("");
      setImageFile(null);
    }
  }, [product]);

  const token = localStorage.getItem("token");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("merek", merek);
    formData.append("harga", harga);
    formData.append("stock", stock);
    formData.append("subcategory_id", subcategoryId);
    if (imageFile) {
      formData.append("image", imageFile);
    }
    handleSave(formData);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{product ? "Edit Produk" : "Tambah Produk"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nama Produk</Form.Label>
            <Form.Control
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Merk</Form.Label>
            <Form.Control
              type="text"
              value={merek}
              onChange={(e) => setMerek(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Harga</Form.Label>
            <Form.Control
              type="number"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Stok</Form.Label>
            <Form.Control
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Subcategory ID</Form.Label>
            <Form.Control
              type="number"
              value={subcategoryId}
              onChange={(e) => setSubcategoryId(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Gambar Produk</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {product ? "Update" : "Simpan"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
