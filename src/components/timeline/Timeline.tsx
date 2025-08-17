import { Calendar, Clock, Stethoscope, TrendingUp, FileText, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TimelineEvent } from '@/types/healthcare';

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  const getEventIcon = (type: string) => {
    switch (type) {
      case 'consultation': return <Stethoscope className="h-4 w-4" />;
      case 'medication_change': return <FileText className="h-4 w-4" />;
      case 'test_result': return <FileText className="h-4 w-4" />;
      case 'symptom': return <AlertCircle className="h-4 w-4" />;
      case 'improvement': return <CheckCircle2 className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'consultation': return 'text-medical-blue bg-medical-blue/10';
      case 'medication_change': return 'text-medical-purple bg-medical-purple/10';
      case 'test_result': return 'text-medical-orange bg-medical-orange/10';
      case 'symptom': return 'text-medical-red bg-medical-red/10';
      case 'improvement': return 'text-medical-green bg-medical-green/10';
      default: return 'text-muted-foreground bg-muted/10';
    }
  };

  const getSeverityBadge = (severity?: string) => {
    if (!severity) return null;
    
    const severityColors = {
      low: 'bg-medical-green text-white',
      medium: 'bg-medical-yellow text-white',
      high: 'bg-medical-orange text-white'
    };

    return (
      <Badge className={severityColors[severity as keyof typeof severityColors] || 'bg-muted'}>
        {severity.toUpperCase()}
      </Badge>
    );
  };

  const sortedEvents = [...events].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <Card className="medical-card">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-medical-blue" />
          <span>Health Timeline</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>
          
          <div className="space-y-6">
            {sortedEvents.map((event, index) => (
              <div key={event.id} className="relative flex items-start space-x-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Timeline dot */}
                <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 border-background ${getEventColor(event.type)}`}>
                  {getEventIcon(event.type)}
                </div>
                
                {/* Event content */}
                <div className="flex-1 min-w-0 pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-sm font-semibold">{event.title}</h3>
                      {getSeverityBadge(event.severity)}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
                  
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs capitalize">
                      {event.type.replace('_', ' ')}
                    </Badge>
                    {event.relatedEpisodeId && (
                      <Badge variant="secondary" className="text-xs">
                        Episode #{event.relatedEpisodeId.split('_')[1]}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}