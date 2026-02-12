import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { KPICard } from "@/components/dashboard/KPICard";
import { DataTable } from "@/components/dashboard/DataTable";
import { Plus, X, Users, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

// Dashboard data
const dashboardOptions = [
  {
    id: "kpi-usuarios",
    name: "KPI - Total de Usuários",
    type: "kpi" as const,
    data: { title: "Total de Usuários", value: "12,543", change: 12.5, changeLabel: "vs mês anterior", icon: <Users className="w-5 h-5 text-primary" /> },
  },
  {
    id: "kpi-receita",
    name: "KPI - Receita Total",
    type: "kpi" as const,
    data: { title: "Receita Total", value: "R$ 156.789", change: 8.2, changeLabel: "vs mês anterior", icon: <DollarSign className="w-5 h-5 text-primary" /> },
  },
  {
    id: "kpi-vendas",
    name: "KPI - Vendas",
    type: "kpi" as const,
    data: { title: "Vendas", value: "3,456", change: -2.4, changeLabel: "vs mês anterior", icon: <ShoppingCart className="w-5 h-5 text-primary" /> },
  },
  {
    id: "kpi-conversao",
    name: "KPI - Taxa de Conversão",
    type: "kpi" as const,
    data: { title: "Taxa de Conversão", value: "4.28%", change: 15.3, changeLabel: "vs mês anterior", icon: <TrendingUp className="w-5 h-5 text-primary" /> },
  },
  {
    id: "chart-vendas-tempo",
    name: "Gráfico - Vendas ao Longo do Tempo",
    type: "chart" as const,
    chartType: "area" as const,
    data: [
      { name: "Jan", value: 4000 },
      { name: "Fev", value: 3000 },
      { name: "Mar", value: 5000 },
      { name: "Abr", value: 4500 },
      { name: "Mai", value: 6000 },
      { name: "Jun", value: 5500 },
    ],
  },
  {
    id: "chart-vendas-produto",
    name: "Gráfico - Vendas por Produto",
    type: "chart" as const,
    chartType: "bar" as const,
    data: [
      { name: "Produto A", value: 4000 },
      { name: "Produto B", value: 3000 },
      { name: "Produto C", value: 2000 },
      { name: "Produto D", value: 2780 },
      { name: "Produto E", value: 1890 },
    ],
  },
  {
    id: "chart-distribuicao",
    name: "Gráfico - Distribuição por Categoria",
    type: "chart" as const,
    chartType: "pie" as const,
    data: [
      { name: "Categoria A", value: 400 },
      { name: "Categoria B", value: 300 },
      { name: "Categoria C", value: 200 },
      { name: "Categoria D", value: 100 },
    ],
  },
  {
    id: "table-produtos",
    name: "Tabela - Top Produtos",
    type: "table" as const,
    data: {
      headers: ["Produto", "Vendas", "Receita", "Crescimento"],
      rows: [
        ["Produto Premium", "1,234", "R$ 45.678", "+12%"],
        ["Produto Standard", "2,345", "R$ 34.567", "+8%"],
        ["Produto Basic", "3,456", "R$ 23.456", "+5%"],
        ["Produto Lite", "4,567", "R$ 12.345", "+3%"],
        ["Produto Free", "5,678", "R$ 5.678", "+1%"],
      ],
    },
  },
];

type DashboardOption = typeof dashboardOptions[number];

export function ContextPanel() {
  const [selectedDashboards, setSelectedDashboards] = useState<DashboardOption[]>([]);

  const addDashboard = (dashboard: DashboardOption) => {
    if (!selectedDashboards.find((d) => d.id === dashboard.id)) {
      setSelectedDashboards((prev) => [...prev, dashboard]);
    }
  };

  const removeDashboard = (id: string) => {
    setSelectedDashboards((prev) => prev.filter((d) => d.id !== id));
  };

  const availableDashboards = dashboardOptions.filter(
    (d) => !selectedDashboards.find((s) => s.id === d.id)
  );

  const renderDashboard = (dashboard: DashboardOption) => {
    switch (dashboard.type) {
      case "kpi":
        return (
          <KPICard
            title={dashboard.data.title}
            value={dashboard.data.value}
            change={dashboard.data.change}
            changeLabel={dashboard.data.changeLabel}
            icon={dashboard.data.icon}
          />
        );
      case "chart":
        return (
          <ChartCard
            title={dashboard.name.replace("Gráfico - ", "")}
            type={dashboard.chartType!}
            data={dashboard.data as any[]}
          />
        );
      case "table":
        return (
          <DataTable
            title={dashboard.name.replace("Tabela - ", "")}
            headers={(dashboard.data as any).headers}
            rows={(dashboard.data as any).rows}
          />
        );
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b flex items-center justify-between">
        <div>
          <h3 className="font-display font-semibold text-lg">Contexto</h3>
          <p className="text-sm text-muted-foreground">
            Adicione dashboards para contextualizar a IA
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="gradient" size="sm" disabled={availableDashboards.length === 0}>
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Dashboard
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64 bg-popover z-50">
            {availableDashboards.map((dashboard) => (
              <DropdownMenuItem
                key={dashboard.id}
                onClick={() => addDashboard(dashboard)}
                className="cursor-pointer"
              >
                {dashboard.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-4">
          {selectedDashboards.length === 0 ? (
            <Card variant="glass">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Nenhum dashboard selecionado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  Clique em "Adicionar Dashboard" para incluir visualizações como contexto para a IA. 
                  Quanto mais contexto você fornecer, mais precisas serão as respostas.
                </p>
              </CardContent>
            </Card>
          ) : (
            selectedDashboards.map((dashboard) => (
              <div key={dashboard.id} className="relative group">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute -top-2 -right-2 z-10 h-6 w-6 rounded-full bg-destructive text-destructive-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => removeDashboard(dashboard.id)}
                >
                  <X className="w-3 h-3" />
                </Button>
                {renderDashboard(dashboard)}
              </div>
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
