
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';

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
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className="overflow-hidden hover-lift transition-all duration-300 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={image} 
          alt={imageAlt} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
          <p className="text-primary font-medium px-4 py-2 bg-background/80 rounded-md">{imageLabel}</p>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-foreground">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="pb-3">
        <p className="text-muted-foreground text-sm mb-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {technologies.slice(0, 3).map((tech, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="bg-primary/5 text-primary text-xs"
            >
              {tech}
            </Badge>
          ))}
          {technologies.length > 3 && (
            <Badge variant="outline" className="bg-primary/5 text-primary text-xs">
              +{technologies.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="flex flex-col items-stretch pt-0">
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
          <CollapsibleTrigger asChild>
            <Button 
              variant="default" 
              size="sm" 
              className="mb-3 w-full justify-center"
            >
              {isOpen ? (
                <>
                  <ChevronUp className="mr-2 h-4 w-4" />
                  Hide Details
                </>
              ) : (
                <>
                  <ChevronDown className="mr-2 h-4 w-4" />
                  View Details
                </>
              )}
            </Button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="space-y-4 animate-accordion-down">
            <div>
              <h4 className="font-medium mb-2 text-sm text-foreground">Key Features:</h4>
              <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            {technologies.length > 0 && (
              <div>
                <h4 className="font-medium mb-2 text-sm text-foreground">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="bg-primary/5 text-primary text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CollapsibleContent>
        </Collapsible>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
