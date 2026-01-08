import { Link } from "react-router-dom";
import WorkCard from "../components/WorkCard";
import { caseStudies } from "../data/caseStudies";
import heroImage from "../assets/home/hero.png";

const featured = caseStudies.filter((cs) => cs.featured);

export default function Home() {
  return (
    <div className="space-y-24 text-text ">
      {/* Hero */}
      <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen border-b border-border bg-bg">
        {/* subtle purple glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,theme(colors.glow)/18%,transparent_60%)]" />

        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Text */}
            <div className="space-y-6">
              <h1>
                Hi! I like to build front-end and UX work that puts people
                first.
              </h1>
              <p className="text-lg text-muted">
                I design and build accessible, people-centered interfaces with a
                focus on clarity and usability. My goal is always to reduce
                friction and make things easier to understand.
              </p>

              <div className="flex gap-4">
                <Link to="/work" className="btn btn-primary">
                  View Work
                </Link>

                <Link to="/contact" className="btn btn-secondary">
                  Contact
                </Link>
              </div>
            </div>

            {/* Hero image */}
            <div className="flex justify-center md:justify-end">
              <img
                src={heroImage}
                alt="Preview of front-end and UX work"
                className="w-full max-w-md rounded-2xl object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="mt-14 space-y-6">
        <header className="space-y-2">
          <h2 className="text-3xl font-bold">Featured Work</h2>
          <p className="max-w-2xl text-muted">
            Selected case studies focused on usability, clarity, and front-end
            implementation.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2">
          {featured.map((cs) => (
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

      {/* About teaser */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">About</h2>
        <p className="max-w-2xl text-muted">
          I’m a front-end developer with a background in content strategy,
          accessibility, and design. I care deeply about clarity, usability, and
          building things that respect the people using them.
        </p>

        <Link
          to="/about"
          className="inline-block text-sm font-medium text-accent hover:opacity-90"
        >
          More about me →
        </Link>
      </section>
    </div>
  );
}
