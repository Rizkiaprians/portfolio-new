// src/components/sections/Projects.jsx
import projectsData from "../../data/projects";
import SectionLabel from "../ui/SectionLabel";
import styles from "./Projects.module.css";

function ProjectCard({ project }) {
  return (
    <div className={`project-card ${styles.card} ${project.featured ? styles.featured : ""}`}>
      <div className={styles.thumb} style={{ background: project.bg }}>
        {project.image ? (
          <img src={project.image} alt={project.name} className={styles.thumbImage} />
        ) : (
          <span>{project.emoji}</span>
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.num}>{project.num}</div>
        <div className={styles.name}>{project.name}</div>
        <div className={styles.desc}>{project.desc}</div>
        <div className={styles.tags}>
          {project.tags.map((t) => <span className={styles.tag} key={t}>{t}</span>)}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <SectionLabel>Portofolio</SectionLabel>
      <h2 className={styles.title}>Proyek<br />terpilih</h2>
      <div className={styles.grid}>
        {projectsData.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  );
}
