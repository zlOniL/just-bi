import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  LineChart, 
  MessageSquare, 
  Shield, 
  Zap, 
  RefreshCw 
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "IA Avançada",
    description: "Algoritmos de machine learning que identificam padrões ocultos nos seus dados automaticamente.",
  },
  {
    icon: LineChart,
    title: "Dashboards Interativos",
    description: "Visualizações dinâmicas e personalizáveis para entender seus dados de forma visual.",
  },
  {
    icon: MessageSquare,
    title: "Chat com IA",
    description: "Converse naturalmente com a IA para obter insights específicos sobre seus dados.",
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Seus dados são criptografados em trânsito e em repouso. Conformidade com LGPD.",
  },
  {
    icon: Zap,
    title: "Processamento Rápido",
    description: "Análise de milhões de linhas em segundos graças à nossa infraestrutura otimizada.",
  },
  {
    icon: RefreshCw,
    title: "Atualizações em Tempo Real",
    description: "Dashboards que se atualizam automaticamente conforme novos dados são inseridos.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Benefícios & Funcionalidades
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ferramentas poderosas para transformar a forma como você trabalha com dados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature) => (
            <Card key={feature.title} variant="interactive" className="group">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
