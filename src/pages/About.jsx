import { Link } from "react-router-dom";
import headshot from "../assets/about/headshot.png";
import { Button } from "../components/Button";

function Section({ title, children, align = "left" }) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <section className="py-14">
      <div className={`mx-auto max-w-5xl px-6 ${alignment}`}>
        <h2 className="text-3xl font-semibold tracking-tight text-text">
          {title}
        </h2>
        <div className="mt-5 space-y-6 text-muted">{children}</div>
      </div>
    </section>
  );
}

function Badge({ children }) {
  return (
    <span className="rounded-full border border-border bg-surface/30 px-3 py-1 text-sm text-text">
      {children}
    </span>
  );
}

function ButtonLink({ to, children, variant = "primary" }) {
  const styles =
    variant === "primary"
      ? "bg-accent text-bg hover:opacity-90"
      : "border border-border bg-surface/20 text-text hover:bg-surface/40";

  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium transition";

  return (
    <Link to={to} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

function ButtonAnchor({ href, children, variant = "secondary" }) {
  const styles =
    variant === "primary"
      ? "bg-accent text-bg hover:opacity-90"
      : "border border-border bg-surface/20 text-text hover:bg-surface/40";

  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium transition";

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

function TimelineItem({ title, text }) {
  return (
    <li className="relative pl-10">
      {/* Accent dot */}
      <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-accent/70 ring-4 ring-accent/10" />
      <p className="font-medium text-text">{title}</p>
      <p className="mt-2 text-muted">{text}</p>
    </li>
  );
}

export default function About() {
  const skills = [
    {
      label: "Front-End",
      items: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Accessibility",
        "Responsive UI",
      ],
    },
    {
      label: "UX + Product",
      items: [
        "UI/UX Design",
        "Information Architecture",
        "Design Systems",
        "Usability-first thinking",
        "Content Strategy",
        "Wireframing",
        "Prototyping",
      ],
    },
    {
      label: "Tools",
      items: ["Sublime", "Git/GitHub", "Vite", "VS Code", "Adobe CC", "Figma"],
    },
    {
      label: "Creative Tech",
      items: [
        "Motion design",
        "Video editing",
        "Photography",
        "Projection visuals",
      ],
    },
  ];

  return (
    <main className="bg-bg text-text">
      {/* Hero */}
      <header className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1>
                People-first interfaces, built with craft and a little creative
                tech magic.
              </h1>

              <p className="mt-5 max-w-2xl text-lg text-muted">
                I'm a front-end developer with over 16 years of experience
                building interfaces for real people inside real organizations. I
                care just as much about communication and collaboration as I do
                about clean code. My strength is listening carefully,
                translating fuzzy or non-technical requests into practical
                solutions, and building interfaces that feel clear, intentional,
                and actually usable. I like to work in spaces where craft
                matters, people feel heard, and the end result makes someone’s
                day a little easier.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/contact" variant="primary">
                  Contact me
                </Button>

                <Button href="/MichaelRios_Resume_2026.pdf" variant="secondary">
                  Download resume
                </Button>
              </div>
            </div>

            {/* Headshot: no border/background */}
            <div className="flex justify-center md:justify-end">
              <img
                src={headshot}
                alt="Portrait of Michael Rios"
                className="w-full max-w-sm"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </header>

      {/* What I do */}
      <Section title="What I do" align="center">
        <p className="mx-auto max-w-3xl text-left text-muted">
          I sit at the intersection of front-end development, UX, and creative
          problem-solving. I spend my days translating ideas into interfaces,
          shaping structure and hierarchy, and building systems that stay
          flexible as requirements change. I'm extremely comfortable moving
          between code and design tools, and I enjoy wearing multiple hats when
          it helps a project move forward with clarity and momentum.
        </p>

        <div className="mt-10 flex flex-col items-center gap-10">
          {skills.map((group) => (
            <div key={group.label} className="w-full max-w-3xl text-center">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* How I work */}
      <Section title="How I work" align="center">
        <p className="mx-auto max-w-3xl text-left text-muted">
          I've spent much of my career working with people who don't speak
          “tech,” and I see that as a strength, not a challenge. I focus on
          listening first, asking good questions, and gently shaping requests
          into solutions that are practical, scalable, and aligned with real
          constraints. I care deeply about making collaborators feel respected
          and understood, while still delivering work that meets corporate
          standards, accessibility guidelines, and industry best practices.
        </p>

        <p className="mx-auto max-w-3xl text-left text-muted">
          More than once, I've been told that my ability to communicate clearly
          and collaboratively made projects feel easier and less stressful for
          everyone involved.
        </p>

        <div className="mx-auto mt-10 max-w-3xl text-left">
          <ol className="relative space-y-10 border-l border-border pl-6">
            <TimelineItem
              title="Start by listening"
              text="I take time to understand what people are actually trying to accomplish, especially when the request is vague or non-technical. A lot of good work comes from listening closely and helping clarify the problem before jumping into solutions."
            />
            <TimelineItem
              title="Translate ideas into something practical"
              text="I’m used to working with stakeholders who don’t live in code, and I see it as my job to translate their ideas into clear, realistic tasks. I guide conversations toward what’s feasible without making anyone feel talked down to or out of their depth."
            />
            <TimelineItem
              title="Build things that are clean and flexible"
              text="I focus on building interfaces and components that are easy to understand, reuse, and maintain. I’d rather keep things simple and adaptable than over-engineer something that becomes fragile later."
            />
            <TimelineItem
              title="Work within real constraints"
              text="I’m comfortable balancing creative ideas with corporate guidelines, accessibility requirements, and industry standards. I see those constraints as part of the job, not obstacles, and I build with them in mind from the start."
            />
          </ol>
        </div>
      </Section>

      {/* Resume snapshot */}
      <Section title="Resume snapshot">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-muted">
              Here's a few quick highlights. If you only remember a few things
              about me, I'd love it to be these.
            </p>

            <ul className="mt-6 list-disc space-y-2 pl-5 text-muted marker:text-accent/70">
              <li>16+ years in front-end web development and UI work</li>
              <li>
                UX instincts: clarity, hierarchy, accessibility, usability
              </li>
              <li>
                Comfortable owning builds end-to-end, from design to
                implementation
              </li>
              <li>
                Creative background in motion and visuals that supports
                storytelling
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonAnchor
                href="/MichaelRios_Resume_2026.pdf"
                variant="primary"
              >
                Download resume
              </ButtonAnchor>

              <ButtonLink to="/contact" variant="secondary">
                Reach out
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface/20 p-6">
            <p className="text-sm text-muted">Looking for</p>
            <p className="mt-2 text-text">
              Front-end or UI/UX-focused roles where craft, accessibility, and
              people-first thinking actually matter.
            </p>

            <div className="mt-6">
              <p className="text-sm text-muted">Best fit environments</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge>Product teams</Badge>
                <Badge>Design-led orgs</Badge>
                <Badge>Fast iteration</Badge>
                <Badge>Collaborative</Badge>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-muted">Values</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge>Clarity</Badge>
                <Badge>Accessibility</Badge>
                <Badge>Empathy</Badge>
                <Badge>Craft</Badge>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
