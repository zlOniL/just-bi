import { Link } from "react-router-dom";
import { BarChart3, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">DataInsight</span>
            </Link>
            <p className="text-background/70 max-w-sm mb-6">
              Transformando dados em insights acionáveis com o poder da inteligência artificial.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Produto</h4>
            <ul className="space-y-3 text-background/70">
              <li><a href="#features" className="hover:text-background transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Integrações</a></li>
              <li><a href="#" className="hover:text-background transition-colors">API</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Suporte</h4>
            <ul className="space-y-3 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Central de Ajuda</a></li>
              <li><a href="#faq" className="hover:text-background transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2024 DataInsight. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <a href="#" className="hover:text-background transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-background transition-colors">Privacidade</a>
            <a href="#" className="hover:text-background transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
