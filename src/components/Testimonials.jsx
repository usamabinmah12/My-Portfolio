import React from 'react';
import Reveal from './Reveal';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Nancy has an incredible eye for detail. She took our vague ideas and turned them into a stunning, user-friendly interface that our customers love.",
      author: "Marcus Thorne",
      role: "Founder, Bloom Fintech",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGtyqz0lcrwNPZG437KPN4N4l86qVnmVnVGnbO97yj8xvgfCmoNTvuuD1GhG6_txcLVD0lRVk_ZAlLXONL63NhxmYIOmyicQ7LzWGP4Bzj0l4fHwYs9D6HPeWsaMS4da1_Pk9IC39-g7r7xp0OZEZrBEBplRWaYh7hbzOGF_ltZNtjgY8_2cNc0hPbdxdcQTPwjwI0S8DbQEu-G0aYZx7K7DIOPxX55PH-apCKBTm-LFkpF2q7QO556Om8uKBcbPpdHX8mlpY3490",
      color: "var(--primary)"
    },
    {
      quote: "Working with Nancy was a breeze. Her technical knowledge combined with her design sensibility made the entire development process seamless.",
      author: "Elena Rodriguez",
      role: "CTO, Pulse Creative",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_601SwPL0JwIHIsA_wXimw0Bbt7rPuYFcjuHgAS4UFCN3L2vo-rx_sgzTUxvF8drLLKBnh1Hg6q-W1GFyk9Xw1nO0PCBgGYVouionFYdJZRSkeY6s5bE_SYNvp8KNPoOlFqFXAJ_F7kZKFkKFhOkw78gtfgxqY9l_F6E_JyD6af-nffDkeQBTHIJKUFF5WC9oufcVPLtVN8I3a0ocI1vMTEJ14dk_qHFLAoF96Trq4dwglG8IypQkTgRnUSLvU7UolItaHqcJBIU",
      color: "var(--secondary)"
    }
  ];

  return (
    <section className="services" style={{position: 'relative', overflow: 'hidden'}}>
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="dot-pattern" 
        style={{position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)', width: '256px', height: '256px', opacity: '0.1'}}
      />
      
      <div className="container">
        <Reveal direction="down">
          <div className="section-header">
            <span className="section-tag uppercase">FEEDBACK</span>
            <h2 className="section-title">What Clients Say</h2>
          </div>
        </Reveal>
        
        <div className="services-grid">
          {testimonials.map((testimonial, index) => (
            <Reveal key={index} direction={index === 0 ? "right" : "left"} delay={0.2}>
              <motion.div 
                className="service-card soft-shadow"
                whileHover={{ scale: 1.02 }}
              >
                <span className="material-symbols-outlined" style={{position: 'absolute', top: '32px', right: '32px', fontSize: '64px', opacity: '0.1', color: testimonial.color}}>format_quote</span>
                <p style={{fontSize: '1.125rem', fontStyle: 'italic', marginBottom: '32px', position: 'relative', zIndex: 1}}>
                  "{testimonial.quote}"
                </p>
                <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
                  <div style={{width: '56px', height: '56px', borderRadius: '50%', overflow: 'hidden', background: 'var(--surface-container-highest)'}}>
                    <img src={testimonial.image} alt={testimonial.author} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                  </div>
                  <div>
                    <h5 style={{fontWeight: '700'}}>{testimonial.author}</h5>
                    <p style={{fontSize: '14px', color: 'var(--on-surface-variant)'}}>{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
