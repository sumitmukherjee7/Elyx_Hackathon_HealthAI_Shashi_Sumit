import { Calendar, BarChart3, User, Clock, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      icon: Stethoscope,
      description: 'Member profile and summary'
    },
    {
      id: 'episodes',
      label: 'Episodes',
      icon: Calendar,
      description: 'Healthcare episodes and decisions'
    },
    {
      id: 'timeline',
      label: 'Timeline',
      icon: Clock,
      description: 'Chronological health events'
    },
    {
      id: 'metrics',
      label: 'Metrics',
      icon: BarChart3,
      description: 'Analytics and performance data'
    },
    {
      id: 'persona',
      label: 'Persona',
      icon: User,
      description: 'Communication and behavior analysis'
    }
  ];

  return (
    <div className="w-full border-b bg-card/50 backdrop-blur-sm sticky top-16 z-40">
      <div className="container mx-auto px-6">
        <nav className="flex space-x-1 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <Button
                key={tab.id}
                variant="ghost"
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  "relative flex-shrink-0 px-6 py-4 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "text-primary bg-primary/10 border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <div className="flex items-center space-x-2">
                  <Icon className={cn("h-4 w-4", isActive && "text-primary")} />
                  <span>{tab.label}</span>
                </div>
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t" />
                )}
              </Button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}