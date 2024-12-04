"use client";

import React from "react";
import Link from "next/link";
import { UserCircle, Settings, Bookmark, LogOut, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components//ui/input";
import { pagesConfig } from "@/config/pages.config";

interface MobileNavProps {
  user?: {
    username?: string;
  };
  handleLogout?: () => void;
}

export function MobileNav({ user, handleLogout }: MobileNavProps) {
  return (
    <div className="flex flex-col space-y-4 p-4">
      {/* Search Bar */}
      <div className="relative">
        <Input
          type="search"
          placeholder="Search Anything"
          className="w-full rounded-lg bg-gray-100 px-8 py-4"
        />
        <Search className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
      </div>

      {/* Navigation Links */}
      <nav className="space-y-2">
        <Button variant="ghost" className="w-full justify-start">
          <Link href={pagesConfig.categories} className="w-full text-left">
            Categories
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Link href={pagesConfig.contact} className="w-full text-left">
            Contact Us
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Link href={pagesConfig.about} className="w-full text-left">
            About Us
          </Link>
        </Button>
      </nav>

      {/* User Section */}
      {user ? (
        <div className="space-y-2">
          <div className="flex items-center space-x-2 rounded-lg bg-gray-100 p-2">
            <UserCircle className="h-6 w-6" />
            <span className="font-medium">{user.username}</span>
          </div>

          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            <Link href={pagesConfig.settings} className="w-full text-left">
              Profile Settings
            </Link>
          </Button>

          <Button variant="ghost" className="w-full justify-start">
            <Bookmark className="mr-2 h-4 w-4" />
            <Link href={pagesConfig.marked} className="w-full text-left">
              Saved Articles
            </Link>
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start text-red-500 hover:text-red-700"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      ) : (
        <div className="space-y-2">
          <Link href={pagesConfig.login} className="w-full">
            <Button variant="outline" className="w-full">
              Login
            </Button>
          </Link>
          <Link href={pagesConfig.register} className="w-full">
            <Button className="w-full">Sign-Up</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
