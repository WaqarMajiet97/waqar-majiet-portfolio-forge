
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

interface EducationCardProps {
  institution: string;
  degree: string;
  period: string;
  subjects?: Array<{ name: string; percentage?: string }>;
  completed?: boolean;
  className?: string;
  documentName?: string;
}

const EducationCard = ({ 
  institution, 
  degree, 
  period, 
  subjects, 
  completed = true,
  className,
  documentName
}: EducationCardProps) => {
  
  const openDocument = (docName: string) => {
    window.open(`/documents/${docName}.pdf`, '_blank');
  };
  
  return (
    <Card className={cn("card-hover h-full", className)}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{institution}</CardTitle>
          {completed === false && (
            <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-300">
              Incomplete
            </Badge>
          )}
        </div>
        <CardDescription className="text-sm">{degree} | {period}</CardDescription>
      </CardHeader>
      <CardContent>
        {subjects && subjects.length > 0 && (
          <div className="space-y-2">
            {subjects.map((subject, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span>{subject.name}</span>
                {subject.percentage && <span className="font-medium">{subject.percentage}</span>}
              </div>
            ))}
          </div>
        )}
        
        {documentName && (
          <Button 
            variant="outline" 
            size="sm" 
            className="mt-4 w-full"
            onClick={() => openDocument(documentName)}
          >
            <FileText className="mr-2 h-4 w-4" />
            View Certificate
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default EducationCard;
