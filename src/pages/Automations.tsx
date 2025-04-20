
import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { WorkflowCard } from '@/components/automations/WorkflowCard';
import { Button } from '@/components/ui/button';
import { 
  Plus, 
  LayoutGrid, 
  List, 
  PlusCircle,
  ArrowRight,
  Zap 
} from 'lucide-react';

const Automations = () => {
  // Sample data - in a real app this would come from an API
  const workflows = [
    {
      id: '1',
      name: 'Lead Nurturing Sequence',
      description: 'Automatically follow up with new leads and schedule demonstrations',
      status: 'active' as const,
      lastRun: '2 hours ago',
      nextRun: 'When triggered',
      runCount: 18,
      triggers: ['New Lead Created', 'Form Submission'],
    },
    {
      id: '2',
      name: 'Client Onboarding',
      description: 'Step-by-step process for welcoming and onboarding new clients',
      status: 'active' as const,
      lastRun: 'Yesterday',
      nextRun: 'When triggered',
      runCount: 12,
      triggers: ['Deal Stage Changed', 'Contract Signed'],
    },
    {
      id: '3',
      name: 'Meeting Summary Generator',
      description: 'Generate AI summaries after calendar meetings with action items',
      status: 'active' as const,
      lastRun: '3 days ago',
      nextRun: 'When triggered',
      runCount: 45,
      triggers: ['Meeting Ended', 'Calendar Event'],
    },
    {
      id: '4',
      name: 'Quarterly Business Review',
      description: 'Prepare and send quarterly reports to long-term clients',
      status: 'draft' as const,
      runCount: 0,
      triggers: ['Scheduled', 'Manual Trigger'],
    },
    {
      id: '5',
      name: 'Customer Satisfaction Survey',
      description: 'Send feedback surveys after project completion',
      status: 'paused' as const,
      lastRun: '2 weeks ago',
      runCount: 8,
      triggers: ['Project Completed', 'Manual Trigger'],
    },
    {
      id: '6',
      name: 'Re-engagement Campaign',
      description: 'Reach out to inactive clients with personalized messages',
      status: 'draft' as const,
      runCount: 0,
      triggers: ['Client Inactive for 30 Days', 'Manual Trigger'],
    },
  ];

  const handleActivate = (id: string) => {
    console.log(`Activate workflow ${id}`);
  };

  const handleEdit = (id: string) => {
    console.log(`Edit workflow ${id}`);
  };

  return (
    <PageContainer
      title="Automations"
      description="Create and manage AI-powered workflows for your business."
      actions={
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <List className="mr-2 h-4 w-4" />
            Templates
          </Button>
          <Button className="bg-imperial-500 hover:bg-imperial-600">
            <Plus className="mr-2 h-4 w-4" />
            Create Workflow
          </Button>
        </div>
      }
    >
      <div className="mb-8 p-6 rounded-lg bg-imperial-50 border border-imperial-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex-1 space-y-2">
          <h3 className="text-xl font-semibold text-imperial-800">Get started with n8n integration</h3>
          <p className="text-imperial-700">
            Connect Innovation Imperial CRM with n8n to build powerful workflows without code.
          </p>
          <div className="flex gap-2 mt-4">
            <Button variant="default" className="bg-imperial-500 hover:bg-imperial-600">
              Connect n8n
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-imperial-200 text-imperial-700 hover:bg-imperial-100">
              Learn more
            </Button>
          </div>
        </div>
        <div className="hidden md:block h-28 w-28 rounded-full bg-imperial-100 flex items-center justify-center">
          <Zap className="h-14 w-14 text-imperial-500" />
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Your Workflows</h2>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {workflows.map((workflow) => (
          <WorkflowCard
            key={workflow.id}
            workflow={workflow}
            onActivate={handleActivate}
            onEdit={handleEdit}
          />
        ))}
        <div className="border border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center space-y-3 min-h-[250px]">
          <div className="h-12 w-12 rounded-full bg-imperial-50 flex items-center justify-center">
            <PlusCircle className="h-6 w-6 text-imperial-500" />
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Create a new workflow</h3>
            <p className="text-sm text-muted-foreground">Build custom automations for your business processes</p>
          </div>
          <Button variant="outline" className="mt-4">
            Start building
          </Button>
        </div>
      </div>
    </PageContainer>
  );
};

export default Automations;
