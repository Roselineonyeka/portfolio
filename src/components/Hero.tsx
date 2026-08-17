import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="px-6 py-6">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-sm font-medium text-black dark:text-gray-200 mb-4"
      >
        Front-End Developer
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold text-black dark:text-white leading-tight tracking-tight"
      >
        I build clean, fast web experiences with React.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl"
      >
        I'm Roseline — I turn ideas into responsive, well-crafted interfaces,
        with a background spanning React, .NET MAUI, and modern web tooling.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true, amount: 0.3 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="#projects"
          className="px-5 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium text-sm hover:opacity-85 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="px-5 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 text-black dark:text-white font-medium text-sm hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          Get in touch
        </a>
      </motion.div>
    </section>
  );
}
