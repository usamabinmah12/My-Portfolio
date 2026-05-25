import  { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';
import Reveal from './Reveal';

const Academic = () => {
  return (
    <section className="academic" id="academic">
      <div className="container">
        <Reveal direction="up">
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '64px' }}>
            <span className="section-label">EDUCATION</span>
            <h2 className="display-title" style={{ fontSize: '3.5rem' }}>Academic <span style={{ color: 'var(--primary)' }}>Background</span></h2>
          </div>
        </Reveal>

        <div className="academic-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {/* University Info */}
          <Reveal direction="left">
            <motion.div 
              className="glass-card" 
              style={{ padding: '40px', height: '100%', position: 'relative', overflow: 'hidden' }}
              whileHover={{ y: -10, borderColor: 'var(--primary)' }}
            >
              <div className="glow-point" style={{ top: '-50px', right: '-50px' }}></div>
              <span style={{ color: 'var(--primary)', fontSize: '12px', fontWeight: '800', letterSpacing: '2px' }}>UNIVERSITY</span>
              <h3 style={{ fontSize: '2rem', margin: '16px 0 8px' }}>Metropolitan University</h3>
              <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.1rem', fontWeight: '600' }}>Department of CSE</p>
              
              <div style={{ marginTop: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>location_on</span>
                  <span style={{ color: 'var(--on-surface-variant)' }}>Sylhet, Bangladesh</span>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* CGPA Counter */}
          <Reveal direction="up" delay={0.2}>
            <motion.div 
              className="glass-card" 
              style={{ padding: '40px', height: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
              whileHover={{ scale: 1.02, borderColor: 'var(--primary)' }}
            >
              <span style={{ color: 'var(--primary)', fontSize: '12px', fontWeight: '800', letterSpacing: '2px' }}>CURRENT CGPA</span>
              <div style={{ margin: '24px 0' }}>
                <Counter value={3.93} decimals={2} />
                <span style={{ fontSize: '1.5rem', color: 'var(--on-surface-variant)', marginLeft: '8px' }}>/ 4.00</span>
              </div>
              <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '96.25%' }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                  style={{ height: '100%', background: 'var(--primary)', boxShadow: '0 0 10px var(--primary-glow)' }}
                />
              </div>
            </motion.div>
          </Reveal>

          {/* Achievement Badge */}
          <Reveal direction="right" delay={0.4}>
            <motion.div 
              className="glass-card" 
              style={{ 
                padding: '40px', 
                height: '100%', 
                background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.1) 0%, rgba(20, 20, 20, 0.6) 100%)',
                border: '1px solid var(--primary-glow)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
              }}
              whileHover={{ y: -10, boxShadow: '0 0 30px var(--primary-glow)' }}
            >
              <div style={{ 
                width: '80px', 
                height: '80px', 
                borderRadius: '50%', 
                background: 'var(--primary)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '24px',
                boxShadow: '0 0 20px var(--primary-glow)'
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: '40px', color: '#000' }}>workspace_premium</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Chairman Scholarship</h3>
              <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Recognized for outstanding academic performance and commitment to excellence in the field of Computer Science.
              </p>
              <div style={{ 
                marginTop: '24px', 
                padding: '8px 16px', 
                background: 'rgba(0, 229, 255, 0.2)', 
                borderRadius: '20px', 
                fontSize: '12px', 
                fontWeight: '800', 
                color: 'var(--primary)',
                textTransform: 'uppercase'
              }}>
                Recipient
              </div>
            </motion.div>
          </Reveal>
        </div>
        <Reveal direction="up" delay={0.6}>
          <div style={{ marginTop: '80px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '32px', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '4px', color: 'var(--on-surface-variant)' }}>Profiles & Platforms</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
              {[
                { name: 'GitHub', url: 'https://github.com/usamabinmah12', color: '#ffffff', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg' },
                { name: 'Codeforces', url: 'https://codeforces.com/profile/loopmasterusama1', color: '#1f8acb', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/codeforces.svg' },
                { name: 'CodeChef', url: 'https://www.codechef.com/users/usamabinmahbub', color: '#5b4638', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/codechef.svg' },
                { name: 'LeetCode', url: 'https://leetcode.com/Usama_Bin_Mahbub/', color: '#ffa116', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/leetcode.svg' }
              ].map((site, index) => (
                <motion.a 
                  key={index}
                  href={site.url}
                  target="_blank"
                  className="glass-card"
                  style={{ 
                    padding: '20px 24px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '16px',
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                  whileHover={{ y: -5, borderColor: site.color, background: `${site.color}11` }}
                >
                  <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src={site.logo} 
                      alt={site.name} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        filter: site.name === 'LeetCode' ? 'none' : 'brightness(0) invert(1)' 
                      }} 
                    />
                  </div>
                  <span style={{ fontWeight: '700' }}>{site.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const Counter = ({ value, decimals = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => setCount(latest.toFixed(decimals))
    });
    return () => controls.stop();
  }, [value, decimals]);

  return (
    <span style={{ 
      fontSize: '5rem', 
      fontWeight: '800', 
      color: 'var(--primary)', 
      textShadow: '0 0 20px var(--primary-glow)',
      fontFamily: 'monospace' 
    }}>
      {count}
    </span>
  );
};

export default Academic;
