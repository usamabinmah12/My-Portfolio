import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';

import cuetImg from '../assets/CUET.png';
import muiupcImg from '../assets/MUIUPC.png';
import intraImg from '../assets/Intra.jpeg';

const certificatesData = [
  {
    id: 1,
    title: "Chittagong University Engineering and Technology , IUPC",
    issuer: "Chittagong University Engineering Technology , CSE Fest 2025",
    date: "2025",
    image: cuetImg,
    description: "Participated as a member of team MU_MMA in the CUET Inter University Programming Contest: inCSEption 2025."
  },
  {
    id: 2,
    title: "Metropolitan University IUPC",
    issuer: "MU CSE Society",
    date: "2025",
    image: muiupcImg,
    description: "Participated in the Metropolitan University IUPC 2025 as a member of team MU_911."
  },
  {
    id: 3,
    title: "Intra Metropolitan University Programming Contest",
    issuer: "MU CSE Society",
    date: "2025",
    image: intraImg,
    description: "Awarded Certificate of Participation for Intra Metropolitan University Programming Contest (IMUPC) - 2025."
  }
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="certificates" id="certificates">
      <div className="container">
        <Reveal direction="up">
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '64px' }}>
            <span className="section-label">ACHIEVEMENTS</span>
            <h2 className="display-title" style={{ fontSize: '3.5rem' }}>Certificates & <span style={{ color: 'var(--primary)' }}>Recognition</span></h2>
          </div>
        </Reveal>

        <div className="certificates-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
          gap: '32px' 
        }}>
          {certificatesData.map((cert, index) => (
            <Reveal key={cert.id} direction="up" delay={index * 0.1}>
              <motion.div 
                className="glass-card"
                style={{ cursor: 'pointer', overflow: 'hidden' }}
                whileHover={{ y: -10, borderColor: 'var(--primary)' }}
                onClick={() => setSelectedCert(cert)}
              >
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  />
                  <div style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%', 
                    background: 'linear-gradient(to top, rgba(11,11,11,0.8), transparent)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '20px'
                  }}>
                    <span style={{ 
                      background: 'var(--primary)', 
                      color: '#000', 
                      fontSize: '10px', 
                      fontWeight: '800', 
                      padding: '4px 10px', 
                      borderRadius: '4px',
                      textTransform: 'uppercase'
                    }}>
                      {cert.date}
                    </span>
                  </div>
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{cert.title}</h3>
                  <p style={{ color: 'var(--primary)', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase' }}>{cert.issuer}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              background: 'rgba(0,0,0,0.9)', 
              zIndex: 2000, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              padding: '40px'
            }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              className="modal-container"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              style={{ 
                maxWidth: '1000px', 
                width: '100%', 
                background: 'var(--surface)', 
                borderRadius: '24px', 
                overflow: 'hidden',
                border: '1px solid var(--glass-border)',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCert(null)}
                style={{ 
                  position: 'absolute', 
                  top: '20px', 
                  right: '20px', 
                  background: 'rgba(255,255,255,0.1)', 
                  border: 'none', 
                  color: '#fff', 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10
                }}
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              <div className="modal-content-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr' }}>
                <div className="modal-image-wrapper" style={{ height: '600px', overflow: 'hidden', background: '#000' }}>
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
                <div className="modal-info-wrapper" style={{ padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span style={{ color: 'var(--primary)', fontSize: '12px', fontWeight: '800', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px' }}>
                    CERTIFICATE DETAILS
                  </span>
                  <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', lineHeight: '1.1' }}>{selectedCert.title}</h2>
                  <div style={{ marginBottom: '32px' }}>
                    <p style={{ color: 'var(--on-surface-variant)', marginBottom: '8px' }}><strong>Issuer:</strong> {selectedCert.issuer}</p>
                    <p style={{ color: 'var(--on-surface-variant)', marginBottom: '8px' }}><strong>Date:</strong> {selectedCert.date}</p>
                  </div>
                  <p style={{ color: 'var(--on-surface-variant)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                    {selectedCert.description}
                  </p>
                  
                  <div style={{ marginTop: '40px' }}>
                    <button className="btn-neon" style={{ width: '100%' }} onClick={() => setSelectedCert(null)}>
                      CLOSE PREVIEW
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
