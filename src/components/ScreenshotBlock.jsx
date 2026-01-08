export default function ScreenshotBlock({ title, images = [] }) {
  if (!images.length) return null;

  return (
    <section className="py-16 bg-bg">
      <div className="mx-auto max-w-5xl px-6">
        {title ? (
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-text">
            {title}
          </h2>
        ) : null}

        <div className="grid gap-6 sm:grid-cols-2">
          {images.map((img, idx) => (
            <figure
              key={img.src || idx}
              className="overflow-hidden rounded-2xl border border-border bg-surface/40"
            >
              <img
                src={img.src}
                alt={img.alt || ""}
                className="h-full w-full object-cover"
                loading="lazy"
              />

              {img.caption ? (
                <figcaption className="border-t border-border px-4 py-3 text-sm text-muted">
                  {img.caption}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
