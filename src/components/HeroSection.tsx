
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="bg-gradient-to-br from-accent/50 to-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="animate-fade-in w-full lg:w-2/3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
              Welcome to <span className="text-primary">Waqar Majiet's</span> Portfolio
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Cloud Associate
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link to="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl">
                <img 
                  src="/lovable-uploads/91d0b0ba-b4e8-43fc-98bf-6c8a8ddc08af.png" 
                  alt="Waqar Majiet" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 rounded-full ring-4 ring-primary/10 ring-offset-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
