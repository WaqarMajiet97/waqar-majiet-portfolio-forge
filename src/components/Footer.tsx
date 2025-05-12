
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeProvider';

const Footer = () => {
  const { theme } = useTheme();
  
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="font-heading font-bold text-xl text-primary">Waqar Majiet</h2>
            <p className="text-sm text-muted-foreground mt-2">Cloud Associate: Capaciti</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-12">
            <div className="mb-6 md:mb-0">
              <h3 className="font-medium text-foreground mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-muted-foreground text-sm hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-muted-foreground text-sm hover:text-primary transition-colors">About</Link></li>
                <li><Link to="/projects" className="text-muted-foreground text-sm hover:text-primary transition-colors">Projects and Achievements</Link></li>
                <li><Link to="/education" className="text-muted-foreground text-sm hover:text-primary transition-colors">Education</Link></li>
                <li><Link to="/contact" className="text-muted-foreground text-sm hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-foreground mb-2">Connect</h3>
              <div className="flex space-x-4 mt-2">
                <a href="https://github.com/WaqarMajiet97" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/waqar-majiet-915496269/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:majietwaqar97@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Waqar Majiet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
