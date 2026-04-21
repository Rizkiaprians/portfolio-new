// src/data/projects.js

import lmsImage from "../foto/lms.png";
import loundryImage from "../foto/loundry.png";

const projects = [
  {
    id: 1,
    num: "01",
    name: "LMS SMP Putra Bangsa",
    desc: "Membuat LMS (Learning Management System) untuk sekolah terdapat 3 dashboard yaitu siswa, guru, admin. Masing-masing memiliki fitur khusus seperti siswa yaitu materi pembelajaran, forum diskusi, tugas, dan ujian online. Guru memiliki fitur absen, profil, bank soal, meeting room, materi, tugas terstruktur, jadwal ujian, nilai. Admin memiliki fitur Data master, manajement user, pengumuman, cetak dokumen, nilai, ujian.",
    tags: ["Bootstrap", "PHP", "CodeIgniter", "MySQL"],
    image: lmsImage,
    bg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
    featured: true, // ditampilkan lebih besar
  },
  {
    id: 2,
    num: "02",
    name: "website laundry",
    desc: "Membangun website untuk bisnis laundry dengan fitur pemesanan online, manajemen pelanggan, dan integrasi pembayaran.",
    tags: ["php", "laravel","javascript", "react", "vite", "SQL"],
    image: loundryImage,
    bg: "linear-gradient(135deg, #0f0c29 0%, #302b63 100%)",
    featured: false,
  },
  // {
  //   id: 3,
  //   num: "03",
  //   name: "TaskMind App",
  //   desc: "Aplikasi manajemen tugas dengan fitur kolaborasi tim, Kanban board, dan integrasi kalender.",
  //   tags: ["React Native", "Firebase", "Redux"],
  //   emoji: "✅",
  //   bg: "linear-gradient(135deg, #1a0533 0%, #2d1b4e 100%)",
  //   featured: false,
  // },
];

export default projects;
