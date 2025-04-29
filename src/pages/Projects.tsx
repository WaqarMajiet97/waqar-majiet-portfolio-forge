
import Layout from '@/components/Layout';
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
          <h1 className="text-4xl font-bold mb-6">Projects & Achievements</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              Professional certifications and notable accomplishments that showcase my skills and expertise.
            </p>
          </div>
        </div>
      </section>
      
      {/* Certifications */}
      <section className="section-container">
        <h2 className="text-2xl font-bold mb-8">Licenses & Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      
      {/* Skills Summary */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Skills Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-4 text-primary">Technical Skills</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Cloud Computing</li>
                <li>Hardware Knowledge</li>
                <li>Operating Systems</li>
                <li>Software Development Basics</li>
                <li>Security Operations</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-4 text-primary">Professional Skills</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Project Management</li>
                <li>Wealth Management</li>
                <li>Business Communication</li>
                <li>Professional Email Writing</li>
                <li>Team Collaboration</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-4 text-primary">Soft Skills</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Verbal Communication</li>
                <li>Presentation Skills</li>
                <li>Analytical Thinking</li>
                <li>Problem Solving</li>
                <li>Attention to Detail</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
