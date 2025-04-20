
import React from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { StatCard } from "@/components/dashboard/StatCard";
import { TaskList } from "@/components/dashboard/TaskList";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { AIInsights } from "@/components/dashboard/AIInsights";
import { ClientsWidget } from "@/components/dashboard/ClientsWidget";
import { Users, Calendar, TrendingUp, RefreshCw } from "lucide-react";

type InsightType = "opportunity" | "risk" | "suggestion";
type ActivityType = "note" | "email" | "call" | "meeting";

interface Insight {
  id: string;
  type: InsightType;
  title: string;
  description: string;
  client: {
    name: string;
    value?: string;
  };
}

interface Activity {
  id: string;
  type: ActivityType;
  title: string;
  description?: string;
  time: string;
  user: {
    name: string;
  };
  client: {
    name: string;
  };
}

interface Task {
  id: string;
  title: string;
  completed: boolean;
  dueDate?: string;
  aiGenerated?: boolean;
}

const Dashboard = () => {
  const tasks: Task[] = [
    {
      id: "task1",
      title: "Follow up with TechCorp about project timeline",
      completed: false,
      dueDate: "Today",
    },
    {
      id: "task2",
      title: "Review proposal for GlobalSystems",
      completed: false,
      dueDate: "Tomorrow",
    },
    {
      id: "task3",
      title: "Send invoice to DataStream Inc",
      completed: true,
    },
    {
      id: "task4",
      title: "Schedule demo with NorthStar Ventures",
      completed: false,
      dueDate: "Apr 23",
      aiGenerated: true,
    },
    {
      id: "task5",
      title: "Update client onboarding documentation",
      completed: false,
    },
  ];

  const insights: Insight[] = [
    {
      id: "insight1",
      type: "opportunity",
      title: "Potential upsell opportunity",
      description:
        "TechCorp has shown interest in our advanced automation package based on recent conversations.",
      client: {
        name: "TechCorp",
        value: "$15,000",
      },
    },
    {
      id: "insight2",
      type: "risk",
      title: "Engagement risk detected",
      description:
        "NorthStar Ventures hasn't responded to our last 3 emails. Consider a direct call.",
      client: {
        name: "NorthStar Ventures",
      },
    },
    {
      id: "insight3",
      type: "suggestion",
      title: "Client success story potential",
      description:
        "DataStream Inc achieved 40% efficiency improvement. Request a testimonial.",
      client: {
        name: "DataStream Inc",
      },
    },
  ];

  const activities: Activity[] = [
    {
      id: "activity1",
      type: "email",
      title: "Sent project timeline update",
      description: "Included revised milestones and delivery dates",
      time: "2 hours ago",
      user: {
        name: "Jane Cooper",
      },
      client: {
        name: "TechCorp",
      },
    },
    {
      id: "activity2",
      type: "call",
      title: "Discovery call",
      time: "Yesterday",
      user: {
        name: "Jane Cooper",
      },
      client: {
        name: "GlobalSystems",
      },
    },
    {
      id: "activity3",
      type: "meeting",
      title: "Demo presentation",
      description: "Showcased workflow automation features",
      time: "2 days ago",
      user: {
        name: "Jane Cooper",
      },
      client: {
        name: "DataStream Inc",
      },
    },
    {
      id: "activity4",
      type: "note",
      title: "Follow-up items",
      description: "Send additional information on API integrations",
      time: "Apr 15",
      user: {
        name: "Jane Cooper",
      },
      client: {
        name: "NorthStar Ventures",
      },
    },
  ];

  // Sample clients data for the ClientsWidget component
  const clientsData = [
    {
      id: "client1",
      name: "Jane Smith",
      company: "TechCorp",
      avatar: undefined,
      status: "active" as const,
      lastContact: "2 days ago",
      value: "$15,000",
    },
    {
      id: "client2",
      name: "Michael Brown",
      company: "GlobalSystems",
      avatar: undefined,
      status: "active" as const,
      lastContact: "Yesterday",
      value: "$8,500",
    },
    {
      id: "client3",
      name: "Sarah Davis",
      company: "DataStream Inc.",
      avatar: undefined,
      status: "lead" as const,
      lastContact: "Today",
      value: "$12,000",
    },
  ];

  const handleTaskToggle = (id: string, completed: boolean) => {
    console.log(`Task ${id} toggled to ${completed}`);
    // In a real app, this would update the task in the database
  };

  return (
    <PageContainer
      title="Dashboard"
      description="Your business at a glance"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <StatCard
          title="Active Clients"
          value="28"
          trend="+4"
          icon={<Users className="h-8 w-8" />}
          trendType="increase"
        />
        <StatCard
          title="Meetings this week"
          value="12"
          trend="-2"
          icon={<Calendar className="h-8 w-8" />}
          trendType="decrease"
        />
        <StatCard
          title="Avg Deal Value"
          value="$45,500"
          trend="+12%"
          icon={<TrendingUp className="h-8 w-8" />}
          trendType="increase"
        />
        <StatCard
          title="Active Automations"
          value="8"
          trend="+2"
          icon={<RefreshCw className="h-8 w-8" />}
          trendType="increase"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <AIInsights insights={insights} />
          <ActivityFeed activities={activities} />
        </div>
        <div className="space-y-4">
          <TaskList tasks={tasks} onTaskToggle={handleTaskToggle} />
          <ClientsWidget clients={clientsData} />
        </div>
      </div>
    </PageContainer>
  );
};

export default Dashboard;
