import { KPICard } from "./KPICard";
import { ChartCard } from "./ChartCard";
import { DataTable } from "./DataTable";
import { Users, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";

// Dados de exemplo
const areaData = [
  { name: "Jan", value: 4000 },
  { name: "Fev", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Abr", value: 4500 },
  { name: "Mai", value: 6000 },
  { name: "Jun", value: 5500 },
];

const barData = [
  { name: "Produto A", value: 4000 },
  { name: "Produto B", value: 3000 },
  { name: "Produto C", value: 2000 },
  { name: "Produto D", value: 2780 },
  { name: "Produto E", value: 1890 },
];

const pieData = [
  { name: "Categoria A", value: 400 },
  { name: "Categoria B", value: 300 },
  { name: "Categoria C", value: 200 },
  { name: "Categoria D", value: 100 },
];

const tableHeaders = ["Produto", "Vendas", "Receita", "Crescimento"];
const tableRows = [
  ["Produto Premium", "1,234", "R$ 45.678", "+12%"],
  ["Produto Standard", "2,345", "R$ 34.567", "+8%"],
  ["Produto Basic", "3,456", "R$ 23.456", "+5%"],
  ["Produto Lite", "4,567", "R$ 12.345", "+3%"],
  ["Produto Free", "5,678", "R$ 5.678", "+1%"],
];

export function DashboardGrid() {
  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Total de Usuários"
          value="12,543"
          change={12.5}
          changeLabel="vs mês anterior"
          icon={<Users className="w-5 h-5 text-primary" />}
        />
        <KPICard
          title="Receita Total"
          value="R$ 156.789"
          change={8.2}
          changeLabel="vs mês anterior"
          icon={<DollarSign className="w-5 h-5 text-primary" />}
        />
        <KPICard
          title="Vendas"
          value="3,456"
          change={-2.4}
          changeLabel="vs mês anterior"
          icon={<ShoppingCart className="w-5 h-5 text-primary" />}
        />
        <KPICard
          title="Taxa de Conversão"
          value="4.28%"
          change={15.3}
          changeLabel="vs mês anterior"
          icon={<TrendingUp className="w-5 h-5 text-primary" />}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Vendas ao Longo do Tempo" type="area" data={areaData} />
        <ChartCard title="Vendas por Produto" type="bar" data={barData} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ChartCard title="Distribuição por Categoria" type="pie" data={pieData} />
        <div className="lg:col-span-2">
          <DataTable title="Top Produtos" headers={tableHeaders} rows={tableRows} />
        </div>
      </div>
    </div>
  );
}
