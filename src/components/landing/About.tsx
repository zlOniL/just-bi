import { CheckCircle } from "lucide-react";

const highlights = [
  "Processamento seguro e criptografado",
  "Análise em tempo real com IA avançada",
  "Dashboards personalizáveis",
  "Exportação de relatórios em PDF",
  "Suporte técnico especializado",
  "Integração com suas ferramentas favoritas",
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Sobre o Projeto
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              O Just BI nasceu da necessidade de democratizar a análise de dados. 
              Acreditamos que toda empresa, independentemente do tamanho, deve ter acesso 
              a ferramentas poderosas de Business Intelligence.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              Com nossa plataforma, você não precisa ser um cientista de dados para 
              extrair valor dos seus dados. Nossa IA faz o trabalho pesado enquanto 
              você foca no que realmente importa: tomar decisões estratégicas.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl gradient-bg p-8 shadow-xl">
              <div className="w-full h-full rounded-xl bg-card/90 backdrop-blur flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-display font-bold gradient-text mb-2">5+</div>
                  <div className="text-muted-foreground">Anos de experiência em IA</div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
