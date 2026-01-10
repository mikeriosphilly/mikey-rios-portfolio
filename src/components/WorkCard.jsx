import { Link } from "react-router-dom";

export default function WorkCard({ slug, title, description, thumbnail }) {
  const thumbSrc = typeof thumbnail === "string" ? thumbnail : thumbnail?.src;
  const thumbAlt =
    typeof thumbnail === "string"
      ? `${title} thumbnail`
      : thumbnail?.alt || `${title} thumbnail`;

  return (
    <article className="card-hover overflow-hidden rounded-2xl border border-border bg-surface/40">
      <Link to={`/work/${slug}`} className="block">
        {thumbSrc ? (
          <img
            src={thumbSrc}
            alt={thumbAlt}
            className="h-48 w-full object-cover object-top"
            loading="lazy"
          />
        ) : null}

        <div className="p-6">
          <h3 className="text-xl font-semibold tracking-tight text-text">
            {title}
          </h3>
          <p className="mt-3 text-sm text-muted">{description}</p>
          <p className="mt-5 text-sm text-accent">View case study →</p>
        </div>
      </Link>
    </article>
  );
}
