
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Code, Database, Award, Globe, Briefcase, ChevronDown, ChevronUp, Star } from 'lucide-react';
import WorkExperienceCard from '@/components/WorkExperienceCard';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const About = () => {
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [isStrengthsOpen, setIsStrengthsOpen] = useState(false);

  const skills = [
    { category: "Technical", items: ["Cloud Computing", "Operating Systems", "Hardware", "Problem-Solving", "Analytical Thinking", "Detail-Oriented"] },
    { category: "Soft Skills", items: ["Communication", "Emotional Intelligence", "Conflict Management", "Active Listening"] },
    { category: "Professional", items: ["Project Management", "Team Collaboration"] },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary/5 py-16" style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative"
      }}>
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
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Profile */}
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Professional Profile</h2>
          
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                Cloud Associate focussing on Cloud Solutions Development on various platforms such as AWS, Google Cloud and Microsoft Azure. Experience in languages such as C#, JAVA, Python, HTML. Experience in Web Development and Desktop Application Development.
              </p>
            </div>

            {/* Work Experience Section */}
            <div className="mt-12">
              <Collapsible 
                open={isExperienceOpen} 
                onOpenChange={setIsExperienceOpen}
                className="border rounded-lg p-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold flex items-center">
                    <Briefcase className="mr-2 h-5 w-5 text-primary" />
                    Professional Experience
                  </h3>
                  <CollapsibleTrigger asChild>
                    <Button variant="default" size="sm">
                      {isExperienceOpen ? 
                        <ChevronUp className="h-4 w-4" /> : 
                        <ChevronDown className="h-4 w-4" />
                      }
                      {isExperienceOpen ? 'Hide' : 'Show'}
                    </Button>
                  </CollapsibleTrigger>
                </div>
                
                <CollapsibleContent className="mt-4">
                  <div className="space-y-4">
                    <WorkExperienceCard 
                      company="Capaciti"
                      position="Cloud Associate"
                      period="20 February 2025 - Present"
                    />
                    <WorkExperienceCard 
                      company="Isilumko/Oceana"
                      position="Generic Management Learnership Position"
                      period="01 July 2024 - 30 December 2024"
                    />
                    <WorkExperienceCard 
                      company="Condor Green"
                      position="IT: Systems Development Learnership Position"
                      period="01 June 2023 - 31 May 2024"
                    />
                    <WorkExperienceCard 
                      company="Sisonke Engineering and Hydraulics"
                      position="Project Management Learnership Position"
                      period="01 July 2021 - 31 July 2022"
                    />
                    <WorkExperienceCard 
                      company="Amazon Development Centre"
                      position="Customer Service Associate"
                      period="01 June 2019 - 30 September 2019"
                    />
                    <WorkExperienceCard 
                      company="Liberty Life"
                      position="Financial Adviser"
                      period="01 March 2019 - 31 May 2019"
                    />
                    <WorkExperienceCard 
                      company="Old Mutual"
                      position="Trainee Administrator"
                      period="01 March 2017 - 28 February 2019"
                    />
                    <WorkExperienceCard 
                      company="Solutions Experts"
                      position="Debt Review Sales Consultant"
                      period="01 January 2017 - 30 February 2017"
                    />
                    <WorkExperienceCard 
                      company="Radio Holland"
                      position="Holiday Job"
                      period="01 December 2015 - 30 December 2015"
                    />
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
            
            {/* Core Strengths */}
            <div className="mt-12">
              <Collapsible 
                open={isStrengthsOpen} 
                onOpenChange={setIsStrengthsOpen}
                className="border rounded-lg p-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold flex items-center">
                    <Star className="mr-2 h-5 w-5 text-primary" />
                    Core Strengths
                  </h3>
                  <CollapsibleTrigger asChild>
                    <Button variant="default" size="sm">
                      {isStrengthsOpen ? 
                        <ChevronUp className="h-4 w-4" /> : 
                        <ChevronDown className="h-4 w-4" />
                      }
                      {isStrengthsOpen ? 'Hide' : 'Show'}
                    </Button>
                  </CollapsibleTrigger>
                </div>
                
                <CollapsibleContent className="mt-4">
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
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
          
          {/* Right column - Skills and Personal Info */}
          <div>
            {/* Personal Information */}
            <div className="mb-8 bg-muted rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4">Personal Information</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="font-medium w-32">Full Name:</span>
                  <span className="text-gray-600">Waqar Majiet</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-32">Nationality:</span>
                  <span className="text-gray-600">South African</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-32">Languages:</span>
                  <span className="text-gray-600">English and Afrikaans</span>
                </li>
              </ul>
            </div>
          
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
