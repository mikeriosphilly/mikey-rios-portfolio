import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const cardGridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Projects() {
  return (
    <main className="text-text rounded-3xl bg-surface/50 backdrop-blur-md">
      <section className="mx-auto max-w-5xl px-6 py-16">

        {/* Header — whileInView with delay clears Layout transition window */}
        <motion.header
          className="space-y-3"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
        >
          <p className="font-mono text-xs tracking-widest text-accent/70 uppercase">
            // personal builds
          </p>
          <h1>Projects</h1>
          <p className="max-w-2xl text-muted leading-relaxed">
            Personal and exploratory builds where I experiment with UI patterns,
            front-end architecture, and interactions that do not always fit
            neatly into client work.
          </p>
        </motion.header>

        {/* Card grid */}
        <motion.div
          className="mt-10 grid gap-6 sm:grid-cols-2"
          variants={cardGridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-20px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={cardItemVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {projects.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-border bg-surface/40 p-8">
            <p className="text-muted">
              Projects are in progress. Check back soon.
            </p>
          </div>
        ) : null}
      </section>
    </main>
  );
}
