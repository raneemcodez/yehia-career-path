"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/plan", label: "Plan" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-stone-200 bg-stone-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">

        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 text-2xl font-bold tracking-tight text-neutral-900"
          onClick={() => setMenuOpen(false)}
        >
          pathway<span className="text-[#74836A]">.</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                link.href === "/dashboard"
                  ? "rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700"
                  : "text-sm font-medium text-neutral-700 transition hover:text-[#74836A]"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-stone-300 text-2xl text-neutral-900 transition hover:bg-stone-100 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-stone-200 px-4 py-3 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={
                  link.href === "/dashboard"
                    ? "rounded-lg bg-neutral-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
                    : "rounded-lg px-4 py-3 text-sm font-medium text-neutral-700 transition hover:bg-stone-100 hover:text-[#74836A]"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
