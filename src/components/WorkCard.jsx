import { Link } from "react-router-dom";

export default function WorkCard({ slug, title, description, thumbnail }) {
  const thumbSrc = typeof thumbnail === "string" ? thumbnail : thumbnail?.src;
  const thumbAlt =
    typeof thumbnail === "string"
      ? `${title} thumbnail`
      : thumbnail?.alt || `${title} thumbnail`;

  return (
    <article className="card-hover group relative overflow-hidden rounded-2xl border border-border bg-surface/40">
      <Link to={`/work/${slug}`} className="block">
        {/* Thumbnail — scales in on hover */}
        {thumbSrc ? (
          <div className="overflow-hidden">
            <img
              src={thumbSrc}
              alt={thumbAlt}
              className="h-48 w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              loading="lazy"
            />
          </div>
        ) : null}

        <div className="p-6">
          <h3 className="text-xl font-semibold tracking-tight text-text transition-colors duration-200 group-hover:text-accent">
            {title}
          </h3>
          <p className="mt-3 text-sm text-muted leading-relaxed">
            {description}
          </p>

          {/* Animated arrow CTA */}
          <p className="mt-5 flex items-center gap-1.5 text-sm font-medium text-accent">
            View case study
            <span className="transition-transform duration-200 group-hover:translate-x-1.5">
              →
            </span>
          </p>
        </div>

        {/* Bottom accent line that sweeps in on hover */}
        <span className="absolute bottom-0 left-0 right-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-accent/60 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
      </Link>
    </article>
  );
}
