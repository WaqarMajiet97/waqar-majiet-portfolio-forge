
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="bg-gradient-to-br from-accent/50 to-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="animate-fade-in mt-8 lg:mt-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
              Welcome to <span className="text-primary">Waqar Majiet's</span> Portfolio
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              A dedicated and results-driven individual with strong analytical skills and a creative mindset,
              focused on developing professional growth and driving impactful results.
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
          
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 max-w-xs mx-auto lg:max-w-none">
              <div className="p-4">
                <AspectRatio ratio={isMobile ? 1 : 3/4} className="overflow-hidden rounded-md">
                  <img 
                    src="/lovable-uploads/da097ec3-b50d-4ad1-8a91-3dc9e8a0ddf3.png" 
                    alt="Waqar Majiet" 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <div className="pt-4 text-center">
                  <h2 className="text-2xl font-semibold text-gray-800">Waqar Majiet</h2>
                  <p className="mt-2 text-gray-600">Technology Professional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
