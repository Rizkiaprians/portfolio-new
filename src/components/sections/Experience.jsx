// src/components/sections/Experience.jsx
import experienceData from "../../data/experience";
import SectionLabel from "../ui/SectionLabel";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <SectionLabel>Pengalaman</SectionLabel>
      <h2 className={styles.title}>Perjalanan<br />karier saya</h2>
      <div className={styles.timeline}>
        {experienceData.map((exp) => (
          <div className={styles.item} key={exp.id}>
            <div className={styles.period}>{exp.period}</div>
            <div className={styles.role}>{exp.role}</div>
            <div className={styles.company}>{exp.company}</div>
            <div className={styles.desc}>{exp.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
