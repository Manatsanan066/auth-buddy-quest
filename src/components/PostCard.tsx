import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PostCardProps {
  username: string;
  avatar: string;
  image: string;
  caption: string;
  likes: number;
  timeAgo: string;
}

export function PostCard({ username, avatar, image, caption, likes, timeAgo }: PostCardProps) {
  return (
    <div className="glass-card rounded-3xl overflow-hidden shadow-card mb-6">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full gradient-primary p-0.5">
            <img
              src={avatar}
              alt={username}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-white">{username}</p>
            <p className="text-xs text-white/50">{timeAgo}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </div>

      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt="Post"
          className="w-full h-80 object-cover"
        />
      </div>

      {/* Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white/70 hover:text-red-400 transition-colors">
              <Heart className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
              <MessageCircle className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
              <Send className="h-6 w-6" />
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
            <Bookmark className="h-6 w-6" />
          </Button>
        </div>

        {/* Likes */}
        <p className="font-semibold text-white mb-2">{likes.toLocaleString()} likes</p>

        {/* Caption */}
        <p className="text-white/90">
          <span className="font-semibold">{username}</span> {caption}
        </p>
      </div>
    </div>
  );
}