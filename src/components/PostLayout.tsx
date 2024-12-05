"use client";

import { Bookmark } from "lucide-react";
import {
  AspectRatio,
  Card,
  Separator,
  Avatar,
  AvatarFallback,
} from "@/components/ui/";

import { cn } from "@/lib/utils";
import { type Post } from "@/services/post-service";
import DeleteButton from "./DeleteButton";

interface BlogGridProps {
  posts: Omit<Post, "user_id">[];
  viewMode: "grid" | "list";
  onDeletePost?: (postId: string) => void;
  isDelete?: boolean;
}

export function PostLayout({
  viewMode,
  posts,
  onDeletePost,
  isDelete = false,
}: BlogGridProps) {
  return (
    <div
      className={cn(
        "grid gap-6",
        viewMode === "grid"
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          : "grid-cols-1",
      )}
    >
      {posts.map((post, index) => (
        <Card
          key={`post${post.title}-${index}`}
          className="relative overflow-hidden transition-shadow hover:shadow-lg"
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
            {isDelete && (
              <DeleteButton
                onDelete={() => onDeletePost && onDeletePost(post.id)}
              />
            )}

            <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
              {post.description}
            </p>
            <Separator className="mb-4" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{post.author.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {post.createdAt?.slice(0, 10)}
                  </p>
                </div>
              </div>
              <button>
                <Bookmark className={cn("h-5 w-5 text-gray-400")} />
              </button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
