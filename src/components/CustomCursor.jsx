import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      });
    };

    window.addEventListener('mousemove', moveCursor);

    const handleHover = () => {
        gsap.to(followerRef.current, { scale: 2.5, backgroundColor: 'rgba(99, 214, 229, 0.2)', duration: 0.3 });
    };
    const handleUnhover = () => {
        gsap.to(followerRef.current, { scale: 1, backgroundColor: 'transparent', duration: 0.3 });
    };

    const links = document.querySelectorAll('a, button, .social-icon');
    links.forEach(link => {
        link.addEventListener('mouseenter', handleHover);
        link.addEventListener('mouseleave', handleUnhover);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleHover);
        link.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          backgroundColor: 'var(--primary)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div 
        ref={followerRef} 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '40px',
          height: '40px',
          border: '1px solid var(--primary)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default CustomCursor;
