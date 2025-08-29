import { Bell, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="flex items-center justify-between p-4">
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
          <Menu className="h-5 w-5" />
        </Button>
        
        <div className="flex items-center space-x-1">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Mobie
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
          </Button>
        </div>
      </div>
    </header>
  );
}