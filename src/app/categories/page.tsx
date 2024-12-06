"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { PostCategories } from "@/components/PostCategories";
import { PostLayout } from "@/components/PostLayout";
import { PostPagination } from "@/components/PostPagination";
import PostService, { type Post } from "@/services/post-service";
import { useCategory } from "@/context/CategoryContext";
import { NoPostsMessage } from "@/components/NoPostsMessage";
import { LoadingMessage } from "@/components/LoadingMessage";

export default function Categories() {
  const { selectedCategory } = useCategory();

  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [token, setToken] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false); // добавляем состояние загрузки

  const POSTS_PER_PAGE = 8;

  const postService = new PostService(
    process.env.NEXT_PUBLIC_SERVER_API ?? "",
    token,
  );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true); // начинаем загрузку
      try {
        const fetchedPosts = await postService.getPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false); // завершаем загрузку
      }
    }

    if (token) {
      void fetchPosts();
    }
  }, [token]);

  useEffect(() => {
    if (selectedCategory === "All" || !selectedCategory) {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter((post) => post.category === selectedCategory),
      );
    }
  }, [posts, selectedCategory]);

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

        <PostCategories
          activeCategory={activeCategory}
          onCategoryChange={(category) => {
            setActiveCategory(category);
            setCurrentPage(1);
          }}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />

        {loading ? (
          <LoadingMessage />
        ) : filteredPosts.length === 0 ? (
          <NoPostsMessage />
        ) : (
          <>
            <PostLayout posts={paginatedPosts} viewMode={viewMode} />
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
