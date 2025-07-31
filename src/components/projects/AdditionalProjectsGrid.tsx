import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText } from 'lucide-react';

interface AdditionalProject {
  title: string;
  url: string;
  category: string;
}

const additionalProjects: AdditionalProject[] = [
  {
    title: "Programming with C# 1",
    url: "/documents/programming-csharp-1.pdf",
    category: "C# Programming"
  },
  {
    title: "Programming with C# 2", 
    url: "/documents/programming-csharp-2.pdf",
    category: "C# Programming"
  },
  {
    title: "Programming with C# 3",
    url: "/documents/programming-csharp-3.pdf",
    category: "Business Programming"
  },
  {
    title: "Programming with C# 4",
    url: "/documents/programming-csharp-4.pdf",
    category: "C# Programming"
  },
  {
    title: "DevOps 1",
    url: "/documents/devops-1.pdf",
    category: "DevOps"
  },
  {
    title: "DevOps 2",
    url: "/documents/devops-2.pdf",
    category: "DevOps"
  },
  {
    title: "Java Project 1",
    url: "/documents/java-project-1.pdf",
    category: "Java Development"
  },
  {
    title: "Java Project 2",
    url: "/documents/java-project-2.pdf",
    category: "Java Development"
  },
  {
    title: "Java Project 3",
    url: "/documents/java-project-3.pdf",
    category: "Java Development"
  },
  {
    title: "Solutions Development",
    url: "/documents/solutions-development.pdf",
    category: "Solutions Development"
  },
  {
    title: "Solutions Development 2",
    url: "/documents/programming-csharp-4.pdf",
    category: "Solutions Development"
  },
  {
    title: "Task Management Application (Google AppSheets)",
    url: "/documents/task-management-app.pdf",
    category: "Application Development"
  }
];

const AdditionalProjectsGrid = () => {
  const handleProjectClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="mt-8 animate-fade-in">
      <h3 className="text-2xl font-bold mb-6 text-center">Additional Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {additionalProjects.map((project, index) => (
          <Card key={index} className="hover-lift transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-center mb-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
              </div>
              <CardTitle className="text-lg text-center">{project.title}</CardTitle>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="text-center mb-4">
                <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              
              <Button 
                onClick={() => handleProjectClick(project.url)}
                variant="default" 
                size="lg"
                className="w-full hover-scale group text-lg py-6 justify-center"
              >
                <ExternalLink className="mr-2 h-6 w-6 transition-transform group-hover:rotate-90" />
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdditionalProjectsGrid;
