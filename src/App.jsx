import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import ColorBends from "./components/backgrounds/ColorBends";

export default function App() {
  return (
    <div className="relative min-h-screen text-text overflow-x-hidden">
      {/* Background layer */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        {/* Base dark background for ALL sizes */}
        <div className="absolute inset-0 bg-bg" />

        {/* Mobile fallback (no WebGL, stretches with page) */}
        <div className="absolute inset-0 md:hidden bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.22),transparent_60%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.18),transparent_55%),linear-gradient(120deg,rgba(236,72,153,0.10),transparent_55%)]" />
        <div className="absolute inset-0 md:hidden bg-black/10" />

        {/* Desktop ColorBends */}
        <div className="hidden absolute inset-0">
          <ColorBends
            rotation={38}
            autoRotate={-3}
            speed={0.04}
            scale={3.6}
            frequency={1.6}
            warpStrength={0.95}
            mouseInfluence={0}
            noise={0.11}
          />
          <div className="absolute inset-0 bg-black/15" />
        </div>
      </div>

      {/* Site content above backgrounds */}
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
