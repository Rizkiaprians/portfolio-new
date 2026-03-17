// src/App.jsx
// ─────────────────────────────────────────────────
// Entry point utama — cukup daftarkan section di sini
// ─────────────────────────────────────────────────
import "./styles/globals.css";

import Cursor   from "./components/ui/Cursor";
import Navbar   from "./components/layout/Navbar";
import Footer   from "./components/layout/Footer";

import Hero       from "./components/sections/Hero";
import About      from "./components/sections/About";
import Skills     from "./components/sections/Skills";
import Projects   from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact    from "./components/sections/Contact";

export default function App() {
  return (
    <>
      {/* Noise overlay */}
      <div style={{
        position:"fixed",inset:0,pointerEvents:"none",zIndex:1,opacity:0.4,
        backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`
      }} />

      <Cursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
