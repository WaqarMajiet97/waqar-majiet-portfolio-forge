
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Code, Database, Award, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    { category: "Technical", items: ["Cloud Computing", "Operating Systems", "Hardware"] },
    { category: "Soft Skills", items: ["Communication", "Problem-Solving", "Analytical Thinking", "Detail-Oriented"] },
    { category: "Professional", items: ["Project Management", "Team Collaboration"] },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              A dedicated and results-driven individual with a blend of strong analytical skills and a creative mindset.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Profile */}
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Professional Profile</h2>
            
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                I bring a blend of strong analytical skills and a creative mindset to the table. 
                My ability to synthesize complex information and generate innovative solutions 
                has been a consistent strength throughout my career.
              </p>
              
              <p className="text-gray-700 mb-4">
                I thrive in environments that challenge my problem-solving capabilities and allow 
                me to leverage my keen attention to detail. As a lifelong learner, I am committed 
                to personal and professional growth, actively seeking opportunities to enhance 
                my communication skills and team collaboration.
              </p>
              
              <p className="text-gray-700 mb-4">
                Recognizing the importance of adaptability in today's dynamic work landscape, 
                I am focused on developing my project management abilities to lead initiatives 
                more effectively and drive impactful results.
              </p>
            </div>
            
            {/* Core Strengths */}
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">Core Strengths</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
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
                ].map((strength, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="flex items-start gap-4 pt-6">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <strength.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-1">{strength.title}</h4>
                        <p className="text-gray-600 text-sm">{strength.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right column - Skills */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            
            <div className="space-y-8">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h3 className="text-lg font-medium mb-3">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-sm px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Education Teaser */}
            <div className="mt-10 bg-muted p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-medium">Education</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                View my complete educational background including certificates, courses, and academic achievements.
              </p>
              <a 
                href="/education" 
                className="text-primary font-medium text-sm hover:underline"
              >
                View Education Details →
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
