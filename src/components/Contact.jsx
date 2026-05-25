import React, { useState } from 'react';
import Reveal from './Reveal';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate processing
    setTimeout(() => {
      // Construct mailto link
      const subject = `New Connection Request from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:usamabinmahbub12@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open mail client
      window.location.href = mailtoLink;

      setIsSubmitting(false);
      setIsSent(true);
      
      // Reset form after success
      setTimeout(() => {
        setIsSent(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    }, 2000);
  };

  return (
    <section className="contact" id="contact">
      <div className="glow-point" style={{ top: '10%', right: '5%', opacity: 0.1 }} />
      <div className="container">
        <div className="hero-grid">
          <Reveal direction="left">
            <div className="contact-info">
              <span className="section-label">GET IN TOUCH</span>
              <h2 className="display-title" style={{ fontSize: '3.5rem' }}>Let's <span style={{ color: 'var(--primary)' }}>Connect</span></h2>
              <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.1rem', marginBottom: '48px', maxWidth: '500px' }}>
                Ready to start your next cyberpunk adventure? I'm currently available for freelance 
                work and interesting collaborations. Drop me a line and let's build something epic.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <motion.div 
                    style={{ width: '56px', height: '56px', borderRadius: '12px', background: 'rgba(0, 229, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}
                    whileHover={{ scale: 1.1, rotate: 15, boxShadow: '0 0 20px var(--primary-glow)' }}
                  >
                    <span className="material-symbols-outlined">alternate_email</span>
                  </motion.div>
                  <div>
                    <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--on-surface-variant)', display: 'block' }}>EMAIL ME</span>
                    <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>usamabinmahbub12@gmail.com</span>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <motion.div 
                    style={{ width: '56px', height: '56px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}
                    whileHover={{ scale: 1.1, rotate: -15 }}
                  >
                    <span className="material-symbols-outlined">location_on</span>
                  </motion.div>
                  <div>
                    <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--on-surface-variant)', display: 'block' }}>LOCATION</span>
                    <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>Digital Workspace, Planet Earth</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <motion.div 
              className="glass-card" 
              style={{ padding: '48px', position: 'relative', overflow: 'hidden' }}
            >
              <AnimatePresence mode="wait">
                {!isSent ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit}
                  >
                    <div style={{ display: 'grid', gap: '24px' }}>
                      <div style={{ display: 'grid', gap: '8px' }}>
                        <label style={{ fontSize: '12px', fontWeight: '800', color: 'var(--on-surface-variant)', paddingLeft: '4px' }}>NAME</label>
                        <input 
                          type="text" 
                          required
                          className="input-neon" 
                          placeholder="Your Name" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      
                      <div style={{ display: 'grid', gap: '8px' }}>
                        <label style={{ fontSize: '12px', fontWeight: '800', color: 'var(--on-surface-variant)', paddingLeft: '4px' }}>EMAIL</label>
                        <input 
                          type="email" 
                          required
                          className="input-neon" 
                          placeholder="your@email.com" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      
                      <div style={{ display: 'grid', gap: '8px' }}>
                        <label style={{ fontSize: '12px', fontWeight: '800', color: 'var(--on-surface-variant)', paddingLeft: '4px' }}>MESSAGE</label>
                        <textarea 
                          required
                          className="input-neon" 
                          rows="5" 
                          placeholder="How can I help you?"
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                        ></textarea>
                      </div>
                      
                      <motion.button 
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-neon" 
                        style={{ 
                          width: '100%', padding: '20px', marginTop: '16px',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'
                        }}
                        whileHover={{ scale: 1.02, boxShadow: '0 0 30px var(--primary-glow)' }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          <>
                            <motion.span 
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              className="material-symbols-outlined"
                            >
                              sync
                            </motion.span>
                            Establishing Link...
                          </>
                        ) : (
                          <>
                            <span className="material-symbols-outlined">rocket_launch</span>
                            Initiate Connection
                          </>
                        )}
                      </motion.button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: 'center', padding: '40px 0' }}
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 12 }}
                      style={{ 
                        width: '80px', height: '80px', borderRadius: '50%', 
                        background: 'var(--primary)', color: '#000', 
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        margin: '0 auto 24px', boxShadow: '0 0 30px var(--primary-glow)'
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '40px' }}>check_circle</span>
                    </motion.div>
                    <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>Connection Established</h3>
                    <p style={{ color: 'var(--on-surface-variant)', lineHeight: '1.6' }}>
                      Your message has been transmitted through the grid. <br />
                      I will respond as soon as I decode it.
                    </p>
                    <motion.button 
                      onClick={() => setIsSent(false)}
                      style={{ marginTop: '32px', color: 'var(--primary)', background: 'transparent', border: 'none', fontWeight: '700', cursor: 'pointer' }}
                    >
                      Send another message
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
