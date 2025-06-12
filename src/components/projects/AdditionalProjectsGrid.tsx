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
    title: "Business Programming 1",
    url: "https://capeitinitiative-my.sharepoint.com/:b:/g/personal/waqar_majiet_capaciti_org_za/EcSOctMEDPREuoLImFnHYnEBWPb0YdqNbs46UFPHj2ppIQ?e=y6JONe",
    category: "Business Programming"
  },
  {
    title: "Business Programming 2", 
    url: "https://capeitinitiative-my.sharepoint.com/:b:/g/personal/waqar_majiet_capaciti_org_za/EWgFC6mBJV5BlGuE1AKoIe4BMJpKslVZsbvL82jYwA5_4g?e=573TlB",
    category: "Business Programming"
  },
  {
    title: "Business Programming 3",
    url: "https://capeitinitiative-my.sharepoint.com/:b:/g/personal/waqar_majiet_capaciti_org_za/EVOdBEHqxflMukhuWpIdOb8BaXQ6V_IxMu8y58Vw-65Qhg?e=vvEH3J",
    category: "Business Programming"
  },
  {
    title: "Business Programming 4",
    url: "https://capeitinitiative-my.sharepoint.com/:b:/g/personal/waqar_majiet_capaciti_org_za/ETVxrRjYPxJLqg86EOVvUtkB6MhUUF8KxrVvyMjgVP4y6g?e=eFpNrf",
    category: "Business Programming"
  },
  {
    title: "DevOps 1",
    url: "https://capeitinitiative-my.sharepoint.com/:b:/g/personal/waqar_majiet_capaciti_org_za/Ed7r-B8EJGhOo1U0kEU_DRoBwwEnLxmbETVPwhYpq29rJw?e=6quAW3",
    category: "DevOps"
  },
  {
    title: "DevOps 2",
    url: "https://capeitinitiative-my.sharepoint.com/:b:/g/personal/waqar_majiet_capaciti_org_za/Ed4o0cUD1O9CoDfRP-8CgGsBkcCOfUMjDDGmxxIP4G42PA?e=EsG511",
    category: "DevOps"
  },
  {
    title: "Java Project 1",
    url: "https://capeitinitiative-my.sharepoint.com/:b:/g/personal/waqar_majiet_capaciti_org_za/EemGLhsFhWFIgC9cpnuWYuoBLLWdssomwe5apoYZQ_0YZw?e=1scgAG",
    category: "Java Development"
  },
  {
    title: "Java Project 2",
    url: "https://capeitinitiative-my.sharepoint.com/:b:/g/personal/waqar_majiet_capaciti_org_za/EbA4PSuw2X5GgUTp6thuUngBmLBl30Kc5mNWRDt6SSRQ1w?e=ZK6XSg",
    category: "Java Development"
  },
  {
    title: "Java Project 3",
    url: "https://capeitinitiative-my.sharepoint.com/:b:/g/personal/waqar_majiet_capaciti_org_za/EQ-NFWJlqmNFlGI7jtL7sZMBaXQ6V_IxMu8y58Vw-65Qhg?e=mKIm2P",
    category: "Java Development"
  },
  {
    title: "Solutions Development",
    url: "https://capeitinitiative-my.sharepoint.com/:b:/g/personal/waqar_majiet_capaciti_org_za/EdwnHg8DdB1Dshzvk7AcNd8BEFdFw_joauIyCWzzM0rPnw?e=P8TGig",
    category: "Solutions Development"
  },
  {
    title: "Task Management Application",
    url: "https://capeitinitiative-my.sharepoint.com/:i:/g/personal/waqar_majiet_capaciti_org_za/EQwjmndWzdNEmhs61QoMwmkB-U3EBygjcYepLBOqzz_RkQ?e=3marQn",
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
