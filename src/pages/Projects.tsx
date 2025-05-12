
import Layout from '@/components/Layout';
import ProjectHeader from '@/components/projects/ProjectHeader';
import ProjectsContainer from '@/components/projects/ProjectsContainer';

const Projects = () => {
  return (
    <Layout>
      <ProjectHeader 
        title="Projects and Achievements"
        description="Notable projects and accomplishments that showcase my skills and expertise."
        backgroundImage="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      />
      <ProjectsContainer />
    </Layout>
  );
};

export default Projects;
