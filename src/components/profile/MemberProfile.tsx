import { useState } from 'react';
import { 
  User, 
  Phone, 
  Mail, 
  Heart, 
  Pill, 
  AlertTriangle,
  Calendar,
  Shield,
  FileText,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { MemberProfile as MemberProfileType } from '@/types/healthcare';
import rohanProfile from '@/assets/rohan-profile.jpg';

interface MemberProfileProps {
  member: MemberProfileType;
}

export function MemberProfile({ member }: MemberProfileProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showProfileDialog, setShowProfileDialog] = useState(false);

  return (
    <Card className="medical-card animate-fade-in">
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-4">
          <Dialog open={showProfileDialog} onOpenChange={setShowProfileDialog}>
            <DialogTrigger asChild>
              <div className="relative cursor-pointer group">
                <img
                  src={rohanProfile}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary transition-colors hover-lift"
                />
                <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs font-medium">View</span>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center space-x-3">
                  <img
                    src={rohanProfile}
                    alt={member.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">Healthcare Member</p>
                  </div>
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Age:</span>
                    <p className="font-medium">{member.age} years</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Member ID:</span>
                    <p className="font-medium font-mono">{member.id}</p>
                  </div>
                </div>
                
                <div>
                  <span className="text-muted-foreground text-sm">Primary Physician:</span>
                  <p className="font-medium">{member.primaryPhysician}</p>
                </div>

                <div>
                  <span className="text-muted-foreground text-sm">Emergency Contact:</span>
                  <div className="bg-muted/50 p-3 rounded-md">
                    <p className="font-medium">{member.emergencyContact.name}</p>
                    <p className="text-sm text-muted-foreground">{member.emergencyContact.relationship}</p>
                    <p className="text-sm font-mono">{member.emergencyContact.phone}</p>
                  </div>
                </div>

                <div>
                  <span className="text-muted-foreground text-sm">Insurance:</span>
                  <div className="bg-muted/50 p-3 rounded-md">
                    <p className="font-medium">{member.insuranceInfo.provider}</p>
                    <p className="text-sm font-mono">{member.insuranceInfo.policyNumber}</p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-bold">{member.name}</h2>
              <Badge variant="secondary" className="text-xs">
                ID: {member.id}
              </Badge>
            </div>
            <p className="text-muted-foreground">Age: {member.age} years</p>
            <div className="flex items-center space-x-2 mt-1">
              <User className="h-4 w-4 text-medical-blue" />
              <span className="text-sm text-muted-foreground">Primary: {member.primaryPhysician}</span>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="shrink-0"
          >
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Medical History */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-medical-red" />
                <h3 className="font-semibold text-sm">Medical History</h3>
              </div>
              <div className="space-y-2">
                {member.medicalHistory.map((condition, index) => (
                  <Badge key={index} variant="outline" className="text-xs block w-fit">
                    {condition}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Current Medications */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Pill className="h-4 w-4 text-medical-blue" />
                <h3 className="font-semibold text-sm">Current Medications</h3>
              </div>
              <div className="space-y-2">
                {member.currentMedications.map((medication, index) => (
                  <div key={index} className="bg-muted/50 p-2 rounded text-xs">
                    {medication}
                  </div>
                ))}
              </div>
            </div>

            {/* Allergies */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-4 w-4 text-medical-orange" />
                <h3 className="font-semibold text-sm">Allergies</h3>
              </div>
              <div className="space-y-2">
                {member.allergies.map((allergy, index) => (
                  <Badge key={index} variant="outline" className="text-xs block w-fit status-warning">
                    {allergy}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-6 pt-4 border-t">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-medical-green" />
                  <h3 className="font-semibold text-sm">Emergency Contact</h3>
                </div>
                <div className="bg-muted/50 p-3 rounded">
                  <p className="font-medium text-sm">{member.emergencyContact.name}</p>
                  <p className="text-xs text-muted-foreground">{member.emergencyContact.relationship}</p>
                  <p className="text-xs font-mono mt-1">{member.emergencyContact.phone}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-medical-purple" />
                  <h3 className="font-semibold text-sm">Insurance Information</h3>
                </div>
                <div className="bg-muted/50 p-3 rounded">
                  <p className="font-medium text-sm">{member.insuranceInfo.provider}</p>
                  <p className="text-xs font-mono mt-1">{member.insuranceInfo.policyNumber}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
}