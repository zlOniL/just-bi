import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "O Just BI transformou completamente a forma como analisamos nossas vendas. Insights que levavam dias agora aparecem em minutos.",
    author: "Maria Silva",
    role: "Diretora de Vendas",
    company: "TechCorp",
  },
  {
    quote: "A IA conversacional é incrível! Posso perguntar qualquer coisa sobre meus dados e receber respostas claras e acionáveis.",
    author: "Carlos Mendes",
    role: "Analista de Dados",
    company: "DataDriven",
  },
  {
    quote: "Implementação fácil, interface intuitiva e resultados impressionantes. Recomendo para qualquer empresa que trabalha com dados.",
    author: "Ana Oliveira",
    role: "CEO",
    company: "StartupX",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Histórias de sucesso de quem já transformou seus dados em resultados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} variant="glass">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
