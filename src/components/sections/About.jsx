export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center p-8 border-b-4 border-deepslate-dark/50 relative">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-12 z-10">

        {/* Profile Image/Avatar wrapper resembling deepslate frame */}
        <div className="w-64 h-64 shrink-0 bg-deepslate-dark p-2 rounded-sm border-4 border-deepslate relative group">
          <div className="absolute inset-0 bg-sculk-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          <div className="w-full h-full bg-sculk-bg border-2 border-sculk-dark-teal flex items-center justify-center overflow-hidden">
            <span className="text-6xl text-sculk-teal">{"</>"}</span>
          </div>
          {/* Decorative corners */}
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-warden-glow"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-warden-glow"></div>
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-6 bg-sculk-bg/80 p-8 border-2 border-deepslate rounded-sm backdrop-blur-sm relative">
          {/* Subtle glow behind text box */}
          <div className="absolute -inset-1 bg-warden-glow/10 blur-xl -z-10"></div>

          <h2 className="text-4xl md:text-5xl text-warden-glow drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] border-b-2 border-sculk-dark-teal inline-block pb-2">
            About Me
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
            Greetings traveler. Driven by curiosity, shaped by discipline, and constantly
            evolving through challenges. A journey defined by learning, growth, and precision.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-deepslate-dark border border-deepslate text-sculk-teal hover:bg-sculk-dark-teal hover:text-white transition-colors cursor-pointer shrink-0">React.js</span>
            <span className="px-4 py-2 bg-deepslate-dark border border-deepslate text-sculk-teal hover:bg-sculk-dark-teal hover:text-white transition-colors cursor-pointer shrink-0">Tailwind CSS</span>
            <span className="px-4 py-2 bg-deepslate-dark border border-deepslate text-sculk-teal hover:bg-sculk-dark-teal hover:text-white transition-colors cursor-pointer shrink-0">JavaScript</span>
            <span className="px-4 py-2 bg-deepslate-dark border border-deepslate text-sculk-teal hover:bg-sculk-dark-teal hover:text-white transition-colors cursor-pointer shrink-0">Nodejs</span>
          </div>
        </div>

      </div>
    </section>
  );
}
