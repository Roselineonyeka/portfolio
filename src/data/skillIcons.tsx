import { Database, Hash, Code2 } from "lucide-react";
import type { ReactNode } from "react";
import css3Icon from "../assets/css3.svg";

interface IconEntry {
  slug?: string;
  color?: string;
  fallback?: ReactNode;
  fallbackColor?: string;
  localSrc?: string; // for icons we self-host instead of pulling from the CDN
}

const iconMap: Record<string, IconEntry> = {
  HTML: { slug: "html5", color: "E34F26" },
  CSS: { localSrc: css3Icon },
  JavaScript: { slug: "javascript", color: "F7DF1E" },
  TypeScript: { slug: "typescript", color: "3178C6" },
  "C#": { fallback: <Hash size={14} />, fallbackColor: "#239120" },
  SQL: { fallback: <Database size={14} /> },
  React: { slug: "react", color: "61DAFB" },
  "React Native": { slug: "react", color: "61DAFB" },
  ".NET MAUI": { slug: "dotnet", color: "512BD4" },
  "Tailwind CSS": { slug: "tailwindcss", color: "06B6D4" },
  Bootstrap: { slug: "bootstrap", color: "7952B3" },
  "Sass/SCSS": { slug: "sass", color: "CC6699" },
  Redux: { slug: "redux", color: "764ABC" },
  Git: { slug: "git", color: "F05032" },
  GitHub: { slug: "github", color: "181717" },
  Figma: { slug: "figma", color: "F24E1E" },
  "VS Code": { fallback: <Code2 size={14} />, fallbackColor: "#007ACC" },
  "Visual Studio": { fallback: <Code2 size={14} />, fallbackColor: "#5C2D91" },
  WebStorm: { slug: "webstorm", color: "000000" },
  Vite: { slug: "vite", color: "646CFF" },
  npm: { slug: "npm", color: "CB3837" },
  Postman: { slug: "postman", color: "FF6C37" },
};

export function SkillIcon({ name }: { name: string }) {
  const entry = iconMap[name];
  if (!entry) return null;

  if (entry.fallback) {
    return (
      <span
        className="inline-flex"
        style={entry.fallbackColor ? { color: entry.fallbackColor } : undefined}
      >
        {entry.fallback}
      </span>
    );
  }

  const src =
    entry.localSrc ??
    `https://cdn.simpleicons.org/${entry.slug}/${entry.color}`;

  return <img src={src} alt={name} className="w-3.5 h-3.5 inline-block" />;
}
