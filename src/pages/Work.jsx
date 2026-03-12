import { motion } from "framer-motion";
import WorkCard from "../components/WorkCard";
import { caseStudies } from "../data/caseStudies";

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

export default function Work() {
  return (
    <main className="text-text rounded-3xl bg-surface/50 backdrop-blur-md">
      <section className="mx-auto max-w-5xl px-6 py-16 space-y-8">

        {/* Header — whileInView with delay clears Layout transition window */}
        <motion.header
          className="space-y-3"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
        >
          <p className="font-mono text-xs tracking-widest text-accent/70 uppercase">
            // portfolio
          </p>
          <h1>Work</h1>
          <p className="max-w-2xl text-muted leading-relaxed">
            Selected case studies focused on usability, clarity, and front-end
            implementation.
          </p>
        </motion.header>

        {/* Card grid — staggered as cards enter viewport */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          variants={cardGridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-20px" }}
        >
          {caseStudies.map((cs) => {
            const thumb = cs.images?.thumbnail;
            const thumbnailSrc = typeof thumb === "string" ? thumb : thumb?.src;
            const thumbnailAlt =
              typeof thumb === "object" && thumb?.alt
                ? thumb.alt
                : `${cs.title} thumbnail`;

            return (
              <motion.div key={cs.slug} variants={cardItemVariants}>
                <WorkCard
                  slug={cs.slug}
                  title={cs.title}
                  description={cs.summary}
                  thumbnail={thumbnailSrc}
                  thumbnailAlt={thumbnailAlt}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </main>
  );
}
