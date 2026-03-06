import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Quotes } from './components/Quotes';
function App() {
  return (
    <>
      <div className="bg-glow"></div>
      <div className="bg-glow-2"></div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Quotes />
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        borderTop: '1px solid var(--glass-border)',
        color: 'var(--text-secondary)',
        marginTop: '4rem'
      }}>
        <p>
          Made with ❤️ by Ayush Singla<br />
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
