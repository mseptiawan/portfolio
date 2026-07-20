"use client";

import Link from "next/link";

const menus = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Tech",
    href: "#tech",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full   backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-wide text-foreground"
        >
          M Septiawan
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {menus.map((menu) => (
            <a
              key={menu.name}
              href={menu.href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {menu.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
