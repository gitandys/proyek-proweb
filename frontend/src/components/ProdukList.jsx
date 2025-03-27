import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/ProdukList.css'; // Import CSS
import ToastNotification from './ToastNotification';

function ProdukList() {
  const [produk, setProduk] = useState([]);
  const [editData, setEditData] = useState({ id: null, nama: '', harga: '' });
  const [toastMessage, setToastMessage] = useState(null);
  const [toastType, setToastType] = useState('success');

  useEffect(() => {
    axios.get('http://localhost:3001/produk')
      .then((response) => setProduk(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/produk/${id}`)
      .then(() => {
        setProduk(produk.filter((p) => p.id !== id));
        setToastMessage('Produk berhasil dihapus!');
        setToastType('success');
      })
      .catch(err => {
        console.error(err);
        setToastMessage('Gagal menghapus produk!');
        setToastType('danger');
      });
  };

  const handleEdit = (item) => {
    setEditData(item);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/produk/${editData.id}`, {
      nama: editData.nama,
      harga: editData.harga
    })
      .then((response) => {
        setProduk(produk.map(p => (p.id === editData.id ? response.data : p)));
        setEditData({ id: null, nama: '', harga: '' });
        setToastMessage('Produk berhasil diperbarui!');
        setToastType('success');
      })
      .catch(err => {
        console.error(err);
        setToastMessage('Gagal memperbarui produk!');
        setToastType('danger');
      });
  };

  return (
    <div className="container mt-4">
      <h2>Daftar Produk</h2>
      <ul>
        {produk.map((item) => (
          <li key={item.id}>
            <span>{item.nama} - Rp{item.harga}</span>
            <div>
          <button className="btn btn-warning btn-sm me-1" onClick={() => handleEdit(item)}>Edit</button>
          <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
          </li>
        ))}
      </ul>

      {editData.id && (
  <div >
    <h3 className="text-center">Edit Produk</h3>
    <form onSubmit={handleUpdate}>
      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">Nama Produk:</label>
          <input 
            type="text" 
            value={editData.nama} 
            onChange={(e) => setEditData({ ...editData, nama: e.target.value })} 
            className="form-control" 
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Harga:</label>
          <input 
            type="number" 
            value={editData.harga} 
            onChange={(e) => setEditData({ ...editData, harga: e.target.value })} 
            className="form-control" 
          />
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary me-2" type="submit">Update</button>
        <button 
          className="btn btn-secondary" 
          type="button" 
          onClick={() => setEditData({ id: null, nama: '', harga: '' })}
        >
          Batal
        </button>
      </div>
    </form>
  </div>
)}


      {toastMessage && <ToastNotification message={toastMessage} type={toastType} />}
    </div>
  );
}

export default ProdukList;