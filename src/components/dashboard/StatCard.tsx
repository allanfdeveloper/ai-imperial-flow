
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  trend?: string | number;
  trendType?: 'increase' | 'decrease' | 'neutral';
  icon?: React.ReactNode;
  className?: string;
}

export function StatCard({ title, value, description, trend, trendType, icon, className }: StatCardProps) {
  return (
    <Card className={cn('overflow-hidden', className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {(description || trend !== undefined) && (
          <div className="flex items-center text-xs text-muted-foreground mt-1">
            {trend !== undefined && (
              <div 
                className={cn(
                  "flex items-center mr-2",
                  trendType === 'increase' ? "text-green-500" : 
                  trendType === 'decrease' ? "text-red-500" : 
                  "text-muted-foreground"
                )}
              >
                {trendType === 'increase' ? (
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                ) : trendType === 'decrease' ? (
                  <ArrowDownRight className="h-3 w-3 mr-1" />
                ) : null}
                <span>{trend}</span>
              </div>
            )}
            {description && <p>{description}</p>}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
