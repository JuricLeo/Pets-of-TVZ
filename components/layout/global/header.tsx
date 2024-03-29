"use client";

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

export default function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        scrolling ? "bg-[#171616]" : "bg-black",
        "fixed z-50 w-full py-6 lg:px-36 px-4 duration-300"
      )}
    >
      <div className="flex justify-between items-center">
        <div className="relative w-[100px] h-[50px]">
          <Link href="/">
            <Image
              alt="Logo"
              className="object-contain rounded-md"
              src="/logo.svg"
              fill
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-36">
          <div className="flex space-x-12">
            <Link href="/">Home</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/settings">Settings</Link>
          </div>
          <UserButton afterSignOutUrl="/" />
        </div>
        <div className="flex lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/">Gallery</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/contact">Contact</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <UserButton afterSignOutUrl="/" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
