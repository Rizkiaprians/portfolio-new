// src/data/skills.js

const skills = [
  {
    id: 1,
    icon: "⚛️",
    title: "Frontend Development",
    desc: "React, Next.js, TypeScript, Tailwind CSS, animasi & UI interaktif.",
    items: [
      { label: "React / Next.js", level: 70 },
      { label: "TypeScript",      level: 90 },
      { label: "CSS / Tailwind",  level: 80 },
    ],
  },
  {
    id: 2,
    icon: "⚙️",
    title: "Backend Development",
    desc: "Node.js, Express, REST API, GraphQL, database design & optimasi.",
    items: [
      { label: "Node.js", level: 60 },
      { label: "PHP/Laravel", level: 70 },
      { label: "MySQL",   level: 80 },
      { label: "GraphQL", level: 70 },
    ],
  },
  {
    id: 3,
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Figma, design system, prototyping, user research & usability testing.",
    items: [
      { label: "Figma",        level: 70 },
      { label: "Design System", level: 82 },
      { label: "Prototyping",  level: 70 },
    ],
  },
];

export default skills;
