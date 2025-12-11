import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BarChart3, LogOut, MessageSquare } from "lucide-react";

interface AppHeaderProps {
  showChatButton?: boolean;
  onChatClick?: () => void;
}

export function AppHeader({ showChatButton, onChatClick }: AppHeaderProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/app" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl">Just BI</span>
        </Link>

        <div className="flex items-center gap-3">
          {showChatButton && (
            <Button variant="gradient" onClick={onChatClick}>
              <MessageSquare className="w-4 h-4" />
              Chat com IA
            </Button>
          )}
          <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="w-4 h-4" />
            Sair
          </Button>
        </div>
      </div>
    </header>
  );
}
