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

const MotionNavLink = motion(NavLink);

const navBase =
  "group inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200";
const navIdle = "text-muted";
const navHover = "hover:bg-white hover:text-black";
const navActive = "bg-white text-black shadow-sm";

const iconVariants = {
  rest: { opacity: 0, x: 10, scale: 0.96 },
  hover: { opacity: 1, x: 0, scale: 1 },
};

const iconTransition = {
  duration: 0.28,
  ease: [0.16, 1, 0.3, 1],
};

function DesktopNavItem({ to, label, Icon }) {
  return (
    <MotionNavLink
      to={to}
      initial="rest"
      animate="rest"
      whileHover="hover"
      className={({ isActive }) =>
        `${navBase} ${isActive ? navActive : `${navIdle} ${navHover}`}`
      }
    >
      {({ isActive }) => (
        <>
          <motion.span
            aria-hidden="true"
            className="inline-flex"
            variants={iconVariants}
            transition={iconTransition}
            animate={isActive ? "hover" : undefined}
          >
            <Icon size={16} />
          </motion.span>
          <span>{label}</span>
        </>
      )}
    </MotionNavLink>
  );
}

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

  // Lock body scroll when menu is open
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

      {/* HEADER */}
      <header className="sticky top-0 z-50 relative border-b border-border bg-bg md:bg-bg/70 md:backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <NavLink
            to="/"
            onClick={closeMenu}
            className="font-special font-semibold tracking-tight text-3xl sm:text-4xl text-text hover:text-accent transition"
          >
            Michael Rios
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-3">
            <DesktopNavItem to="/work" label="Work" Icon={BriefcaseBusiness} />
            <DesktopNavItem to="/projects" label="Projects" Icon={Hammer} />
            <DesktopNavItem
              to="/about"
              label="About/Resume"
              Icon={ScrollText}
            />
            <DesktopNavItem to="/contact" label="Contact" Icon={Mail} />
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

        {/* Mobile menu (overlay dropdown) */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="md:hidden absolute left-0 right-0 top-full z-50 border-t border-border bg-bg/95 backdrop-blur"
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
                className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-3"
              >
                {[
                  { to: "/work", label: "Work", Icon: BriefcaseBusiness },
                  { to: "/projects", label: "Projects", Icon: Hammer },
                  { to: "/about", label: "About/Resume", Icon: ScrollText },
                  { to: "/contact", label: "Contact", Icon: Mail },
                ].map(({ to, label, Icon }) => (
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
                        `${navBase} w-full flex items-center gap-3 ${
                          isActive
                            ? navActive
                            : `${navIdle} hover:bg-surface/40 hover:text-text`
                        }`
                      }
                    >
                      <Icon size={18} className="opacity-80" />
                      <span>{label}</span>
                    </NavLink>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop (tap outside closes) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="fixed inset-0 z-40 md:hidden bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          />
        )}
      </AnimatePresence>

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
      <footer className="border-t border-transparent">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted">
          © {new Date().getFullYear()} Michael Rios
        </div>
      </footer>
    </div>
  );
}
