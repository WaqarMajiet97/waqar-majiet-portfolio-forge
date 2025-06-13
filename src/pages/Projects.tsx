
import { useState } from 'react';
import Layout from '@/components/Layout';
import ProjectHeader from '@/components/projects/ProjectHeader';
import ProjectsContainer from '@/components/projects/ProjectsContainer';
import AdditionalProjectsGrid from '@/components/projects/AdditionalProjectsGrid';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Projects = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [showAdditionalProjects, setShowAdditionalProjects] = useState(false);
  
  const handleMoreProjectsClick = () => {
    setShowAdditionalProjects(!showAdditionalProjects);
  };
  
  return (
    <Layout>
      <ProjectHeader 
        title="Projects and Achievements"
        description="Notable projects and accomplishments that showcase my skills and expertise."
        backgroundImage="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      />
      
      <div className="section-container">
        <div className="flex justify-center mb-8">
          <Button 
            onClick={() => setShowProjects(!showProjects)}
            size="lg"
            className="hover-scale group min-w-[250px] text-lg py-6"
          >
            {showProjects ? (
              <>
                <ChevronUp className="mr-2 h-6 w-6 transition-transform" />
                Hide Projects
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-6 w-6 transition-transform" />
                View Projects
              </>
            )}
          </Button>
        </div>
        
        {showProjects && <ProjectsContainer />}
        
        <div className="flex justify-center mt-12">
          <Button 
            size="lg"
            className="hover-scale group min-w-[250px] text-lg py-6"
            onClick={handleMoreProjectsClick}
          >
            {showAdditionalProjects ? (
              <>
                <ChevronUp className="mr-2 h-6 w-6 transition-transform" />
                Hide Additional Projects
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-6 w-6 transition-transform" />
                More Projects
              </>
            )}
          </Button>
        </div>
        
        {showAdditionalProjects && <AdditionalProjectsGrid />}
      </div>
    </Layout>
  );
};

export default Projects;
