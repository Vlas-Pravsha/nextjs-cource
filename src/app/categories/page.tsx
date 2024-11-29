"use client";

import { useState } from "react";
import { BlogHeader } from "./components/BlogHeader";
import { BlogCategories } from "./components/BlogCategories";
import { BlogGrid } from "./components/BlogGrid";
import { BlogPagination } from "./components/BlogPagination";
import { posts } from "@/constants/posts";

export default function Categories() {
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
