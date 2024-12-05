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

  const POSTS_PER_PAGE = 8;

  const postService = new PostService(
    process.env.NEXT_PUBLIC_SERVER_API ?? "",
    token,
  );

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

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

  const paginatedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <span className="cursor-pointer hover:text-foreground">Home</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{activeCategory}</span>
        </div>

        <PostCategories
          activeCategory={activeCategory}
          onCategoryChange={(category) => {
            setActiveCategory(category);
            setCurrentPage(1);
          }}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />

        <PostLayout posts={paginatedPosts} viewMode={viewMode} />

        <div className="mt-8">
          <PostPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
