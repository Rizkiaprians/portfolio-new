// src/components/layout/Footer.jsx
import profile from "../../data/profile";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <span>© {year} {profile.name} — Dibuat dengan ☕ & 💛</span>
      <span className={styles.location}>{profile.location}</span>
    </footer>
  );
}
