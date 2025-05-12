
import React from 'react';

interface ProjectHeaderProps {
  title: string;
  description: string;
  backgroundImage: string;
}

const ProjectHeader = ({ title, description, backgroundImage }: ProjectHeaderProps) => {
  return (
    <section className="bg-primary/5 py-16" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover", 
      backgroundPosition: "center",
      position: "relative"
    }}>
      <div className="absolute inset-0 bg-primary/70"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <h1 className="text-4xl font-bold mb-6 text-white">{title}</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-white leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectHeader;
