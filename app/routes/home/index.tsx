import type { Route } from "./+types/index";
import type { Project, StrapiResponse, StrapiProject } from "~/types";
import FeaturedProjects from "~/components/FeaturedProjects";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/projects?filters[featured][$eq]=true&populate=*`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch featured projects");
  }

  const projectsJson: StrapiResponse<StrapiProject> = await res.json();

  const projects: Project[] = projectsJson.data.map((item: any) => ({
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
    category: item.category,
    featured: item.featured,
  }));

  return { projects };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData;

  return (
    <>
      <FeaturedProjects projects={projects} count={3} />
    </>
  );
};

export default HomePage;