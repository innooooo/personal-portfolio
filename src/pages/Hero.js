import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { TypeAnimation } from 'react-type-animation';
import '../styles/App.css';
import {useNavigate} from 'react-router-dom'

const Hero = () => {
  const navigateTo = useNavigate()

  return (
    <div className="hero">
      <Parallax speed={10} translateY={[-100, 100]} easing="easeInOut">
        <div className="hero-content">
          <h1 className="slide-in-left" style={{ padding: 3 }}>
            Innocent Koge, <sub>a.k.a.</sub> inno
          </h1>

          <h2
            className="slide-in-right typing-3d"
            style={{
              padding: 3,
              color: '#00ff88',
              perspective: '1000px',
              transformStyle: 'preserve-3d',
            }}
          >
            <TypeAnimation
              sequence={[
                'Creative frontend developer', 2000,
                'Backend engineer', 2000,
                'Creative animator', 2000,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              cursor={true}
              style={{ display: 'inline-block' }}
            />
          </h2>

          <p className="slide-in-left" style={{ padding: 3 }}>
            Building the web like I play midfield — sharp, strategic, and always moving forward.
          </p>
          <span className="slide-in-right" style={{ padding: 3 }}>
            Designing fast, accessible, and delightful experiences backed by real user insights.
          </span>

          <div
            className="slide-in-up"
            style={{ display: 'flex', justifyContent: 'space-evenly' }}
          >
            <button className="btn secondary-btn" onClick={()=>navigateTo('/projects')}>View Work</button>
            <button className="btn primary-btn">
              <a href="/innocent-koge-cv.doc" download>
                Download CV
              </a>
            </button>

          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Hero;
