import type { Project } from "~/types";
import { Link } from "react-router";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      to={`/projects/${project.documentId}`}
      className="block transition duration-300 hover:-translate-y-1"
    >
      <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
        <div className="w-full h-56 bg-gray-900 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-teal-400 mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-gray-300 mb-3 line-clamp-2">
            {project.description}
          </p>
          <div className="flex justify-between items-center text-sm text-gray-400">
            <span>{project.category}</span>
            <span>{new Date(project.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;