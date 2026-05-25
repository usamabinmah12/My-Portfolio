import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';

const faqs = [
  {
    question: "What is your primary tech stack?",
    answer: "I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and Next.js. I also use TypeScript and Tailwind CSS to build robust, scalable, and type-safe web applications."
  },
  {
    question: "How do you approach project scalability?",
    answer: "I follow clean architecture principles and design modular systems. For backend scalability, I focus on efficient database indexing, microservices where necessary, and implementing robust caching strategies."
  },
  {
    question: "How has competitive programming influenced your development?",
    answer: "Competitive programming has sharpened my problem-solving skills and algorithmic thinking. It allows me to write highly optimized code and handle complex logic with efficiency and precision."
  },
  {
    question: "Are you available for freelance projects?",
    answer: "Yes! I'm always open to discussing interesting projects. Whether it's a small MVP or a large-scale application, feel free to reach out via the contact section."
  },
  {
    question: "How do you stay updated with new technologies?",
    answer: "The tech world moves fast, so I dedicate time each week to exploring new frameworks, reading technical blogs, and contributing to open-source projects on GitHub."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <Reveal direction="up">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="section-label">ANSWERS</span>
            <h2 className="display-title" style={{ fontSize: '3.5rem' }}>Frequent <span style={{ color: 'var(--primary)' }}>Questions</span></h2>
          </div>
        </Reveal>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((faq, index) => (
            <Reveal key={index} direction="up" delay={index * 0.1}>
              <div 
                style={{ 
                  marginBottom: '16px', 
                  borderRadius: '16px', 
                  overflow: 'hidden', 
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  background: 'rgba(255, 255, 255, 0.02)'
                }}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  style={{
                    width: '100%',
                    padding: '24px 32px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'transparent',
                    border: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span style={{ fontSize: '1.1rem', fontWeight: '700', letterSpacing: '0.5px' }}>{faq.question}</span>
                  <motion.span 
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    className="material-symbols-outlined"
                    style={{ color: 'var(--primary)' }}
                  >
                    expand_more
                  </motion.span>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div style={{ 
                        padding: '0 32px 32px', 
                        color: 'var(--on-surface-variant)', 
                        lineHeight: '1.8',
                        fontSize: '1rem'
                      }}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
