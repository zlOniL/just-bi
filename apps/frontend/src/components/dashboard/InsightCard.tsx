import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

interface InsightCardProps {
  insight: string;
}

export function InsightCard({ insight }: InsightCardProps) {
  return (
    <Card variant="gradient" className="border-primary/20">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 shadow-glow">
            <Sparkles className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg mb-2">
              Insight Geral da IA
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {insight}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
