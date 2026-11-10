ROUTING APP BARU - Praktikum Routing Express.js (Pertemuan 7) - Kelompok 3

CARA MENJALANKAN
1. Ekstrak zip ini, buka foldernya di VS Code.
2. Buka terminal di folder routing-app, jalankan sekali:
       npm install
3. Aktivitas 1, 2, 3:
       node app.js
   Buka: http://localhost:3000/  /about  /contact  /produk/A12  /produk/B25
   Uji POST/PUT/DELETE dengan Postman atau curl, atau buka http://localhost:3000/menu
4. Aktivitas 4 (hentikan server sebelumnya dulu dengan Ctrl + C):
       node tim.js
   Buka: http://localhost:3000/  /team/Dimas  /team/Dicky  /team/Defa  /team/Bernardus  /info  /data
   Tampilan HTML (bonus): http://localhost:3000/halaman

CATATAN
- app.js = Aktivitas 1-3, tim.js = Aktivitas 4.
- Kedua file memakai port 3000, jadi jalankan satu per satu.
- Contoh curl:
    curl -X POST   http://localhost:3000/users
    curl -X PUT    http://localhost:3000/users/2
    curl -X DELETE http://localhost:3000/users/3
