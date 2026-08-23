# Website Kelas XII TJKT A

Website statis (HTML + Tailwind CSS via CDN + JavaScript) untuk kelas XII TJKT A.
Tidak butuh build tool, langsung bisa dibuka di browser atau di-deploy sebagai situs statis.

## Struktur folder

```
web-kelas/
├── index.html        # Beranda
├── profil.html        # Profil kelas, visi misi, wali kelas
├── struktur.html       # Struktur organisasi kelas
├── siswa.html         # Daftar 36 siswa (bisa dicari)
├── prestasi.html       # Timeline prestasi kelas
├── berita.html        # Berita / blog kelas
├── galeri.html        # Galeri foto
├── kontak.html        # Link Instagram & TikTok kelas
├── assets/
│   ├── css/main.css    # Custom CSS di luar Tailwind
│   ├── js/components.js  # Navbar & footer bersama semua halaman
│   └── img/          # Taruh foto asli di sini
└── README.md
```

## Cara jalanin di lokal

Tinggal buka `index.html` langsung di browser, atau kalau mau lebih mirip production
(disarankan supaya path relatif konsisten), jalankan local server sederhana:

```bash
# Python
python3 -m http.server 5500

# atau pakai extension "Live Server" di VS Code
```

Lalu buka `http://localhost:5500`.

## Yang perlu kamu ganti (isi dummy)

Semua halaman sudah diisi placeholder yang jelas ditandai (nama wali kelas, nama
pengurus, nama 36 siswa, prestasi, berita, foto galeri). Cari teks seperti:

- "Nama Wali Kelas", "Nama Ketua Kelas", dll di `profil.html` & `struktur.html`
- `Nama Siswa 1..36` di `siswa.html` (array `students` di bagian `<script>`).
  Klik salah satu kartu siswa di halaman ini akan membuka kartu detail berisi
  nama lengkap, nama panggilan, TTL, hobi, cita-cita, dan quote — semua field
  itu diisi dari properti `nickname`, `birthday`, `hobby`, `dream`, `quote`
  di array yang sama, jadi tinggal isi sekali per siswa.
- Item prestasi di `prestasi.html`
- Artikel di `berita.html`
- Foto placeholder di `galeri.html` — tambahkan `<img src="assets/img/nama-file.jpg">`
- Username Instagram &amp; TikTok di `kontak.html` dan `assets/js/components.js`

## Menambahkan foto

Foto wali kelas dan siswa/i sudah disiapkan tempatnya, tinggal upload file
dengan nama yang sesuai — kalau file belum ada, otomatis tampil inisial
sebagai pengganti (jadi aman, tidak ada gambar rusak):

- **Wali kelas** → simpan sebagai `assets/img/wali-kelas.jpg`
- **Siswa/i** → simpan di `assets/img/siswa/`, nama file harus 2 digit sesuai
  nomor absen: `01.jpg`, `02.jpg`, ... `36.jpg` (absen 1–9 pakai angka 0 di depan)

Foto siswa otomatis muncul di kartu daftar siswa maupun di kartu detail saat
diklik. Format `.jpg` bisa diganti `.png` asal disesuaikan juga di
`siswa.html` (cari `assets/img/siswa/`).

## Deploy ke hosting

Karena ini situs statis murni, hampir semua platform hosting statis cocok. Rekomendasi:

### 1. Vercel (paling gampang, disarankan)
1. Push folder ini ke repo GitHub.
2. Buka [vercel.com](https://vercel.com) → **Add New Project** → pilih repo tadi.
3. Framework preset pilih **Other** (karena statis, tanpa build).
4. Build Command kosongkan, Output Directory isi `.` (root).
5. Klik **Deploy**. Selesai — otomatis dapat URL `*.vercel.app`, dan tiap `git push`
   akan auto-deploy ulang.

### 2. Netlify (alternatif, drag & drop tanpa GitHub)
1. Buka [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag folder `web-kelas` langsung ke browser. Langsung online dalam hitungan detik.
3. Bisa juga hubungkan ke GitHub repo untuk auto-deploy seperti Vercel.

### 3. GitHub Pages (gratis, terintegrasi dengan GitHub)
1. Push ke repo GitHub.
2. Masuk **Settings → Pages** → source pilih branch `main`, folder `/ (root)`.
3. Situs akan online di `https://username.github.io/nama-repo/`.

### 4. Cloudflare Pages
Mirip Vercel/Netlify: hubungkan repo GitHub, build command kosong, output directory `.`.

**Saran:** kalau kamu sudah biasa/mau pakai GitHub, **Vercel** paling nyaman karena
auto-deploy tiap push, custom domain gratis, dan preview URL tiap branch/PR — cocok
untuk tugas sekolah yang mungkin direvisi berkali-kali.

## Catatan teknis

- Palet warna sengaja dibuat satu warna aksen saja (cyan `#22D3EE`) di atas
  netral abu-abu gelap, biar konsisten dan nggak "berebut" perhatian dengan
  warna lain. Kalau mau ganti aksen, cukup ubah nilai `accent` di tiap
  `tailwind.config` (ada di setiap file HTML).
- Tailwind di-load lewat CDN (`cdn.tailwindcss.com`) jadi tidak perlu `npm install`
  atau build step. Kalau nanti proyek makin besar dan mau lebih optimal, bisa upgrade
  ke Tailwind CLI/Vite.
- Navbar & footer dirender otomatis oleh `assets/js/components.js` supaya tidak perlu
  copy-paste HTML yang sama di 8 halaman.
- Semua halaman sudah responsive (mobile, tablet, desktop) dan mendukung keyboard focus.
