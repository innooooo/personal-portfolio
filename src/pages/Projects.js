import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [projects,setProjects] = useState([{
    img: '/images/nena-chatbot.jpg',
    title: 'Nena Mental Health Chatbot API',
    descr: 'Speak to your mental health companion',
    role: 'Lead Developer',
    link: 'https://github.com/innooooo/nena-mental-health-chatbot-api'
  },{
    img: '/images/phones.jpg',
    title: 'Aspect-Based Sentiment Analysis AI',
    descr: 'An AI-powered web application for mobile phone reviews',
    role: 'Lead Developer',
    link: 'https://github.com/innooooo/absanalysis'
  },{
    img: '/images/dictionary.jpg',
    title: 'My Dictionary',
    descr: 'Simple Java based dictionary android application',
    role: 'Lead Developer',
    link: 'https://github.com/innooooo/dictionarymobileapp'
  },{
    img: '/images/nena-chatbot.jpg',
    title: 'Nena Mental Health Chatbot API',
    descr: 'Speak to your mental health companion',
    role: 'Lead Developer',
    link: 'https://github.com/innooooo/nena-mental-health-chatbot-api'
  }])

  return (
    <div className="projects">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
