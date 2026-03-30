import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    { title: 'College Timetable', desc: 'No more cluttered Excel sheets. Access your timetable in a sleek interface and quickly find common free time with friends—so you can plan better, faster.', tech: 'React, Tailwind, Express', link: "https://owasp-projects-site-timetable.vercel.app" },
    { title: 'OSS Contributor (OWASP)', desc: 'Active contributor to an open-source GitHub repository focused on providing and curating OSS opportunities for developers worldwide.', tech: 'Open Source, Community, Git', link: "https://github.com/OWASP-STUDENT-CHAPTER/oss-programs" },
  ];

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center p-8 border-b-4 border-deepslate-dark/50 py-20 relative">
      <div className="max-w-6xl w-full z-10">
        <h2 className="text-4xl md:text-5xl text-warden-glow mb-12 text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Projects Inventory</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-deepslate-dark border-4 border-deepslate p-2 group hover:border-sculk-teal transition-all duration-300">
              <div className="bg-sculk-bg border-2 border-sculk-dark-teal p-6 h-full flex flex-col relative overflow-hidden">
                {/* Hover glow effect */}
                <div className="absolute -inset-4 bg-warden-glow/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none"></div>

                <h3 className="text-2xl md:text-3xl text-warden-glow mb-3 relative z-10">{proj.title}</h3>
                <p className="text-lg md:text-xl text-gray-300 flex-grow relative z-10">{proj.desc}</p>
                <div className="mt-6 pt-4 border-t-2 border-deepslate flex justify-between items-center relative z-10">
                  <span className="text-sculk-teal text-sm md:text-base">{proj.tech}</span>
                  {proj.link.startsWith("http") ? (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-deepslate text-white hover:bg-warden-glow text-sm transition-colors border-b-4 border-black active:border-b-0 active:translate-y-1"
                    >
                      View
                    </a>
                  ) : (
                    <Link
                      to={proj.link}
                      className="px-4 py-2 bg-deepslate text-white hover:bg-warden-glow text-sm transition-colors border-b-4 border-black active:border-b-0 active:translate-y-1"
                    >
                      View
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
