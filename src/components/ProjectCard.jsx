import { useEffect, useMemo, useState } from "react";
import Toast from "./Toast";

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
  const [toastOpen, setToastOpen] = useState(false);

  // Treat missing link or "#" as "coming soon"
  const projectUrl = useMemo(() => links?.project, [links]);
  const hasLiveLink = projectUrl && projectUrl !== "#";

  function handleComingSoon(e) {
    e?.preventDefault?.();
    setToastOpen(true);
  }

  // Auto-hide toast after a moment
  useEffect(() => {
    if (!toastOpen) return;
    const t = window.setTimeout(() => setToastOpen(false), 2400);
    return () => window.clearTimeout(t);
  }, [toastOpen]);

  return (
    <article className="card-hover overflow-hidden rounded-2xl border border-border bg-surface/40">
      {/* Thumbnail */}
      {thumbnail ? (
        hasLiveLink ? (
          <a
            href={projectUrl}
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
        ) : (
          <button
            type="button"
            onClick={handleComingSoon}
            className="block w-full text-left"
          >
            <img
              src={thumbnail}
              alt={`${title} preview`}
              className="h-48 w-full object-cover transition hover:scale-[1.01]"
              loading="lazy"
            />
          </button>
        )
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

        {/* CTA */}
        <div className="mt-6">
          {hasLiveLink ? (
            <a
              href={projectUrl}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              View project →
            </a>
          ) : (
            <button
              type="button"
              onClick={handleComingSoon}
              className="btn btn-secondary"
            >
              Preview link coming soon
            </button>
          )}
        </div>
      </div>

      {/* Toast */}
      <Toast
        open={toastOpen}
        message={`${title} preview link coming soon.`}
        onClose={() => setToastOpen(false)}
      />
    </article>
  );
}
