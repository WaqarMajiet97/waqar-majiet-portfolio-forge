
import React from 'react';
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
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
      <div className="md:flex">
        <div className="md:w-2/5">
          <div className="h-64 md:h-full bg-gray-100 relative overflow-hidden">
            <img 
              src={image} 
              alt={imageAlt} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
              <p className="text-primary font-medium px-4 py-2 bg-white/80 rounded-md">{imageLabel}</p>
            </div>
          </div>
        </div>
        <div className="p-6 md:w-3/5">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          
          <div className="mb-4">
            <h4 className="font-medium mb-2">Key Features:</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
          
          <Button className="mt-2" variant="outline" size="sm">
            <ExternalLink className="mr-1 h-4 w-4" />
            View Project Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
