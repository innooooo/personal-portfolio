const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-img-wrapper">
        <img 
          className="project-img" 
          src={project.img} 
          alt={`${project.title} project screenshot`} 
        />
        {project.isLive && (
          <span className="live-badge">
            <span className="live-dot"></span>
            Live
          </span>
        )}
        {project.logo && (
          <img 
            className="project-logo" 
            src={project.logo} 
            alt={`${project.title} logo`} 
          />
        )}
      </div>

      {/* Content Section */}
      <div className="project-content">
        {/* Title and Type */}
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <span className="project-type">{project.type}</span>
        </div>

        {/* Description */}
        <p className="project-description">{project.descr}</p>

        {/* Metrics Section */}
        <div className="project-metrics">
          <span className="metrics-label">Key Metrics</span>
          <ul className="metrics-list">
            {project.metrics.map((metric, index) => (
              <li key={index} className="metric-item">
                {metric}
              </li>
            ))}
          </ul>
        </div>

        {/* Role */}
        <div className="project-role">
          <span className="role-label">Role:</span>
          <span className="role-value">{project.role}</span>
        </div>

        {/* Tech Stack */}
        <div className="project-stack">
          {project.stack.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="project-actions">
          <a
            className="project-link primary-btn"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.link.includes('github') ? 'View on GitHub' : 'Visit Live Site'}
            <span className="link-icon">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;


