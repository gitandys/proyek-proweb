import React from 'react';
import { Toast } from 'bootstrap';

function ToastNotification({ message, type = 'success' }) {
  // Fungsi untuk menampilkan toast
  const showToast = () => {
    const toastElement = document.getElementById('crudToast');
    toastElement.querySelector('.toast-body').innerText = message;
    toastElement.className = `toast align-items-center text-white bg-${type}`;
    const toast = new Toast(toastElement);
    toast.show();
  };

  // Jalankan showToast setiap kali komponen dirender (bisa dikustomisasi lebih lanjut)
  React.useEffect(() => {
    showToast();
  }, [message, type]);

  return null; // Komponen ini hanya untuk men-trigger toast, tidak perlu render elemen tambahan
}

export default ToastNotification;