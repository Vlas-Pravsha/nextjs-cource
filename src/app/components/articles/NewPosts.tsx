"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewPostCard } from "./NewPostCard";
import PostService, { type Post } from "@/services/post-service";
import { useEffect, useState } from "react";
import { pagesConfig } from "@/config/pages.config";
import Link from "next/link";

export function NewPosts() {
  const [token, setToken] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  const postService = new PostService(
    process.env.NEXT_PUBLIC_SERVER_API ?? "",
    token,
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const fetchedPosts = await postService.getPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    if (token) {
      void fetchPosts();
    }
  }, [token]);

  const sortedPosts = postService.sortPostsByDate(posts);

  return (
    <div className="p-4">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">📌 New Posts</h2>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <Link href={pagesConfig.categories}>Show All</Link>
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {sortedPosts.slice(0, 6).map((post, index) => (
          <NewPostCard key={`${post.title} + ${index}`} post={post} />
        ))}
      </div>
    </div>
  );
}
