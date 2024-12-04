"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { PostCategories } from "@/components/PostCategories";
import { PostLayout } from "@/components/PostLayout";
import { PostPagination } from "@/components/PostPagination";
import PostService, { type Post } from "@/services/post-service";

export default function Categories() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<string>("Sport");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [token, setToken] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  const TOTAL_PAGES = Math.ceil(posts.length / 9);

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

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <span className="cursor-pointer hover:text-foreground">Home</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Sport</span>
        </div>

        <PostCategories
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
        <PostLayout posts={posts} viewMode={viewMode} />
        <div className="mt-8">
          <PostPagination
            currentPage={currentPage}
            totalPages={TOTAL_PAGES}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
