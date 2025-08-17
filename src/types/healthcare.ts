export interface MemberProfile {
  id: string;
  name: string;
  age: number;
  profileImage?: string;
  medicalHistory: string[];
  currentMedications: string[];
  allergies: string[];
  primaryPhysician: string;
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
  insuranceInfo: {
    provider: string;
    policyNumber: string;
  };
}

export interface HealthcareEpisode {
  id: string;
  title: string;
  dateRange: {
    start: string;
    end: string;
  };
  description: string;
  frictionPoints: string[];
  finalOutcome: string;
  expertConsulted: string;
  beforeState: string;
  afterState: string;
  responseTime: {
    value: number;
    unit: 'minutes' | 'hours' | 'days';
  };
  resolutionTime: {
    value: number;
    unit: 'minutes' | 'hours' | 'days';
  };
  status: 'resolved' | 'in-progress' | 'escalated';
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: 'medication' | 'therapy' | 'diagnostic' | 'lifestyle' | 'emergency';
  metrics: {
    doctorHours?: number;
    coachHours?: number;
    consultations?: number;
    tests?: number;
  };
  decisions: Decision[];
}

export interface Decision {
  id: string;
  type: 'medication' | 'therapy' | 'treatment' | 'diagnostic_test';
  description: string;
  reasoning: string;
  dateDecided: string;
  decidedBy: string;
  outcome?: string;
  relatedMetrics?: any;
}

export interface TimelineEvent {
  id: string;
  date: string;
  type: 'consultation' | 'medication_change' | 'test_result' | 'symptom' | 'improvement';
  title: string;
  description: string;
  severity?: 'low' | 'medium' | 'high';
  relatedEpisodeId?: string;
}

export interface HealthMetrics {
  responseTimeStats: {
    average: number;
    fastest: number;
    slowest: number;
    unit: 'minutes' | 'hours' | 'days';
  };
  resolutionTimeStats: {
    average: number;
    fastest: number;
    slowest: number;
    unit: 'minutes' | 'hours' | 'days';
  };
  frictionPointsPerEpisode: number[];
  episodesByCategory: Record<string, number>;
  satisfactionScore: number;
  totalConsultations: number;
  totalDoctorHours: number;
  totalCoachHours: number;
}

export interface PersonaAnalysis {
  communicationStyle: string;
  healthGoals: string[];
  challenges: string[];
  preferences: {
    contactMethod: 'phone' | 'email' | 'chat' | 'video';
    timePreference: string;
    language: string;
  };
  riskFactors: string[];
  complianceLevel: 'high' | 'medium' | 'low';
  lastAnalysisDate: string;
}