import { motion } from "framer-motion";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="w-full">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-10"
        >
          Experience
        </motion.h2>
        <div className="relative border-l border-gray-200 dark:border-gray-800 pl-8 space-y-10">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[34px] top-1.5 w-3 h-3 rounded-full bg-black dark:bg-white" />
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                {item.period}
              </p>
              <h3 className="text-lg font-semibold text-black dark:text-white">
                {item.role} · {item.organization}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
