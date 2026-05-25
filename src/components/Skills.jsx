import React from 'react';
import Reveal from './Reveal';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: "HTML & CSS", icon: "html" },
    { name: "JavaScript", icon: "javascript" },
    { name: "React", icon: "deployed_code" },
    { name: "Node.js", icon: "javascript" },
    { name: "Vite.js", icon: "bolt" },
    { name: "TypeScript", icon: "code_off" }
  ];

  return (
    <section className="services">
      <div className="container">
        <Reveal direction="left">
          <div className="section-header" style={{textAlign: 'left', marginBottom: '48px'}}>
            <span className="section-tag uppercase">STACKS</span>
            <h2 className="section-title">Technologies I Work With</h2>
          </div>
        </Reveal>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <Reveal key={index} direction="up" delay={index * 0.1}>
              <motion.div 
                className="skill-card"
                whileHover={{ 
                  scale: 1.1, 
                  borderColor: 'var(--primary)',
                  boxShadow: '0 10px 20px rgba(99, 214, 229, 0.1)'
                }}
              >
                <span className="material-symbols-outlined">{skill.icon}</span>
                <p style={{fontSize: '14px', fontWeight: '600', color: 'var(--on-surface-variant)'}}>{skill.name}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
