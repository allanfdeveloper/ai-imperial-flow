
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MoreHorizontal, ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface Client {
  id: string;
  name: string;
  company: string;
  avatar?: string;
  status: 'active' | 'inactive' | 'lead';
  lastContact?: string;
  value?: string;
}

export interface ClientsWidgetProps {
  clients: Client[];
}

export function ClientsWidget({ clients = [] }: ClientsWidgetProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Recent Clients</CardTitle>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/clients">
              View all
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-2">
        {clients && clients.length > 0 ? (
          <div className="space-y-1">
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50"
              >
                <div className="flex items-center">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={client.avatar} />
                    <AvatarFallback>{client.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <p className="text-sm font-medium">{client.name}</p>
                    <p className="text-xs text-muted-foreground">{client.company}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 text-right">
                    {client.value && (
                      <p className="text-sm font-medium">{client.value}</p>
                    )}
                    {client.lastContact && (
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {client.lastContact}
                      </div>
                    )}
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">More</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-4 text-muted-foreground">
            No recent clients to display
          </div>
        )}
      </CardContent>
    </Card>
  );
}
