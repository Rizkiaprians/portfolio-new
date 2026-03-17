// src/components/ui/SectionLabel.jsx
import styles from "./SectionLabel.module.css";

export default function SectionLabel({ children, center }) {
  return (
    <div className={`${styles.label} ${center ? styles.center : ""}`}>
      {children}
    </div>
  );
}
