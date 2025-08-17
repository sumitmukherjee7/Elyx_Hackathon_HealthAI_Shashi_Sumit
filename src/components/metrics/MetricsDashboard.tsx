import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Clock, CheckCircle2, Users, Star, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HealthMetrics } from '@/types/healthcare';

interface MetricsDashboardProps {
  metrics: HealthMetrics;
}

export function MetricsDashboard({ metrics }: MetricsDashboardProps) {
  const responseTimeData = [
    { episode: 'Ep 1', responseTime: 3, resolutionTime: 0 },
    { episode: 'Ep 2', responseTime: 2, resolutionTime: 24 },
    { episode: 'Ep 3', responseTime: 4, resolutionTime: 4 },
    { episode: 'Ep 4', responseTime: 1, resolutionTime: 0 },
    { episode: 'Ep 5', responseTime: 5, resolutionTime: 48 },
    { episode: 'Ep 6', responseTime: 2, resolutionTime: 12 },
    { episode: 'Ep 7', responseTime: 3, resolutionTime: 6 },
    { episode: 'Ep 8', responseTime: 1, resolutionTime: 2 },
  ];

  const frictionPointsData = metrics.frictionPointsPerEpisode.map((points, index) => ({
    episode: `Ep ${index + 1}`,
    frictionPoints: points
  }));

  const categoryData = Object.entries(metrics.episodesByCategory).map(([category, count]) => ({
    name: category.charAt(0).toUpperCase() + category.slice(1),
    value: count,
    color: getCategoryColor(category)
  }));

  function getCategoryColor(category: string) {
    const colors = {
      medication: '#3B82F6', // blue
      therapy: '#10B981', // green
      diagnostic: '#F59E0B', // orange
      lifestyle: '#8B5CF6', // purple
      emergency: '#EF4444' // red
    };
    return colors[category as keyof typeof colors] || '#6B7280';
  }

  const StatCard = ({ title, value, subtitle, icon: Icon, trend, color }: any) => (
    <Card className="medical-card hover-lift animate-scale-in">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className={`text-2xl font-bold ${color}`}>{value}</p>
            {subtitle && <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>}
          </div>
          <div className={`p-3 rounded-full ${color.replace('text-', 'bg-').replace('-', '-')}/10`}>
            <Icon className={`h-6 w-6 ${color}`} />
          </div>
        </div>
        {trend && (
          <div className="mt-4 flex items-center space-x-1">
            <TrendingUp className="h-3 w-3 text-medical-green" />
            <span className="text-xs text-medical-green">{trend}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Avg Response Time"
          value={`${metrics.responseTimeStats.average} ${metrics.responseTimeStats.unit}`}
          subtitle={`Range: ${metrics.responseTimeStats.fastest}-${metrics.responseTimeStats.slowest} ${metrics.responseTimeStats.unit}`}
          icon={Clock}
          color="text-medical-blue"
          trend="15% faster than last quarter"
        />
        
        <StatCard
          title="Avg Resolution Time"
          value={`${metrics.resolutionTimeStats.average} ${metrics.resolutionTimeStats.unit}`}
          subtitle={`Range: ${metrics.resolutionTimeStats.fastest}-${metrics.resolutionTimeStats.slowest} ${metrics.resolutionTimeStats.unit}`}
          icon={CheckCircle2}
          color="text-medical-green"
          trend="23% improvement"
        />
        
        <StatCard
          title="Satisfaction Score"
          value={`${metrics.satisfactionScore}/5.0`}
          subtitle="Based on 25 consultations"
          icon={Star}
          color="text-medical-yellow"
          trend="Excellent rating"
        />
        
        <StatCard
          title="Total Consultations"
          value={metrics.totalConsultations}
          subtitle={`${metrics.totalDoctorHours}h doctor, ${metrics.totalCoachHours}h coach`}
          icon={Users}
          color="text-medical-purple"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Response & Resolution Times */}
        <Card className="medical-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-medical-blue" />
              <span>Response & Resolution Times by Episode</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={responseTimeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="episode" 
                  tick={{ fontSize: 12 }}
                  stroke="#6b7280"
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  stroke="#6b7280"
                  label={{ value: 'Time (hours)', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    boxShadow: 'var(--shadow-md)'
                  }}
                />
                <Bar 
                  dataKey="responseTime" 
                  fill="#3B82F6" 
                  name="Response Time"
                  radius={[4, 4, 0, 0]}
                />
                <Bar 
                  dataKey="resolutionTime" 
                  fill="#10B981" 
                  name="Resolution Time"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Friction Points Trend */}
        <Card className="medical-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-medical-orange" />
              <span>Friction Points per Episode</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={frictionPointsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="episode" 
                  tick={{ fontSize: 12 }}
                  stroke="#6b7280"
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  stroke="#6b7280"
                  domain={[0, 'dataMax + 1']}
                  label={{ value: 'Friction Points', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    boxShadow: 'var(--shadow-md)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="frictionPoints" 
                  stroke="#F59E0B" 
                  strokeWidth={3}
                  dot={{ fill: '#F59E0B', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, stroke: '#F59E0B', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Category Distribution */}
      <Card className="medical-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-medical-purple" />
            <span>Episodes by Category</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    boxShadow: 'var(--shadow-md)'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            
            <div className="flex flex-col justify-center space-y-4">
              {categoryData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-lg">{item.value}</span>
                    <p className="text-xs text-muted-foreground">
                      {((item.value / categoryData.reduce((sum, cat) => sum + cat.value, 0)) * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}