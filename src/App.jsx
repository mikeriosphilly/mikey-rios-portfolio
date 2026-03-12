import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg text-text overflow-x-hidden">
      {/* ── Atmospheric background layer (pure CSS, zero JS cost) ── */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="bg-orb bg-orb-purple" />
        <div className="bg-orb bg-orb-lime" />
        <div className="bg-orb bg-orb-cyan" />
        <div className="bg-orb bg-orb-fuchsia" />
        <div className="bg-orb bg-orb-blue" />
        <div className="bg-dots" />
        {/* Grain lives inside the same fixed container so it layers over the orbs */}
        <div className="bg-grain" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10">
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="work" element={<Work />} />
            <Route path="work/:slug" element={<CaseStudy />} />
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
