# 📰 Mini-Project-FrontEnd-PPLK2025

Website **Portal Berita** modern yang dibuat sebagai mini project untuk program PPLK 2025. Proyek ini menggunakan ReactJS dan TailwindCSS untuk frontend, serta memanfaatkan [NewsAPI](https://newsapi.org/) sebagai sumber data berita publik. Desain UI mengacu pada template Figma berikut:

🎨 [Figma Design - Free News Magazine Template](https://www.figma.com/design/QltzF7CthhfSMEOtR0CNIv/Free-News---Magazine-Figma-Template---All-pages--Community-?node-id=17-11&p=f&t=8ptpAv9lfZsU28GC-0)

---

## 🚀 Tech Stack

* ⚛️ ReactJS (Vite)
* 🎨 TailwindCSS
* 🌐 NewsAPI ([https://newsapi.org/](https://newsapi.org/))
* 🧑‍🎨 Desain: Figma

---

## 📸 Fitur Utama

* Menampilkan berita terbaru dari berbagai kategori
* Pencarian berita berdasarkan keyword
* Responsif (Mobile & Desktop Friendly)
* Tampilan modern mengikuti template Figma

---

## 🔧 Setup & Instalasi

Ikuti langkah-langkah berikut untuk menjalankan proyek ini secara lokal:

### 1. Clone Repository

```bash
git clone https://github.com/username/Mini-Project-FrontEnd-PPLK2025.git
cd Mini-Project-FrontEnd-PPLK2025
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Konfigurasi API Key

* Daftar akun di [https://newsapi.org](https://newsapi.org)
* Dapatkan API key-nya
* Buat file `.env` di root project dan isi:

```env
VITE_NEWS_API_KEY=your_api_key_here
```

### 4. Jalankan Proyek

```bash
npm run dev
```

Akses website di: [http://localhost:5173](http://localhost:5173)

---

## 💡 Catatan

* API dari NewsAPI.org memiliki rate limit, pastikan untuk tidak melakukan request berlebihan.
* Desain Figma hanya sebagai acuan. Beberapa penyesuaian dilakukan agar sesuai dengan kebutuhan teknis dan UI responsif.

---

## 🤝 Kontribusi

Pull request dan masukan sangat terbuka! Silakan fork repository ini dan kirim PR jika ada perbaikan atau penambahan fitur.

---

## 📜 Lisensi

Open-source untuk kebutuhan pembelajaran dan non-komersial.

---

## 🏗️ Struktur Project

```
📁 root/
├── 📁 src/                 # Frontend React
├── 📁 backend/
│   └── 📁 api/            # Backend Express API
│       └── server.js      # Server utama
├── package.json           # Frontend dependencies
├── render.yaml            # Konfigurasi Render deployment
└── DEPLOYMENT.md          # Panduan deployment lengkap
```

## 🚀 Cara Deployment di Render

### **PENTING**: Jangan deploy sebagai Web Service tunggal!

Project ini harus di-deploy sebagai **2 service terpisah**:

### 1. Backend API Service
- **Type**: Web Service
- **Build Command**: `cd backend/api && npm install`
- **Start Command**: `cd backend/api && node server.js`
- **Environment Variables**: 
  - `NEWS_API_KEY` = API key dari NewsAPI.org

### 2. Frontend Service  
- **Type**: Static Site
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`
- **Environment Variables**:
  - `VITE_API_URL` = URL backend service (contoh: `https://your-backend.onrender.com`)

## 🔧 Development

### Frontend
```bash
npm install
npm run dev
```

### Backend
```bash
cd backend/api
npm install
node server.js
```

## 📋 Environment Variables

### Backend (.env)
```
NEWS_API_KEY=your_news_api_key_here
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:3001
```

## ⚠️ Troubleshooting

**Error "No open ports detected"**: 
- Pastikan deploy sebagai 2 service terpisah
- Jangan deploy sebagai Web Service tunggal
- Gunakan `render.yaml` untuk deployment otomatis

**Error "node eslint.config.js"**:
- Sudah diperbaiki dengan menghapus `"main": "eslint.config.js"` dari package.json
- Pastikan menggunakan konfigurasi yang benar di Render

## 📖 Dokumentasi Lengkap

Lihat file `DEPLOYMENT.md` untuk panduan deployment yang lebih detail.
