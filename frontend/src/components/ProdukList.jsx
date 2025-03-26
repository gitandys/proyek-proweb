import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/ProdukList.css'; // Import CSS

function ProdukList() {
    const [produk, setProduk] = useState([]);
    const [editData, setEditData] = useState({ id: null, nama: '', harga: '' });

    useEffect(() => {
        axios.get('http://localhost:3001/produk')
            .then((response) => setProduk(response.data))
            .catch((error) => console.error(error));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/produk/${id}`)
            .then(() => {
                setProduk(produk.filter((p) => p.id !== id));
            })
            .catch(err => console.error(err));
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
        })
        .catch(err => console.error(err));
    };

    return (
        <div className="container">
            <h2>Daftar Produk</h2>
            <ul>
                {produk.map((item) => (
                    <li key={item.id}>
                        <span>{item.nama} - Rp{item.harga}</span>
                        <div>
                            <button className="edit" onClick={() => handleEdit(item)}>Edit</button>
                            <button className="delete" onClick={() => handleDelete(item.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>

            {editData.id && (
                <div>
                    <h3>Edit Produk</h3>
                    <form onSubmit={handleUpdate}>
                        <div>
                            <label>Nama Produk: </label>
                            <input
                                type="text"
                                value={editData.nama}
                                onChange={(e) => setEditData({ ...editData, nama: e.target.value })}
                            />
                        </div>
                        <div>
                            <label>Harga: </label>
                            <input
                                type="number"
                                value={editData.harga}
                                onChange={(e) => setEditData({ ...editData, harga: e.target.value })}
                            />
                        </div>
                        <button className="save" type="submit">Update</button>
                        <button className="delete" type="button" onClick={() => setEditData({ id: null, nama: '', harga: '' })}>
                            Batal
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default ProdukList;