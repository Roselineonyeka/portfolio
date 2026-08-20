import { motion, AnimatePresence } from "framer-motion";
import profilePhoto from "../assets/profile.jpeg";
import { useState, useEffect } from "react";
import { Download } from "lucide-react";
const techWords = ["React", "React Native", ".NET MAUI", "Modern Web Tools"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % techWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="px-6 py-6 max-w-6xl mx-auto">
      <div className="flex flex-col py-20 md:flex-row items-center justify-between gap-10">
        <div className="flex-1">
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
            I build clean, fast experiences with <br />{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={techWords[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent"
              >
                {techWords[index]}
              </motion.span>
            </AnimatePresence>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl"
          >
            I'm Roseline — I turn ideas into responsive, well-crafted
            interfaces, with a background spanning React, React Native, .NET
            MAUI, and modern web tooling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <a
              href="#projects"
              className="px-5 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium text-sm hover:opacity-85 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="px-5 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-black dark:text-white font-medium text-sm hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Get in touch
            </a>
            <a
              href="/Roseline_Onyeka_CV.pdf"
              download
              className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-black dark:text-white font-medium text-sm hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex-shrink-0"
        >
          <img
            src={profilePhoto}
            alt="Roseline Onyeka"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-gray-200 dark:border-gray-800"
          />
        </motion.div>
      </div>
    </section>
  );
}
