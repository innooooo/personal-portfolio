import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Skills = () => {
  const getIconsForCategory = (category) => {
    const icons = {
      Frontend: [
        { src: '/icons/monitor.svg', label: 'HTML' },
        { src: '/icons/code.svg', label: 'CSS' },
        { src: '/icons/paint-roller.svg', label: 'Tailwind' },
      ],
      Backend: [
        { src: '/icons/server.svg', label: 'Node.js' },
        { src: '/icons/database.svg', label: 'MongoDB' },
        { src: '/icons/square-terminal.svg', label: 'Express' },
        { src: '/icons/settings.svg', label: 'API Dev' },
      ],
      Animation: [
        { src: '/icons/activity.svg', label: 'Framer Motion' },
        { src: '/icons/plug-zap.svg', label: 'GSAP' },
        { src: '/icons/infinity.svg', label: 'Lottie' },
        { src: '/icons/settings.svg', label: 'Canvas/WebGL' },
      ],
      Research: [
        { src: '/icons/search-check.svg', label: 'UX Testing' },
        { src: '/icons/brain.svg', label: 'User Research' },
        { src: '/icons/chart-area.svg', label: 'Data Analysis' },
        { src: '/icons/chart-area.svg', label: 'A/B Testing' },
      ],
    };
    return icons[category] || [];
  };

  const frameworks = [
    { name: 'React.js', value: 700 },
    { name: 'Next.js', value: 200 },
    { name: 'Vue.js', value: 200 },
    { name: 'Angular', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <section className="skills-section">
      <h2 className="skills-title">Technical Skills</h2>
      <p className="skills-subtitle">A snapshot of my key development tools and focus areas.</p>

      <div className="tech-stack">
        {['Frontend', 'Backend', 'Animation', 'Research'].map((category, i) => (
          <div key={i} className="tech-category">
            <h3 className="tech-heading">{category}</h3>
            <div className="icon-grid">
              {getIconsForCategory(category).map(({ src, label }, idx) => (
                <div key={idx} className="icon-wrapper" title={label}>
                  <img src={src} alt={label} className="icon animated-icon" />
                  <span className="label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="frameworks">
        <h3 className="tech-heading">Framework Familiarity</h3>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={frameworks}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={4}
              label={({ name }) => name}
            >
              {frameworks.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Skills;
