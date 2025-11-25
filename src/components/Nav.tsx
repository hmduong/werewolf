"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname() || "/";

  const linkClass = (path: string) =>
    `text-sm font-medium ${pathname === path ? "text-black dark:text-zinc-50" : "text-zinc-700 dark:text-zinc-200"}`;

  return (
    <header className="w-full border-b border-black/[.06] dark:border-white/[.08] bg-white dark:bg-black">
      <nav className="mx-auto max-w-3xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold">
          Werewolf
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/" className={linkClass("/")} aria-current={pathname === "/" ? "page" : undefined}>
            Home
          </Link>
          <Link href="/about" className={linkClass("/about")} aria-current={pathname === "/about" ? "page" : undefined}>
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
