import { Plus } from "lucide-react";

interface StoryCardProps {
  username?: string;
  avatar?: string;
  isAdd?: boolean;
}

export function StoryCard({ username, avatar, isAdd = false }: StoryCardProps) {
  if (isAdd) {
    return (
      <div className="flex flex-col items-center space-y-2">
        <div className="relative w-16 h-16 rounded-full gradient-primary flex items-center justify-center shadow-glow">
          <Plus className="h-6 w-6 text-white" />
        </div>
        <span className="text-xs text-white/70">Your story</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="relative w-16 h-16 rounded-full gradient-primary p-0.5 shadow-glow">
        <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
          <img
            src={avatar || "/placeholder.svg"}
            alt={username}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      <span className="text-xs text-white/70 max-w-[60px] truncate">
        {username}
      </span>
    </div>
  );
}