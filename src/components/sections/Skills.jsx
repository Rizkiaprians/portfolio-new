// src/components/sections/Skills.jsx
import skillsData from "../../data/skills";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import SectionLabel from "../ui/SectionLabel";
import styles from "./Skills.module.css";

function SkillCard({ skill, animated }) {
  return (
    <div className={`skill-card ${styles.card}`}>
      <div className={styles.icon}>{skill.icon}</div>
      <div className={styles.cardTitle}>{skill.title}</div>
      <div className={styles.cardDesc}>{skill.desc}</div>
      <div className={styles.bars}>
        {skill.items.map((item) => (
          <div key={item.label} className={styles.barGroup}>
            <div className={styles.barLabel}>
              <span>{item.label}</span>
              <span>{item.level}%</span>
            </div>
            <div className={styles.barTrack}>
              <div className={styles.barFill} style={{ width: animated ? `${item.level}%` : "0%" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, triggered } = useScrollAnimation();

  return (
    <section className={styles.section} id="skills" ref={ref}>
      <SectionLabel>Keahlian</SectionLabel>
      <h2 className={styles.title}>Apa yang<br />saya kuasai</h2>
      <div className={styles.grid}>
        {skillsData.map((skill) => (
          <SkillCard key={skill.id} skill={skill} animated={triggered} />
        ))}
      </div>
    </section>
  );
}
