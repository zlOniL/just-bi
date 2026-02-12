import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileUp, Cpu, BarChart3, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileUp,
    title: "Inserir Documento",
    description: "Faça upload do seu arquivo CSV ou Excel",
    status: "active",
  },
  {
    icon: Cpu,
    title: "Aguardar Análise",
    description: "Nossa IA processa e analisa seus dados",
    status: "pending",
  },
  {
    icon: BarChart3,
    title: "Visualizar Dashboards",
    description: "Acesse insights e visualizações interativas",
    status: "pending",
  },
];

interface StepsCardProps {
  currentStep?: number;
}

export function StepsCard({ currentStep = 0 }: StepsCardProps) {
  return (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>Passo a Passo</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {steps.map((step, index) => {
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;

            return (
              <div
                key={step.title}
                className={`flex items-start gap-4 p-4 rounded-xl transition-colors ${
                  isActive
                    ? "bg-primary/10"
                    : isCompleted
                    ? "bg-secondary/50"
                    : "bg-secondary/30"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isCompleted
                      ? "bg-primary text-primary-foreground"
                      : isActive
                      ? "gradient-bg text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <step.icon className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-0.5">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
