import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileText, BarChart3, TrendingUp, Users } from "lucide-react";

interface ContextItem {
  id: string;
  label: string;
  value: string;
  icon: React.ReactNode;
}

const defaultContext: ContextItem[] = [
  {
    id: "dataset",
    label: "Dataset",
    value: "Vendas_2024.xlsx",
    icon: <FileText className="w-4 h-4" />,
  },
  {
    id: "periodo",
    label: "Período",
    value: "Janeiro - Junho 2024",
    icon: <BarChart3 className="w-4 h-4" />,
  },
  {
    id: "metricas",
    label: "Métricas Principais",
    value: "Vendas, Receita, Conversão",
    icon: <TrendingUp className="w-4 h-4" />,
  },
  {
    id: "segmentacao",
    label: "Segmentação",
    value: "Por produto e região",
    icon: <Users className="w-4 h-4" />,
  },
];

export function ContextPanel() {
  const [context, setContext] = useState<ContextItem[]>(defaultContext);
  const [notes, setNotes] = useState("");

  const updateContext = (id: string, value: string) => {
    setContext((prev) =>
      prev.map((item) => (item.id === id ? { ...item, value } : item))
    );
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <h3 className="font-display font-semibold text-lg">Contexto da Análise</h3>
        <p className="text-sm text-muted-foreground">
          Edite as informações para personalizar as respostas da IA
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {context.map((item) => (
          <div key={item.id} className="space-y-2">
            <Label className="flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center text-primary">
                {item.icon}
              </span>
              {item.label}
            </Label>
            <Input
              value={item.value}
              onChange={(e) => updateContext(item.id, e.target.value)}
            />
          </div>
        ))}

        <div className="space-y-2">
          <Label>Notas Adicionais</Label>
          <Textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Adicione informações extras que possam ajudar a IA..."
            className="min-h-[120px] resize-none"
          />
        </div>

        <Card variant="glass" className="mt-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Dica</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              Quanto mais contexto você fornecer, mais precisas serão as respostas da IA sobre seus dados.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
