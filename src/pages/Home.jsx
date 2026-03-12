import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import WorkCard from "../components/WorkCard";
import { caseStudies } from "../data/caseStudies";
import heroImage from "../assets/home/hero.png";
import { GradientText } from "@/components/animate-ui/primitives/texts/gradient";
import { TypingText } from "@/components/animate-ui/primitives/texts/typing";

const featured = caseStudies.filter((cs) => cs.featured);

// Scroll-triggered fade+slide for sections below the fold
function FadeIn({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Hero stagger — headline first, then subtitle+image together
const heroVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.22 } },
};

const heroChildVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// Card grid stagger
const cardGridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Home() {
  return (
    <div className="space-y-24 text-text">

      {/* ── Hero ── */}
      {/* Breaks out of the Layout's max-w-6xl to span full viewport width,
          then uses a wider max-w-7xl inner container for the content. */}
      <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-transparent">
        {/* Subtle purple glow radiating from top */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,theme(colors.glow)/20%,transparent_70%)]" />

        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="show"
          className="relative mx-auto max-w-7xl px-6 sm:px-10 pt-12 pb-20 sm:pt-20 sm:pb-28 space-y-12"
        >
          {/* Large full-width headline */}
          <motion.h1
            variants={heroChildVariants}
            className="!text-3xl sm:!text-6xl lg:!text-7xl xl:!text-[5.25rem] !leading-[1.42] !tracking-[-0.01em]"
          >
            <GradientText
              text="Hi! I like to build front-end and UX work that puts people first."
              gradient="linear-gradient(90deg, #b7ff2a 0%, rgba(36, 250, 136, 1) 25%, rgba(99, 229, 241, 1) 50%, rgba(203, 99, 241, 1) 75%, #b7ff2a 100%)"
            />
          </motion.h1>

          {/* Subtitle + image grid — below the headline */}
          <div className="grid items-center gap-12 md:grid-cols-[1fr_1.25fr]">
            {/* Left: subtitle and CTAs */}
            <motion.div variants={heroChildVariants} className="space-y-8">
              <p className="text-lg text-muted leading-relaxed">
                I design and build accessible, people-centered interfaces with a
                focus on clarity and usability. My goal is always to reduce
                friction and make things easier to understand.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/work" className="btn btn-primary">
                  View Work
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Contact
                </Link>
              </div>
            </motion.div>

            {/* Right: hero image gets more column weight */}
            <motion.div
              variants={heroChildVariants}
              className="flex justify-center md:justify-end"
            >
              <img
                src={heroImage}
                alt="Preview of front-end and UX work"
                className="w-full max-w-lg rounded-2xl object-contain"
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── Featured Work ── */}
      <FadeIn>
        <section className="space-y-6 rounded-3xl bg-surface/50 backdrop-blur-md p-6 sm:p-8">
          <header className="space-y-2">
            <h2 className="text-3xl font-bold">
              <TypingText text="Featured Work:" />
            </h2>
            <p className="max-w-2xl text-muted">
              Selected case studies focused on usability, clarity, and front-end
              implementation.
            </p>
          </header>

          <motion.div
            className="grid gap-6 sm:grid-cols-2"
            variants={cardGridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
          >
            {featured.map((cs) => (
              <motion.div key={cs.slug} variants={cardItemVariants}>
                <WorkCard
                  slug={cs.slug}
                  title={cs.title}
                  description={cs.summary}
                  thumbnail={cs.images?.thumbnail}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </FadeIn>

      {/* ── About teaser ── */}
      <FadeIn delay={0.05}>
        <section className="space-y-6 rounded-3xl bg-surface/50 backdrop-blur-md p-6 sm:p-8">
          <h2 className="text-3xl font-bold">About</h2>
          <p className="max-w-2xl text-muted leading-relaxed">
            I'm a front-end developer with a background in content strategy,
            accessibility, and design. I care deeply about clarity, usability,
            and building things that respect the people using them.
          </p>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:opacity-90 group"
          >
            More about me
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </section>
      </FadeIn>
    </div>
  );
}
