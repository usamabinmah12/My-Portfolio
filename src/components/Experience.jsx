import React from 'react';
import Reveal from './Reveal';

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Engineer",
      company: "Creative Flow Agency",
      period: "2018 - 2021",
      description: "Delivered award-winning landing pages and dashboard interfaces for various high-growth startups.",
    },
    {
      title: "Junior Web Developer",
      company: "BluePixel Studios",
      period: "2016 - 2018",
      description: "Focused on responsive frontend development and interactive prototypes using modern CSS frameworks.",
    }
  ];

  return (
    <section className="experience" style={{background: 'var(--background)'}}>
      <div className="container">
        <Reveal direction="down">
          <div className="section-header">
            <span className="section-tag uppercase">JOURNEY</span>
            <h2 className="section-title">Career Milestones</h2>
            <div className="section-line" style={{background: 'var(--secondary)'}}></div>
          </div>
        </Reveal>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <Reveal key={index} direction={index % 2 === 0 ? "right" : "left"}>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h3>{exp.title}</h3>
                <p style={{color: index % 2 === 0 ? 'var(--primary)' : 'var(--secondary)', fontWeight: '600', marginBottom: '8px'}}>
                  {exp.company} • {exp.period}
                </p>
                <p style={{color: 'var(--on-surface-variant)'}}>{exp.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
