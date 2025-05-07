
import Layout from '@/components/Layout';
import EducationCard from '@/components/EducationCard';

const Education = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">Education</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              My academic journey and professional qualifications
            </p>
          </div>
        </div>
      </section>
      
      {/* Education Timeline */}
      <section className="section-container">
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-8">Academic & Professional Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <EducationCard
                institution="CTU Training Solutions"
                degree="National Certificate NQF 5: Systems Development"
                period="2023-2024"
              />
              
              <EducationCard
                institution="LFP"
                degree="Project Management National Certificate"
                period="2021-2022"
              />
              
              <EducationCard
                institution="African Resources Training Group"
                degree="Wealth Management National Certificate"
                period="2018-2019"
              />
              
              <EducationCard
                institution="African Resources Training Group"
                degree="Wealth Management National Certificate"
                period="2017-2018"
              />
              
              <EducationCard
                institution="Stellenbosch University"
                degree="BEng Electrical Engineering"
                period="2016-2016"
                completed={false}
              />
              
              <EducationCard
                institution="Spine Road High School"
                degree="Matric"
                period="2015"
                subjects={[
                  { name: "English Home Language", percentage: "77%" },
                  { name: "Afrikaans First Additional Language", percentage: "70%" },
                  { name: "Mathematics", percentage: "64%" },
                  { name: "Life Orientation", percentage: "83%" },
                  { name: "Geography", percentage: "84%" },
                  { name: "Life Sciences", percentage: "75%" },
                  { name: "Physical Sciences", percentage: "63%" }
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills & Knowledge Gained */}
      <section className="py-16 relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Technology Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
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
                <li>No-Code Solutions</li>
                <li>Systems Development</li>
                <li>Database Concepts</li>
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
                <li>Business Analysis</li>
                <li>Time Management</li>
                <li>Resource Planning</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-4 text-primary">Soft Skills & Languages</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Verbal Communication</li>
                <li>Presentation Skills</li>
                <li>Analytical Thinking</li>
                <li>Problem Solving</li>
                <li>Attention to Detail</li>
                <li>HTML & CSS</li>
                <li>JavaScript</li>
                <li>SQL Basics</li>
                <li>Python Fundamentals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tools & Technologies */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Tools & Technologies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-4 text-primary">Development</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Basic Version Control</li>
                <li>Cloud Service Platforms</li>
                <li>AWS</li>
                <li>Google Cloud</li>
                <li>IBM Cloud</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-4 text-primary">Business & Productivity</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Google Workspace</li>
                <li>Microsoft Office Suite</li>
                <li>Customer Service Platforms</li>
                <li>Project Management Software</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Education;
