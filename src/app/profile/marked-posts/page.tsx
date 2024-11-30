"use client";

import { PostLayout } from "@/components/PostLayout";
import { PostPagination } from "@/components/PostPagination";
import { posts } from "@/constants/posts";
import { useState } from "react";

const TOTAL_PAGES = Math.ceil(posts.length / 9);

const Marked = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="container mx-auto">
      <PostLayout posts={posts} viewMode="grid" />
      <PostPagination
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Marked;
