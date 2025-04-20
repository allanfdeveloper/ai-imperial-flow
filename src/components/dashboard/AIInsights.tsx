
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, ArrowUpRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Insight {
  id: string;
  title: string;
  description: string;
  type: 'opportunity' | 'risk' | 'suggestion';
  client?: {
    name: string;
    value?: string;
  };
}

interface AIInsightsProps {
  insights: Insight[];
}

export function AIInsights({ insights }: AIInsightsProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Sparkles className="h-4 w-4 text-imperial-500 mr-2" />
            <CardTitle className="text-lg">AI Insights</CardTitle>
          </div>
          <Button size="sm" variant="outline" className="h-8">
            Refresh insights
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight) => (
            <div key={insight.id} className="p-3 rounded-lg bg-muted/30">
              <div className="flex items-start justify-between mb-2">
                <Badge
                  variant={insight.type === 'opportunity' ? 'default' : insight.type === 'risk' ? 'destructive' : 'outline'}
                  className={
                    insight.type === 'opportunity'
                      ? 'bg-green-100 text-green-800 hover:bg-green-100'
                      : insight.type === 'risk'
                      ? 'bg-red-100 text-red-800 hover:bg-red-100'
                      : 'bg-imperial-100 text-imperial-800 hover:bg-imperial-100'
                  }
                >
                  {insight.type.charAt(0).toUpperCase() + insight.type.slice(1)}
                </Badge>
                {insight.client && (
                  <div className="text-xs text-muted-foreground">
                    Client: <span className="font-medium">{insight.client.name}</span>
                    {insight.client.value && (
                      <>
                        {' '}
                        • <span className="font-medium">{insight.client.value}</span>
                      </>
                    )}
                  </div>
                )}
              </div>
              <h4 className="text-sm font-medium mb-1">{insight.title}</h4>
              <p className="text-xs text-muted-foreground">{insight.description}</p>
              <div className="flex items-center mt-3 gap-2">
                <Button size="sm" className="h-7 px-3 text-xs">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  Take action
                </Button>
                <Button size="sm" variant="outline" className="h-7 px-3 text-xs">
                  <MessageCircle className="h-3 w-3 mr-1" />
                  Ask more
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
