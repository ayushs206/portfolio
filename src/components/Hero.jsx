import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

import { Typewriter } from 'react-simple-typewriter';

export const Hero = () => {
  return (
    <section id="home" className="section" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative'
    }}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: '800px' }}
      >
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ 
            color: 'var(--accent-color)', 
            fontWeight: '600', 
            letterSpacing: '1px',
            marginBottom: '1rem',
            textTransform: 'uppercase'
          }}
        >
          1st Year B.Tech Student
        </motion.p>
        
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
          Hi, I'm <span className="text-gradient">Ayush Singla</span>.<br />
          Crafting <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--text-primary)' }}>
            <Typewriter
              words={['Digital Experiences.', 'Robust APIs.', 'Web Applications.', 'Discord Bots.']}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
        
        <p style={{ 
          fontSize: '1.25rem', 
          color: 'var(--text-secondary)', 
          maxWidth: '600px', 
          marginBottom: '2.5rem',
          lineHeight: '1.8'
        }}>
          Currently studying at Thapar University. I specialize in building web applications, expressive APIs, and engaging Discord bots with C, C++, and Node.js.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#about" className="btn-primary">
            More About Me
          </a>
          <div style={{ display: 'flex', gap: '1rem', marginLeft: '1rem', alignItems: 'center' }}>
            <a href="https://github.com/ayushs206" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.75rem' }}>
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/ayushs206" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.75rem' }}>
              <Linkedin size={20} />
            </a>
            <a href="mailto:ayushsingla206@gmail.com" className="btn-secondary" style={{ padding: '0.75rem' }}>
              <Mail size={20} />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ 
          position: 'absolute', 
          bottom: '2rem', 
          left: '50%', 
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite'
        }}
      >
        <style>
          {`
            @keyframes bounce {
              0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
              40% { transform: translateY(-20px) translateX(-50%); }
              60% { transform: translateY(-10px) translateX(-50%); }
            }
          `}
        </style>
        <a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
          <ArrowDown size={32} />
        </a>
      </motion.div>
    </section>
  );
};
