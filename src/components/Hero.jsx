import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';
import img1 from '../assets/UsamaPort.png'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="glow-point" style={{ top: '20%', left: '10%' }} />
      <div className="glow-point" style={{ bottom: '20%', right: '10%', background: 'var(--primary)', opacity: 0.1 }} />
      
      <div className="container">
        <div className="hero-grid">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className="section-label"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              AVAILABLE FOR HIRE
            </motion.span>
            
            <motion.h1 
              className="display-title neon-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Full Stack <br />
              <span style={{ color: 'var(--primary)' }}>Developer</span>
            </motion.h1>
            
            <motion.p 
              className="hero-desc"
              style={{ fontSize: '1.2rem', color: 'var(--on-surface-variant)', maxWidth: '600px', marginBottom: '40px' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              I build high-performance web applications and digital solutions 
              with a focus on scalability, performance, and cyberpunk aesthetics.
            </motion.p>
            
            <motion.div 
              className="hero-actions"
              style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Magnetic>
                <motion.button 
                  className="btn-neon"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hire Me
                </motion.button>
              </Magnetic>
              
              <Magnetic>
                <motion.button 
                  className="btn-yellow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Projects
                </motion.button>
              </Magnetic>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-portrait"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="hero-portrait-glow" style={{ position: 'absolute', inset: 0, boxShadow: 'inset 0 0 100px rgba(0, 229, 255, 0.2)', zIndex: 1, pointerEvents: 'none' }} />
            <img src={img1} alt="Full Stack Developer" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
