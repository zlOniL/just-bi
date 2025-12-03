import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, GraduationCap, Briefcase } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Empresas",
    description: "De pequenas a grandes empresas que buscam tomar decisões baseadas em dados de forma ágil.",
  },
  {
    icon: Users,
    title: "Times de Marketing",
    description: "Equipes que precisam analisar métricas de campanha e comportamento de clientes.",
  },
  {
    icon: GraduationCap,
    title: "Pesquisadores",
    description: "Acadêmicos e pesquisadores que trabalham com grandes volumes de dados.",
  },
  {
    icon: Briefcase,
    title: "Consultores",
    description: "Profissionais que precisam entregar análises rápidas e insights aos seus clientes.",
  },
];

export function ForWhom() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Para Quem É
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nossa plataforma atende diferentes perfis de profissionais e organizações
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {audiences.map((audience) => (
            <Card key={audience.title} variant="elevated" className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto rounded-2xl gradient-bg flex items-center justify-center mb-4 shadow-md">
                  <audience.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {audience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
