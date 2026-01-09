import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import ScrollToTop from "./ScrollToTop";

const base = "text-sm font-medium text-muted hover:text-text transition";
const active = "text-accent";

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setMenuOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="min-h-screen bg-bg text-text">
      <ScrollToTop />
      {/* HEADER */}
      <header className="sticky top-0 z-10 border-b border-border bg-bg/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <NavLink
            to="/"
            onClick={closeMenu}
            className="font-special font-semibold tracking-tight text-3xl sm:text-4xl text-text hover:text-accent transition"
          >
            Michael Rios
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5">
            <NavLink
              to="/work"
              className={({ isActive }) => `${base} ${isActive ? active : ""}`}
            >
              Work
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => `${base} ${isActive ? active : ""}`}
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `${base} ${isActive ? active : ""}`}
            >
              About / Resume
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `${base} ${isActive ? active : ""}`}
            >
              Contact
            </NavLink>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-border bg-surface/40 p-2 text-text hover:bg-surface/60 transition"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-bg/90 backdrop-blur">
            <nav className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-3">
              {["work", "projects", "about", "contact"].map((path) => (
                <NavLink
                  key={path}
                  to={`/${path}`}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `rounded-xl px-3 py-2 ${base} ${
                      isActive ? active : "text-text"
                    } hover:bg-surface/40`
                  }
                >
                  {path === "about"
                    ? "About / Resume"
                    : path[0].toUpperCase() + path.slice(1)}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* PAGE CONTENT */}
      <main className="mx-auto max-w-6xl px-6 py-10 sm:py-12">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, filter: "blur(10px)", y: 8 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          exit={{ opacity: 0, filter: "blur(10px)", y: -8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <Outlet />
        </motion.div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted">
          © {new Date().getFullYear()} Michael Rios
        </div>
      </footer>
    </div>
  );
}
