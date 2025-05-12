
import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projectsData';

const ProjectsContainer = () => {
  return (
    <section className="section-container">
      <h2 className="text-2xl font-bold mb-8">Projects</h2>
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
    </section>
  );
};

export default ProjectsContainer;
