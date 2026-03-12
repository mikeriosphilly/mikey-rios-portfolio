import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  BriefcaseBusiness,
  Hammer,
  ScrollText,
  Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollToTop from "./ScrollToTop";

const navItems = [
  { to: "/work", label: "Work", Icon: BriefcaseBusiness },
  { to: "/projects", label: "Projects", Icon: Hammer },
  { to: "/about", label: "About / Resume", Icon: ScrollText },
  { to: "/contact", label: "Contact", Icon: Mail },
];

// Desktop nav item — active state uses a shared layoutId pill that morphs
// between items as you navigate (Framer Motion layout animation).
function DesktopNavItem({ to, label, Icon }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative group inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-xl transition-colors duration-200 ${
          isActive
            ? "text-accent"
            : "text-muted hover:text-text hover:bg-white/5"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <Icon
            size={15}
            className={`transition-opacity duration-200 flex-shrink-0 ${
              isActive ? "opacity-100" : "opacity-45 group-hover:opacity-70"
            }`}
          />
          <span>{label}</span>

          {/* Morphing pill — slides between active items */}
          {isActive && (
            <motion.span
              layoutId="nav-active-pill"
              className="absolute inset-0 rounded-xl bg-accent/10 border border-accent/25 -z-10"
              transition={{ type: "spring", bounce: 0.18, duration: 0.45 }}
            />
          )}
        </>
      )}
    </NavLink>
  );
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Header morphs from transparent → frosted glass when page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on desktop resize
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setMenuOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="min-h-screen text-text">
      <ScrollToTop />

      {/* Skip-to-content for keyboard / screen-reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-6 focus:z-[60] btn btn-primary"
      >
        Skip to content
      </a>

      {/* ── HEADER ── */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg/88 backdrop-blur-md border-b border-border shadow-xl shadow-black/30"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

          {/* Logo */}
          <NavLink
            to="/"
            onClick={closeMenu}
            className="group flex items-center gap-3 flex-shrink-0"
          >
            {/* Pulsing "available" status dot */}
            <span
              className="pulse-dot h-2.5 w-2.5 rounded-full bg-accent flex-shrink-0"
              aria-hidden="true"
            />
            <div className="leading-none">
              <span className="font-special text-3xl sm:text-4xl text-text group-hover:text-accent transition-colors duration-200 block">
                Michael Rios
              </span>
              <span className="font-mono text-[10px] text-muted/60 tracking-widest uppercase block mt-0.5">
                &lt;frontend dev /&gt;
              </span>
            </div>
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 relative">
            {navItems.map(({ to, label, Icon }) => (
              <DesktopNavItem key={to} to={to} label={label} Icon={Icon} />
            ))}
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

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="md:hidden absolute left-0 right-0 top-full z-50 border-t border-border bg-bg/95 backdrop-blur-md"
            >
              <motion.nav
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.05, delayChildren: 0.02 },
                  },
                }}
                className="mx-auto max-w-6xl px-6 py-5 flex flex-col gap-1"
              >
                {navItems.map(({ to, label, Icon }) => (
                  <motion.div
                    key={to}
                    variants={{
                      hidden: { y: -6, opacity: 0 },
                      show: {
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.16 },
                      },
                    }}
                  >
                    <NavLink
                      to={to}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                          isActive
                            ? "bg-accent/10 text-accent border border-accent/20"
                            : "text-muted hover:bg-surface/50 hover:text-text"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <Icon
                            size={17}
                            className={isActive ? "opacity-100" : "opacity-55"}
                          />
                          <span>{label}</span>
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile backdrop — tap to close */}
      <AnimatePresence>
        {menuOpen && (
          <motion.button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="fixed inset-0 z-40 md:hidden bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          />
        )}
      </AnimatePresence>

      {/* ── PAGE CONTENT ── */}
      <main id="main-content" className="mx-auto max-w-6xl px-6 py-10 sm:py-12">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          <Outlet />
        </motion.div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border/40">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Michael Rios
          </p>
          <p className="font-mono text-xs text-muted/45 tracking-wide">
            Built with React + Vite
          </p>
        </div>
      </footer>
    </div>
  );
}
