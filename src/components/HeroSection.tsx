
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-accent/50 to-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="animate-fade-in">
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
          <div className="hidden lg:block mt-12 lg:mt-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
              <div className="aspect-w-3 aspect-h-4 bg-gray-100 flex items-center justify-center">
                <div className="p-12 flex items-center justify-center bg-primary/10 h-full w-full">
                  <div className="text-center">
                    <div className="h-36 w-36 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-5xl font-bold text-primary">WM</span>
                    </div>
                    <h2 className="mt-6 text-2xl font-semibold text-gray-800">Waqar Majiet</h2>
                    <p className="mt-2 text-gray-600">Technology Professional</p>
                  </div>
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
