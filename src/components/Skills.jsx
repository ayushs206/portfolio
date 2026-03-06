import React from 'react';
import { motion } from 'framer-motion';

export const Skills = () => {
  const skills = [
    { name: 'Discord.js', level: 95, color: '#6366f1' },
    { name: 'Express.js', level: 85, color: '#a855f7' },
    { name: 'Node.js', level: 80, color: '#10b981' },
    { name: 'C++', level: 90, color: '#8b5cf6' },
    { name: 'C', level: 85, color: '#3b82f6' }
  ];

  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          Technical <span className="text-gradient">Arsenal</span>
        </h2>
        
        <div className="glass-panel" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>
          {skills.map((skill, index) => (
            <div key={skill.name} style={{ marginBottom: index !== skills.length - 1 ? '1.5rem' : '0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: '500', letterSpacing: '0.5px' }}>{skill.name}</span>
                <span style={{ color: 'var(--text-secondary)' }}>{skill.level}%</span>
              </div>
              <div style={{ 
                height: '8px', 
                background: 'rgba(255,255,255,0.05)', 
                borderRadius: '4px', 
                overflow: 'hidden' 
              }}>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                  style={{ 
                    height: '100%', 
                    background: `linear-gradient(90deg, ${skill.color}, #fff)`,
                    borderRadius: '4px'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
