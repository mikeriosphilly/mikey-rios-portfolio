import { NavLink, Outlet } from "react-router-dom";

const base = "text-sm font-medium text-muted hover:text-text transition";

const active = "text-accent";

export default function Layout() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <header className="sticky top-0 z-10 border-b border-border bg-bg/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <NavLink
            to="/"
            className="font-semibold tracking-tight text-4xl text-text hover:text-accent transition"
          >
            Michael Rios
          </NavLink>

          <nav className="flex items-center gap-5">
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
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16">
        <Outlet />
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted">
          © {new Date().getFullYear()} Michael Rios
        </div>
      </footer>
    </div>
  );
}
