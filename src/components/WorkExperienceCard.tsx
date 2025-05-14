
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

interface WorkExperienceCardProps {
  company: string;
  position: string;
  period: string;
  description?: string;
}

const WorkExperienceCard = ({ company, position, period, description }: WorkExperienceCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className="bg-primary/5 p-2 rounded-full">
            <Briefcase className="h-4 w-4 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-base mb-1">{position}</h4>
            <p className="text-primary font-medium text-sm mb-1">{company}</p>
            <p className="text-muted-foreground text-xs">{period}</p>
            {description && (
              <p className="text-muted-foreground text-sm mt-2">{description}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkExperienceCard;
