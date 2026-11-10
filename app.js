// Aktivitas 1, 2, dan 3 - Routing pada Express.js
const express = require('express');
const path = require('path');
const app = express();

// ===== Aktivitas 1 - Routing Dasar =====
app.get('/', (req, res) => {
  res.send('Halaman Utama');
});

app.get('/about', (req, res) => {
  res.send('Halaman Tentang Kami');
});

app.get('/contact', (req, res) => {
  res.send('Hubungi Kami di routing-app');
});

// ===== Aktivitas 2 - Parameter Dinamis =====
app.get('/produk/:kode', (req, res) => {
  res.send('Produk dengan kode: ' + req.params.kode);
});

// ===== Aktivitas 3 - Simulasi CRUD =====
app.get('/users', (req, res) => {
  res.send('Daftar semua user');
});

app.post('/users', (req, res) => {
  res.send('Tambah data user baru');
});

app.put('/users/:id', (req, res) => {
  res.send('Update data user dengan ID: ' + req.params.id);
});

app.delete('/users/:id', (req, res) => {
  res.send('Hapus user dengan ID: ' + req.params.id);
});

// ===== Tambahan (bonus): halaman menu bertampilan HTML =====
// Buka http://localhost:3000/menu
app.get('/menu', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => console.log('Server berjalan di http://localhost:3000'));
