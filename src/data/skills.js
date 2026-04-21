// src/data/skills.js

const skills = [
  {
    id: 1,
    icon: "⚛️",
    title: "Frontend Development",
    desc: "React, Next.js, TypeScript, Tailwind CSS, animasi & UI interaktif.",
    items: [
      { label: "JavaScript", level: 70 },
      { label: "HTML", level: 80 },
      { label: "React", level: 60 },
      { label: "CSS",  level: 70 },
      { label: "Tailwind CSS", level: 50 },
    ],
  },
  {
    id: 2,
    icon: "⚙️",
    title: "Backend Development",
    desc: "Node.js, Express, REST API, GraphQL, database design & optimasi.",
    items: [
      { label: "PHP/Laravel", level: 60 },
      { label: "MySQL",   level: 70 },
    ],
  },
  // {
  //   id: 3,
  //   icon: "🎨",
  //   title: "UI/UX Design",
  //   desc: "Figma, design system, prototyping, user research & usability testing.",
  //   items: [
  //     { label: "Figma",        level: 70 },
  //     { label: "Design System", level: 82 },
  //     { label: "Prototyping",  level: 70 },
  //   ],
  // },
];

export default skills;
