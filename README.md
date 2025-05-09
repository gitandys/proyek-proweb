# Aplikasi E-Commerce CRUD Sederhana

Aplikasi berbasis web untuk manajemen produk menggunakan React dan Vite.

## 1. Persyaratan sistem :

Sebelum memulai pengembangan aplikasi dengan React dan Vite, pastikan Node.js dan npm sudah terinstal. Selanjutnya, instal Vite dan React menggunakan npm. Selain itu, siapkan juga PostgreSQL sebagai database yang akan digunakan pada aplikasi ini.

- Node.js
- npm
- Vite
- React
- PostgreSQL (database)

## 2. Struktur Database

Berikut adalah struktur tabel utama dalam database:

### **Tabel Produk (products)**

| Kolom    | Tipe Data | Deskripsi               |
|----------|----------|-------------------------|
| id       | INT (PK) | Primary Key             |
| nama     | VARCHAR  | Nama produk             |
| harga    | DECIMAL  | Harga produk            |

Untuk membuat tabel di PostgreSQL, gunakan perintah berikut:

```sql
sql
CREATE TABLE IF NOT EXISTS produk (
    id SERIAL PRIMARY KEY,
    nama VARCHAR(50),
    harga INT
);
```

## 3. Cara install dependensi

jalankan perintah berikut di terminal :

```bash
npm install
```

## 4. Cara menjalankan aplikasi

### Backend

Jalankan backend dengan perintah :

```bash
node index.js
```

### Frontend

Jalankan frontend dengan perintah :

```bash
npm run dev
```

## 5. Daftar API Endpoint

Jika ada backend, tambahkan daftar endpoint untuk CRUD produk :
```bash
GET    /api/products       → Ambil semua produk  
POST   /api/products       → Tambah produk baru  
PUT    /api/products/:id   → Update produk  
DELETE /api/products/:id   → Hapus produk  
```

## 6. Penggunaan aplikasi

- Buka di browser dengan alamat http://localhost:3001
- Pastikan backend sudah berjalan dan database sudah terhubung dengan baik. 
- Setelah itu, buka aplikasi di browser dengan alamat http://localhost:5173 
- Anda dapat melihat daftar produk, menambahkan produk baru, mengupdate produk, dan menghapus produk.
- Anda dapat mengakses aplikasi melalui browser dan melakukan operasi CRUD pada produk.

## 7. Teknologi yang Digunakan

- **Frontend**: React.js, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL

## 8. Fitur Tambahan

- Styling menggunakan Bootstrap dan CSS
- Notifikasi sukses/gagal pada aksi CRUD

## 9. Troubleshooting Tips

- Jika ada bug, gunakan `console.log()` di lokasi yang relevan untuk membantu debugging.
- Jika styling tidak muncul, pastikan Bootstrap diimpor dengan benar.
- Jika versi library tidak cocok, periksa `package.json` dan sesuaikan dengan dokumentasi resmi.

## 10. Dokumentasi Lengkap
### Halaman Utama
![Halaman Utama](image.png)
### Tampilan  Saat Hanya salah 1 kolom yang diisi
![Pesan Error](image-1.png)
### Tampilan Saat Gagal menginput produk
![Gagal Input](image-2.png)
### Create (Menambahkan Produk)
![Create](image-3.png)
### Read (Melihat Daftar Produk)
![Read](image-4.png)
### Update (Memperbarui Produk)
![Read](<Screenshot 2025-03-27 085858.png>)

![After Read](<Screenshot 2025-03-27 085906.png>)
### Delete (Menghapus Produk)
![Delete](image-7.png)
