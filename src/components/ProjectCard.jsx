import { useEffect, useMemo, useState } from "react";
import Toast from "./Toast";

function isExternal(href) {
  return /^https?:\/\//.test(href);
}

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

function ProjectLinks({ links = [], status, onComingSoon }) {
  const primary = links.find((l) => l.kind === "primary") || links[0];
  const secondary = links.find((l) => l.kind === "secondary") || links[1];

  if (!primary) {
    return (
      <button
        type="button"
        onClick={onComingSoon}
        className="inline-flex items-center rounded-xl border border-border bg-surface/40 px-4 py-2 text-sm text-muted hover:bg-surface/60 transition"
      >
        {status || "Coming soon"}
      </button>
    );
  }

  return (
    <div className="mt-5 flex flex-wrap gap-3">
      <a
        href={primary.href}
        className="btn btn-primary"
        target={isExternal(primary.href) ? "_blank" : undefined}
        rel={isExternal(primary.href) ? "noreferrer" : undefined}
      >
        {primary.label}
      </a>

      {secondary ? (
        <a
          href={secondary.href}
          className="btn btn-secondary"
          target={isExternal(secondary.href) ? "_blank" : undefined}
          rel={isExternal(secondary.href) ? "noreferrer" : undefined}
        >
          {secondary.label}
        </a>
      ) : null}
    </div>
  );
}

export default function ProjectCard({
  title,
  description,
  stack = [],
  links = [],
  status,
  type,
  goal,
  thumbnail,
}) {
  const [toastOpen, setToastOpen] = useState(false);

  // Determine the “main” URL (used for thumbnail click)
  const primaryLink = useMemo(
    () => links.find((l) => l.kind === "primary") || links[0],
    [links]
  );

  function handleComingSoon(e) {
    e?.preventDefault?.();
    setToastOpen(true);
  }

  useEffect(() => {
    if (!toastOpen) return;
    const t = window.setTimeout(() => setToastOpen(false), 2400);
    return () => window.clearTimeout(t);
  }, [toastOpen]);

  return (
    <article className="card-hover overflow-hidden rounded-2xl border border-border bg-surface/40">
      {/* Thumbnail */}
      {thumbnail ? (
        primaryLink ? (
          <a
            href={primaryLink.href}
            target={isExternal(primaryLink.href) ? "_blank" : undefined}
            rel={isExternal(primaryLink.href) ? "noreferrer" : undefined}
            className="block"
          >
            <img
              src={thumbnail}
              alt={`${title} preview`}
              className="h-full w-full object-cover transition group-hover:scale-[1.02]"
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
              className="h-full w-full object-cover transition group-hover:scale-[1.02]"
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
          <p className="mt-3 text-sm text-muted">
            {type ? <span className="text-text">{type}</span> : null}
            {type && goal ? <span className="text-muted/70"> • </span> : null}
            {goal ? <span>{goal}</span> : null}
          </p>
        )}

        {Array.isArray(description) ? (
          <div className="mt-4 space-y-3 text-muted">
            {description.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-muted">{description}</p>
        )}

        {stack.length ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {stack.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        ) : null}

        {/* CTA(s) */}
        <div className="mt-6">
          <ProjectLinks
            links={links}
            status={status}
            onComingSoon={handleComingSoon}
          />
        </div>
      </div>

      <Toast
        open={toastOpen}
        message={`${title} link coming soon.`}
        onClose={() => setToastOpen(false)}
      />
    </article>
  );
}
