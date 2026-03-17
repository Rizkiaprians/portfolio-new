// src/components/sections/Contact.jsx
import profile from "../../data/profile";
import SectionLabel from "../ui/SectionLabel";
import styles from "./Contact.module.css";

function PlatformIcon({ type }) {
  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.24-8 5.34-8-5.34V6l8 5.33L20 6Z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 10.34H5.67V18h2.67v-7.66ZM7 6a1.56 1.56 0 1 0 0 3.11A1.56 1.56 0 0 0 7 6Zm11.33 7.23c0-2.3-1.23-3.37-2.86-3.37-1.32 0-1.91.73-2.24 1.24v-1.06h-2.67V18h2.67v-4.12c0-1.08.2-2.12 1.54-2.12 1.32 0 1.34 1.24 1.34 2.19V18h2.67v-4.77Z" />
      </svg>
    );
  }

  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M12 .5A11.5 11.5 0 0 0 .5 12.24c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-2.13c-3.2.71-3.88-1.4-3.88-1.4-.53-1.37-1.3-1.73-1.3-1.73-1.06-.74.08-.73.08-.73 1.17.08 1.79 1.23 1.79 1.23 1.04 1.82 2.74 1.3 3.4 1 .1-.77.41-1.3.74-1.6-2.55-.3-5.23-1.3-5.23-5.78 0-1.28.45-2.32 1.18-3.14-.12-.3-.51-1.5.11-3.13 0 0 .97-.32 3.18 1.2a10.9 10.9 0 0 1 5.8 0c2.2-1.52 3.17-1.2 3.17-1.2.62 1.63.23 2.83.12 3.13.74.82 1.18 1.86 1.18 3.14 0 4.5-2.69 5.47-5.26 5.77.42.36.79 1.07.79 2.16v3.2c0 .3.2.66.79.55a11.75 11.75 0 0 0 7.85-10.95A11.5 11.5 0 0 0 12 .5Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M20.52 3.48A11.93 11.93 0 0 0 12.04 0C5.43 0 .06 5.37.06 11.98a11.9 11.9 0 0 0 1.62 6l-1.72 6.3 6.45-1.69a11.9 11.9 0 0 0 5.63 1.43h.01c6.6 0 11.97-5.37 11.97-11.98 0-3.2-1.24-6.2-3.5-8.56ZM12.05 21.9a9.9 9.9 0 0 1-5.05-1.39l-.37-.22-3.83 1 1.02-3.73-.24-.38a9.9 9.9 0 1 1 8.47 4.72Zm5.44-7.43c-.3-.16-1.74-.86-2.02-.96-.27-.1-.47-.16-.67.16-.19.3-.76.95-.92 1.14-.17.2-.34.22-.63.08-.3-.16-1.24-.46-2.36-1.46-.88-.78-1.47-1.75-1.63-2.05-.17-.3-.02-.46.13-.62.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.54-.07-.16-.67-1.62-.92-2.22-.23-.56-.47-.49-.67-.5h-.58c-.2 0-.5.07-.76.34-.26.27-1 1-.99 2.44 0 1.44 1.04 2.83 1.19 3.03.15.2 2.05 3.16 5.08 4.31.72.31 1.29.49 1.73.62.73.23 1.4.2 1.92.12.59-.09 1.74-.71 1.98-1.4.24-.68.24-1.27.17-1.4-.07-.12-.26-.2-.55-.35Z" />
    </svg>
  );
}

const contactLinks = [
  {
    type: "email",
    label: "Email Saya",
    href: (c) =>
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(c.email)}`,
  },
  { type: "linkedin", label: "LinkedIn", href: (c) => c.linkedin },
  { type: "github", label: "GitHub", href: (c) => c.github },
  { type: "whatsapp", label: "WhatsApp", href: (c) => c.whatsapp },
];

export default function Contact() {
  const { contact } = profile;
  return (
    <section className={styles.section} id="contact">
      <SectionLabel center>Kontak</SectionLabel>
      <div className={styles.big}>
        Mari<br /><em className={styles.em}>berkolaborasi</em>
      </div>
      <p className={styles.sub}>Punya proyek menarik? Saya selalu terbuka untuk diskusi dan peluang baru.</p>
      <div className={styles.links}>
        {contactLinks.map((l) => (
          <a className={`contact-link ${styles.link}`} key={l.label} href={l.href(contact)}>
            <span className={styles.icon} aria-hidden="true"><PlatformIcon type={l.type} /></span>
            {l.label}
          </a>
        ))}
      </div>
    </section>
  );
}
