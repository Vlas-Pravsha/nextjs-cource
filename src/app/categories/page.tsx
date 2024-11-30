"use client";

import { useState } from "react";
import { posts } from "@/constants/posts";
import { ChevronRight } from "lucide-react";
import { PostCategories } from "@/components/PostCategories";
import { PostLayout } from "@/components/PostLayout";
import { PostPagination } from "@/components/PostPagination";

const TOTAL_PAGES = Math.ceil(posts.length / 9);

export default function Categories() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<string>("Sport");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

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
