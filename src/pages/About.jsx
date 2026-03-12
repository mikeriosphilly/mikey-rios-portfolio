import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import headshot from "../assets/about/Me-Profile.jpg";
import { Button } from "../components/Button";

// whileInView with delay: 0.12 — gives the Layout transition (0.18s) time to
// complete before any section animation starts, so nothing fires invisibly.
function Section({ title, eyebrow, children, align = "left" }) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <motion.section
      className="py-14 border-t border-border/40"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
    >
      <div className={`mx-auto max-w-5xl px-6 ${alignment}`}>
        {eyebrow && (
          <p className="font-mono text-xs tracking-widest text-accent/70 uppercase mb-3">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl font-semibold tracking-tight text-text">
          {title}
        </h2>
        <div className="mt-6 space-y-6 text-muted">{children}</div>
      </div>
    </motion.section>
  );
}

function Badge({ children }) {
  return (
    <span className="rounded-full border border-border bg-surface/40 px-3 py-1 text-sm text-muted hover:text-text hover:border-accent/30 transition-colors duration-150">
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
      <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-accent/70 ring-4 ring-accent/10" />
      <p className="font-medium text-text">{title}</p>
      <p className="mt-2 leading-relaxed text-muted">{text}</p>
    </li>
  );
}

export default function About() {
  const skills = [
    {
      label: "Front-End",
      items: [
        "React",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Figma",
        "Accessibility",
        "Responsive UI",
        "REST APIs",
        "VBScript",
        "Cross-browser compatibility",
        "UX/UI Design",
        "Wireframing",
      ],
    },
    {
      label: "Content Management",
      items: [
        "Contentful",
        "WordPress",
        "Wix",
        "Web CMS",
        "Content Migrations",
        "Performance Optimization",
      ],
    },
    {
      label: "Tools & Platforms",
      items: [
        "Git/GitHub",
        "Jira",
        "Google Analytics",
        "Email Marketing Platforms",
        "Cloud Deployment (Vercel, Supabase)",
        "VS Code",
      ],
    },
    {
      label: "Databases",
      items: ["SQL (basic)", "Data Maintenance", "CSV/XLSX pipelines"],
    },
    {
      label: "Design & Creative",
      items: [
        "Adobe Creative Suite",
        "Blender 3D",
        "Motion design",
        "Video editing",
        "Photography",
        "Projection visuals",
      ],
    },
    {
      label: "Methodologies",
      items: [
        "Agile / Iterative Development",
        "Cross-Functional Collaboration",
      ],
    },
  ];

  return (
    <main className="text-text rounded-3xl bg-surface/50 backdrop-blur-md">

      {/* ── Hero ── */}
      {/* Uses animate (not whileInView) so it runs on page load.
          delay: 0.22 starts after the Layout transition (0.18s) completes. */}
      <motion.header
        className="py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
      >
        <div className="mx-auto max-w-5xl px-6">
          <p className="font-mono text-xs tracking-widest text-accent/70 uppercase mb-5">
            // about me
          </p>

          <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1>
                Senior Front-End Developer who builds thoughtful interfaces with
                a little creative magic and a full-stack toolkit.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                I'm a front-end developer with over 16 years of experience
                building interfaces for real people inside real organizations. I
                got my start back in the days of Adobe Dreamweaver and
                Macromedia Flash, which means I've watched the web grow up and
                made a point of growing with it. I care just as much about
                communication and collaboration as I do about clean code. My
                strength is listening carefully, translating fuzzy or
                non-technical requests into practical solutions, and building
                interfaces that feel clear, intentional, and actually usable.
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
                Outside of my day-to-day development work, I'm also a
                photographer and community organizer, which has deeply shaped
                how I think about accessibility, representation, and meeting
                people where they are. I like to work in spaces where craft
                matters, people feel heard, and the end result makes someone's
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
      </motion.header>

      {/* ── What I do ── */}
      <Section title="What I do" eyebrow="// capabilities" align="center">
        <p className="mx-auto max-w-3xl text-left leading-relaxed text-muted">
          I'm a multidisciplinary creative developer sitting at the intersection
          of front-end development, full-stack development, and creative
          problem-solving. I spend my days translating ideas into interfaces,
          shaping structure and hierarchy, and building flexible systems that
          stay human as requirements change. I'm extremely comfortable wearing
          many hats, moving between code and design tools, and collaborating
          with people from all kinds of backgrounds. Over the years, colleagues
          have praised my communication skills and ability to translate non-tech
          speak into dev needs.
        </p>

        <div className="mt-10 flex flex-col items-center gap-10">
          {skills.map((group) => (
            <div key={group.label} className="w-full max-w-3xl text-center">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent/80">
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

      {/* ── How I work ── */}
      <Section title="How I work" eyebrow="// process" align="center">
        <p className="mx-auto max-w-3xl text-left leading-relaxed text-muted">
          I've spent much of my career working with people who don't speak
          "tech," and I see that as a strength, not a challenge. I focus on
          listening first, asking good questions, and gently shaping requests
          into solutions that are practical, scalable, and aligned with real
          constraints. I care deeply about making collaborators feel respected
          and understood, while still delivering work that meets corporate
          standards, accessibility guidelines, and industry best practices.
        </p>

        <p className="mx-auto max-w-3xl text-left leading-relaxed text-muted">
          More than once, I've been told that my ability to communicate clearly
          and collaboratively made projects feel easier and less stressful for
          everyone involved.
        </p>

        <div className="mx-auto mt-10 max-w-3xl text-left">
          <ol className="relative space-y-10 border-l border-border pl-8">
            <TimelineItem
              title="Start by listening"
              text="I take time to understand what people are actually trying to accomplish, especially when the request is vague or non-technical. A lot of good work comes from listening closely and helping clarify the problem before jumping into solutions."
            />
            <TimelineItem
              title="Translate ideas into something practical"
              text="I'm used to working with stakeholders who don't live in code, and I see it as my job to translate their ideas into clear, realistic tasks. I guide conversations toward what's feasible without making anyone feel talked down to or out of their depth."
            />
            <TimelineItem
              title="Build things that are clean and flexible"
              text="I focus on building interfaces and components that are easy to understand, reuse, and maintain. I'd rather keep things simple and adaptable than over-engineer something that becomes fragile later."
            />
            <TimelineItem
              title="Work within real constraints"
              text="I'm comfortable balancing creative ideas with corporate guidelines, accessibility requirements, and industry standards. I see those constraints as part of the job, not obstacles, and I build with them in mind from the start."
            />
          </ol>
        </div>
      </Section>

      {/* ── Resume snapshot ── */}
      <Section title="Resume snapshot" eyebrow="// experience">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="leading-relaxed text-muted">
              Here's a few quick highlights. If you only remember a few things
              about me, I'd love it to be these.
            </p>

            <ul className="mt-6 space-y-3 text-muted">
              {[
                "16+ years in front-end web development and UI work",
                "Front-end specialist with full-stack experience (CMS, APIs, deployment)",
                "Comfortable owning builds end-to-end, from design to implementation",
                "Creative background in motion and visuals that supports storytelling",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/70" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonAnchor href="/MichaelRios_Resume_2026.pdf" variant="primary">
                Download resume
              </ButtonAnchor>
              <ButtonLink to="/contact" variant="secondary">
                Reach out
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface/20 p-6 space-y-6">
            <div>
              <p className="font-mono text-xs tracking-widest text-muted/60 uppercase">
                Looking for
              </p>
              <p className="mt-2 text-text leading-relaxed">
                Front-end or UI/UX-focused roles where craft, accessibility, and
                people-first thinking actually matter.
              </p>
            </div>

            <div>
              <p className="font-mono text-xs tracking-widest text-muted/60 uppercase">
                Best fit environments
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge>Product teams</Badge>
                <Badge>Design-led orgs</Badge>
                <Badge>Fast iteration</Badge>
                <Badge>Collaborative</Badge>
              </div>
            </div>

            <div>
              <p className="font-mono text-xs tracking-widest text-muted/60 uppercase">
                Values
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge>Clarity</Badge>
                <Badge>Accessibility</Badge>
                <Badge>Empathy</Badge>
                <Badge>Craft</Badge>
                <Badge>Community</Badge>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
