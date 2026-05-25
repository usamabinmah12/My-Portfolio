import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const techItems = [
  { name: 'React', color: '#61DAFB', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg' },
  { name: 'Node.js', color: '#339933', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg' },
  { name: 'Next.js', color: '#ffffff', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nextdotjs.svg' },
  { name: 'Tailwind', color: '#06B6D4', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tailwindcss.svg' },
  { name: 'MongoDB', color: '#47A248', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mongodb.svg' },
  { name: 'TypeScript', color: '#3178C6', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/typescript.svg' },
  { name: 'Express', color: '#ffffff', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/express.svg' },
  { name: 'JavaScript', color: '#F7DF1E', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg' }
];

const TechStack = () => {
  return (
    <section className="tech-stack" id="tech">
      <div className="container">
        <Reveal direction="up">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="section-label">THE ARSENAL</span>
            <h2 className="display-title" style={{ fontSize: '3.5rem' }}>Top <span style={{ color: 'var(--primary)' }}>Tech</span> Stack</h2>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '32px' }}>
          {techItems.map((tech, index) => (
            <Reveal key={index} direction="up" delay={index * 0.1}>
              <motion.div 
                className="glass-card"
                style={{ 
                  padding: '40px 24px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  gap: '20px',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  perspective: '1000px'
                }}
                whileHover={{ 
                  y: -10, 
                  rotateX: 10,
                  rotateY: 10,
                  borderColor: tech.color,
                  boxShadow: `0 20px 40px ${tech.color}22`
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Dynamic Background Glow */}
                <motion.div 
                  style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    background: `radial-gradient(circle at center, ${tech.color}11 0%, transparent 70%)`,
                    zIndex: 0
                  }}
                  whileHover={{ scale: 1.5 }}
                />
                
                <motion.div 
                  style={{ 
                    width: '70px', 
                    height: '70px', 
                    borderRadius: '20px', 
                    background: 'rgba(255,255,255,0.03)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.05)',
                    padding: '16px',
                    zIndex: 1,
                    position: 'relative'
                  }}
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                >
                  <img 
                    src={tech.logo} 
                    alt={tech.name} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain',
                      filter: tech.name === 'Next.js' || tech.name === 'Express' ? 'none' : 'brightness(0) invert(1)'
                    }} 
                  />
                </motion.div>
                
                <h3 style={{ fontSize: '1.1rem', fontWeight: '800', zIndex: 1, letterSpacing: '0.5px' }}>{tech.name}</h3>
                
                <div style={{ 
                  width: '40px', 
                  height: '3px', 
                  background: tech.color, 
                  borderRadius: '2px',
                  zIndex: 1,
                  boxShadow: `0 0 10px ${tech.color}`
                }} />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
