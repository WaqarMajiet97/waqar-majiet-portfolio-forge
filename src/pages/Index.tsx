import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, GraduationCap, User, Mail, Sparkles, Zap, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import CertificationCard from '@/components/CertificationCard';
import { useEffect, useState } from 'react';
import educationCardImage from '@/assets/education-card-image.jpg';

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

  return (
    <Layout>
      <HeroSection />
      
      {/* Quick Navigation Section with enhanced animations */}
      <section className="section-container relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary animate-wiggle" />
              <h2 className={`text-3xl font-bold text-gradient ${isVisible.navigation ? 'animate-bounce-in' : ''}`}>
                Explore My Portfolio
              </h2>
              <Sparkles className="h-6 w-6 text-primary animate-wiggle" style={{animationDelay: '0.5s'}} />
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover my journey through technology, innovation, and professional growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: User, 
                title: "About Me", 
                description: "Learn more about my skills, experience and background", 
                link: "/about", 
                image: "/lovable-uploads/e91d8362-16c1-4ff4-86c4-f54edb440f07.png",
                color: "from-blue-500/20 to-purple-500/20"
              },
              { 
                icon: Briefcase, 
                title: "Projects & Achievements", 
                description: "Explore my Projects and Achievements", 
                link: "/projects", 
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                color: "from-green-500/20 to-teal-500/20"
              },
              { 
                icon: GraduationCap, 
                title: "Education", 
                description: "My academic journey and qualifications", 
                link: "/education", 
                image: educationCardImage,
                color: "from-orange-500/20 to-red-500/20"
              },
              { 
                icon: Mail, 
                title: "Contact", 
                description: "Get in touch with me", 
                link: "/contact", 
                image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                color: "from-pink-500/20 to-rose-500/20"
              }
            ].map((item, index) => (
              <Card key={index} className={`group hover-lift h-full overflow-hidden transition-all duration-500 perspective-card relative ${isVisible.navigation ? `animate-bounce-in` : 'opacity-0'}`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="card-inner">
                  <div className="h-32 overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125" 
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                  </div>
                  <CardContent className="pt-6 text-center relative">
                    <div className="mb-4 bg-primary/10 p-3 rounded-full inline-flex transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 group-hover:animate-glow">
                      <item.icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                    <Link to={item.link}>
                      <Button className="w-full text-center">
                        View More
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Certifications with parallax effect */}
      <section className="relative py-16 parallax-bg" style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-white/5 rounded-full animate-float blur-xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 relative z-10 ${isVisible.certifications ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Rocket className="h-6 w-6 text-white animate-wiggle" />
              <h2 className="text-3xl font-bold text-white">Featured Certifications and Courses</h2>
              <Rocket className="h-6 w-6 text-white animate-wiggle" style={{animationDelay: '0.7s'}} />
            </div>
            <p className="text-gray-200 mt-2">Some of my recent professional certifications and courses</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className={`perspective-card h-full ${isVisible.certifications ? `animate-bounce-in` : 'opacity-0'}`} style={{animationDelay: `${index * 0.2}s`}}>
                <div className="card-inner h-full">
                  <CertificationCard
                    title={cert.title}
                    issuer={cert.issuer}
                    date={cert.date}
                    skills={cert.skills}
                    className="glass-effect hover-glow h-full"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className={`text-center mt-10 ${isVisible.certifications ? 'animate-fade-in-delay-3' : 'opacity-0'}`}>
            <Link to="/education">
              <Button className="hover-glow interactive-gradient text-white border-none">
                <span className="flex items-center gap-2">
                  View All Certifications
                  <Sparkles className="h-4 w-4" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action with enhanced styling */}
      <section className="section-container">
        <div 
          className={`relative rounded-xl p-8 md:p-12 text-center overflow-hidden ${isVisible.cta ? 'animate-bounce-in' : 'opacity-0'}`}
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1587560699334-bea93391dcef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-secondary/80 rounded-xl"></div>
          
          {/* Floating elements */}
          <div className="absolute inset-0 overflow-hidden rounded-xl">
            <div className="absolute top-8 left-8 w-4 h-4 bg-white/30 rounded-full animate-float"></div>
            <div className="absolute bottom-8 right-8 w-6 h-6 bg-white/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white/40 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-white animate-wiggle" />
              <h2 className="text-3xl font-bold text-white">Interested in Working Together?</h2>
              <Zap className="h-6 w-6 text-white animate-wiggle" style={{animationDelay: '0.3s'}} />
            </div>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
              Looking for an IT professional? Feel free to reach out to discuss potential opportunities.
            </p>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="secondary"
                className="hover-glow group glass-effect border-white/20"
              >
                <span className="flex items-center gap-2">
                  Get In Touch
                  <Rocket className="h-4 w-4 transition-transform group-hover:rotate-12" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
