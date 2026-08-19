import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import linkedinIcon from "../assets/linkedin.svg";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/maewawen", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="w-full">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6"
        >
          Get in touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-8"
        >
          Have a project in mind or just want to say hi? Send me a message, or
          reach out directly below.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-xl"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your email"
            className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Hi Roseline, ..."
            className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="px-5 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium text-sm hover:opacity-85 hover:scale-105 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed self-start"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="text-sm text-green-600 dark:text-green-400">
              Message sent — I'll get back to you soon!
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600 dark:text-red-400">
              Something went wrong. Try again, or reach me on GitHub/LinkedIn
              below.
            </p>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4 mt-8"
        >
          <a
            href="mailto:uchechionyeka36@gmail.com"
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-black dark:text-white font-medium text-sm hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <Mail size={16} />
            Email Me
          </a>
          <a
            href="https://github.com/Roselineonyeka"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-black dark:text-white font-medium text-sm hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <img
              src="https://cdn.simpleicons.org/github"
              alt="GitHub"
              className="w-4 h-4 dark:invert"
            />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/roseline-onyeka-0216bb239/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-black dark:text-white font-medium text-sm hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-4 h-4" />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
