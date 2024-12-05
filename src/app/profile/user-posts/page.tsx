"use client";

import { PostLayout } from "@/components/PostLayout";
import { PostPagination } from "@/components/PostPagination";
import PostService, { type Post } from "@/services/post-service";
import { useEffect, useState } from "react";

const Marked = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [token, setToken] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  const TOTAL_PAGES = Math.ceil(posts.length / 9);

  const postService = new PostService(
    process.env.NEXT_PUBLIC_SERVER_API ?? "",
    token,
  );

  async function onDeletePost(postId: string) {
    await postService.deletePost(postId);
    const filteredPosts = posts.filter((post) => post.id !== postId);
    setPosts(filteredPosts);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const fetchedPosts = await postService.getUserPosts();
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
    <div className="container mx-auto">
      <PostLayout
        viewMode="grid"
        posts={posts}
        isDelete
        onDeletePost={onDeletePost}
      />
      <PostPagination
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Marked;
