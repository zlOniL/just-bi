import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero pt-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Análise de dados com IA
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up">
            Transforme seus dados em{" "}
            <span className="gradient-text">insights inteligentes</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Carregue seus arquivos CSV ou Excel e deixe nossa IA analisar, visualizar e gerar insights automaticamente. Decisões mais inteligentes em minutos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/login">
              <Button variant="hero" size="xl">
                Começar Agora
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="#how-it-works">
              <Button variant="outline" size="xl">
                Saiba Mais
              </Button>
            </a>
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl mx-auto animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div>
              <div className="text-3xl font-display font-bold text-foreground">10K+</div>
              <div className="text-sm text-muted-foreground">Usuários ativos</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-foreground">1M+</div>
              <div className="text-sm text-muted-foreground">Arquivos analisados</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-foreground">99%</div>
              <div className="text-sm text-muted-foreground">Satisfação</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
