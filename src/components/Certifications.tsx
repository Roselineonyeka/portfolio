import { motion } from "framer-motion";
import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="w-full">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-10"
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="flex items-center gap-4 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-gray-50 dark:bg-gray-800/50 hover:border-gray-400 dark:hover:border-gray-600 hover:shadow-xl transition-colors"
            >
              <img
                src="https://cdn.simpleicons.org/freecodecamp/0A0A23"
                alt="freeCodeCamp"
                className="w-10 h-10 flex-shrink-0 dark:invert"
              />
              <div>
                <h3 className="text-base font-semibold text-black dark:text-white">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {cert.issuer} · {cert.date}
                </p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-black dark:text-white underline"
                  >
                    View Credential
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
