// src/components/sections/Hero.jsx
import profile from "../../data/profile";
import Button from "../ui/Button";
import styles from "./Hero.module.css";

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bgGlow} />
      <div className={styles.bgGlow2} />

      <div className={styles.content}>
        {profile.available && (
          <div className={styles.tag}>🟢 Tersedia untuk proyek baru</div>
        )}

        <h1 className={styles.heading}>
          Saya <em>merancang</em><br />
          &amp; membangun<br />
          web modern.
        </h1>

        <p className={styles.sub}>
          {profile.title} yang berfokus pada pengalaman pengguna, performa, dan
          kode yang bersih. Berbasis di {profile.location}.
        </p>

        <div className={styles.cta}>
          <Button variant="primary" onClick={() => scrollTo("projects")}>Lihat Project</Button>
          <Button variant="secondary" onClick={() => scrollTo("contact")}>Hubungi Saya</Button>
        </div>

        <div className={styles.stats}>
          {profile.stats.map((s, i) => (
            <div key={i}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
