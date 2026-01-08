import WorkCard from "../components/WorkCard";
import { caseStudies } from "../data/caseStudies";

export default function Work() {
  return (
    <main className="bg-bg">
      <section className="mx-auto max-w-5xl px-6 py-16 space-y-6">
        <header className="space-y-2">
          <h1>Work</h1>
          <p className="max-w-2xl text-muted">
            Selected case studies focused on usability, clarity, and front-end
            implementation.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2">
          {caseStudies.map((cs) => (
            <WorkCard
              key={cs.slug}
              slug={cs.slug}
              title={cs.title}
              description={cs.summary}
              thumbnail={cs.images?.thumbnail}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
