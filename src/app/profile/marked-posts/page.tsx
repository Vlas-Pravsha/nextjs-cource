"use client";

import { PostLayout } from "@/components/PostLayout";
import { PostPagination } from "@/components/PostPagination";
import { type Post } from "@/services/post-service";
import { useState, useEffect } from "react";

const Marked = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [favoritePosts, setFavoritePosts] = useState<Omit<Post, "user_id">[]>(
    [],
  );
  const [token, setToken] = useState<string | null>(null);
  const TOTAL_PAGES = Math.ceil(favoritePosts.length / 9);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

  useEffect(() => {
    if (token) {
      const storedFavorites = JSON.parse(
        localStorage.getItem(`favorites_${token}`) ?? "[]",
      ) as Omit<Post, "user_id">[];
      setFavoritePosts(storedFavorites);
    }
  }, [token]);

  return (
    <div className="container mx-auto">
      <PostLayout posts={favoritePosts} viewMode="grid" />
      <PostPagination
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Marked;
