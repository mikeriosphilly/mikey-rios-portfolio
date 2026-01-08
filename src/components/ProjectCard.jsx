function Badge({ children, variant = "default" }) {
  const styles =
    variant === "status"
      ? "border-border bg-accent/15 text-accent"
      : "border-border bg-surface/60 text-muted";

  return (
    <span className={`rounded-full border px-3 py-1 text-sm ${styles}`}>
      {children}
    </span>
  );
}

export default function ProjectCard({
  title,
  description,
  stack = [],
  links,
  status,
  type,
  goal,
  thumbnail,
}) {
  return (
    <article className="card-hover overflow-hidden rounded-2xl border border-border bg-surface/40">
      {thumbnail ? (
        <a
          href={links?.project || "#"}
          target="_blank"
          rel="noreferrer"
          className="block"
        >
          <img
            src={thumbnail}
            alt={`${title} preview`}
            className="h-48 w-full object-cover transition hover:scale-[1.01]"
            loading="lazy"
          />
        </a>
      ) : null}

      <div className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold tracking-tight text-text">
            {title}
          </h2>

          {status ? <Badge variant="status">{status}</Badge> : null}
        </div>

        {(type || goal) && (
          <p className="mt-8 text-sm text-muted">
            {type ? <span className="text-text">{type}</span> : null}
            {type && goal ? <span className="text-muted/70"> • </span> : null}
            {goal ? <span>{goal}</span> : null}
          </p>
        )}

        <p className="mt-4 text-muted">{description}</p>

        {stack.length ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {stack.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        ) : null}

        {links?.project ? (
          <div className="mt-6">
            <a
              href={links.project}
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent/40"
              target="_blank"
              rel="noreferrer"
            >
              View project →
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
}
