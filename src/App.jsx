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
    <div className="relative min-h-screen bg-bg text-text">
      {/* Background layer */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <ColorBends
          rotation={38}
          autoRotate={-3}
          speed={0.04}
          scale={3.6}
          frequency={1.6}
          warpStrength={0.95}
          mouseInfluence={0.2}
          noise={0.11}
        />
        {/* Optional readability veil (recommended) */}
        {/* <div className="absolute inset-0 bg-bg/70" /> */}
      </div>

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
  );
}
