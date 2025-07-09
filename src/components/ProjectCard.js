import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img className="project-img" src={project.img} alt={project.title} />
      <span style={{ fontFamily: "Gotham-Black" }}>{project.title}</span>
      <div className="project-description" style={{ fontFamily: "Gotham-Medium" }}>{project.descr}</div>
      <div className="icon-grid">
        {/* You can map stack icons here when ready */}
      </div>
      <span style={{ fontFamily: "Gotham-Light" }}>Role: {project.role}</span>
      <br></br>
      <a
        style={{ color: "#00ff88", fontFamily: "Gotham-LightItalic" }}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Github Link
      </a>
    </div>
  );
};

export default ProjectCard;
