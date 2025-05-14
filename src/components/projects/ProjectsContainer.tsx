
import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projectsData';

const ProjectsContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          features={project.features}
          technologies={project.technologies}
          image={project.image}
          imageAlt={project.imageAlt}
          imageLabel={project.imageLabel}
        />
      ))}
    </div>
  );
};

export default ProjectsContainer;
