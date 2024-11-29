"use client";

import { useState } from "react";
import { posts } from "../../constants/posts";
import { BlogCategories } from "./BlogCategories";
import { BlogGrid } from "./BlogGrid";
import { BlogHeader } from "./BlogHeader";
import { BlogPagination } from "./BlogPagination";

export function BlogLayout() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<string>("Sport");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const totalPages = 9;

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8">
        <BlogHeader />
        <BlogCategories
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
        <BlogGrid posts={posts} viewMode={viewMode} />
        <div className="mt-8">
          <BlogPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
