
import React from 'react';
import { Check, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

interface Task {
  id: string;
  title: string;
  dueDate?: string;
  completed: boolean;
  aiGenerated?: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onTaskToggle?: (id: string, completed: boolean) => void;
}

export function TaskList({ tasks, onTaskToggle }: TaskListProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Tasks & Follow-ups</CardTitle>
      </CardHeader>
      <CardContent className="px-2">
        <ul className="space-y-1">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-start px-2 py-2 rounded-md hover:bg-muted/50">
              <Checkbox
                id={task.id}
                checked={task.completed}
                onCheckedChange={(checked) => onTaskToggle?.(task.id, !!checked)}
                className="mt-0.5"
              />
              <div className="ml-3 flex-1">
                <label
                  htmlFor={task.id}
                  className={`text-sm font-medium cursor-pointer ${
                    task.completed ? 'line-through text-muted-foreground' : ''
                  }`}
                >
                  {task.title}
                </label>
                {task.dueDate && (
                  <div className="flex items-center mt-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>Due {task.dueDate}</span>
                  </div>
                )}
              </div>
              {task.aiGenerated && (
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs bg-imperial-100 text-imperial-700">
                  AI
                </span>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
