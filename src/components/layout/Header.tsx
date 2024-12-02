"use client";

import React, { useState, useEffect } from "react";
import { Bookmark, Search, LogOut, Settings, UserCircle } from "lucide-react";
import {
  Avatar,
  AvatarImage,
  Input,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  AvatarFallback,
} from "@/components/ui";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import UserService, { type UserData } from "@/services/user-service";
import { pagesConfig } from "@/config/pages.config";

export function Header() {
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

  const handleLogout = () => {
    userService.logout();
    setUser(null);
  };

  return (
    <header className="border-b">
      <ToastContainer />
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-orange-500">
            <Link href={pagesConfig.home}>MEGA.news</Link>
          </h1>

          <NavigationMenu>
            <NavigationMenuList className="hidden space-x-6 md:flex">
              <NavigationMenuItem>
                <Button variant="link">
                  <Link href={pagesConfig.categories}>Categories</Link>
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="link">
                  <Link href={pagesConfig.contact}>Contact Us</Link>
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="link">
                  <Link href={pagesConfig.about}>About Us</Link>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
            <div className="relative w-64">
              <Input
                type="search"
                placeholder="Search Anything"
                className="rounded-lg bg-gray-100 px-8 py-4"
              />
              <Search className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
            </div>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button>
                    <Avatar className="h-8 w-8 cursor-pointer">
                      {/* <AvatarImage
                        src={user.avatarUrl || "/default-avatar.png"}
                        alt="User avatar"
                      /> */}
                      <AvatarFallback>{user.username![0]}</AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem className="cursor-default">
                    <UserCircle className="mr-2 h-4 w-4" />
                    <span>{user.username}</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <Link href={pagesConfig.settings}>Profile Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bookmark className="mr-2 h-4 w-4" />
                    <Link href={pagesConfig.marked}>Saved Articles</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="text-red-500 focus:bg-red-50 focus:text-red-700"
                    onSelect={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href={pagesConfig.login}>
                  <Button variant="outline">Login</Button>
                </Link>
                <Link href={pagesConfig.register}>
                  <Button>Sign Up</Button>
                </Link>
              </div>
            )}
            <Button variant="ghost" size="icon">
              <Link href={pagesConfig.marked}>
                <Bookmark />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
