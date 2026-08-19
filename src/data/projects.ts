import type { Project } from "../types";
import haridaImg from "../assets/projectimages/harida_home.png";
import expenseTrackerImg from "../assets/projectimages/expense_tracker.png";
import calcAppImg from "../assets/projectimages/calc_apps.png";
import drumMachineImg from "../assets/projectimages/drum_machine.png";
import sparkRiderImg from "../assets/projectimages/spark_ride_img.png";
import sparkUserImg from "../assets/projectimages/spark_user_img.png";

export const projects: Project[] = [
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description:
      "A React Native app for tracking personal expenses, with income vs. spending breakdowns, transaction history, and visual statistics over time.",
    tags: ["React Native"],
    image: expenseTrackerImg,
    repoUrl: "https://github.com/Roselineonyeka/expenseTrackerApp-", // update to your real repo
  },
  {
    id: "real-estate-site",
    title: "Real Estate Website",
    description:
      "A real estate listing website built with HTML, CSS, and JavaScript, featuring property browsing with an image carousel, an About and FAQ section, and direct WhatsApp contact integration.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: haridaImg,
    liveUrl: "https://harida-homes.vercel.app",
    repoUrl: "https://github.com/Roselineonyeka/HaridaHomes",
  },
  {
    id: "spark-ride",
    title: "Spark Rider",
    description:
      "A cross-platform ride-hailing driver app built with .NET MAUI for Android and iOS, with earnings tracking, trip history, and live map-based ride requests.",
    tags: [".NET MAUI", "C#"],
    image: sparkRiderImg,
    repoUrl: "https://github.com/Roselineonyeka/sparkRider", // update to your real repo
  },

  {
    id: "calc-app",
    title: "Calculator App",
    description:
      "A React Native calculator app supporting standard arithmetic operations, with a clean interface available in both light and dark themes.",
    tags: ["React Native", "JavaScript"],
    image: calcAppImg,
    repoUrl: "https://github.com/Roselineonyeka/expo-calculator",
  },

  {
    id: "spark-ride-user",
    title: "Spark User — Rider App",
    description:
      "The passenger-facing companion app to Spark Rider, built with .NET MAUI for Android and iOS, letting riders request trips on a live map, manage their wallet and tokens, and view ride history.",
    tags: [".NET MAUI", "C#"],
    image: sparkUserImg,
    repoUrl: "https://github.com/Roselineonyeka/spark-ride-user", // update to your real repo
  },
  {
    id: "drum-machine",
    title: "Drum Machine",
    description:
      "A keyboard-playable drum machine built with React, with two switchable sound banks and volume control.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    image: drumMachineImg,
    liveUrl: "https://example.com", // ← replace once deployed, see note below
    repoUrl: "https://github.com/Roselineonyeka/drum-machine",
  },
];
