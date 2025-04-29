
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
          
          <div>
            <h2 className="text-2xl font-bold mb-8">Professional Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <EducationCard
                institution="Microsoft Certification"
                degree="Security Operations Analyst Associate"
                period="April 2024"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills & Knowledge */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Skills & Knowledge Gained</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-xl mb-4 text-primary">Technical Knowledge</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Systems Development</li>
                  <li>Cloud Computing (AWS, Google Cloud, IBM)</li>
                  <li>Hardware & Operating Systems</li>
                  <li>Software Programming Fundamentals</li>
                  <li>Database Concepts</li>
                  <li>Security Operations</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-xl mb-4 text-primary">Business & Management Skills</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Project Management</li>
                  <li>Wealth Management</li>
                  <li>Professional Communication</li>
                  <li>Business Analysis</li>
                  <li>Time Management</li>
                  <li>Resource Planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Education;
