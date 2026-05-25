import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', background: '#0b0b0b' }}>
      <div className="container footer-content">
        <div>
          <div className="logo" style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
            Portf<span style={{ color: 'var(--primary)', textShadow: '0 0 10px var(--primary-glow)' }}>olio</span>
          </div>
          <p style={{ fontSize: '12px', color: 'var(--on-surface-variant)', letterSpacing: '1px' }}>
            © 2024 CYBERNETIC DESIGN ARCHIVE. ALL RIGHTS RESERVED.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '32px' }}>
          {['LinkedIn', 'GitHub', 'Dribbble', 'Instagram'].map((item) => (
            <a key={item} className="nav-link" href="#" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {item}
            </a>
          ))}
          <a className="nav-link" href="/CV_Usama.pdf" download style={{ fontSize: '12px', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
