import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import img1 from '../assets/usamaPort.png';

const skills = [
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'Node.js', level: 80 },
  { name: 'MongoDB', level: 85 },
  { name: 'TypeScript', level: 80 }
];

const languages = [
  { name: 'Bengali', level: 'Native', icon: 'flag' },
  { name: 'English', level: 'Fluent', icon: 'public' },
  { name: 'Hindi', level: 'Conversational', icon: 'chat' }
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <Reveal direction="up">
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '80px' }}>
            <span className="section-label">THE STORY</span>
            <h2 className="display-title" style={{ fontSize: '3.5rem' }}>Full Stack <span style={{ color: 'var(--primary)' }}>Engineer</span></h2>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'center' }}>
          {/* Portrait Column */}
          <Reveal direction="left">
            <div style={{ position: 'relative' }}>
              <motion.div 
                className="glass-card" 
                style={{ padding: '20px', borderRadius: '32px', position: 'relative', zIndex: 1 }}
                whileHover={{ y: -10 }}
              >
                <div className="hero-portrait" style={{ borderRadius: '24px', overflow: 'hidden' }}>
                  <img 
                    src={img1} 
                    alt="About Me" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      filter: 'grayscale(0.5) contrast(1.1)',
                      transition: 'filter 0.5s ease'
                    }} 
                  />
                </div>
              </motion.div>
              {/* Decorative Elements */}
              <div style={{ 
                position: 'absolute', 
                top: '-20px', 
                left: '-20px', 
                width: '100px', 
                height: '100px', 
                borderTop: '2px solid var(--primary)', 
                borderLeft: '2px solid var(--primary)',
                zIndex: 0
              }} />
              <div style={{ 
                position: 'absolute', 
                bottom: '-20px', 
                right: '-20px', 
                width: '100px', 
                height: '100px', 
                borderBottom: '2px solid var(--primary)', 
                borderRight: '2px solid var(--primary)',
                zIndex: 0
              }} />
            </div>
          </Reveal>

          {/* Content Column */}
          <div className="about-content">
            <Reveal direction="right">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', fontWeight: '800' }}>Crafting scalable <span style={{ color: 'var(--primary)' }}>digital experiences</span>.</h3>
              <p style={{ fontSize: '1.15rem', color: 'var(--on-surface-variant)', lineHeight: '1.8', marginBottom: '48px' }}>
                I am a Full Stack Developer specializing in building robust, scalable web applications. 
                With a focus on clean architecture and high performance, I transform complex requirements 
                into seamless digital experiences. My technical expertise spans across the entire 
                modern web stack.
              </p>
            </Reveal>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
              {/* Languages */}
              <div className="languages-section">
                <Reveal direction="up" delay={0.2}>
                  <h4 style={{ marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '12px', color: 'var(--primary)', fontWeight: '800' }}>Languages</h4>
                  <div style={{ display: 'grid', gap: '16px' }}>
                    {languages.map((lang, index) => (
                      <motion.div 
                        key={index} 
                        className="glass"
                        style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          padding: '16px 20px', 
                          borderRadius: '12px', 
                          border: '1px solid rgba(255,255,255,0.05)',
                          alignItems: 'center'
                        }}
                        whileHover={{ x: 10, borderColor: 'var(--primary)', background: 'rgba(0, 229, 255, 0.05)' }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--primary)' }}>{lang.icon}</span>
                          <span style={{ fontWeight: '700', fontSize: '14px' }}>{lang.name}</span>
                        </div>
                        <span style={{ color: 'var(--on-surface-variant)', fontSize: '10px', fontWeight: '800', textTransform: 'uppercase' }}>{lang.level}</span>
                      </motion.div>
                    ))}
                  </div>
                </Reveal>
              </div>

              {/* Core Stack */}
              <div className="skills-mini">
                <Reveal direction="up" delay={0.4}>
                  <h4 style={{ marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '12px', color: 'var(--primary)', fontWeight: '800' }}>Top Tech</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    {skills.map((skill, index) => (
                      <motion.span 
                        key={index} 
                        style={{ 
                          padding: '8px 16px', 
                          background: 'rgba(255, 255, 255, 0.03)', 
                          border: '1px solid rgba(255, 255, 255, 0.1)', 
                          borderRadius: '8px', 
                          fontSize: '13px', 
                          fontWeight: '700',
                          color: 'var(--on-surface)'
                        }}
                        whileHover={{ 
                          scale: 1.1, 
                          borderColor: 'var(--primary)',
                          color: 'var(--primary)',
                          boxShadow: '0 0 15px var(--primary-glow)'
                        }}
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
