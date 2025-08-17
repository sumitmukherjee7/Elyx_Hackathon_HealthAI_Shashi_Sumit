import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { TabNavigation } from '@/components/navigation/TabNavigation';
import { MemberProfile } from '@/components/profile/MemberProfile';
import { EpisodeCard } from '@/components/episodes/EpisodeCard';
import { Timeline } from '@/components/timeline/Timeline';
import { MetricsDashboard } from '@/components/metrics/MetricsDashboard';
import { PersonaAnalysis } from '@/components/persona/PersonaAnalysis';
import {
  sampleMember,
  sampleEpisodes,
  sampleTimeline,
  sampleMetrics,
  samplePersonaAnalysis
} from '@/data/sampleData';

const Index = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <MemberProfile member={sampleMember} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <h3 className="text-lg font-semibold mb-4">Recent Episodes</h3>
                <div className="space-y-4">
                  {sampleEpisodes.slice(0, 4).map((episode, index) => (
                    <EpisodeCard key={episode.id} episode={episode} index={index} />
                  ))}
                </div>
              </div>
              <div>
                <Timeline
                  events={[...sampleTimeline]
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // latest first
                    .slice(0, 5)}
                />
              </div>
            </div>
          </div>
        );

      case 'episodes':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Healthcare Episodes</h2>
              <div className="text-sm text-muted-foreground">
                {sampleEpisodes.length} total episodes
              </div>
            </div>
            <div className="space-y-4">
              {sampleEpisodes.map((episode, index) => (
                <EpisodeCard key={episode.id} episode={episode} index={index} />
              ))}
            </div>
          </div>
        );

      case 'timeline':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Health Timeline</h2>
              <div className="text-sm text-muted-foreground">
                {sampleTimeline.length} events tracked
              </div>
            </div>
            <Timeline events={sampleTimeline} />
          </div>
        );

      case 'metrics':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Performance Metrics</h2>
              <div className="text-sm text-muted-foreground">
                Data-driven insights and analytics
              </div>
            </div>
            <MetricsDashboard metrics={sampleMetrics} />
          </div>
        );

      case 'persona':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Member Persona Analysis</h2>
              <div className="text-sm text-muted-foreground">
                Last updated: {new Date(samplePersonaAnalysis.lastAnalysisDate).toLocaleDateString()}
              </div>
            </div>
            <PersonaAnalysis analysis={samplePersonaAnalysis} />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="container mx-auto px-6 py-8">
        {renderTabContent()}
      </main>
    </div>
  );
};

export default Index;