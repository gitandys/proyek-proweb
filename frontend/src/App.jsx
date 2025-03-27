import React from 'react';
import TambahProduk from './components/TambahProduk';
import ProdukList from './components/ProdukList';
import ToastNotification from './components/ToastNotification';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <h1>Aplikasi E-Commerce Sederhana</h1>
      <TambahProduk />
      <ProdukList />
      
      {/* Tempatkan markup Toast di sini */}
      <div id="toastContainer" className="toast-container position-fixed top-0 end-0 p-3">
        <div id="crudToast" className="toast align-items-center text-white bg-success" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="d-flex">
            <div className="toast-body">
              {/* Pesan akan diupdate melalui ToastNotification */}
            </div>
            <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;