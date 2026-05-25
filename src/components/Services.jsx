import React from 'react';
import Reveal from './Reveal';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building high-performance, scalable web applications with modern tech stacks like React, Next.js, and Node.js.",
      icon: "terminal"
    },
    {
      title: "Responsive Design",
      description: "Ensuring your digital presence looks stunning and functions perfectly across all devices and screen sizes.",
      icon: "devices"
    },
    {
      title: "Frontend Development",
      description: "Specializing in interactive, animation-rich frontend experiences using Framer Motion and GSAP.",
      icon: "code"
    },
    {
      title: "Backend Integration",
      description: "Seamlessly connecting robust backend systems and APIs to provide a complete, powerful web solution.",
      icon: "database"
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <Reveal direction="down">
          <div className="section-header">
            <span className="section-label">CAPABILITIES</span>
            <h2 className="display-title" style={{ fontSize: '3.5rem' }}>Premium <span style={{ color: 'var(--primary)' }}>Services</span></h2>
          </div>
        </Reveal>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <Reveal key={index} direction="up" delay={index * 0.1}>
              <motion.div 
                className="glass-card"
                style={{ padding: '48px', height: '100%' }}
                whileHover={{ 
                  y: -10, 
                  borderColor: 'var(--primary)', 
                  boxShadow: '0 0 30px var(--primary-glow)' 
                }}
                transition={{ duration: 0.4 }}
              >
                <div className="service-icon" style={{ 
                  width: '64px', height: '64px', background: 'rgba(0, 229, 255, 0.1)', 
                  borderRadius: '16px', display: 'flex', alignItems: 'center', 
                  justifyContent: 'center', color: 'var(--primary)', marginBottom: '32px' 
                }}>
                  <motion.span 
                    className="material-symbols-outlined" 
                    style={{ fontSize: '32px' }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    {service.icon}
                  </motion.span>
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{service.title}</h3>
                <p style={{ color: 'var(--on-surface-variant)', lineHeight: '1.7' }}>{service.description}</p>
                
                <motion.div 
                  className="nav-link" 
                  style={{ marginTop: '32px', display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px' }}
                  whileHover={{ x: 5 }}
                >
                  Learn More <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
                </motion.div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
