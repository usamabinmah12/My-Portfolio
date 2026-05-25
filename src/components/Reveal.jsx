import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Reveal = ({ children, direction = 'up', delay = 0 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    
    let initialProps = { opacity: 0 };
    switch(direction) {
      case 'up': initialProps.y = 50; break;
      case 'down': initialProps.y = -50; break;
      case 'left': initialProps.x = 50; break;
      case 'right': initialProps.x = -50; break;
      default: break;
    }

    gsap.fromTo(element, 
      initialProps,
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        delay: delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, [direction, delay]);

  return <div ref={elementRef} style={{ width: '100%' }}>{children}</div>;
};

export default Reveal;
