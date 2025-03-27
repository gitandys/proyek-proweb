import React, { useState } from 'react';
import axios from 'axios';
import ToastNotification from './ToastNotification';

function TambahProduk() {
  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');
  const [error, setError] = useState('');
  const [toastMessage, setToastMessage] = useState(null);
  const [toastType, setToastType] = useState('success');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi
    if (!nama || !harga) {
      setError('Nama dan Harga wajib diisi');
      return;
    }
    setError('');

    axios.post('http://localhost:3001/produk', { nama, harga })
      .then((res) => {
        console.log('Produk berhasil ditambah:', res.data);
        setNama('');
        setHarga('');
        setToastMessage('Produk berhasil ditambahkan!');
        setToastType('success');
      })
      .catch((err) => {
        console.error('Error menambah produk:', err);
        setToastMessage('Gagal menambah produk!');
        setToastType('danger');
      });
  };

  return (
    <div className="container">
  <h2 className="text-center">Tambah Produk</h2>
  {error && <p className="text-danger">{error}</p>}
  
  <form onSubmit={handleSubmit}>
    <div className="row mb-3">
      {/* Nama Produk */}
      <div className="col-md-6">
        <label className="form-label">Nama Produk:</label>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="form-control"
          placeholder="Masukkan nama produk"
        />
      </div>

      {/* Harga */}
      <div className="col-md-6">
        <label className="form-label">Harga:</label>
        <input
          type="number"
          value={harga}
          onChange={(e) => setHarga(e.target.value)}
          className="form-control"
          placeholder="Masukkan harga"
        />
      </div>
    </div>

    <button type="submit" className="btn btn-primary">Simpan</button>
  </form>

  {toastMessage && <ToastNotification message={toastMessage} type={toastType} />}
</div>
  
  );
}

export default TambahProduk;