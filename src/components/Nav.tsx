"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const navLinks = [
  { href: "#modules", label: "四大模塊" },
  { href: "#workflow", label: "點樣用" },
  { href: "#personas", label: "適合你" },
  { href: "#download", label: "下載" },
  { href: "#faq", label: "常見問題" },
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
          ? "glass border-b border-brand/10"
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
              className="text-sm text-fg-soft hover:text-brand transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#download"
            className="text-sm text-fg-soft hover:text-brand transition-colors"
          >
            登入
          </Link>
          <Link
            href="#download"
            className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium text-white bg-brand hover:bg-brand-strong rounded-full transition-colors shadow-sm shadow-brand/20"
          >
            免費下載
          </Link>
        </div>

        <button
          aria-label="開關選單"
          aria-expanded={open}
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md text-fg-soft hover:text-brand hover:bg-brand-tint"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-brand/10 bg-white/95 backdrop-blur-xl">
          <nav className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-fg-soft hover:text-brand"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#download"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center h-10 px-4 rounded-full bg-brand text-white text-sm font-medium"
            >
              免費下載
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}