import type { Route } from "./+types/details";
import type { Project, StrapiResponse, StrapiProject } from "~/types";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

export async function loader({ params }: Route.LoaderArgs) {
  const { id } = params;

  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/projects?filters[documentId][$eq]=${id}&populate=*`
  );

  if (!res.ok) {
    throw new Response("Project not found", { status: 404 });
  }

  const json: StrapiResponse<StrapiProject> = await res.json();

  if (!json.data.length) {
    throw new Response("Not Found", { status: 404 });
  }

  const item = json.data[0];

  const imageUrl = item.image?.url
  ? item.image.url.startsWith("http")
    ? item.image.url
    : `${import.meta.env.VITE_STRAPI_URL}${item.image.url}`
  : "/images/no-image.png";

  const project: Project = {
    id: item.id,
    // documentId: item.documentId,
    title: item.title,
    description: item.description,
    image: imageUrl,
    url: item.url,
    date: item.date,
    category: item.category,
    featured: item.featured,
  };

  return { project };
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}

const ProjectDetailsPage = ({ loaderData }: Route.ComponentProps) => {
  const { project } = loaderData as { project: Project };

  return (
    <>
      <Link
        to="/projects"
        className="flex items-center text-pink-400 hover:text-pink-500 mb-6 transition"
      >
        <FaArrowLeft className="mr-2" />
        Back to Projects
      </Link>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg shadow-md"
            onError={(e) => {
              console.log("DETAIL IMAGE FAILED:", project.image);
              e.currentTarget.src = "/images/no-image.png";
            }}
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-pink-400 mb-4">
            {project.title}
          </h1>

          <p className="text-gray-300 text-sm mb-4">
            {new Date(project.date).toLocaleDateString()} • {project.category}
          </p>

          <p className="text-gray-200 mb-6">{project.description}</p>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded transition"
          >
            View Live Site →
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsPage;