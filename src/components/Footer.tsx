import linkedinIcon from "../assets/linkedin.svg";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="font-bold text-black dark:text-white">
            ROSELINE ONYEKA
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Front-End Developer
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Roselineonyeka"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <img
              src="https://cdn.simpleicons.org/github"
              alt="GitHub"
              className="w-5 h-5 dark:invert"
            />
          </a>
          <a
            href="https://linkedin.com/in/roseline-onyeka-0216bb239/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
          </a>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-right">
          © {currentYear} Roseline Onyeka. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
