"use client";

import Link from "next/link";
import { Apple, Play, QrCode, Mail, Bell } from "lucide-react";

export function Download() {
  return (
    <section id="download" className="py-24 sm:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy + CTAs */}
          <div>
            <p className="text-xs uppercase tracking-wider text-brand font-medium">
              Get the app
            </p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-fg">
              Ship your first site today.{" "}
              <span className="text-fg-soft">On any device.</span>
            </h2>
            <p className="mt-5 text-lg text-fg-soft leading-relaxed">
              Free to start, no credit card required. iOS, Android, and Web all
              stay in sync — edit anywhere, publish everywhere.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#"
                className="inline-flex items-center gap-3 h-14 px-5 rounded-xl bg-fg text-bg hover:bg-fg-soft transition-colors"
              >
                <Apple className="h-7 w-7" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase tracking-wide opacity-70">
                    Download on the
                  </div>
                  <div className="text-base font-semibold">App Store</div>
                </div>
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-3 h-14 px-5 rounded-xl border border-border bg-bg-card hover:bg-bg-elevated transition-colors"
              >
                <Play className="h-7 w-7 text-fg" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase tracking-wide text-fg-muted">
                    Get it on
                  </div>
                  <div className="text-base font-semibold text-fg">
                    Google Play
                  </div>
                </div>
              </Link>
            </div>

            <div className="mt-8">
              <p className="text-sm text-fg-soft">
                Or join the waitlist — we&apos;ll email you the moment we ship
                to your region.
              </p>
              <form
                className="mt-3 flex flex-col sm:flex-row gap-2 max-w-md"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-fg-muted" />
                  <input
                    type="email"
                    required
                    placeholder="you@business.com"
                    className="w-full h-11 pl-10 pr-4 rounded-full bg-bg-card border border-border text-fg placeholder:text-fg-muted focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/50"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-brand text-bg font-medium hover:bg-brand-soft transition-colors"
                >
                  <Bell className="h-4 w-4" />
                  Notify me
                </button>
              </form>
            </div>
          </div>

          {/* Right — QR + phone visual */}
          <div className="relative">
            <div className="relative mx-auto max-w-md">
              {/* QR card */}
              <div className="relative rounded-3xl border border-border bg-bg-card p-6 shadow-2xl shadow-brand/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-fg-muted">
                    Scan to install
                  </span>
                  <QrCode className="h-4 w-4 text-brand" />
                </div>
                <div className="aspect-square w-full rounded-2xl bg-bg flex items-center justify-center p-6">
                  {/* Faux QR — just a styled block, real QR can be wired later */}
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg, var(--fg) 0 6px, transparent 6px 12px), repeating-linear-gradient(90deg, var(--fg) 0 6px, transparent 6px 12px)",
                      maskImage:
                        "radial-gradient(circle at 30% 30%, black 18%, transparent 19%), radial-gradient(circle at 70% 70%, black 18%, transparent 19%), linear-gradient(black, black)",
                      maskComposite: "add, add",
                      WebkitMaskComposite: "source-over, source-over",
                      borderRadius: "12px",
                      opacity: 0.85,
                    }}
                    aria-label="QR code placeholder"
                  />
                </div>
                <p className="mt-4 text-xs text-center text-fg-muted">
                  Opens App Store / Play Store · iOS 16+ · Android 10+
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}