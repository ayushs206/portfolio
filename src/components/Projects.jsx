import React from 'react';
import { motion } from 'framer-motion';
import { Server, Globe, ExternalLink, Github, HeartHandshake, QrCode } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'Small Projects (QR Generator)',
      description: 'A dedicated site for small utilites. Currently featuring a robust QR Code generator that creates downloadable codes directly from any URL.',
      icon: <QrCode size={40} className="text-gradient" />,
      tags: ['Node.js', 'Express.js', 'HTML'],
      links: { github: 'https://github.com/ayushs206/small-projects', demo: 'https://ayushs206-projects.vercel.app/' }
    },
    {
      title: 'OSS Contributor (OWASP)',
      description: 'Active contributor to an open-source GitHub repository focused on providing and curating OSS opportunities for developers worldwide.',
      icon: <HeartHandshake size={40} className="text-gradient" />,
      tags: ['Open Source', 'Community', 'Git'],
      links: { github: 'https://github.com/OWASP-STUDENT-CHAPTER/oss-programs/', demo: 'https://oss.owasptiet.com' }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <h2 className="section-title">
          Featured <span className="text-gradient">Work</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass-panel" 
              style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ marginBottom: '1.5rem' }}>{project.icon}</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>
                {project.description}
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ 
                    fontSize: '0.85rem', 
                    padding: '0.25rem 0.75rem', 
                    background: 'rgba(255,255,255,0.05)', 
                    borderRadius: '999px',
                    border: '1px solid var(--glass-border)'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                <a href={project.links.github} className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                  <Github size={16} /> Code
                </a>
                <a href={project.links.demo} className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
