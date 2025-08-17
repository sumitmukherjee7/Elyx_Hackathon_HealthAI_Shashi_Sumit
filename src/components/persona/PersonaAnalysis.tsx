import { 
  MessageCircle, 
  Target, 
  AlertTriangle, 
  Settings, 
  TrendingUp, 
  Calendar,
  Phone,
  Mail,
  MessageSquare,
  Video,
  Clock,
  Globe,
  CheckCircle,
  XCircle,
  Minus
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { PersonaAnalysis as PersonaAnalysisType } from '@/types/healthcare';

interface PersonaAnalysisProps {
  analysis: PersonaAnalysisType;
}

export function PersonaAnalysis({ analysis }: PersonaAnalysisProps) {
  const getComplianceColor = (level: string) => {
    switch (level) {
      case 'high': return 'text-medical-green bg-medical-green/10';
      case 'medium': return 'text-medical-yellow bg-medical-yellow/10';
      case 'low': return 'text-medical-red bg-medical-red/10';
      default: return 'text-muted-foreground bg-muted/10';
    }
  };

  const getComplianceIcon = (level: string) => {
    switch (level) {
      case 'high': return <CheckCircle className="h-4 w-4" />;
      case 'medium': return <Minus className="h-4 w-4" />;
      case 'low': return <XCircle className="h-4 w-4" />;
      default: return <Minus className="h-4 w-4" />;
    }
  };

  const getContactMethodIcon = (method: string) => {
    switch (method) {
      case 'phone': return <Phone className="h-4 w-4" />;
      case 'email': return <Mail className="h-4 w-4" />;
      case 'chat': return <MessageSquare className="h-4 w-4" />;
      case 'video': return <Video className="h-4 w-4" />;
      default: return <MessageCircle className="h-4 w-4" />;
    }
  };

  const compliancePercentage = analysis.complianceLevel === 'high' ? 90 : 
                               analysis.complianceLevel === 'medium' ? 70 : 40;

  return (
    <div className="space-y-6">
      {/* Communication Style */}
      <Card className="medical-card animate-fade-in">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageCircle className="h-5 w-5 text-medical-blue" />
            <span>Communication Profile</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm mb-2">Communication Style</h4>
            <div className="bg-gradient-primary/10 p-4 rounded-lg border border-primary/20">
              <p className="text-sm">{analysis.communicationStyle}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="flex justify-center mb-2">
                {getContactMethodIcon(analysis.preferences.contactMethod)}
              </div>
              <p className="font-medium text-sm">Preferred Contact</p>
              <p className="text-xs text-muted-foreground capitalize">{analysis.preferences.contactMethod}</p>
            </div>
            
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="flex justify-center mb-2">
                <Clock className="h-4 w-4" />
              </div>
              <p className="font-medium text-sm">Best Time</p>
              <p className="text-xs text-muted-foreground">{analysis.preferences.timePreference}</p>
            </div>
            
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="flex justify-center mb-2">
                <Globe className="h-4 w-4" />
              </div>
              <p className="font-medium text-sm">Language</p>
              <p className="text-xs text-muted-foreground">{analysis.preferences.language}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Health Goals & Challenges */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="medical-card animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-medical-green" />
              <span>Health Goals</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {analysis.healthGoals.map((goal, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-success/10 rounded-lg border border-success/20">
                  <CheckCircle className="h-4 w-4 text-medical-green mt-0.5 shrink-0" />
                  <p className="text-sm">{goal}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="medical-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-medical-orange" />
              <span>Current Challenges</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {analysis.challenges.map((challenge, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-warning/10 rounded-lg border border-warning/20">
                  <AlertTriangle className="h-4 w-4 text-medical-orange mt-0.5 shrink-0" />
                  <p className="text-sm">{challenge}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Risk Factors & Compliance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="medical-card animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-medical-red" />
              <span>Risk Factors</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {analysis.riskFactors.map((risk, index) => (
                <Badge key={index} variant="outline" className="block w-fit status-error text-xs">
                  {risk}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="medical-card animate-scale-in" style={{ animationDelay: '0.1s' }}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-medical-purple" />
              <span>Compliance Assessment</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {getComplianceIcon(analysis.complianceLevel)}
                  <span className="font-medium">Compliance Level</span>
                </div>
                <Badge className={getComplianceColor(analysis.complianceLevel)}>
                  {analysis.complianceLevel.toUpperCase()}
                </Badge>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Overall Adherence</span>
                  <span>{compliancePercentage}%</span>
                </div>
                <Progress value={compliancePercentage} className="h-2" />
              </div>
              
              <div className="text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-3 w-3" />
                  <span>Last assessed: {new Date(analysis.lastAnalysisDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Insights Summary */}
      <Card className="medical-card animate-fade-in bg-gradient-background">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="h-5 w-5 text-medical-purple" />
            <span>Persona Insights</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-card/50 rounded-lg border">
              <TrendingUp className="h-8 w-8 text-medical-green mx-auto mb-2" />
              <h4 className="font-semibold text-sm">Proactive</h4>
              <p className="text-xs text-muted-foreground">Takes initiative in health management</p>
            </div>
            
            <div className="text-center p-4 bg-card/50 rounded-lg border">
              <MessageCircle className="h-8 w-8 text-medical-blue mx-auto mb-2" />
              <h4 className="font-semibold text-sm">Data-Driven</h4>
              <p className="text-xs text-muted-foreground">Prefers evidence-based approaches</p>
            </div>
            
            <div className="text-center p-4 bg-card/50 rounded-lg border">
              <Target className="h-8 w-8 text-medical-purple mx-auto mb-2" />
              <h4 className="font-semibold text-sm">Goal-Oriented</h4>
              <p className="text-xs text-muted-foreground">Focused on specific health outcomes</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}