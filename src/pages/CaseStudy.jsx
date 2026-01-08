import { useParams, Link } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";
import ScreenshotBlock from "../components/ScreenshotBlock";

function Section({ title, children, variant = "supporting" }) {
  const spacing = variant === "primary" ? "py-14 sm:py-16" : "py-10 sm:py-12";
  const heading = variant === "primary" ? "text-2xl sm:text-3xl" : "text-xl";

  return (
    <section className={spacing}>
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <h2 className={`${heading} font-semibold tracking-tight text-text`}>
            {title}
          </h2>
          <div className="h-px flex-1 bg-border/70" />
        </div>

        <div className="mt-4 text-base leading-relaxed text-muted">
          {children}
        </div>
      </div>
    </section>
  );
}

function Badge({ children, variant = "soft" }) {
  const styles =
    variant === "accent"
      ? "border-accent/30 bg-accent/15 text-accent"
      : "border-border bg-surface/40 text-text/90";

  return (
    <span
      className={`rounded-full border px-3 py-1 text-sm backdrop-blur ${styles}`}
    >
      {children}
    </span>
  );
}

function Card({ label, value }) {
  return (
    <div className="rounded-2xl border border-border bg-surface/40 p-6">
      <p className="text-sm text-muted">{label}</p>
      <p className="mt-1 text-base text-text">{value}</p>
    </div>
  );
}

function ButtonLink({ href, children, variant = "ghost" }) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-accent/30";
  const styles =
    variant === "primary"
      ? "bg-accent text-bg hover:opacity-90"
      : "border border-border bg-surface/30 text-text hover:bg-surface/45";

  return (
    <a
      href={href}
      className={`${base} ${styles}`}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const cs = caseStudies.find((x) => x.slug === slug);

  if (!cs) {
    return (
      <main className="bg-bg">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 py-16">
          <p className="text-muted">Case study not found.</p>
          <Link
            to="/work"
            className="mt-6 inline-block text-accent hover:opacity-90"
          >
            Back to Work →
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-bg text-text">
      {/* TRUE FULL-BLEED HERO IMAGE */}
      {cs.images?.hero ? (
        <section className="border-b border-border">
          <img
            src={cs.images.hero}
            alt={`${cs.title} hero`}
            className="h-[220px] w-full object-cover sm:h-[360px] lg:h-[420px]"
            loading="eager"
          />
        </section>
      ) : null}

      {/* HEADER CONTENT */}
      <header>
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 py-10 sm:py-14">
          <p className="text-sm text-muted">{cs.hero.eyebrow}</p>

          {/* Let global h1 styling kick in, but keep spacing classes */}
          <h1 className="mt-3">{cs.hero.headline}</h1>

          <p className="mt-4 max-w-2xl text-lg text-muted">{cs.hero.subhead}</p>

          {/* TAGS */}
          <div className="mt-7 flex flex-wrap gap-2">
            {cs.tags?.map((t) => (
              <Badge key={t} variant="accent">
                {t}
              </Badge>
            ))}
          </div>

          {/* META CARDS */}
          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cs.client ? <Card label="Client" value={cs.client} /> : null}
            {cs.year ? <Card label="Year" value={cs.year} /> : null}
            <Card label="Role" value={cs.meta.role} />
            <Card label="Timeline" value={cs.meta.timeline} />
            <Card label="Team" value={cs.meta.team} />
            <Card label="Tools" value={cs.meta.tools} />
          </div>

          {/* LINKS */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link to="/work" className="text-sm text-accent hover:opacity-90">
              Back to Work →
            </Link>

            {cs.links?.live ? (
              <ButtonLink href={cs.links.live} variant="primary">
                Live site
              </ButtonLink>
            ) : null}

            {cs.links?.repo ? (
              <ButtonLink href={cs.links.repo}>Repo</ButtonLink>
            ) : null}
          </div>
        </div>
      </header>

      {/* BODY */}
      <Section title="Summary" variant="primary">
        <p>{cs.summary}</p>
      </Section>

      <Section title={cs.problem.title}>
        <ul className="list-disc space-y-2 pl-5 marker:text-accent/70">
          {cs.problem.body.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </Section>

      <Section title={cs.goals.title}>
        <ul className="grid gap-3 sm:grid-cols-2">
          {cs.goals.items.map((g) => (
            <li
              key={g}
              className="rounded-2xl border border-border bg-surface/35 p-5 text-text/90"
            >
              {g}
            </li>
          ))}
        </ul>
      </Section>

      <Section title={cs.approach.title}>
        <ol className="space-y-4">
          {cs.approach.steps.map((s) => (
            <li
              key={s.title}
              className="rounded-2xl border border-border bg-surface/30 p-5"
            >
              <p className="font-medium text-text">{s.title}</p>
              <p className="mt-2 text-muted">{s.detail}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title={cs.solution.title} variant="primary">
        <ul className="list-disc space-y-2 pl-5 marker:text-accent/70">
          {cs.solution.body.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>

        {cs.solution.highlights?.length ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {cs.solution.highlights.map((h) => (
              <Badge key={h} variant="accent">
                {h}
              </Badge>
            ))}
          </div>
        ) : null}
      </Section>

      {/* Supporting screenshots */}
      <ScreenshotBlock images={cs.images?.supporting ?? []} />

      <Section title={cs.outcome.title} variant="primary">
        <div className="grid gap-4 sm:grid-cols-3">
          {cs.outcome.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-border bg-surface/35 p-6"
            >
              <p className="text-2xl font-semibold text-accent">{m.value}</p>
              <p className="mt-2 text-sm text-muted">{m.label}</p>
            </div>
          ))}
        </div>

        {cs.outcome.note ? (
          <p className="mt-4 text-sm text-muted">{cs.outcome.note}</p>
        ) : null}
      </Section>

      <Section title={cs.reflection.title}>
        <ul className="list-disc space-y-2 pl-5 marker:text-accent/70">
          {cs.reflection.body.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>

        {cs.links?.live || cs.links?.repo ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {cs.links?.live ? (
              <ButtonLink href={cs.links.live} variant="primary">
                Live site
              </ButtonLink>
            ) : null}
            {cs.links?.repo ? (
              <ButtonLink href={cs.links.repo}>Repo</ButtonLink>
            ) : null}
          </div>
        ) : null}
      </Section>
    </main>
  );
}
