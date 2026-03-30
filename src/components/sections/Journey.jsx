export default function Journey() {
  const experiences = [
    { year: '2024', title: 'Senior Developer', desc: 'Slaying bugs and forging robust architectures.' },
    { year: '2022', title: 'Mid-Level Engineer', desc: 'Exploring the depths of full-stack development.' },
    { year: '2020', title: 'Junior Dev', desc: 'Mining the fundamentals of the web.' },
    { year: '2019', title: 'The Awakening', desc: 'Discovered the ancient scrolls of programming.' }
  ];

  return (
    <section id="journey" className="min-h-screen flex items-center justify-center p-8 border-b-4 border-deepslate-dark/50 py-20 relative">
      <div className="max-w-4xl w-full z-10">
        <h2 className="text-4xl md:text-5xl text-warden-glow mb-12 text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Journey Timeline</h2>
        
        <div className="relative border-l-4 border-sculk-dark-teal ml-4 md:ml-12 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-16 group">
              {/* Timeline dot */}
              <div className="absolute -left-[14px] top-1 w-6 h-6 bg-deepslate-dark border-4 border-sculk-teal group-hover:bg-warden-glow group-hover:border-white transition-colors duration-300 rounded-sm"></div>
              
              <div className="bg-sculk-bg/80 border-2 border-deepslate p-6 hover:border-sculk-teal transition-colors duration-300 group-hover:shadow-[0_0_15px_rgba(10,178,176,0.2)]">
                <span className="text-sculk-teal text-xl font-bold tracking-widest block mb-2">{exp.year}</span>
                <h3 className="text-2xl md:text-3xl text-gray-200 mb-2">{exp.title}</h3>
                <p className="text-lg md:text-xl text-gray-400">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
