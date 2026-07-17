import Link from "next/link";
import { ArrowRight, Sparkles, Apple, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Gradient + grid backdrop */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-grid" aria-hidden />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-card/60 backdrop-blur px-3 py-1 text-xs text-fg-soft">
          <Sparkles className="h-3.5 w-3.5 text-brand" />
          <span>AI-native site builder · Now in public beta</span>
          <ArrowRight className="h-3.5 w-3.5 text-fg-muted" />
        </div>

        {/* Headline */}
        <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-fg">
          Build your site <br className="hidden sm:block" />
          with{" "}
          <span className="gradient-text">AI, not weekends.</span>
        </h1>

        {/* Subhead */}
        <p className="mt-6 mx-auto max-w-2xl text-lg sm:text-xl text-fg-soft leading-relaxed">
          Opensite turns a one-line brief into a launched business website —
          design, copy, SEO, and growth tools wired up automatically.{" "}
          <span className="text-fg">On iPhone, Android, and the web.</span>
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="#download"
            className="group inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-fg text-bg font-medium hover:bg-fg-soft transition-colors"
          >
            Get the app
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="#showcase"
            className="inline-flex items-center justify-center h-12 px-6 rounded-full border border-border bg-bg-card/40 hover:bg-bg-elevated text-fg transition-colors"
          >
            See it in action
          </Link>
        </div>

        {/* Trust strip — store badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <StoreBadge platform="ios" />
          <StoreBadge platform="android" />
          <span className="text-xs text-fg-muted">
            4.9 ★ · 12k+ creators on iOS &amp; Android
          </span>
        </div>

        {/* Hero visual — phone preview placeholder */}
        <HeroPreview />
      </div>
    </section>
  );
}

function StoreBadge({
  platform,
}: {
  platform: "ios" | "android";
}) {
  const Icon = platform === "ios" ? Apple : Play;
  const top = platform === "ios" ? "Download on the" : "GET IT ON";
  const bottom = platform === "ios" ? "App Store" : "Google Play";
  return (
    <Link
      href="#download"
      className="inline-flex items-center gap-3 h-12 px-4 rounded-xl border border-border bg-bg-card/60 hover:bg-bg-elevated transition-colors"
      aria-label={`Download on ${bottom}`}
    >
      <Icon className="h-6 w-6 text-fg" />
      <div className="text-left leading-tight">
        <div className="text-[10px] uppercase tracking-wide text-fg-muted">
          {top}
        </div>
        <div className="text-sm font-medium text-fg">{bottom}</div>
      </div>
    </Link>
  );
}

function HeroPreview() {
  // Stylised phone preview built in pure HTML/CSS — no external image
  return (
    <div className="relative mt-16 sm:mt-20 mx-auto max-w-5xl">
      {/* Glow under */}
      <div
        className="absolute inset-x-0 -bottom-10 h-40 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 50%, var(--brand-glow), transparent 70%)",
        }}
        aria-hidden
      />

      {/* Browser/device frame */}
      <div className="rounded-2xl border border-border bg-bg-card overflow-hidden shadow-2xl shadow-brand/5">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 h-10 border-b border-border-soft bg-bg-soft">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <div className="ml-4 flex-1 h-6 rounded-md bg-bg-elevated flex items-center px-3 text-[11px] text-fg-muted font-mono">
            opensite.app/preview/coffee-roasters
          </div>
        </div>

        {/* Faux site */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_280px]">
          <div className="p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-2">
              <span className="h-6 w-6 rounded-md bg-gradient-to-br from-brand to-accent" />
              <span className="text-sm font-medium text-fg">
                Highland Roasters
              </span>
            </div>
            <div className="space-y-2">
              <div className="h-3 w-3/4 rounded bg-fg/15" />
              <div className="h-3 w-2/3 rounded bg-fg/10" />
              <div className="h-7 w-1/2 rounded mt-4 bg-gradient-to-r from-brand to-accent" />
            </div>
            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className="aspect-square rounded-md bg-bg-elevated border border-border-soft" />
              <div className="aspect-square rounded-md bg-bg-elevated border border-border-soft" />
              <div className="aspect-square rounded-md bg-bg-elevated border border-border-soft" />
            </div>
          </div>

          {/* Side panel — 'AI building' indicator */}
          <div className="border-t md:border-t-0 md:border-l border-border-soft bg-bg-soft p-4 space-y-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-brand animate-ping opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-brand" />
              </span>
              <span className="text-[11px] uppercase tracking-wide text-fg-muted font-mono">
                AI · building
              </span>
            </div>
            <div className="space-y-2">
              <AgentRow label="Layout" status="done" />
              <AgentRow label="Copywriting" status="done" />
              <AgentRow label="SEO & AEO" status="active" />
              <AgentRow label="Images" status="queued" />
              <AgentRow label="Launch" status="queued" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AgentRow({
  label,
  status,
}: {
  label: string;
  status: "done" | "active" | "queued";
}) {
  return (
    <div className="flex items-center justify-between text-xs">
      <span className="text-fg-soft">{label}</span>
      <span
        className={
          status === "done"
            ? "text-success"
            : status === "active"
              ? "text-brand"
              : "text-fg-muted"
        }
      >
        {status === "done" ? "✓" : status === "active" ? "●" : "○"}
      </span>
    </div>
  );
}