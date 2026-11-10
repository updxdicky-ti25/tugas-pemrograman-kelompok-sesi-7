// Aktivitas 4 - Mini Project Kelompok "My Team Router"
const express = require('express');
const path = require('path');
const app = express();

const namaTim = 'Kelompok 3';
const anggota = [
  'Dimas Sandy (Ketua)',
  'Dicky Abdullah Upara',
  'Defa Dinah Alfarist',
  'Bernardus Laba Manikin'
];

// a. Route /
app.get('/', (req, res) => {
  res.send('Selamat datang di server kelompok ' + namaTim);
});

// b. Route /team/:nama
app.get('/team/:nama', (req, res) => {
  res.send('Hai, saya ' + req.params.nama + ' dari kelompok ' + namaTim);
});

// c. Route /info -> JSON data anggota
app.get('/info', (req, res) => {
  res.json({
    kelompok: namaTim,
    jumlah_anggota: anggota.length,
    anggota: anggota
  });
});

// d. Redirect /data -> /info
app.get('/data', (req, res) => {
  res.redirect('/info');
});

// ===== Tambahan (bonus): halaman tim bertampilan HTML =====
// Buka http://localhost:3000/halaman
app.get('/halaman', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'tim.html'));
});

app.listen(3000, () => console.log('Server tim berjalan di http://localhost:3000'));
