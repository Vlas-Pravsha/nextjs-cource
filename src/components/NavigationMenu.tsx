"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Bookmark,
  LogOut,
  Search,
  Send,
  Settings,
  UserCircle,
} from "lucide-react";

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
  NavigationMenu as Nav,
  NavigationMenuItem,
  NavigationMenuList,
  AvatarFallback,
} from "@/components/ui/";

import UserService, { type UserData } from "@/services/user-service";
import { pagesConfig } from "@/config/pages.config";
import PostService from "@/services/post-service";

export function NavigationMenu() {
  const [user, setUser] = useState<UserData | null>(null);

  const userService = new UserService(process.env.NEXT_PUBLIC_SERVER_API ?? "");
  const postrService = new PostService(
    process.env.NEXT_PUBLIC_SERVER_API ?? "",
  );

  const handleLogout = () => {
    userService.logout();
    setUser(null);
  };

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
    <div className="flex w-full items-center justify-between">
      <Nav>
        <NavigationMenuList className="hidden space-x-6 lg:flex">
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
      </Nav>

      <div className="flex items-center space-x-4">
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button>
                <Avatar className="h-8 w-8 cursor-pointer">
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
                <Link href={pagesConfig.userPosts}>My posts</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bookmark className="mr-2 h-4 w-4" />
                <Link href={pagesConfig.marked}>Saved Articles</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Send className="mr-2 h-4 w-4" />
                <Link href={pagesConfig.send}>Post Article</Link>
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
  );
}
