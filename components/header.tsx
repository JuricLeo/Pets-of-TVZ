"use client";

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
        "fixed z-50 w-full py-6 px-36 duration-300"
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
        <div className="flex space-x-12">
          <Link href="/">Home</Link>
          <Link href="/">Gallery</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/">Settings</Link>
        </div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
