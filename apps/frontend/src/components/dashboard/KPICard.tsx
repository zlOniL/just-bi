import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string;
  change?: number;
  changeLabel?: string;
  icon?: React.ReactNode;
}

export function KPICard({ title, value, change, changeLabel, icon }: KPICardProps) {
  const getTrendIcon = () => {
    if (!change) return <Minus className="w-4 h-4" />;
    if (change > 0) return <TrendingUp className="w-4 h-4" />;
    return <TrendingDown className="w-4 h-4" />;
  };

  const getTrendColor = () => {
    if (!change) return "text-muted-foreground bg-muted";
    if (change > 0) return "text-emerald-600 bg-emerald-100";
    return "text-red-600 bg-red-100";
  };

  return (
    <Card variant="elevated">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <span className="text-sm text-muted-foreground font-medium">{title}</span>
          {icon && (
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              {icon}
            </div>
          )}
        </div>
        <div className="space-y-2">
          <div className="text-3xl font-display font-bold">{value}</div>
          {change !== undefined && (
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium",
                  getTrendColor()
                )}
              >
                {getTrendIcon()}
                {Math.abs(change)}%
              </span>
              {changeLabel && (
                <span className="text-xs text-muted-foreground">{changeLabel}</span>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
