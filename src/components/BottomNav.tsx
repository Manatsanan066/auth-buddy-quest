import { Home, Search, Heart, User, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BottomNav() {
  const navItems = [
    { icon: Home, label: "Home", active: true },
    { icon: Search, label: "Search", active: false },
    { icon: Plus, label: "Create", active: false, special: true },
    { icon: Heart, label: "Activity", active: false },
    { icon: User, label: "Profile", active: false },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass-card border-t border-white/10">
      <div className="flex items-center justify-around p-2">
        {navItems.map((item, index) => (
          <Button
            key={item.label}
            variant="ghost"
            size="icon"
            className={`
              h-12 w-12 rounded-full transition-all duration-300
              ${item.active 
                ? "bg-primary text-primary-foreground shadow-glow" 
                : item.special
                ? "gradient-primary text-white shadow-lg"
                : "text-white/70 hover:text-white hover:bg-white/10"
              }
            `}
          >
            <item.icon className="h-5 w-5" />
            <span className="sr-only">{item.label}</span>
          </Button>
        ))}
      </div>
    </nav>
  );
}