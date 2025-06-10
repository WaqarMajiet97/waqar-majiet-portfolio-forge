
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Code, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Set visible after a short delay to trigger animations
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent/50 via-background to-primary/20 py-20 min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full animate-float blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent/20 morphing-shape animate-rotate-slow"></div>
        
        {/* Interactive floating particles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Parallax cursor effect */}
      {!isMobile && (
        <div 
          className="absolute w-6 h-6 bg-primary/20 rounded-full pointer-events-none transition-all duration-300 ease-out blur-sm"
          style={{
            left: mousePosition.x / 50,
            top: mousePosition.y / 50,
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className={`w-full lg:w-2/3 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* Dynamic title with gradient text */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-primary animate-wiggle" />
                <span className="text-sm font-medium text-primary tracking-wider uppercase">Portfolio</span>
                <Sparkles className="h-6 w-6 text-primary animate-wiggle" style={{animationDelay: '0.5s'}} />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Welcome to{' '}
                <span className="relative inline-block">
                  <span className="text-gradient hover-scale">Waqar Majiet's</span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-lg opacity-30 animate-pulse-slow"></div>
                </span>
                {' '}Portfolio
              </h1>
            </div>
            
            <div className={`relative ${isVisible ? 'animate-fade-in-delay-1' : 'opacity-0'}`}>
              <p className="text-lg text-foreground mb-2 flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Cloud Associate at Capaciti
              </p>
              <p className="text-base text-muted-foreground mb-8 max-w-2xl flex items-center gap-2">
                <Zap className="h-4 w-4 text-secondary" />
                Passionate about cloud technology, innovation, and creating impactful solutions
              </p>
            </div>
            
            <div className={`flex flex-col sm:flex-row gap-4 ${isVisible ? 'animate-fade-in-delay-2' : 'opacity-0'}`}>
              <Button asChild size="lg" className="hover-glow group perspective-card relative overflow-hidden">
                <Link to="/about">
                  <span className="relative z-10 flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover-scale glass-effect">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          
          <div className={`w-full lg:w-1/3 flex justify-center lg:justify-end mt-8 lg:mt-0 ${isVisible ? 'animate-fade-in-delay-3' : 'opacity-0'}`}>
            <div className="relative perspective-card">
              <div className="card-inner">
                <div className="w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl relative group">
                  <img 
                    src="/lovable-uploads/91d0b0ba-b4e8-43fc-98bf-6c8a8ddc08af.png" 
                    alt="Waqar Majiet" 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Floating elements around image */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/80 rounded-full animate-bounce-in shadow-lg"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary/80 rounded-full animate-bounce-in shadow-lg" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-accent/80 rounded-full animate-bounce-in shadow-lg" style={{animationDelay: '1s'}}></div>
              </div>
              
              {/* Glowing ring effect */}
              <div className="absolute inset-0 rounded-full ring-4 ring-primary/10 ring-offset-2 animate-pulse-slow"></div>
              <div className="absolute inset-0 rounded-full ring-2 ring-secondary/20 ring-offset-4 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
