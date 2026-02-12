import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

interface ChartCardProps {
  title: string;
  type: "area" | "bar" | "pie";
  data: any[];
}

const COLORS = ["hsl(150, 96%, 10%)", "hsl(150, 60%, 25%)", "hsl(150, 50%, 35%)", "hsl(150, 40%, 45%)"];

export function ChartCard({ title, type, data }: ChartCardProps) {
  const renderChart = () => {
    switch (type) {
      case "area":
        return (
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(150, 96%, 10%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(150, 96%, 10%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(150, 13%, 88%)" />
              <XAxis dataKey="name" stroke="hsl(150, 10%, 46%)" fontSize={12} />
              <YAxis stroke="hsl(150, 10%, 46%)" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(0, 0%, 100%)",
                  border: "1px solid hsl(150, 13%, 88%)",
                  borderRadius: "8px",
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="hsl(150, 96%, 10%)"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        );
      case "bar":
        return (
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(150, 13%, 88%)" />
              <XAxis dataKey="name" stroke="hsl(150, 10%, 46%)" fontSize={12} />
              <YAxis stroke="hsl(150, 10%, 46%)" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(0, 0%, 100%)",
                  border: "1px solid hsl(150, 13%, 88%)",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="value" fill="hsl(150, 96%, 10%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      case "pie":
        return (
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(0, 0%, 100%)",
                  border: "1px solid hsl(150, 13%, 88%)",
                  borderRadius: "8px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        );
    }
  };

  return (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>{renderChart()}</CardContent>
    </Card>
  );
}
