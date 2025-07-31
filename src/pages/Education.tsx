
import { useState } from 'react';
import Layout from '@/components/Layout';
import EducationCard from '@/components/EducationCard';
import CertificationCard from '@/components/CertificationCard';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Education = () => {
  const [showEducation, setShowEducation] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);
  
  const certifications = [
    {
      title: "Verbal Communications and Presentation Skills",
      issuer: "Starweaver",
      date: "Mar 2025",
      skills: ["Oral Communication"],
      linkedinUrl: "https://www.coursera.org/account/accomplishments/records/Q50NZ0OE5Y7I"
    },
    {
      title: "AWS Cloud Technical Essentials",
      issuer: "Amazon Web Services",
      date: "Mar 2025",
      skills: ["Cloud Computing"],
      linkedinUrl: "https://www.coursera.org/account/accomplishments/records/0ZMYKSRCG86G"
    },
    {
      title: "Cloud Computing Foundations",
      issuer: "IBM",
      date: "Mar 2025",
      skills: ["Cloud Computing"],
      linkedinUrl: "https://www.coursera.org/account/accomplishments/records/Y3TG3AAHSD0H"
    },
    {
      title: "Developing Applications with Google Cloud: Foundations",
      issuer: "Google",
      date: "Mar 2025",
      skills: ["Cloud Computing"],
      linkedinUrl: "https://www.coursera.org/account/accomplishments/records/FN47H0O9XUMV"
    },
    {
      title: "Introduction to Software, Programming and Databases",
      issuer: "IBM Skills Network Team",
      date: "Mar 2025",
      skills: ["IT Basics"],
      linkedinUrl: "https://www.coursera.org/account/accomplishments/records/9ENFC4TFBNYB"
    },
    {
      title: "Google Cloud Fundamentals: Core Infrastructure",
      issuer: "Google",
      date: "Mar 2025",
      skills: ["Cloud Computing"],
      linkedinUrl: "https://www.coursera.org/account/accomplishments/records/3BWDE81CM01Y"
    },
    {
      title: "Introduction to Cloud Computing",
      issuer: "IBM",
      date: "Mar 2025",
      skills: ["Cloud Computing"],
      linkedinUrl: "https://www.coursera.org/account/accomplishments/records/EJLSP1XTTLNK"
    },
    {
      title: "Introduction to Hardware and Operating Systems",
      issuer: "IBM",
      date: "Mar 2025",
      skills: ["Hardware", "Operating Systems"],
      linkedinUrl: "https://www.coursera.org/account/accomplishments/records/9ENFC4TFBNYB"
    },
    {
      title: "Security Operations Analyst Associate Certified",
      issuer: "Microsoft",
      date: "April 2024",
      skills: ["Cybersecurity"],
      linkedinUrl:"https://raw.githubusercontent.com/WaqarMajiet97/waqar-majiet-portfolio-forge/main/public/documents/microsoft-security-operations-analyst.pdf"
      <iframe 
      src="https://raw.githubusercontent.com/WaqarMajiet97/waqar-majiet-portfolio-forge/main/public/documents/microsoft-security-operations-analyst.pdf" 
      width="100%" 
      height="800px" 
      style="border: none;" 
      title="Microsoft Security Operations Analyst PDF">
      </iframe>
    },
    {
      title: "Generative AI: Introduction and Applications",
      issuer: "IBM",
      date: "May 2025",
      skills: ["AI"],
      linkedinUrl: "https://www.coursera.org/account/accomplishments/records/VZ1O2540Q8VQ"
    },
    {
      title: "Generative AI: Introduction and Applications",
      issuer: "IBM",
      date: "May 2025",
      skills: ["AI"],
      linkedinUrl: "https://www.coursera.org/account/accomplishments/records/VZ1O2540Q8VQ"
    },
    {
      title: "Cloud Architecture Design Patterns",
      issuer: "Coursera Instructor Network",
      date: "June 2025",
      skills: ["Cloud Computing"],
      linkedinUrl: "https://www.coursera.org/account/accomplishments/records/ANYKBKGFFQE9"
    },
    {
      title: "Grit and Growth Mindset",
      issuer: "Arizona State University",
      date: "June 2025",
      skills: ["Mindset"],
      linkedinUrl: "https://www.coursera.org/account/accomplishments/records/Z5GS89PN01CP"
    },
    {
      title: "Solving Problems with Creative and Critical Thinking",
      issuer: "IBM",
      date: "June 2025",
      skills: ["Problem-Solving"],
      linkedinUrl: "https://www.coursera.org/account/accomplishments/verify/XT7TWWU66IPS"
    },
    {
      title: " Preparation for Job Interviews",
      issuer: "Coursera Project Network",
      date: "May 2025",
      skills: ["Interviews"],
      linkedinUrl: "https://www.coursera.org/account/accomplishments/records/ZS8KJGX458KU"
    },
    {
      title: "Emotional Intelligence",
      issuer: "Arizona State University",
      date: "May 2025",
      skills: ["Emotional Intelligence"],
      linkedinUrl: "https://www.coursera.org/account/accomplishments/records/0OY25WNE9KLP"
    },
    {
      title: " Managing Conflicts with Cultural and Emotional Intelligence",
      issuer: "University of Maryland",
      date: "May 2025",
      skills: ["Interpersonal Skills"],
      linkedinUrl: "https://www.coursera.org/account/accomplishments/records/YQGNYQSABP0X"
    },
    {
      title: "Developing Interpersonal Skills",
      issuer: "IBM",
      date: "May 2025",
      skills: ["Interpersonal Skills"],
      linkedinUrl: "https://www.coursera.org/account/accomplishments/records/RL37V63UTHVT"
    },
    {
      title: "Work Smarter, Not Harder: Time Management for Personal & Professional Productivity",
      issuer: "UCI",
      date: "May 2025",
      skills: ["Time Management"],
      linkedinUrl: "https://www.coursera.org/account/accomplishments/records/MO2XJ7REYWEV"
    },
     {
      title: "Leading with Impact: Team Dynamics, Strategy and Ethics",
      issuer: "Coursera Instructor Network",
      date: "May 2025",
      skills: ["Leadership"],
      linkedinUrl: "https://www.coursera.org/account/accomplishments/records/O7Y5SZR1MUUE"
    },
     {
      title: "Introduction to Personal Branding",
      issuer: "University of Virginia",
      date: "May 2025",
      skills: ["Personal Branding"],
      linkedinUrl: "https://www.coursera.org/account/accomplishments/records/2LOLKIU0JMBP"
    },
     {
      title: "Finding Your Professional Voice: Confidence & Impact",
      issuer: "University of London",
      date: "May 2025",
      skills: ["Confidence"],
      linkedinUrl: "https://www.coursera.org/account/accomplishments/records/O7Y5SZR1MUUE"
    },
    {
      title: "Introduction to Microsoft Azure Cloud Services",
      issuer: "Microsoft",
      date: "May 2025",
      skills: ["Cloud Computing"],
      linkedinUrl: "https://www.coursera.org/account/accomplishments/records/41L1GNTD95I3"
    },
    {
      title: "Financial Planning for Young Adults",
      issuer: "Illinois",
      date: "May 2025",
      skills: ["Financial Planning"],
      linkedinUrl: "https://www.coursera.org/account/accomplishments/records/CJCI1WNEKSVR"
    },
    {
      title: "Psychology of The Self",
      issuer: "American Psychological Association",
      date: "May 2025",
      skills: ["Psychology"],
      linkedinUrl: "https://www.coursera.org/account/accomplishments/records/I332G8Z1KL0I"
    },
    {
      title: "Negotiation skills: Negotiate and resolve conflict",
      issuer: "Macquarie University",
      date: "June 2025",
      skills: ["Negotiation"],
      linkedinUrl: "https://www.coursera.org/account/accomplishments/records/LC88HZTTB16K"
    },
    {
      title: "Positive Psychology: Resilience Skills",
      issuer: "University of Pennsylvania",
      date: "May 2025",
      skills: ["Psychology"],
      linkedinUrl: "https://www.coursera.org/account/accomplishments/records/J5LLSL7X0UZ5"
    },
     {
      title: "Microsoft Security Operations Analyst SC-200",
      issuer: "Microsoft Learn",
      date: "March 2024",
      skills: ["IT Security"],
      linkedinUrl: "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/public/documents/microsoft-sc-200.pdf"
    },
     {
      title: "Microsoft Security, Compliance, and Identity Fundamentals SC-900",
      issuer: "Microsoft Learn",
      date: "March 2024",
      skills: ["Cybersecurity"],
      linkedinUrl: "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/public/documents/microsoft-sc-900.pdf"
    },
    {
      title: "Architecting Solutions on AWS",
      issuer: "Amazon Web Services",
      date: "July 2025",
      skills: ["Cloud Computing"],
      linkedinUrl: "https://www.coursera.org/account/accomplishments/records/ANYKBKGFFQE9"
    },
    {
      title: "DIGITAL LEARNING CERTIFICATE: Digital Modules",
      issuer: "YES",
      date: "June 2025",
      skills: ["Digital Training"],
      linkedinUrl: "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/public/documents/yes-digital-modules.pdf"
    },
    {
      title: "DIGITAL LEARNING CERTIFICATE: Enterpreneurship Modules",
      issuer: "YES",
      date: "June 2025",
      skills: ["Enterpreneurship"],
      linkedinUrl: "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/public/documents/yes-entrepreneurship-modules.pdf"
    },
    {
      title: "DIGITAL LEARNING CERTIFICATE: Work Readiness Modules",
      issuer: "YES",
      date: "June 2025",
      skills: ["Work Readiness"],
      linkedinUrl: "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/public/documents/yes-work-readiness-modules.pdf"
    },
    {
      title: "Write Professional Emails in English",
      issuer: "Georgia Institute of Technology",
      date: "Mar 2025",
      skills: ["Communication"],
      linkedinUrl: "https://www.coursera.org/account/accomplishments/records/77O0AE7D1765"
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary/5 py-16" style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative"
      }}>
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-6 text-white">Education</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-white leading-relaxed">
              My academic journey and professional qualifications
            </p>
          </div>
        </div>
      </section>
      
      {/* Education Timeline */}
      <section className="section-container">
        <div className="space-y-12">
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Academic & Professional Education</h2>
              <Button 
                onClick={() => setShowEducation(!showEducation)}
                variant="default"
                size="default"
              >
                {showEducation ? (
                  <>
                    <ChevronUp className="mr-2 h-4 w-4" />
                    Hide Education
                  </>
                ) : (
                  <>
                    <ChevronDown className="mr-2 h-4 w-4" />
                    View Education
                  </>
                )}
              </Button>
            </div>
            
            {showEducation && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                <EducationCard
                  institution="CTU Training Solutions"
                  degree="National Certificate NQF 5: Systems Development"
                  period="2023-2024"
                  documentPath="https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/public/documents/ctu-systems-development.pdf"
                />
                
                <EducationCard
                  institution="LFP"
                  degree="Project Management National Certificate NQF 4"
                  period="2021-2022"
                />
                
                <EducationCard
                  institution="African Resources Training Group"
                  degree="Wealth Management National Certificate NQF 5"
                  period="2018-2019"
                />
                
                <EducationCard
                  institution="African Resources Training Group"
                  degree="Wealth Management National Certificate NQF 4"
                  period="2017-2018"
                  documentPath="https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/public/documents/artg-wealth-management-nqf4.pdf"
                />
                
                <EducationCard
                  institution="Stellenbosch University"
                  degree="BEng Electrical Engineering EDP"
                  period="2016-2016"
                  completed={false}
                />
                
                <EducationCard
                  institution="Spine Road High School"
                  degree="Matric"
                  period="2010-2015"
                  documentPath="https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/public/documents/matric-certificate.pdf"
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
            )}
          </div>
        </div>
      </section>
      
      {/* Professional Certifications and Online Courses */}
      <section className="section-container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Professional Certifications and Online Courses</h2>
          <Button 
            onClick={() => setShowCertifications(!showCertifications)}
            variant="default"
            size="default"
          >
            {showCertifications ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" />
                Hide Certifications
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" />
                View Certifications
              </>
            )}
          </Button>
        </div>
        
        {showCertifications && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            {certifications.map((cert, index) => (
              <CertificationCard
                key={index}
                title={cert.title}
                issuer={cert.issuer}
                date={cert.date}
                skills={cert.skills}
                linkedinUrl={cert.linkedinUrl}
                className="h-full"
              />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Education;
