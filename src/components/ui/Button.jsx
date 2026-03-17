// src/components/ui/Button.jsx
import styles from "./Button.module.css";

export default function Button({ children, variant = "primary", onClick }) {
  return (
    <button
      className={variant === "primary" ? styles.primary : styles.secondary}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
