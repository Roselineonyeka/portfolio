import { motion } from "framer-motion";
export default function About() {
  return (
    <section id="about" className="w-full">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-8"
        >
          About
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm a front-end developer focused on building clean, responsive
            interfaces for the web and mobile. My work spans React on the web
            and React Native / .NET MAUI for cross-platform apps, backed by a
            solid foundation in HTML, CSS, JavaScript, TypeScript, and C#.
          </p>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I care about the details that make an interface feel considered —
            smooth interactions, sensible layouts, and code that's easy to build
            on. This portfolio itself is part of that process: a hands-on way
            for me to go deeper with React while shipping something real.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
