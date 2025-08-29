import { MobileHeader } from "@/components/MobileHeader";
import { BottomNav } from "@/components/BottomNav";
import { StoryCard } from "@/components/StoryCard";
import { PostCard } from "@/components/PostCard";

const Index = () => {
  const stories = [
    { username: "alex_photo", avatar: "/placeholder.svg" },
    { username: "sarah_art", avatar: "/placeholder.svg" },
    { username: "mike_travel", avatar: "/placeholder.svg" },
    { username: "emma_design", avatar: "/placeholder.svg" },
    { username: "john_music", avatar: "/placeholder.svg" },
  ];

  const posts = [
    {
      username: "alex_photo",
      avatar: "/placeholder.svg",
      image: "/placeholder.svg",
      caption: "Beautiful sunset from my weekend adventure! 🌅 The colors were absolutely stunning.",
      likes: 1234,
      timeAgo: "2h"
    },
    {
      username: "sarah_art",
      avatar: "/placeholder.svg", 
      image: "/placeholder.svg",
      caption: "New artwork finished! This piece took me weeks to complete but I'm so happy with the result ✨",
      likes: 892,
      timeAgo: "4h"
    },
    {
      username: "mike_travel",
      avatar: "/placeholder.svg",
      image: "/placeholder.svg", 
      caption: "Coffee break in Paris ☕️ Nothing beats the atmosphere of a French café in the morning",
      likes: 567,
      timeAgo: "6h"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Gradient Background */}
      <div className="fixed inset-0 gradient-primary opacity-90"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <MobileHeader />
        
        <main className="pt-20 pb-20 px-4">
          {/* Stories Section */}
          <div className="mb-6">
            <div className="flex space-x-4 overflow-x-auto pb-2">
              <StoryCard isAdd />
              {stories.map((story, index) => (
                <StoryCard
                  key={index}
                  username={story.username}
                  avatar={story.avatar}
                />
              ))}
            </div>
          </div>

          {/* Posts Section */}
          <div className="space-y-0">
            {posts.map((post, index) => (
              <PostCard
                key={index}
                username={post.username}
                avatar={post.avatar}
                image={post.image}
                caption={post.caption}
                likes={post.likes}
                timeAgo={post.timeAgo}
              />
            ))}
          </div>
        </main>

        <BottomNav />
      </div>
    </div>
  );
};

export default Index;
