import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main className="bg-bg">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <header className="space-y-3">
          <h1>Projects</h1>
          <p className="max-w-2xl text-muted">
            Personal and exploratory builds where I experiment with UI patterns,
            front-end architecture, and interactions that do not always fit
            neatly into client work.
          </p>
        </header>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {projects.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-border bg-surface/40 p-8">
            <p className="text-muted">
              Projects are in progress. Check back soon.
            </p>
          </div>
        ) : null}
      </section>
    </main>
  );
}
