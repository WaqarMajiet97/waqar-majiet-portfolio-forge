
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  skills?: string[];
  className?: string;
}

const CertificationCard = ({ title, issuer, date, skills, className }: CertificationCardProps) => {
  return (
    <Card className={cn("card-hover h-full", className)}>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-sm">{issuer}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">Issued {date}</p>
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="outline">{skill}</Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CertificationCard;
