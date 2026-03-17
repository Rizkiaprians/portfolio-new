// src/components/sections/About.jsx
import profile from "../../data/profile";
import myPhoto from "../../foto/saya.jpg";
import SectionLabel from "../ui/SectionLabel";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <SectionLabel>Tentang Saya</SectionLabel>
      <div className={styles.grid}>
        <div className={styles.imgWrap}>
          <div className={styles.imgPlaceholder}>
            <img src={myPhoto} alt={profile.name} className={styles.photo} />
          </div>
        </div>
        <div className={styles.text}>
          <h2 className={styles.title}>
            Halo, saya<br />
            <em className={styles.em}>{profile.name}</em>
          </h2>
          {profile.bio.map((para, i) => <p key={i} className={styles.para}>{para}</p>)}
          <div className={styles.techList}>
            {profile.techStack.map((tech) => (
              <span className={`skill-tag ${styles.techTag}`} key={tech.name}>
                <img src={tech.icon} alt={tech.name} className={styles.techIcon} loading="lazy" />
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
