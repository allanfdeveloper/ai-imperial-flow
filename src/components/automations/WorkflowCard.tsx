
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Play, Settings, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Workflow {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'paused' | 'draft';
  lastRun?: string;
  nextRun?: string;
  runCount: number;
  triggers: string[];
}

interface WorkflowCardProps {
  workflow: Workflow;
  onActivate?: (id: string) => void;
  onEdit?: (id: string) => void;
}

export function WorkflowCard({ workflow, onActivate, onEdit }: WorkflowCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex justify-between">
          <div className="space-y-1">
            <div className="flex items-center">
              <Zap className="h-4 w-4 text-imperial-500 mr-2" />
              <CardTitle className="text-lg">{workflow.name}</CardTitle>
            </div>
            <CardDescription>{workflow.description}</CardDescription>
          </div>
          <Badge
            variant={
              workflow.status === 'active'
                ? 'default'
                : workflow.status === 'paused'
                ? 'outline'
                : 'secondary'
            }
            className={
              workflow.status === 'active'
                ? 'bg-green-100 text-green-800 hover:bg-green-100'
                : workflow.status === 'paused'
                ? 'bg-amber-100 text-amber-800 hover:bg-amber-100'
                : ''
            }
          >
            {workflow.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="text-sm">
            <p className="font-medium">Triggered by:</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {workflow.triggers.map((trigger, index) => (
                <Badge key={index} variant="secondary" className="font-normal">
                  {trigger}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {workflow.lastRun && (
              <div>
                <p className="text-xs text-muted-foreground">Last run</p>
                <p>{workflow.lastRun}</p>
              </div>
            )}
            {workflow.nextRun && (
              <div>
                <p className="text-xs text-muted-foreground">Next run</p>
                <p>{workflow.nextRun}</p>
              </div>
            )}
            <div>
              <p className="text-xs text-muted-foreground">Run count</p>
              <p>{workflow.runCount}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t">
            <Button 
              size="sm" 
              variant={workflow.status === 'active' ? 'outline' : 'default'}
              onClick={() => onActivate?.(workflow.id)}
            >
              <Play className="h-3 w-3 mr-1" />
              {workflow.status === 'active' ? 'Pause' : 'Activate'}
            </Button>
            <Button size="sm" variant="outline" onClick={() => onEdit?.(workflow.id)}>
              <Settings className="h-3 w-3 mr-1" />
              Configure
            </Button>
            {workflow.nextRun && (
              <Button size="sm" variant="ghost">
                <Calendar className="h-3 w-3 mr-1" />
                Schedule
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
