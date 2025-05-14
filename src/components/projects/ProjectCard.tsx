
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  image: string;
  imageAlt: string;
  imageLabel: string;
}

const ProjectCard = ({
  title,
  description,
  features,
  technologies,
  image,
  imageAlt,
  imageLabel,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-card rounded-lg shadow-sm overflow-hidden mb-12 border border-border hover-lift transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="md:flex">
        <div className="md:w-2/5">
          <div className="h-64 md:h-full bg-muted relative overflow-hidden">
            <img 
              src={image} 
              alt={imageAlt} 
              className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
            />
            <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
              <p className="text-primary font-medium px-4 py-2 bg-background/80 rounded-md">{imageLabel}</p>
            </div>
          </div>
        </div>
        <div className={`p-6 md:w-3/5 transition-all duration-300 ${isHovered ? 'bg-accent/5' : ''}`}>
          <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          
          <div className="mb-4">
            <h4 className="font-medium mb-2 text-foreground">Key Features:</h4>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              {features.map((feature, index) => (
                <li key={index} className={`transition-all duration-300 ${isHovered ? 'translate-x-2' : ''}`}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className={`bg-primary/10 text-primary text-xs px-2 py-1 rounded-full transition-all duration-300 ${
                  isHovered ? 'bg-primary/20' : ''
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
          
          <Button 
            className={`mt-2 hover-scale transition-all duration-300 ${
              isHovered ? 'bg-primary text-white' : ''
            }`} 
            variant={isHovered ? "default" : "outline"} 
            size="sm"
          >
            <ExternalLink className="mr-1 h-4 w-4" />
            View Project Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
