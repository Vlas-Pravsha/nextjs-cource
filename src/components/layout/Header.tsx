"use client";

import React, { useState } from "react";
import {
  Bookmark,
  Search,
  User,
  LogOut,
  Settings,
  UserCircle,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
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
} from "@/components/ui";
import Link from "next/link";

export function Header() {
  const [user, setUser] = useState({
    name: "John Doe",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&q=80",
  });

  const handleLogout = () => {
    // Implement logout logic
    setUser(null);
  };

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-orange-500">
            <Link href="/">MEGA.news</Link>
          </h1>

          <NavigationMenu>
            <NavigationMenuList className="hidden space-x-6 md:flex">
              <NavigationMenuItem>
                <Button variant="link">
                  <Link href="/categories">Categories</Link>
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="link">
                  <Link href="/contact-us">Contact Us</Link>
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="link">
                  <Link href="/about-us">About Us</Link>
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
                  <Avatar className="h-8 w-8 cursor-pointer">
                    <AvatarImage src={user.avatarUrl} alt="User avatar" />
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem className="cursor-default">
                    <UserCircle className="mr-2 h-4 w-4" />
                    <span>{user.name}</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <Link href="/profile">Profile Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bookmark className="mr-2 h-4 w-4" />
                    <Link href="/saved">Saved Articles</Link>
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
                <Link href="/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link href="/register">
                  <Button>Sign Up</Button>
                </Link>
              </div>
            )}
            <Button variant="ghost" size="icon">
              <Bookmark className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
