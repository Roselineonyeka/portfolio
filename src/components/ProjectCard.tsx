import type { Project } from "../types";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}
export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      //   className={`h-full rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-gray-50 dark:bg-gray-800/50 hover:border-gray-400 dark:hover:border-gray-600 hover:shadow-xl transition-colors ${
      //     featured ? "md:col-span-2 md:row-span-2" : ""
      //   }`}
      className="h-full rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-gray-50 dark:bg-gray-800/50 hover:border-gray-400 dark:hover:border-gray-600 hover:shadow-xl transition-colors flex flex-col"
    >
      <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
        {project.title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm font-medium">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white underline"
          >
            Live
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white underline"
          >
            Code
          </a>
        )}
      </div>
    </motion.div>
  );
}
