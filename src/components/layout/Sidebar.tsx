
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Users, 
  bell,
  lead,
  contact,
  organization,
  note,
  task,
  callLog,
  emailTemplate,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type NavItem = {
  icon: React.ElementType;
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    href: '/',
  },
  {
    icon: lead,
    label: 'Leads',
    href: '/leads',
  },
  {
    icon: task,
    label: 'Deals',
    href: '/pipelines',
  },
  {
    icon: contact,
    label: 'Contacts',
    href: '/contacts',
  },
  {
    icon: organization,
    label: 'Organizations',
    href: '/organizations',
  },
  {
    icon: note,
    label: 'Notes',
    href: '/notes',
  },
  {
    icon: task,
    label: 'Tasks',
    href: '/tasks',
  },
  {
    icon: callLog,
    label: 'Call Logs',
    href: '/call-logs',
  },
  {
    icon: emailTemplate,
    label: 'Email Templates',
    href: '/email-templates',
  },
  {
    icon: bell,
    label: 'Notifications',
    href: '/notifications',
  },
  {
    icon: note,
    label: 'Pipelines',
    href: '/pipelines',
  },
  {
    icon: note,
    label: 'Invoices',
    href: '/invoices',
  },
  {
    icon: note,
    label: 'Settings',
    href: '/settings',
  },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        'flex flex-col h-screen border-r border-border bg-sidebar transition-all duration-300 ease-in-out',
        collapsed ? 'w-[72px]' : 'w-64'
      )}
    >
      <div className="flex items-center h-16 px-4">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-imperial-500 flex items-center justify-center">
              <span className="text-white font-bold">II</span>
            </div>
            <span className="font-bold text-lg">Imperial</span>
          </div>
        )}
        {collapsed && (
          <div className="h-8 w-8 rounded-md bg-imperial-500 flex items-center justify-center mx-auto">
            <span className="text-white font-bold">II</span>
          </div>
        )}
      </div>
      
      <div className="flex-1 overflow-auto py-4">
        <TooltipProvider delayDuration={0}>
          <nav className="flex flex-col gap-1 px-2">
            {navItems.map((item) => (
              <Tooltip key={item.label}>
                <TooltipTrigger asChild>
                  <Link
                    to={item.href}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                      'hover:bg-imperial-100 hover:text-imperial-700',
                      'focus:outline-none focus:ring-2 focus:ring-imperial-500'
                    )}
                  >
                    <item.icon size={20} />
                    {!collapsed && <span>{item.label}</span>}
                  </Link>
                </TooltipTrigger>
                {collapsed && (
                  <TooltipContent side="right">
                    {item.label}
                  </TooltipContent>
                )}
              </Tooltip>
            ))}
          </nav>
        </TooltipProvider>
      </div>
      
      <div className="border-t p-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center text-muted-foreground hover:text-foreground"
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          {!collapsed && <span className="ml-2">Collapse</span>}
        </Button>
      </div>
    </div>
  );
}

