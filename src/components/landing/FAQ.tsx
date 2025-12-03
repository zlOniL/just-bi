import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quais formatos de arquivo são suportados?",
    answer: "Atualmente suportamos arquivos CSV e Excel (.xlsx, .xls). Estamos trabalhando para adicionar suporte a mais formatos em breve.",
  },
  {
    question: "Meus dados estão seguros?",
    answer: "Sim, absolutamente. Utilizamos criptografia de ponta a ponta e seguimos as melhores práticas de segurança. Somos totalmente compatíveis com a LGPD.",
  },
  {
    question: "Preciso ter conhecimento técnico para usar?",
    answer: "Não! Nossa plataforma foi projetada para ser intuitiva. A IA faz todo o trabalho técnico, você só precisa carregar seus dados e fazer perguntas.",
  },
  {
    question: "Existe um limite de tamanho de arquivo?",
    answer: "No plano gratuito, o limite é de 50MB por arquivo. Planos pagos oferecem limites maiores e processamento prioritário.",
  },
  {
    question: "Posso exportar os dashboards?",
    answer: "Sim! Você pode exportar dashboards e relatórios em PDF, PNG ou compartilhar via link com sua equipe.",
  },
  {
    question: "Como funciona a IA conversacional?",
    answer: "Nossa IA usa processamento de linguagem natural para entender suas perguntas e fornecer respostas baseadas nos dados carregados. É como ter um analista de dados disponível 24/7.",
  },
];

export function FAQ() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tire suas dúvidas sobre a plataforma
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
