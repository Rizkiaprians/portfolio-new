// src/components/layout/Navbar.jsx
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const navLinks = ["about", "skills", "projects", "experience", "contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const onNavClick = (id) => {
    scrollTo(id);
    setIsOpen(false);
  };

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Rizki Apriansyah<span className={styles.dot}>.</span></div>

      <button
        className={styles.menuBtn}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`${styles.links} ${isOpen ? styles.linksOpen : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className={styles.link}
            onClick={(e) => {
              e.preventDefault();
              onNavClick(link);
            }}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}
