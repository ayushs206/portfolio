import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

export const Quotes = () => {
  const quotes = [
    {
      text: "You have the right to perform your prescribed duty, but you are not entitled to the fruits of action.",
      author: "Bhagavad Gita",
      tag: "Spiritual"
    },
    {
      text: "Talk is cheap. Show me the code.",
      author: "Linus Torvalds",
      tag: "Technical"
    },
    {
      text: "We are what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far.",
      author: "Swami Vivekananda",
      tag: "Spiritual"
    },
    {
      text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      author: "Martin Fowler",
      tag: "Technical"
    },
    {
      text: "It is better to live your own destiny imperfectly than to live an imitation of somebody else's life with perfection.",
      author: "Bhagavad Gita",
      tag: "Spiritual"
    },
    {
      text: "First, solve the problem. Then, write the code.",
      author: "John Johnson",
      tag: "Technical"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 6000); // Change quote every 6 seconds

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section id="quotes" className="section" style={{ minHeight: '50vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel"
          style={{ padding: '3rem 2rem', position: 'relative', overflow: 'hidden' }}
        >
          <Quote 
            size={120} 
            color="rgba(255,255,255,0.03)" 
            style={{ position: 'absolute', top: '-20px', left: '-20px', zIndex: 0 }} 
          />
          
          <div style={{ minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div style={{ marginBottom: '1.5rem' }}>
                  <Quote size={32} color="var(--accent-color)" />
                </div>
                
                <h3 style={{ 
                  fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', 
                  fontWeight: '400', 
                  fontStyle: 'italic', 
                  marginBottom: '1.5rem',
                  lineHeight: '1.6'
                }}>
                  "{quotes[currentIndex].text}"
                </h3>
                
                <p style={{ color: 'var(--text-secondary)', fontWeight: '600', letterSpacing: '1px' }}>
                  — {quotes[currentIndex].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: index === currentIndex ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: index === currentIndex ? 'var(--accent-color)' : 'rgba(255,255,255,0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                aria-label={`Go to quote ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
