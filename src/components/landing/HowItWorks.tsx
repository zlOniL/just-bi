import { Upload, Cpu, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "1. Faça Upload",
    description: "Arraste e solte seus arquivos CSV ou Excel na plataforma. Simples e rápido.",
  },
  {
    icon: Cpu,
    title: "2. IA Analisa",
    description: "Nossa inteligência artificial processa e identifica padrões automaticamente.",
  },
  {
    icon: BarChart3,
    title: "3. Visualize Insights",
    description: "Acesse dashboards interativos e converse com a IA sobre seus dados.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Como Funciona
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Em três passos simples, transforme dados brutos em inteligência de negócio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative text-center group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl gradient-bg flex items-center justify-center shadow-lg group-hover:shadow-glow transition-shadow duration-300">
                <step.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              
              <h3 className="font-display text-xl font-semibold mb-3">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
