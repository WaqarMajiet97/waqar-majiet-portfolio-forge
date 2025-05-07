
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import CertificationCard from '@/components/CertificationCard';

const Projects = () => {
  const certifications = [
    {
      title: "Verbal Communications and Presentation Skills",
      issuer: "Starweaver",
      date: "Mar 2025",
      skills: ["Oral Communication"]
    },
    {
      title: "AWS Cloud Technical Essentials",
      issuer: "Amazon Web Services",
      date: "Mar 2025",
      skills: ["Cloud Computing"]
    },
    {
      title: "Cloud Computing Foundations",
      issuer: "IBM",
      date: "Mar 2025",
      skills: ["Cloud Computing"]
    },
    {
      title: "Introduction to Software, Programming and Databases",
      issuer: "IBM Skills Network Team",
      date: "Mar 2025",
      skills: []
    },
    {
      title: "Google Cloud Fundamentals: Core Infrastructure",
      issuer: "Google",
      date: "Mar 2025",
      skills: []
    },
    {
      title: "Introduction to Cloud Computing",
      issuer: "IBM",
      date: "Mar 2025",
      skills: ["Cloud Computing"]
    },
    {
      title: "Introduction to Hardware and Operating Systems",
      issuer: "IBM",
      date: "Mar 2025",
      skills: ["Hardware", "Operating Systems"]
    },
    {
      title: "Security Operations Analyst Associate Certified",
      issuer: "Microsoft",
      date: "Mar 2025",
      skills: []
    },
    {
      title: "Write Professional Emails in English",
      issuer: "Georgia Institute of Technology",
      date: "Mar 2025",
      skills: ["Communication"]
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">Projects and Achievements</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              Notable projects and accomplishments that showcase my skills and expertise.
            </p>
          </div>
        </div>
      </section>
      
      {/* Professional Certifications */}
      <section className="section-container">
        <h2 className="text-2xl font-bold mb-8">Professional Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              skills={cert.skills}
              className="h-full"
            />
          ))}
        </div>
      </section>
      
      {/* No-Code Projects */}
      <section className="section-container">
        <h2 className="text-2xl font-bold mb-8">No-Code Solutions</h2>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-2/5">
              <div className="h-64 md:h-full bg-gray-100 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Task Management App Screenshot" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                  <p className="text-primary font-medium px-4 py-2 bg-white/80 rounded-md">Google Sheets Integration</p>
                </div>
              </div>
            </div>
            <div className="p-6 md:w-3/5">
              <h3 className="text-xl font-bold mb-2">Task Management Application</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive task management solution built entirely using Google Sheets, without writing a single line of code. 
                This project demonstrates how to leverage Google's powerful tools to create practical business applications.
              </p>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Automated task assignment and tracking</li>
                  <li>Priority-based sorting and filtering</li>
                  <li>Due date reminders with color-coding</li>
                  <li>Progress tracking with status updates</li>
                  <li>Dashboard with completion metrics</li>
                  <li>Team member workload visualization</li>
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Google Sheets</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Formulas</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Data Visualization</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Automation</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">No-Code</span>
              </div>
              
              <Button className="mt-2" variant="outline" size="sm">
                <ExternalLink className="mr-1 h-4 w-4" />
                View Project Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
