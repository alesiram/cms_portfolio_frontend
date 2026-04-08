const AboutSection = () => {
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

  return (
    <section className="px-6 py-16 bg-gray-950">
      <div className="max-w-4xl mx-auto bg-gray-900/80 rounded-2xl p-8 md:p-10 shadow-lg border border-gray-800">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            About Me
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-8">
            I’m a Computer Science graduate building responsive web
            applications and practical full-stack projects. I enjoy learning
            new tools, solving problems, and creating work that strengthens both
            my frontend and backend development skills.
          </p>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
            🚀 Tech Stack
          </h3>

          <ul className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <li
                key={tech}
                className="bg-teal-700 text-white text-sm px-4 py-2 rounded-full"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;