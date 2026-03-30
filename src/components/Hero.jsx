import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef(null);

  // Implement "on scroll we move to about section"
  useEffect(() => {
    const handleScroll = (e) => {
      // If user scrolls down while at the top, cleanly transition to about
      if (window.scrollY < 10 && e.deltaY > 0) {
        e.preventDefault();
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Use passive false to be able to preventDefault if needed, 
    // but just capturing the wheel is fine
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center snap-start"
    >
      {/* Background Image: Ancient City */}
      {/* We will swap the placeholder with the actual generated image shortly */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-105"
        style={{ backgroundImage: "url('/ancient_city.png'), linear-gradient(to bottom, #061014, #001f24)" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Wandering Warden
      <div className="absolute bottom-[10%] left-[-10%] z-10 animate-warden-walk w-48 h-48 md:w-64 md:h-64 opactiy-90">
        <img
          src="/warden.png"
          alt="Wandering Warden"
          className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(10,178,176,0.6)]"
        />
      </div> */}

      <div className="z-20 text-center relative pointer-events-none mt-[-10vh]">
        <h1 className="text-6xl md:text-8xl text-warden-glow drop-shadow-[0_4px_4px_rgba(0,0,0,1)] tracking-widest mb-4">
          DEEP DARK
        </h1>
        <p className="text-xl md:text-3xl text-gray-300 drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
          Descend into the Ancient City
        </p>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 z-20 animate-bounce flex flex-col items-center opacity-80 cursor-pointer pointer-events-auto"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        <span className="text-sculk-teal text-sm md:text-base mb-2">Scroll Down</span>
        <svg className="w-8 h-8 text-sculk-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
