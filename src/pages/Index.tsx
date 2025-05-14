
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, GraduationCap, Code, User, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import CertificationCard from '@/components/CertificationCard';
import { useEffect, useState } from 'react';

const Index = () => {
  const [isVisible, setIsVisible] = useState({
    navigation: false,
    certifications: false,
    cta: false
  });
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate when sections should become visible based on scroll position
      setIsVisible({
        navigation: scrollPosition > 100,
        certifications: scrollPosition > windowHeight * 0.5,
        cta: scrollPosition > windowHeight * 0.8
      });
    };
    
    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Layout>
      <HeroSection />
      
      {/* Quick Navigation Section */}
      <section className="section-container">
        <h2 className={`text-3xl font-bold text-center mb-12 ${isVisible.navigation ? 'animate-fade-in' : ''}`}>Explore My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: User, title: "About Me", description: "Learn more about my skills, experience and background", link: "/about", image: "/lovable-uploads/e91d8362-16c1-4ff4-86c4-f54edb440f07.png" },
            { icon: Briefcase, title: "Projects & Achievements", description: "Explore my Projects and Achievements", link: "/projects", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
            { icon: GraduationCap, title: "Education", description: "My academic journey and qualifications", link: "/education", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
            { icon: Mail, title: "Contact", description: "Get in touch with me", link: "/contact", image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
          ].map((item, index) => (
            <Card key={index} className={`hover-lift h-full overflow-hidden transition-all duration-300 ${isVisible.navigation ? `animate-fade-in-delay-${index+1}` : 'opacity-0'}`}>
              <div className="h-32 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                />
              </div>
              <CardContent className="pt-6 text-center">
                <div className="mb-4 bg-primary/10 p-3 rounded-full inline-flex transition-all duration-300 hover:bg-primary/20">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                <Button asChild variant="outline" onClick={scrollToTop} className="hover-scale">
                  <Link to={item.link}>View More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Featured Certifications */}
      <section className="bg-muted py-16 relative" style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}>
        <div className="absolute inset-0 bg-black/50 transition-opacity duration-700"></div>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 relative z-10 ${isVisible.certifications ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Featured Certifications and Courses</h2>
            <p className="text-gray-200 mt-2">Some of my recent professional certifications and courses</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className={isVisible.certifications ? `animate-fade-in-delay-${index+1}` : 'opacity-0'}>
                <CertificationCard
                  title={cert.title}
                  issuer={cert.issuer}
                  date={cert.date}
                  skills={cert.skills}
                />
              </div>
            ))}
          </div>
          
          <div className={`text-center mt-10 ${isVisible.certifications ? 'animate-fade-in-delay-3' : 'opacity-0'}`}>
            <Button asChild onClick={scrollToTop} className="hover-scale">
              <Link to="/education">View All Certifications</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section-container">
        <div 
          className={`bg-primary/10 rounded-xl p-8 md:p-12 text-center relative overflow-hidden ${isVisible.cta ? 'animate-fade-in' : 'opacity-0'}`}
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1587560699334-bea93391dcef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-primary/70 rounded-xl transition-all duration-700 hover:bg-primary/80"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 text-white">Interested in Working Together?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
              Looking for an IT professional? Feel free to reach out to discuss potential opportunities.
            </p>
            <Button 
              asChild 
              size="lg" 
              onClick={scrollToTop} 
              variant="secondary"
              className="hover-scale transition-transform duration-300 shadow-lg"
            >
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
