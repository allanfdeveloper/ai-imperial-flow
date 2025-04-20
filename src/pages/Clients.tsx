
import React, { useState } from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { ClientTable } from '@/components/clients/ClientTable';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { UserPlus, Search, SlidersHorizontal } from 'lucide-react';

const Clients = () => {
  // Sample data - in a real app this would come from an API
  const [clients] = useState([
    {
      id: '1',
      name: 'Jane Smith',
      company: 'TechCorp',
      email: 'jane@techcorp.com',
      phone: '(555) 123-4567',
      status: 'active' as const,
      value: '$15,000',
      lastContact: '2 days ago',
    },
    {
      id: '2',
      name: 'Michael Johnson',
      company: 'Acme Corp',
      email: 'michael@acmecorp.com',
      phone: '(555) 987-6543',
      status: 'active' as const,
      value: '$8,500',
      lastContact: '1 week ago',
    },
    {
      id: '3',
      name: 'Sarah Williams',
      company: 'GlobalTech',
      email: 'sarah@globaltech.com',
      phone: '(555) 456-7890',
      status: 'lead' as const,
      value: '$12,500',
      lastContact: '3 days ago',
    },
    {
      id: '4',
      name: 'David Brown',
      company: 'DataSystems Inc.',
      email: 'david@datasystems.com',
      phone: '(555) 234-5678',
      status: 'active' as const,
      value: '$7,200',
      lastContact: 'Today',
    },
    {
      id: '5',
      name: 'Emily Davis',
      company: 'Innovate Solutions',
      email: 'emily@innovate.com',
      phone: '(555) 345-6789',
      status: 'inactive' as const,
      value: '$0',
      lastContact: '1 month ago',
    },
    {
      id: '6',
      name: 'Robert Wilson',
      company: 'TechAdvance',
      email: 'robert@techadvance.com',
      phone: '(555) 876-5432',
      status: 'lead' as const,
      value: '$20,000',
      lastContact: '1 week ago',
    },
  ]);

  const handleViewClient = (id: string) => {
    console.log(`View client ${id}`);
    // In a real app, this would navigate to the client detail page
  };

  return (
    <PageContainer
      title="Clients"
      description="Manage your client relationships and interactions."
      actions={
        <Button className="bg-imperial-500 hover:bg-imperial-600">
          <UserPlus className="mr-2 h-4 w-4" />
          Add Client
        </Button>
      }
    >
      <div className="flex items-center justify-between mb-6">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search clients..." className="pl-10" />
        </div>
        <Button variant="outline">
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      <ClientTable clients={clients} onViewClient={handleViewClient} />
    </PageContainer>
  );
};

export default Clients;
