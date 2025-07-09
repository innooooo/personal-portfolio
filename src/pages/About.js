import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigateTo = useNavigate()

  return (
    <div className="about">
      <Parallax speed={10} translateY={[-20, 20]}>
        <h1 className="section-title">Who I Am</h1>
      </Parallax>
      <img style={{width:'500px',height:'350px'}} src='/images/me.jpg'/>

      <p className="section-text">
        Hi! I'm <strong>Innocent Koge</strong>, a frontend developer who codes with creativity, precision, and speed — just like a midfield maestro on match day.
        My journey into development started with curiosity and a love for building things that people actually enjoy using.
        When I’m not crafting smooth user experiences or optimizing for performance, I’m probably watching a high-stakes match, analyzing tactics, or fine-tuning my fantasy team. ⚽🧠
      </p>

      <Parallax speed={5} translateY={[-10, 10]}>
        <h1 className="section-title">Development Philosophy</h1>
      </Parallax>
      <p className="section-quote">
        “I treat every project like game day: plan well, execute sharply, review thoroughly.”
      </p>

      <h1 className="section-title">Off the Pitch</h1>
      <p className="section-text">When I'm not coding, you'll find me:</p>

      <div className="typing-container">
        <TypeAnimation
          sequence={[
            "Watching classic football matches or player documentaries", 2000,
            "Designing sleek UI layouts for fun", 2000,
            "Learning animations & motion design", 2000,
            "Exploring AI tools to build smarter, faster", 2000,
          ]}
          speed={50}
          deletionSpeed={40}
          wrapper="span"
          repeat={Infinity}
          cursor
        />
      </div>

      <div className="cta-section">
        <h2 className="cta-text">Let’s Connect</h2>
        <div className="cta-buttons">
          <button className="btn primary-btn" onClick={()=>navigateTo('/projects')}>View My Projects</button>
          <button className="btn secondary-btn" onClick={()=>navigateTo('/contacts')}>Send Me a Message</button>
        </div>
      </div>
    </div>
  );
};

export default About;
