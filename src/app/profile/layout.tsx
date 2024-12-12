"use client";

import { Avatar, AvatarFallback, Button } from "@/components/ui";
import { pagesConfig } from "@/config/pages.config";
import UserService, { type UserData } from "@/services/user-service";
import { ChevronLeft, Home } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);

  const userService = new UserService(process.env.NEXT_PUBLIC_SERVER_API ?? "");

  useEffect(() => {
    async function getCurrentUserAsync() {
      try {
        const user = await userService.getCurrentUser();
        setUser(user);
      } catch (error) {
        console.error(error);
      }
    }
    void getCurrentUserAsync();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Link href={pagesConfig.home}>
            <ChevronLeft className="h-6 w-6" />
          </Link>
        </Button>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Home</span>
          <span className="text-sm text-muted-foreground">/</span>
          <span className="text-sm">Profile</span>
        </div>
      </div>
      <div className="mb-12 rounded-lg shadow">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80"
            alt="Cover"
            className="h-48 w-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-between gap-4 px-6 py-4 md:flex-row md:items-start">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarFallback className="bg-gray-200">
                {user?.username![0]}
              </AvatarFallback>
            </Avatar>
            <h2 className="text-lg font-semibold">{user?.username}</h2>
          </div>
          <div className="flex gap-6 px-6 py-2 text-sm text-gray-600">
            <button className="font-semibold hover:text-black">
              <Link href={pagesConfig.marked}>Marked</Link>
            </button>
            <button className="font-semibold hover:text-black">
              <Link href={pagesConfig.send}> Send Post</Link>
            </button>
            <button className="font-semibold hover:text-black">
              <Link href={pagesConfig.userPosts}>Posts</Link>
            </button>
          </div>
          <Link href={pagesConfig.home}>
            <Button aria-label="Home" variant="destructive">
              <Home size={16} />
              Home
            </Button>
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ProfileLayout;
