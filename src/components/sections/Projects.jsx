import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    { title: 'StudySync', desc: 'A web application that helps students manage their study schedules, save notes, manage tasks', tech: 'React, Node.js, Express', link: "https://studysync.ayushsingla.dev" },
    { title: 'Expense Calc', desc: 'A simple calculator to calculate and store your payment transactions. Just login via username and password and access your data anytime.', tech: 'Nodejs, Express, Jwt', link: "https://exp.ayushsingla.dev" },
    { title: 'Emi Calc', desc: 'A simple calculator to calculate EMI payments. (Either by approximated payable amount or by number of installments)', tech: 'Html, Css, JavaScript', link: "https://emi.ayushsingla.dev" },
    { title: 'Instagram Profile Roaster', desc: 'It is a web application that generates humorous roasts based on publicly available Instagram profile information. The project consists of a React frontend and a Node.js/Express backend that extracts profile metadata and generates contextual roasts.', tech: 'React, Node.js, Express', link: "https://github.com/ayushs206/ig-profile-roaster" },
    { title: 'Botflow', desc: 'A npm package that provides basic discord bot structure', tech: 'Node, Discord.js, Json', link: "https://www.npmjs.com/package/create-botflow" },
    { title: 'Veriflow', desc: 'A npm package that provides basic backend file structure for authentication via JWT', tech: 'Node, Express, JWT, Resend', link: "https://www.npmjs.com/package/create-veriflow-auth" },
    { title: 'SMTP Server', desc: 'A simple SMTP server implementation. Sends all emails to a api endpoint configurable in the environment variables.', tech: 'Node.js, Express', link: "https://github.com/ayushs206/smtp-server" },
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
