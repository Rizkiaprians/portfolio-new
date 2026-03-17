// src/components/ui/Cursor.jsx
import { useCursor } from "../../hooks/useCursor";
import styles from "./Cursor.module.css";

export default function Cursor() {
  const { pos, expanded } = useCursor();
  return (
    <div
      className={`${styles.cursor} ${expanded ? styles.expand : ""}`}
      style={{ left: pos.x, top: pos.y }}
    />
  );
}
