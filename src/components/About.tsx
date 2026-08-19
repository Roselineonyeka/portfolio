import { motion } from "framer-motion";
export default function About() {
  return (
    <section id="about" className="w-full">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-8"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm a front-end developer, My journey as a front-end developer
            started as a junior developer in 2024, and has since grown into
            being one of my team's lead developers. Over that time I've worked
            across both web and mobile — building web apps with HTML, CSS,
            JavaScript, and React, and cross-platform mobile apps with .NET MAUI
            for Android and iOS.
          </p>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Good software isn't just functional — it's felt. I obsess over the
            small decisions: the spacing that feels right, the transition that
            feels smooth, the layout that just makes sense. This portfolio is
            that philosophy put into practice — not a template, but something
            built with intention.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
