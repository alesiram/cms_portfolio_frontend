const AboutSection = () => {
  const techCategories = [
    {
      label: "Frontend",
      color: "bg-blue-900/50 text-blue-300 border-blue-700/40",
      dot: "bg-blue-400",
      techs: ["React", "Tailwind CSS", "Vite", "Material-UI"],
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
      techs: ["Power BI", "Tableau", "SPSS", "Excel"],
    },
    {
      label: "Tools",
      color: "bg-pink-900/40 text-pink-300 border-pink-700/40",
      dot: "bg-pink-400",
      techs: ["Git", "GitHub", "Acrobat SDK", "Web3Forms"],
    },
    {
      label: "Other",
      color: "bg-gray-800/50 text-gray-300 border-gray-700/40",
      dot: "bg-gray-400",
      techs: [
        "Data Analysis",
        "Automation",
        "Scripting",
        "Reporting",
        "Team Leading",
        "Project Management",
        "Procedure Documentation",
      ],
    },
  ];

  const stats = [
    { num: "3.71", label: "CS GPA" },
    { num: "9+", label: "Yrs research exp." },
    { num: "2", label: "B.S. degrees" },
  ];

  const timeline = [
    {
      year: "2017",
      label: "Research Data Assistant · Pacific Clinics",
      detail:
        "Managed clinical databases, automated workflows, and generated state compliance reports.",
      color: "bg-teal-500",
    },
    {
      year: "2021",
      label: "Acting Research Data Coordinator · Pacific Clinics",
      detail:
        "Led migration of 400+ records, trained research staff on new data system, and oversaw data collection across 65 programs.",
      color: "bg-pink-500",
    },
    {
      year: "2024",
      label: "B.S. Computer Science · Oregon State University",
      detail:
        "Graduated with a 3.71 GPA - the deliberate leap into software after years of working with data.",
      color: "bg-purple-500",
    },
    {
      year: "Now",
      label: "Aspiring Full-Stack Developer",
      detail:
        "Building full-stack web apps and actively seeking my first software role.",
      color: "bg-green-500",
    },
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
          {/* Bio CARD--*/}
          <div className="md:col-span-2 bg-gray-900/80 border border-gray-800 rounded-2xl p-7">
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3">
              Bio
            </p>
            <p className="text-gray-300 text-base leading-7 mb-2">
              After working in the research and nonprofit sector in data
              administration, collection, management, and analysis, I decided to
              go back to college and earn a second bachelor's degree in Computer
              Science. I wanted to challenge myself, learn technical skills, and
              build the tools I had always worked around. Now I'm focused on
              growing as a developer and landing my first role in tech.
            </p>

            {/* STATS */}
            <div className="flex gap-8 mt-6 pt-5 border-t border-gray-800">
              {stats.map(({ num, label }) => (
                <div key={label}>
                  <p className="text-xl font-bold text-white">{num}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline card */}
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-7">
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-5">
              My Journey
            </p>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-700" />

              <div className="flex flex-col gap-6">
                {timeline.map(({ year, label, detail, color }) => (
                  <div key={year} className="flex gap-4">
                    <div className="relative flex flex-col items-center">
                      <div
                        className={`w-3.5 h-3.5 rounded-full mt-1 shrink-0 ${color}`}
                      />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">{year}</p>
                      <p className="text-sm font-semibold text-white mb-1">
                        {label}
                      </p>
                      <p className="text-xs text-gray-400 leading-5">
                        {detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech stack card */}
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-7">
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-5">
              🚀 Tech Stack
            </p>
            <div className="flex flex-col gap-5">
              {techCategories.map(({ label, color, dot, techs }) => (
                <div key={label}>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    {label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <span
                        key={tech}
                        className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border ${color}`}
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

          {/* Education card */}
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-7">
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-5">
              Education
            </p>
            <div className="flex flex-col gap-5">
              {/* CS Degree */}
              <div>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="text-sm font-semibold text-white">
                    B.S. Computer Science
                  </p>
                  <span className="text-xs text-pink-400 font-semibold shrink-0">
                    3.71 GPA
                  </span>
                </div>
                <p className="text-xs text-teal-400 mb-1">
                  Oregon State University · Dec 2024
                </p>
                <p className="text-xs text-gray-500">
                  Data Structures · Web Dev · Algorithms · Databases · OS ·
                  Assembly
                </p>
              </div>

              <div className="border-t border-gray-800 pt-5">
                {/* Credly Cert */}
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="text-sm font-semibold text-white">
                    Programming Fundamentals
                  </p>
                </div>
                <p className="text-xs text-teal-400 mb-1">
                  Credly by Pearson · Apr 2023 · via Oregon State
                </p>
                <p className="text-xs text-gray-500">
                  Unit Testing · Git · OOP · Python · GitHub · Git
                </p>
              </div>

              <div className="border-t border-gray-800 pt-5">
                {/* Public Health Degree */}
                <p className="text-sm font-semibold text-white mb-1">
                  B.S. Public Health
                </p>
                <p className="text-xs text-teal-400 mb-1">
                  California State University, Fresno
                </p>
                <p className="text-xs text-gray-500">
                  Health Administration · Minor: Gerontology · VP, Fresno State
                  Gerontology Association
                </p>
              </div>
            </div>
          </div>

          {/* Involvement card */}
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-7 flex flex-col">
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-5">
              Community & Involvement
            </p>
            <div className="flex flex-col gap-3 flex-1">
              {[
                {
                  org: "SHPE",
                  detail:
                    "Society of Hispanic Professional Engineers · Conference Scholarship Recipient 2023",
                },
                { org: "SWE", detail: "Society of Women Engineers" },
                {
                  org: "Latinas in RTC",
                  detail: "Latinas in Robotics, Technology & Computing",
                },
                {
                  org: "Color Stack",
                  detail: "Supporting underrepresented people in computing",
                },
              ].map(({ org, detail }) => (
                <div key={org} className="flex gap-3 items-start">
                  <span className="text-xs font-bold text-pink-400 bg-pink-900/30 border border-pink-800/40 px-2 py-1 rounded-md shrink-0">
                    {org}
                  </span>
                  <p className="text-xs text-gray-400 leading-5 pt-0.5">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-600 mt-5 pt-4 border-t border-gray-800">
              Member of all organizations since 2022
            </p>
          </div>

          {/* Availability banner */}
          <div className="md:col-span-2 flex items-center gap-3 px-7 py-4 bg-green-950/50 border border-green-800/40 rounded-2xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
            </span>
            <p className="text-sm font-medium text-green-300">
              Open to new opportunities, seeking entry level software roles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
