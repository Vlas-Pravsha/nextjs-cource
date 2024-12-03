"use client";

import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { NavigationMenu } from "../NavigationMenu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui";
import { Menu } from "lucide-react";
import { MobileNav } from "../MobileNav";

import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { pagesConfig } from "@/config/pages.config";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="container mx-auto flex items-center justify-between gap-12 px-4 py-4">
        <h1 className="text-2xl font-bold text-orange-500">
          <Link href={pagesConfig.home}>MEGA.news</Link>
        </h1>

        <div className="hidden w-full md:block">
          <NavigationMenu />
        </div>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <MobileNav />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <ToastContainer />
    </header>
  );
}
