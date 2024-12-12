"use client";

import { useEffect, useState } from "react";
import PostService, { type Post } from "@/services/post-service";

export function usePosts(token: string | null, selectedCategory: string) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [favorites, setFavorites] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const postService = new PostService(
    process.env.NEXT_PUBLIC_SERVER_API ?? "",
    token,
  );

  useEffect(() => {
    if (!token) return;

    async function fetchPosts() {
      setLoading(true);
      try {
        const fetchedPosts = await postService.getPosts();
        setPosts(fetchedPosts);
        loadFavorites();
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }

    void fetchPosts();
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

  const getFavoritesKey = (userId: string | null) => `favorites_${userId}`;

  const loadFavorites = () => {
    if (token) {
      const storedFavorites = localStorage.getItem(getFavoritesKey(token));
      setFavorites(
        storedFavorites ? (JSON.parse(storedFavorites) as Post[]) : [],
      );
    }
  };

  const addFavorite = (post: Omit<Post, "user_id">) => {
    if (token) {
      const updatedFavorites = [...favorites, { ...post, user_id: token }];
      setFavorites(updatedFavorites);
      localStorage.setItem(
        getFavoritesKey(token),
        JSON.stringify(updatedFavorites),
      );
    }
  };

  const removeFavorite = (postId: string) => {
    if (token) {
      const updatedFavorites = favorites.filter((fav) => fav._id !== postId);
      setFavorites(updatedFavorites);
      localStorage.setItem(
        getFavoritesKey(token),
        JSON.stringify(updatedFavorites),
      );
    }
  };

  const isPostFavorite = (postId: string) =>
    favorites.some((fav) => fav._id === postId);

  return {
    posts,
    filteredPosts,
    favorites,
    loading,
    addFavorite,
    removeFavorite,
    isPostFavorite,
  };
}
