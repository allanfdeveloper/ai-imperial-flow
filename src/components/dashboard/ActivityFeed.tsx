
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MoreHorizontal, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

interface Activity {
  id: string;
  type: 'email' | 'call' | 'meeting' | 'note';
  title: string;
  description?: string;
  time: string;
  user: {
    name: string;
    avatar?: string;
  };
  client?: {
    name: string;
    avatar?: string;
  };
}

interface ActivityFeedProps {
  activities: Activity[];
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <CardTitle className="text-lg">Recent Activity</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="ml-auto h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View all</DropdownMenuItem>
            <DropdownMenuItem>Filter by type</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="px-2">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex gap-4 px-2">
              <div className="flex-shrink-0">
                <Avatar>
                  <AvatarImage src={activity.user.avatar} />
                  <AvatarFallback>
                    {activity.user.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{activity.title}</p>
                    {activity.description && (
                      <p className="text-sm text-muted-foreground">{activity.description}</p>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
                {activity.client && (
                  <div className="flex items-center text-xs mt-1">
                    <span className="text-muted-foreground mr-2">Client:</span>
                    <div className="flex items-center">
                      <div className="h-4 w-4 rounded-full overflow-hidden mr-1">
                        <Avatar className="h-4 w-4">
                          <AvatarImage src={activity.client.avatar} />
                          <AvatarFallback className="text-[10px]">
                            {activity.client.name[0]}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <span>{activity.client.name}</span>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-2 pt-2">
                  <Button size="sm" variant="outline" className="h-7 px-2 text-xs">
                    <Mail className="h-3 w-3 mr-1" />
                    Follow up
                  </Button>
                  <Button size="sm" variant="outline" className="h-7 px-2 text-xs">
                    <Phone className="h-3 w-3 mr-1" />
                    Schedule call
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
