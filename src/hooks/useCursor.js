import { useState, useEffect } from "react";
export function useCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX - 6, y: e.clientY - 6 });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  useEffect(() => {
    const targets = document.querySelectorAll("a, button, .skill-card, .project-card, .contact-link, .skill-tag");
    const enter = () => setExpanded(true);
    const leave = () => setExpanded(false);
    targets.forEach((el) => { el.addEventListener("mouseenter", enter); el.addEventListener("mouseleave", leave); });
    return () => { targets.forEach((el) => { el.removeEventListener("mouseenter", enter); el.removeEventListener("mouseleave", leave); }); };
  }, []);
  return { pos, expanded };
}
