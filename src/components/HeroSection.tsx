
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set visible after a short delay to trigger animations
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-gradient-to-br from-accent/50 to-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className={`w-full lg:w-2/3 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
              Welcome to <span className="text-primary hover-scale inline-block">Waqar Majiet's</span> Portfolio
            </h1>
            <p className={`text-lg text-gray-600 mb-8 max-w-2xl ${isVisible ? 'animate-fade-in-delay-1' : 'opacity-0'}`}>
              Cloud Associate at Capaciti
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 ${isVisible ? 'animate-fade-in-delay-2' : 'opacity-0'}`}>
              <Button asChild size="lg" className="hover-scale group">
                <Link to="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover-scale">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className={`w-full lg:w-1/3 flex justify-center lg:justify-end mt-8 lg:mt-0 ${isVisible ? 'animate-fade-in-delay-3' : 'opacity-0'}`}>
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl transition-transform hover:scale-105 duration-500">
                <img 
                  src="/lovable-uploads/91d0b0ba-b4e8-43fc-98bf-6c8a8ddc08af.png" 
                  alt="Waqar Majiet" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 rounded-full ring-4 ring-primary/10 ring-offset-2 animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
