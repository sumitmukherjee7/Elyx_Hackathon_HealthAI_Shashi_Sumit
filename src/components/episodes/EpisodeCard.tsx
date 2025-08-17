import { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  AlertCircle, 
  CheckCircle2, 
  TrendingUp,
  ChevronDown,
  ChevronRight,
  Stethoscope,
  Activity,
  FileText
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { HealthcareEpisode } from '@/types/healthcare';

interface EpisodeCardProps {
  episode: HealthcareEpisode;
  index: number;
}

export function EpisodeCard({ episode, index }: EpisodeCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-medical-red text-white';
      case 'high': return 'bg-medical-orange text-white';
      case 'medium': return 'bg-medical-yellow text-white';
      case 'low': return 'bg-medical-green text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved': return 'status-success';
      case 'in-progress': return 'status-warning';
      case 'escalated': return 'status-error';
      default: return 'status-info';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'medication': return <Stethoscope className="h-4 w-4" />;
      case 'therapy': return <Activity className="h-4 w-4" />;
      case 'diagnostic': return <FileText className="h-4 w-4" />;
      case 'lifestyle': return <TrendingUp className="h-4 w-4" />;
      case 'emergency': return <AlertCircle className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const formatTimeValue = (time: { value: number; unit: string }) => {
    if (time.value === 0) return 'Immediate';
    return `${time.value} ${time.unit}`;
  };

  return (
    <Card className="medical-card hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer">
            <div className="flex items-start justify-between">
              <div className="flex-1 space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2">
                    {getCategoryIcon(episode.category)}
                    <CardTitle className="text-lg">{episode.title}</CardTitle>
                  </div>
                  <Button variant="ghost" size="sm" className="p-1">
                    {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                  </Button>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{episode.dateRange.start} - {episode.dateRange.end}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{episode.expertConsulted}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Badge className={getSeverityColor(episode.severity)}>
                    {episode.severity.toUpperCase()}
                  </Badge>
                  <Badge className={getStatusColor(episode.status)}>
                    {episode.status === 'resolved' && <CheckCircle2 className="h-3 w-3 mr-1" />}
                    {episode.status === 'in-progress' && <Clock className="h-3 w-3 mr-1" />}
                    {episode.status === 'escalated' && <AlertCircle className="h-3 w-3 mr-1" />}
                    {episode.status.replace('-', ' ').toUpperCase()}
                  </Badge>
                  <Badge variant="outline" className="capitalize">
                    {episode.category}
                  </Badge>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2">
                  {episode.description}
                </p>
              </div>
            </div>
          </CardHeader>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <CardContent className="animate-slide-up">
            <div className="space-y-6">
              {/* Timeline Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-success p-4 rounded-lg text-white">
                  <div className="flex items-center space-x-2 mb-1">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-medium">Response Time</span>
                  </div>
                  <p className="text-lg font-bold">{formatTimeValue(episode.responseTime)}</p>
                </div>
                <div className="bg-gradient-primary p-4 rounded-lg text-white">
                  <div className="flex items-center space-x-2 mb-1">
                    <CheckCircle2 className="h-4 w-4" />
                    <span className="text-sm font-medium">Resolution Time</span>
                  </div>
                  <p className="text-lg font-bold">{formatTimeValue(episode.resolutionTime)}</p>
                </div>
              </div>

              {/* Friction Points */}
              {episode.frictionPoints.length > 0 && (
                <div>
                  <h4 className="font-semibold text-sm mb-3 flex items-center space-x-2">
                    <AlertCircle className="h-4 w-4 text-medical-orange" />
                    <span>Friction Points</span>
                  </h4>
                  <div className="space-y-2">
                    {episode.frictionPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start space-x-2 p-3 bg-muted/50 rounded-lg">
                        <div className="w-2 h-2 bg-medical-orange rounded-full mt-2 shrink-0" />
                        <p className="text-sm">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Before/After States */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-medical-red">Before State</h4>
                  <div className="bg-destructive/10 p-3 rounded-lg border border-destructive/20">
                    <p className="text-sm">{episode.beforeState}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-medical-green">After State</h4>
                  <div className="bg-success/10 p-3 rounded-lg border border-success/20">
                    <p className="text-sm">{episode.afterState}</p>
                  </div>
                </div>
              </div>

              {/* Decisions Made */}
              {episode.decisions.length > 0 && (
                <div>
                  <h4 className="font-semibold text-sm mb-3 flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-medical-purple" />
                    <span>Key Decisions</span>
                  </h4>
                  <div className="space-y-3">
                    {episode.decisions.map((decision) => (
                      <div key={decision.id} className="p-4 bg-card border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="capitalize">
                            {decision.type.replace('_', ' ')}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {new Date(decision.dateDecided).toLocaleDateString()} by {decision.decidedBy}
                          </span>
                        </div>
                        <h5 className="font-medium text-sm mb-1">{decision.description}</h5>
                        <p className="text-xs text-muted-foreground mb-2">{decision.reasoning}</p>
                        {decision.outcome && (
                          <p className="text-xs bg-success/10 text-success p-2 rounded">
                            <strong>Outcome:</strong> {decision.outcome}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Metrics */}
              {episode.metrics && (
                <div>
                  <h4 className="font-semibold text-sm mb-3">Resource Utilization</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {episode.metrics.doctorHours && (
                      <div className="text-center p-3 bg-medical-blue/10 rounded-lg">
                        <p className="text-lg font-bold text-medical-blue">{episode.metrics.doctorHours}h</p>
                        <p className="text-xs text-muted-foreground">Doctor Time</p>
                      </div>
                    )}
                    {episode.metrics.coachHours && (
                      <div className="text-center p-3 bg-medical-green/10 rounded-lg">
                        <p className="text-lg font-bold text-medical-green">{episode.metrics.coachHours}h</p>
                        <p className="text-xs text-muted-foreground">Coach Time</p>
                      </div>
                    )}
                    {episode.metrics.consultations && (
                      <div className="text-center p-3 bg-medical-purple/10 rounded-lg">
                        <p className="text-lg font-bold text-medical-purple">{episode.metrics.consultations}</p>
                        <p className="text-xs text-muted-foreground">Consultations</p>
                      </div>
                    )}
                    {episode.metrics.tests && (
                      <div className="text-center p-3 bg-medical-orange/10 rounded-lg">
                        <p className="text-lg font-bold text-medical-orange">{episode.metrics.tests}</p>
                        <p className="text-xs text-muted-foreground">Tests</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Final Outcome */}
              <div>
                <h4 className="font-semibold text-sm mb-2 text-medical-green">Final Outcome</h4>
                <div className="bg-success/10 p-4 rounded-lg border border-success/20">
                  <p className="text-sm">{episode.finalOutcome}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}