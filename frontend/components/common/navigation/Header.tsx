"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { GraduationCap } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "My Learning", href: "/profile" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-8">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6" />
            <span className="font-bold">LearnHub</span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center space-x-6 text-sm">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === item.href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Link href="/login">
            <Button variant="ghost">Log in</Button>
          </Link>
          <Link href="/register">
            <Button>Sign up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
