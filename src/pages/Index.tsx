
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
      skills: ["Cybersecurity"]
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
            { icon: User, title: "About Me", description: "Learn more about my skills, experience and background", link: "/about", image: "/lovable-uploads/e91d8362-16c1-4ff4-86c4-f54edb440f07.png" },
            { icon: Briefcase, title: "Projects & Achievements", description: "Explore my Projects and Achievements", link: "/projects", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
            { icon: GraduationCap, title: "Education", description: "My academic journey and qualifications", link: "/education", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
            { icon: Mail, title: "Contact", description: "Get in touch with me", link: "/contact", image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
          ].map((item, index) => (
            <Card key={index} className="card-hover h-full overflow-hidden">
              <div className="h-32 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
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
      <section className="bg-muted py-16" style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative"
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Featured Certifications and Courses</h2>
            <p className="text-gray-200 mt-2">Some of my recent professional certifications and courses</p>
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
        <div className="bg-primary/10 rounded-xl p-8 md:p-12 text-center" style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1587560699334-bea93391dcef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative"
        }}>
          <div className="absolute inset-0 bg-primary/70 rounded-xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 text-white">Interested in Working Together?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Looking for an IT professional? Feel free to reach out to discuss potential opportunities.
            </p>
            <Button asChild size="lg" onClick={scrollToTop} variant="secondary">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
