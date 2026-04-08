const AboutSection = () => {
  const techCategories = [
    {
      label: "Frontend",
      color: "bg-blue-900/50 text-blue-300 border-blue-700/40",
      dot: "bg-blue-400",
      techs: ["React", "Tailwind CSS", "Vite"],
    },
    {
      label: "Backend",
      color: "bg-teal-900/50 text-teal-300 border-teal-700/40",
      dot: "bg-teal-400",
      techs: ["Node.js", "Express.js", "MongoDB", "SQL"],
    },
    {
      label: "Data & Analytics",
      color: "bg-amber-900/40 text-amber-300 border-amber-700/40",
      dot: "bg-amber-400",
      techs: ["Power BI", "Tableau"],
    },
    {
      label: "Tools",
      color: "bg-pink-900/40 text-pink-300 border-pink-700/40",
      dot: "bg-pink-400",
      techs: ["Git", "GitHub"],
    },
  ];

  const stats = [
    // { num: "5+", label: "Projects built" },
    { num: "3.71", label: "GPA" },
    { num: "3+", label: "Years coding" },
    { num: "11", label: "Technologies" },
  ];

  return (
    <section className="px-6 py-16 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-1">
          Get to know me
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Bio card — full width */}
          <div className="md:col-span-2 bg-gray-900/80 border border-gray-800 rounded-2xl p-7">
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3">
              Bio
            </p>
            <p className="text-gray-300 text-base leading-7">
              I'm a Computer Science graduate and aspiring Web Developer. I
              enjoy learning and creating useful, impactful tools. Currently,
              I'm transitioning into the technology sector and building projects
              that showcase my skills in web development. You can learn more
              about me through my GitHub, LinkedIn, or by exploring the projects
              featured in this portfolio. If you'd like to connect, feel free to
              reach out through the contact page.
            </p>

            {/* Stats row */}
            <div className="flex gap-8 mt-6 pt-5 border-t border-gray-800">
              {stats.map(({ num, label }) => (
                <div key={label}>
                  <p className="text-xl font-bold text-white">{num}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack card */}
          <div className="md:col-span-2 bg-gray-900/80 border border-gray-800 rounded-2xl p-7">
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-5">
              🚀 Tech Stack
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {techCategories.map(({ label, color, dot, techs }) => (
                <div key={label}>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    {label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <span
                        key={tech}
                        className={`flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg border ${color}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Availability badge */}
          <div className="md:col-span-2 flex items-center gap-3 px-7 py-4 bg-green-950/50 border border-green-800/40 rounded-2xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
            </span>
            <p className="text-sm font-medium text-green-300">
              Open to new opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
