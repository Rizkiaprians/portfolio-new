# 🗂️ Portfolio Web — Struktur Proyek

## Cara Menjalankan
```bash
npm install
npm run dev
```

## Struktur Folder
```
portfolio-web/
├── index.html                    # HTML entry point
├── vite.config.js                # Konfigurasi Vite
├── package.json
└── src/
    ├── main.jsx                  # Mount React ke DOM
    ├── App.jsx                   # Root component, rakit semua section
    │
    ├── styles/
    │   └── globals.css           # CSS variables & reset global
    │
    ├── data/                     # ✏️ EDIT FILE INI untuk ubah konten
    │   ├── profile.js            # Nama, bio, kontak, stats
    │   ├── projects.js           # Daftar proyek
    │   ├── skills.js             # Keahlian & level
    │   └── experience.js         # Riwayat pekerjaan
    │
    ├── hooks/                    # Custom React hooks
    │   ├── useCursor.js          # Logika custom cursor
    │   └── useScrollAnimation.js # Trigger animasi saat scroll
    │
    └── components/
        ├── layout/               # Komponen global (tampil di semua halaman)
        │   ├── Navbar.jsx
        │   ├── Navbar.module.css
        │   ├── Footer.jsx
        │   └── Footer.module.css
        │
        ├── ui/                   # Komponen kecil yang bisa dipakai ulang
        │   ├── Button.jsx
        │   ├── Button.module.css
        │   ├── Cursor.jsx
        │   ├── Cursor.module.css
        │   ├── SectionLabel.jsx
        │   └── SectionLabel.module.css
        │
        └── sections/             # Satu file per section halaman
            ├── Hero.jsx + .module.css
            ├── About.jsx + .module.css
            ├── Skills.jsx + .module.css
            ├── Projects.jsx + .module.css
            ├── Experience.jsx + .module.css
            └── Contact.jsx + .module.css
```

## Cara Kustomisasi
1. **Ganti konten** → edit file di `src/data/`
2. **Ganti style section** → edit `.module.css` di folder yang sama
3. **Tambah section baru** → buat file di `src/components/sections/`, lalu import di `App.jsx`
