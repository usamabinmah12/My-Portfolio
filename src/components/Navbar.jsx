import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const links = ['Home', 'About', 'Academic', 'Tech', 'Services', 'Portfolio', 'Certificates', 'FAQ', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} style={{ 
      background: scrolled ? 'rgba(11, 11, 11, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      transition: 'all 0.4s ease',
      zIndex: 9999,
      padding: '15px 0',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
    }}>
      {/* Scroll Progress Bar */}
      <motion.div 
        style={{ 
          position: 'absolute', 
          bottom: 0, 
          left: 0, 
          height: '2px', 
          background: 'var(--primary)', 
          width: `${scrollProgress}%`,
          boxShadow: '0 0 10px var(--primary-glow)',
          zIndex: 10001
        }} 
      />

      <nav className="nav container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <motion.div 
          className="logo-wrapper"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ cursor: 'pointer', zIndex: 10000, minWidth: '120px' }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="logo" style={{ fontSize: '1.4rem', fontWeight: '900', letterSpacing: '-1px', color: '#fff' }}>
            Usama<span style={{ color: 'var(--primary)', textShadow: '0 0 10px var(--primary-glow)' }}>.</span>
          </div>
        </motion.div>
        
        {/* Desktop Navigation Links */}
        <div className="nav-links-container" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{ 
            display: 'flex', 
            gap: '4px', 
            background: 'rgba(255, 255, 255, 0.03)', 
            padding: '6px', 
            borderRadius: '100px', 
            border: '1px solid rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)'
          }}>
            {links.map((link) => (
              <motion.a 
                key={link}
                className="desktop-nav-link"
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(link);
                  document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{ 
                  padding: '8px 16px',
                  fontSize: '0.7rem', 
                  fontWeight: '700', 
                  color: active === link ? '#fff' : 'rgba(255,255,255,0.4)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  position: 'relative',
                  borderRadius: '100px',
                  transition: 'color 0.3s ease'
                }}
              >
                {link}
                {active === link && (
                  <motion.div 
                    layoutId="nav-pill"
                    style={{ 
                      position: 'absolute', 
                      inset: 0, 
                      background: 'rgba(255, 255, 255, 0.08)',
                      borderRadius: '100px',
                      zIndex: -1,
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  />
                )}
              </motion.a>
            ))}
          </div>
        </div>
        
        {/* Action Button */}
        <div className="nav-actions" style={{ zIndex: 10000, minWidth: '120px', display: 'flex', justifyContent: 'flex-end' }}>
          <Magnetic>
            <motion.button 
              className="btn-neon"
              style={{ padding: '8px 20px', fontSize: '10px', fontWeight: '800' }}
              whileHover={{ scale: 1.05 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              HIRE ME
            </motion.button>
          </Magnetic>
          
          {/* Mobile Toggle (Visible only on small screens via CSS) */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ 
              display: 'none', 
              background: 'none', 
              border: 'none', 
              color: '#fff', 
              marginLeft: '15px', 
              cursor: 'pointer' 
            }}
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{ 
              position: 'absolute', 
              top: '100%', 
              left: 0, 
              right: 0, 
              background: 'rgba(11, 11, 11, 0.95)', 
              backdropFilter: 'blur(20px)',
              padding: '20px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '15px'
            }}
          >
            {links.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                onClick={() => {
                  setMobileMenuOpen(false);
                  setActive(link);
                }}
                style={{ 
                  color: active === link ? 'var(--primary)' : '#fff', 
                  fontSize: '1.2rem', 
                  fontWeight: '700',
                  textDecoration: 'none'
                }}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
