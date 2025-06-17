
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  skills?: string[];
  className?: string;
  linkedinUrl?: string;
}

const CertificationCard = ({ title, issuer, date, skills, className, linkedinUrl }: CertificationCardProps) => {
  return (
    <Card className={cn("card-hover h-full flex flex-col", className)}>
      <CardHeader className="flex-shrink-0">
        <CardTitle className="text-lg min-h-[3.5rem] flex items-center">{title}</CardTitle>
        <CardDescription className="text-sm">{issuer}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-4">Issued {date}</p>
          {skills && skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4 min-h-[2rem]">
              {skills.map((skill, index) => (
                <Badge key={index} variant="outline">{skill}</Badge>
              ))}
            </div>
          )}
        </div>
        
        {linkedinUrl && (
          <Button 
            variant="default" 
            size="sm" 
            className="w-full mt-auto"
            onClick={() => window.open(linkedinUrl, '_blank', 'noopener,noreferrer')}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View Certificate
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default CertificationCard;
