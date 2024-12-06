import { Bookmark } from "lucide-react";
import { type Post } from "@/services/post-service";

import {
  Card,
  CardContent,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
} from "@/components/ui/";

interface NewPostCardProps {
  post: Omit<Post, "user_id">;
}

export function NewPostCard({ post }: NewPostCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col gap-4 xl:flex-row xl:gap-6">
          <img
            loading="lazy"
            src={post.image}
            alt={post.title}
            className="h-48 w-full rounded-lg object-cover xl:h-48 xl:w-64"
          />
          <div className="min-w-0 flex-1 p-4">
            <h3 className="mb-1 line-clamp-1 text-base font-semibold">
              {post.title}
            </h3>
            <p className="mb-2 line-clamp-2 text-sm text-muted-foreground">
              {post.description}
            </p>
            <div className="flex items-center justify-between rounded-lg bg-gray-100 px-2 py-1">
              <div className="flex items-center space-x-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={post.author.avatar} />
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">
                    {post.author.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {post.createdAt?.slice(0, 10)}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="ml-2 flex-shrink-0"
              >
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
