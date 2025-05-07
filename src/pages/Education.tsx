
import Layout from '@/components/Layout';
import EducationCard from '@/components/EducationCard';
import CertificationCard from '@/components/CertificationCard';

const Education = () => {
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
      
      {/* Professional Certifications and Online Courses */}
      <section className="section-container">
        <h2 className="text-2xl font-bold mb-8">Professional Certifications and Online Courses</h2>
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
    </Layout>
  );
};

export default Education;
