import { useState, useEffect, useRef } from "react";
export function useScrollAnimation(threshold = 0.3) {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, triggered };
}
