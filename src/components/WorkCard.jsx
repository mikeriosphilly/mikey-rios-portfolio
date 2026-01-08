import { Link } from "react-router-dom";

export default function WorkCard({ title, description, slug, thumbnail }) {
  return (
    <Link
      to={`/work/${slug}`}
      className="card-hover group block overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 transition hover:bg-surface/60"
    >
      {/* Thumbnail */}
      {thumbnail ? (
        <div className="mb-4 aspect-[16/10] overflow-hidden rounded-xl border border-border bg-surface/60">
          <img
            src={thumbnail}
            alt=""
            className="h-full w-full object-cover transition group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      ) : null}

      <h3 className="text-xl font-semibold text-text transition group-hover:text-accent">
        {title}
      </h3>

      <p className="mt-2 text-muted">{description}</p>

      <p className="mt-4 text-sm font-medium text-accent transition group-hover:opacity-90">
        Read case study →
      </p>
    </Link>
  );
}
