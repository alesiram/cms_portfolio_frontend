import type { Route } from "./+types/index";
import AboutPage from "../about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Friendly Dev | Welcome" },
    { name: "description", content: "Custom website development" },
  ];
}

const techStack = [
  "React",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "Vite",
  "Express.js",
  "SQL",
  "Power BI",
  "Tableau",
  "Git",
  "GitHub",
  "PostgreSQL",
  "Docker",
];

const HomePage = () => {
  return (
    <>
    <AboutPage />
    </>
  );
};

export default HomePage;