
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface WorkExperienceCardProps {
  company: string;
  position: string;
  period: string;
  description?: string;
}

const WorkExperienceCard = ({ company, position, period, description }: WorkExperienceCardProps) => {
  // Function to get a relevant image based on company name
  const getCompanyImage = (companyName: string) => {
    switch (companyName) {
      case "Amazon Development Centre":
        return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
      case "Liberty Life":
      case "Old Mutual":
        return "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
      default:
        return "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="md:flex">
          <div className="md:w-1/4 bg-primary/5 hidden md:block">
            <AspectRatio ratio={1/1} className="h-full">
              <img 
                src={getCompanyImage(company)} 
                alt={company} 
                className="object-cover w-full h-full opacity-80"
              />
            </AspectRatio>
          </div>
          <div className="p-5 md:w-3/4">
            <div className="flex items-start gap-4">
              <div className="bg-primary/5 p-2 rounded-full">
                <Briefcase className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-base mb-1">{position}</h4>
                <p className="text-primary font-medium text-sm mb-1">{company}</p>
                <p className="text-gray-500 text-xs">{period}</p>
                {description && (
                  <p className="text-gray-600 text-sm mt-2">{description}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkExperienceCard;
