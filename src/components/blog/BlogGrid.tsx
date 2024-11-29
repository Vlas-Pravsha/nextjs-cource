import type { Post } from "../../types/post";
import { Bookmark } from "lucide-react";
import { AspectRatio } from "../ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

interface BlogGridProps {
  posts: Post[];
  viewMode: "grid" | "list";
}

export function BlogGrid({ posts, viewMode }: BlogGridProps) {
  return (
    <div
      className={cn(
        "grid gap-6",
        viewMode === "grid"
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          : "grid-cols-1",
      )}
    >
      {posts.map((post) => (
        <Card
          key={post.id}
          className="overflow-hidden transition-shadow hover:shadow-lg"
        >
          <AspectRatio ratio={16 / 9}>
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </AspectRatio>
          <div className="p-4">
            <h3 className="mb-2 line-clamp-2 text-lg font-semibold">
              {post.title}
            </h3>
            <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
              {post.excerpt}
            </p>
            <Separator className="mb-4" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.author.avatar} />
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{post.author.name}</p>
                  <p className="text-muted-foreground text-xs">{post.date}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
