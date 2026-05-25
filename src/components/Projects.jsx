import React from 'react';
import Reveal from './Reveal';
import { motion } from 'framer-motion';

// Import images
import keenKeeperImg from '../assets/keen_keeper.png';
import englishJanalaImg from '../assets/english_janala.png';
import cricketTeamImg from '../assets/cricket_team.png';
import digitoolsImg from '../assets/digitools.png';
import globalExplorerImg from '../assets/global_explorer.png';
import jobTrackerImg from '../assets/job_tracker.png';

const projects = [
  {
    title: 'Keen Keeper',
    tag: 'Next.js • Framer Motion',
    image: keenKeeperImg,
    link: 'https://keen-keeper-ruby-nu.vercel.app/'
  },
  {
    title: 'English Janala',
    tag: 'React • UI/UX',
    image: englishJanalaImg,
    link: 'https://usamabinmah12.github.io/english-janala/'
  },
  {
    title: 'Dream 11 Cricket',
    tag: 'React • Firebase',
    image: cricketTeamImg,
    link: 'https://rad-croissant-b4d327.netlify.app/'
  },
  {
    title: 'DigiTools Platform',
    tag: 'SaaS • Tailwind',
    image: digitoolsImg,
    link: 'https://digital-tools-platform1.netlify.app/'
  },
  {
    title: 'Global Explorer',
    tag: 'Data Viz • API',
    image: globalExplorerImg,
    link: 'https://earnest-horse-1fd23b.netlify.app/'
  },
  {
    title: 'Job Tracker',
    tag: 'Full Stack • Node.js',
    image: jobTrackerImg,
    link: 'https://usamabinmah12.github.io/Assignment-4/'
  }
];

const Projects = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <Reveal direction="down">
          <div className="section-header">
            <span className="section-label">SELECTED WORKS</span>
            <h2 className="display-title" style={{ fontSize: '3.5rem' }}>Visual <span style={{ color: 'var(--primary)' }}>Archive</span></h2>
          </div>
        </Reveal>

        <div className="grid-masonry">
          {projects.map((project, index) => (
            <Reveal key={index} direction="up" delay={index * 0.1}>
              <motion.div 
                className="card-cyber"
                whileHover="hover"
              >
                <div className="card-image">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    variants={{
                      hover: { scale: 1.1, filter: 'brightness(0.6) grayscale(0)' }
                    }}
                    style={{ filter: 'grayscale(0.3) brightness(0.8)' }}
                  />
                </div>
                
                <motion.div 
                  className="card-overlay"
                  style={{
                    position: 'absolute', inset: 0, padding: '40px',
                    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                    opacity: 0, pointerEvents: 'none'
                  }}
                  variants={{
                    hover: { opacity: 1, pointerEvents: 'auto' }
                  }}
                >
                  <motion.span 
                    style={{ color: 'var(--primary)', fontSize: '12px', fontWeight: '800', letterSpacing: '2px' }}
                    variants={{ hover: { y: 0, opacity: 1 } }}
                    initial={{ y: 20, opacity: 0 }}
                  >
                    {project.tag}
                  </motion.span>
                  <motion.h3 
                    style={{ fontSize: '1.75rem', margin: '8px 0 24px' }}
                    variants={{ hover: { y: 0, opacity: 1 } }}
                    initial={{ y: 20, opacity: 0 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.a 
                    href={project.link}
                    target="_blank"
                    className="btn-neon"
                    style={{ alignSelf: 'flex-start', padding: '10px 20px', fontSize: '12px' }}
                    variants={{ hover: { y: 0, opacity: 1 } }}
                    initial={{ y: 20, opacity: 0 }}
                  >
                    Live Preview
                  </motion.a>
                </motion.div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
