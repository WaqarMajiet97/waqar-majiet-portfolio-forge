
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects and Achievements', path: '/projects' },
    { name: 'Education', path: '/education' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={cn(
      "bg-background/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 transition-all duration-300",
      scrolled ? "shadow-lg bg-background/90" : ""
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="group text-primary font-heading font-bold text-xl hover:opacity-80 transition-all duration-300">
              <span className="relative inline-block">
                <span className="hover-scale flex items-center gap-2">
                  <Sparkles className="h-4 w-4 animate-wiggle" />
                  Waqar Majiet
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></div>
              </span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group overflow-hidden",
                  currentPath === item.path 
                    ? "text-primary font-bold" 
                    : "text-foreground hover:text-primary"
                )}
              >
                <span className="relative z-10">{item.name}</span>
                <div className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary transition-transform duration-300 origin-left",
                  currentPath === item.path 
                    ? "scale-x-100" 
                    : "scale-x-0 group-hover:scale-x-100"
                )}></div>
                {currentPath !== item.path && (
                  <div className="absolute inset-0 bg-primary/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-md"></div>
                )}
              </Link>
            ))}
            
            {/* Theme switcher */}
            <div className="ml-4">
              <ThemeSwitcher />
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <ThemeSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              className="text-foreground ml-2 hover-scale group"
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative">
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 animate-bounce-in" />
                ) : (
                  <Menu className="h-6 w-6 group-hover:animate-wiggle" />
                )}
              </div>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg animate-fade-in border-t border-border/50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 relative group",
                  currentPath === item.path 
                    ? "text-primary bg-accent/50 font-bold" 
                    : "text-foreground hover:text-primary hover:bg-accent/50",
                  `animate-fade-in-delay-${index+1}`
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="flex items-center gap-2">
                  {currentPath === item.path && <Sparkles className="h-4 w-4 animate-wiggle" />}
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
