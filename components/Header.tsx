"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-bayelsa-deep/10 bg-white/94 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-bayelsa-green text-base font-black text-white">
            TM
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-black text-bayelsa-deep sm:text-base">
              Tombra Mohammed
            </span>
            <span className="block truncate text-xs font-semibold text-slate-600">
              YPP | Bayelsa West
            </span>
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-bayelsa-deep/15 text-bayelsa-deep md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Open navigation menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="text-sm font-black leading-none">
            {open ? "Close" : "Menu"}
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-bayelsa-palm text-bayelsa-deep"
                    : "text-slate-700 hover:bg-slate-100 hover:text-bayelsa-deep"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-bayelsa-deep/10 bg-white px-4 py-3 md:hidden"
        >
          <div className="mx-auto grid max-w-6xl gap-1">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-3 text-sm font-semibold ${
                    active
                      ? "bg-bayelsa-palm text-bayelsa-deep"
                      : "text-slate-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
