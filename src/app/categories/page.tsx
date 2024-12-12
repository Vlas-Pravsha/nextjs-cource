"use client";

import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { PostCategories } from "@/components/PostCategories";
import { PostLayout } from "@/components/PostLayout";
import { PostPagination } from "@/components/PostPagination";
import { NoPostsMessage } from "@/components/NoPostsMessage";
import { LoadingMessage } from "@/components/LoadingMessage";
import { useCategory } from "@/context/CategoryContext";
import { usePosts } from "@/hooks/usePosts";

const POSTS_PER_PAGE = 8;

export default function Categories() {
  const { selectedCategory } = useCategory();
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

  const {
    filteredPosts,
    loading,
    addFavorite,
    removeFavorite,
    isPostFavorite,
  } = usePosts(token, selectedCategory);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <span className="cursor-pointer hover:text-foreground">Home</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{selectedCategory}</span>
        </div>

        <PostCategories viewMode={viewMode} onViewModeChange={setViewMode} />

        {loading ? (
          <LoadingMessage />
        ) : filteredPosts.length === 0 ? (
          <NoPostsMessage />
        ) : (
          <>
            <PostLayout
              posts={paginatedPosts}
              viewMode={viewMode}
              onAddFavorite={addFavorite}
              onRemoveFavorite={removeFavorite}
              isPostFavorite={isPostFavorite}
            />
            <div className="mt-8">
              <PostPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
