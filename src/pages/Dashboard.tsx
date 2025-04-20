
import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { StatCard } from '@/components/dashboard/StatCard';
import { TaskList } from '@/components/dashboard/TaskList';
import { ActivityFeed } from '@/components/dashboard/ActivityFeed';
import { AIInsights } from '@/components/dashboard/AIInsights';
import { ClientsWidget } from '@/components/dashboard/ClientsWidget';
import { BarChart3, Users, DollarSign, FileText, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  // Sample data - in a real app this would come from API calls
  const tasks = [
    { id: '1', title: 'Follow up with Jane Smith about proposal', dueDate: 'Today', completed: false, aiGenerated: true },
    { id: '2', title: 'Prepare quarterly review for TechCorp', dueDate: 'Tomorrow', completed: false },
    { id: '3', title: 'Schedule demo with potential client', dueDate: '2 days', completed: false, aiGenerated: true },
    { id: '4', title: 'Update client onboarding documents', completed: true },
  ];

  const activities = [
    {
      id: '1',
      type: 'email',
      title: 'Email sent to Acme Corp',
      description: 'Proposal for the new project sent',
      time: '2 hours ago',
      user: { name: 'John Doe' },
      client: { name: 'Acme Corp' },
    },
    {
      id: '2',
      type: 'call',
      title: 'Call with GlobalTech',
      description: 'Discussed implementation timeline and next steps',
      time: 'Yesterday',
      user: { name: 'John Doe' },
      client: { name: 'GlobalTech' },
    },
    {
      id: '3',
      type: 'meeting',
      title: 'Project kickoff meeting',
      time: '3 days ago',
      user: { name: 'John Doe' },
      client: { name: 'DataSystems Inc.' },
    },
  ];

  const insights = [
    {
      id: '1',
      type: 'opportunity',
      title: 'Upsell opportunity detected',
      description: 'TechCorp has shown interest in additional services based on recent communications.',
      client: { name: 'TechCorp', value: '$5,000' },
    },
    {
      id: '2',
      type: 'risk',
      title: 'Client engagement decreasing',
      description: 'No communication with Acme Corp in the last 30 days. Consider reaching out soon.',
      client: { name: 'Acme Corp' },
    },
    {
      id: '3',
      type: 'suggestion',
      title: 'Follow-up recommended',
      description: 'The proposal sent to GlobalTech has not received a response in 5 days.',
      client: { name: 'GlobalTech', value: '$12,500' },
    },
  ];

  const clients = [
    {
      id: '1',
      name: 'Jane Smith',
      company: 'TechCorp',
      status: 'active' as const,
      lastContact: '2 days ago',
      value: '$15,000',
    },
    {
      id: '2',
      name: 'Michael Johnson',
      company: 'Acme Corp',
      status: 'active' as const,
      lastContact: '1 week ago',
      value: '$8,500',
    },
    {
      id: '3',
      name: 'Sarah Williams',
      company: 'GlobalTech',
      status: 'lead' as const,
      lastContact: '3 days ago',
      value: '$12,500',
    },
    {
      id: '4',
      name: 'David Brown',
      company: 'DataSystems Inc.',
      status: 'active' as const,
      lastContact: 'Today',
      value: '$7,200',
    },
  ];

  return (
    <PageContainer
      title="Dashboard"
      description="Overview of your clients, tasks, and opportunities."
      actions={
        <Button className="bg-imperial-500 hover:bg-imperial-600">
          <Zap className="mr-2 h-4 w-4" />
          Run AI Assistant
        </Button>
      }
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Clients" 
          value="28" 
          trend={12} 
          description="vs. last month" 
          icon={<Users className="h-4 w-4 text-muted-foreground" />} 
        />
        <StatCard 
          title="Active Deals" 
          value="18" 
          trend={5} 
          description="vs. last month" 
          icon={<BarChart3 className="h-4 w-4 text-muted-foreground" />} 
        />
        <StatCard 
          title="Revenue" 
          value="$58,400" 
          trend={-3} 
          description="vs. last month" 
          icon={<DollarSign className="h-4 w-4 text-muted-foreground" />} 
        />
        <StatCard 
          title="Proposals" 
          value="12" 
          trend={8} 
          description="vs. last month" 
          icon={<FileText className="h-4 w-4 text-muted-foreground" />} 
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
        <div className="space-y-6 lg:col-span-2">
          <AIInsights insights={insights} />
          <ActivityFeed activities={activities} />
        </div>
        <div className="space-y-6">
          <ClientsWidget clients={clients} />
          <TaskList tasks={tasks} onTaskToggle={(id, completed) => console.log('Task toggled:', id, completed)} />
        </div>
      </div>
    </PageContainer>
  );
}

export default Dashboard;
