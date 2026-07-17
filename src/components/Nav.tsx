"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#showcase", label: "Showcase" },
  { href: "#download", label: "Download" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/75 backdrop-blur-xl border-b border-border-soft"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-fg-soft hover:text-fg transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#download"
            className="text-sm text-fg-soft hover:text-fg transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="#download"
            className="gradient-border inline-flex items-center justify-center h-9 px-4 text-sm font-medium text-fg"
          >
            Get the app
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md text-fg-soft hover:text-fg hover:bg-bg-elevated"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border-soft bg-bg/95 backdrop-blur-xl">
          <nav className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-fg-soft hover:text-fg"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#download"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center h-10 px-4 rounded-full bg-brand text-bg text-sm font-medium"
            >
              Get the app
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}