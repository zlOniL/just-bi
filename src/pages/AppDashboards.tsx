import { useState } from "react";
import { AppHeader } from "@/components/layout/AppHeader";
import { InsightCard } from "@/components/dashboard/InsightCard";
import { DashboardGrid } from "@/components/dashboard/DashboardGrid";
import { ChatModal } from "@/components/chat/ChatModal";

const AppDashboards = () => {
  const [chatOpen, setChatOpen] = useState(false);

  const mainInsight = 
    "Com base na análise dos seus dados, identificamos um crescimento consistente de 12% nas vendas ao longo dos últimos 6 meses. Os principais drivers são: aumento de 18% no tráfego orgânico, melhora de 25% na taxa de conversão de leads qualificados, e expansão bem-sucedida para 3 novos mercados regionais. Recomendamos focar em estratégias de retenção para maximizar o valor do cliente.";

  return (
    <div className="min-h-screen bg-background">
      <AppHeader showChatButton onChatClick={() => setChatOpen(true)} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold mb-2">Seus Dashboards</h1>
          <p className="text-muted-foreground">
            Visualize insights e métricas dos seus dados
          </p>
        </div>

        {/* Main Insight */}
        <div className="mb-8">
          <InsightCard insight={mainInsight} />
        </div>

        {/* Dashboard Grid */}
        <DashboardGrid />
      </main>

      {/* Chat Modal */}
      <ChatModal open={chatOpen} onOpenChange={setChatOpen} />
    </div>
  );
};

export default AppDashboards;
