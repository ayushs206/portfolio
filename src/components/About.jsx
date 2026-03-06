import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Code2, Cpu } from 'lucide-react';

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          About <span className="text-gradient">Me</span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <motion.div variants={itemVariants} className="glass-panel" style={{ padding: '2rem', background: 'linear-gradient(135deg, rgba(236,72,153,0.05), rgba(139,92,246,0.05))' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles style={{ color: '#ec4899' }} /> Creative Computing Society
            </h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Part of the Creative Computing Society (CCS), where we blend art, design, and code to build innovative and aesthetically pleasing software solutions. It's the perfect place to level up my design and engineering skills simultaneously.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Cpu className="text-gradient" /> Academic Background
            </h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              I am currently a first-year B.Tech student studying at Thapar University. I'm deeply passionate about computing, actively learning new paradigms, and applying theoretical concepts to real-world projects. I do DSA in C and C++, and build bots in Node.js.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-panel" style={{ padding: '2rem', background: 'linear-gradient(135deg, rgba(99,102,241,0.05), rgba(168,85,247,0.05))' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Shield style={{ color: '#6366f1' }} /> OWASP Student Chapter
            </h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Active member of the OWASP Student Chapter. I explore cybersecurity principles, learn about secure coding practices, and engage with the community to understand the latest web vulnerabilities and how to mitigate them.
            </p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};
