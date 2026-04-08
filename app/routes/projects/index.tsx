import type { Route } from "./+types/index";
import { useState } from "react";
import ProjectCard from "~/components/ProjectCard";
import { AnimatePresence, motion } from "framer-motion";
import type { Project, StrapiProject, StrapiResponse } from "~/types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Friendly Dev | Projects " },
    { name: "description", content: "A collection of my personal projects" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects?populate=*`);

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  const json: StrapiResponse<any> = await res.json();

  const projects = json.data.map((item: any) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    image: item.image?.url
      ? item.image.url.startsWith("http")
        ? item.image.url
        : `${import.meta.env.VITE_STRAPI_URL}${item.image.url}`
      : "/images/no-image.png",
    url: item.url,
    date: item.date,
    category: typeof item.cateogy === "string" ? item.cateogy : "",
  }));

  return { projects };
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const { projects } = loaderData as { projects: Project[] };

  const categories = [
    "All",
    ...new Set(
      projects
        .map((p) => p.category)
        .filter((category): category is string => Boolean(category?.trim()))
    ),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);

  const renderPagination = () => (
    <div className="flex justify-center gap-2 mt-8">
      {Array.from({ length: totalPages }, (_, idx) => (
        <button
          key={idx + 1}
          onClick={() => setCurrentPage(idx + 1)}
          className={`px-3 py-1 cursor-pointer rounded ${
            currentPage === idx + 1
              ? "bg-pink-600 text-white"
              : "bg-gray-700 text-gray-200"
          }`}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <h2 className="text-3xl text-white font-bold mb-8">🚀 Projects</h2>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
            className={`px-3 py-1 rounded text-sm ${
              selectedCategory === category
                ? "bg-pink-600 text-white"
                : "bg-gray-700 text-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div layout className="grid gap-6 sm:grid-cols-2">
          {currentProjects.map((project) => (
            <motion.div key={project.id} layout>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {renderPagination()}
    </>
  );
};

export default ProjectsPage;