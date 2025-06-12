
import { useState } from 'react';
import Layout from '@/components/Layout';
import ProjectHeader from '@/components/projects/ProjectHeader';
import ProjectsContainer from '@/components/projects/ProjectsContainer';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Plus } from 'lucide-react';

const Projects = () => {
  const [showProjects, setShowProjects] = useState(false);
  
  const handleMoreProjectsClick = () => {
    window.open('https://capeitinitiative-my.sharepoint.com/:f:/g/personal/waqar_majiet_capaciti_org_za/EviL1Dp0Rp1PtO-RKJuLu1UBZlZwvURU1ulhCQ1aeelwAA?e=rmuP1R', '_blank');
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
            variant="outline" 
            size="lg"
            className="hover-scale group min-w-[200px]"
          >
            {showProjects ? (
              <>
                <ChevronUp className="mr-2 h-5 w-5 transition-transform" />
                Hide Projects
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-5 w-5 transition-transform" />
                View Projects
              </>
            )}
          </Button>
        </div>
        
        {showProjects && (
          <>
            <ProjectsContainer />
            
            <div className="flex justify-center mt-12">
              <Button 
                variant="default" 
                size="lg"
                className="hover-scale group min-w-[250px] text-lg py-6"
                onClick={handleMoreProjectsClick}
              >
                <Plus className="mr-2 h-6 w-6 transition-transform group-hover:rotate-90" />
                More Projects
              </Button>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Projects;
