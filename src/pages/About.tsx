 import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Code, Database, Award, Globe, Briefcase } from 'lucide-react';
import WorkExperienceCard from '@/components/WorkExperienceCard';

const About = () => {
  const skills = [
    { category: "Technical", items: ["Cloud Computing", "Operating Systems", "Hardware"] },
    { category: "Soft Skills", items: ["Communication", "Problem-Solving", "Analytical Thinking", "Detail-Oriented"] },
    { category: "Professional", items: ["Project Management", "Team Collaboration"] },
  ];

  const coreStrengths = [
    {
      icon: Code,
      title: "Technical Aptitude",
      description: "Quickly grasp and apply technical concepts across various domains."
    },
    {
      icon: Database,
      title: "Analytical Thinking",
      description: "Strong ability to synthesize complex information and find patterns."
    },
    {
      icon: Award,
      title: "Attention to Detail",
      description: "Meticulous approach to tasks ensuring high quality outcomes."
    },
    {
      icon: Globe,
      title: "Adaptability",
      description: "Flexible in approach and responsive to changing requirements."
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section
        className="bg-primary/5 py-16"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-6 text-white">About Me</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-white leading-relaxed">
              Cloud Associate
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-container mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="col-span-1 lg:col-span-2">
            {/* Work Experience */}
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Briefcase className="mr-2 h-5 w-5 text-primary" />
                Professional Experience
              </h3>
              <div className="space-y-4">
                <WorkExperienceCard company="Capaciti" position="Cloud Associate" period="20 February 2025 - Present" />
                <WorkExperienceCard company="Condor Green" position="Learnership Position" period="June 2023 - May 2024" />
                <WorkExperienceCard company="Sisonke Engineering and Hydraulics" position="Learnership Position" period="July 2021 - July 2022" />
                <WorkExperienceCard company="Amazon Development Centre" position="Customer Service Associate" period="June 2019 - September 2019" />
                <WorkExperienceCard company="Liberty Life" position="Financial Adviser" period="March 2019 - May 2019" />
                <WorkExperienceCard company="Old Mutual" position="Trainee Administrator" period="March 2017 - February 2019" />
                <WorkExperienceCard company="Solutions Experts" position="Debt Review Sales Consultant" period="January 2017 - February 2017" />
              </div>
            </div>

            {/* Core Stren*
