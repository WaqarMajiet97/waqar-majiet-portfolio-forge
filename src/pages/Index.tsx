
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, GraduationCap, Code, User, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import CertificationCard from '@/components/CertificationCard';

const Index = () => {
  const certifications = [
    {
      title: "Security Operations Analyst Associate Certified",
      issuer: "Microsoft",
      date: "Mar 2025",
      skills: []
    },
    {
      title: "AWS Cloud Technical Essentials",
      issuer: "Amazon Web Services",
      date: "Mar 2025",
      skills: ["Cloud Computing"]
    },
    {
      title: "Verbal Communications and Presentation Skills",
      issuer: "Starweaver",
      date: "Mar 2025",
      skills: ["Oral Communication"]
    },
  ];

  // This function will ensure links scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Layout>
      <HeroSection />
      
      {/* Quick Navigation Section */}
      <section className="section-container">
        <h2 className="text-3xl font-bold text-center mb-12">Explore My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: User, title: "About Me", description: "Learn more about my skills and background", link: "/about" },
            { icon: Briefcase, title: "Projects & Achievements", description: "Explore my achievements and certifications", link: "/projects" },
            { icon: GraduationCap, title: "Education", description: "My academic journey and qualifications", link: "/education" },
            { icon: Mail, title: "Contact", description: "Get in touch with me", link: "/contact" }
          ].map((item, index) => (
            <Card key={index} className="card-hover h-full">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 bg-primary/10 p-3 rounded-full inline-flex">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                <Button asChild variant="outline" onClick={scrollToTop}>
                  <Link to={item.link}>View More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Featured Certifications */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Featured Certifications and Courses</h2>
            <p className="text-gray-600 mt-2">Some of my recent professional certifications and courses</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard
                key={index}
                title={cert.title}
                issuer={cert.issuer}
                date={cert.date}
                skills={cert.skills}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild onClick={scrollToTop}>
              <Link to="/education">View All Certifications</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section-container">
        <div className="bg-primary/10 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            If you're looking for a dedicated professional with strong analytical skills and a creative mindset, 
            feel free to reach out to discuss potential opportunities.
          </p>
          <Button asChild size="lg" onClick={scrollToTop}>
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
