import Link from "next/link";
import { ArrowRight, Apple, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Sky-blue mesh background */}
      <div className="absolute inset-0 -z-10 bg-mesh" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-grid" aria-hidden />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left — copy */}
          <div>
            {/* Headline */}
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-fg">
              由報價到完工，
              <br />
              <span className="gradient-text">裝修工程一手掌握。</span>
            </h1>

            {/* Subhead */}
            <p className="mt-6 text-lg text-fg-soft leading-relaxed max-w-xl">
              報價、材料、進度、成本 — 四個步驟一個 App 搞掂。
              老闆睇實盤數、師傅更新進度、業主追蹤工程，唔再靠 WhatsApp
              傳嚟傳去。
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="#download"
                className="group inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-brand hover:bg-brand-strong text-white font-medium shadow-lg shadow-brand/25 transition-all hover:shadow-xl hover:shadow-brand/30"
              >
                免費下載 App
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#workflow"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full border border-brand/20 bg-white/70 backdrop-blur hover:bg-white text-fg transition-colors"
              >
                睇下點運作
              </Link>
            </div>

            {/* Trust strip */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#download"
                className="inline-flex items-center gap-2 h-11 px-4 rounded-xl bg-fg text-white hover:bg-gray-800 transition-colors"
                aria-label="App Store 下載"
              >
                <Apple className="h-6 w-6" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] opacity-80">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </Link>
              <a
                href="/api/download/apk"
                download="opensite-android-v0.1.0.apk"
                className="inline-flex items-center gap-2 h-11 px-4 rounded-xl border border-brand/20 bg-white/70 backdrop-blur hover:bg-white text-fg transition-colors"
                aria-label="直接下載 Android APK"
              >
                <Play className="h-5 w-5 text-brand" fill="currentColor" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] text-fg-muted">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>

          </div>

          {/* Right — phone preview */}
          <div className="lg:col-span-5">
            <HeroPhonePreview />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroPhonePreview() {
  return (
    <div className="relative mx-auto max-w-sm">
      {/* Floating glass cards in front of phone — z-20 puts them on top */}
      <div className="absolute -top-4 -left-8 z-20 glass rounded-2xl p-4 shadow-xl animate-float hidden sm:block">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-success/15 flex items-center justify-center">
            <span className="text-success text-lg">✓</span>
          </div>
          <div>
            <div className="text-xs text-fg-muted">已發送</div>
            <div className="text-sm font-semibold text-fg">陳先生 · 3房2廳</div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 -right-8 z-20 glass rounded-2xl p-4 shadow-xl animate-float-delayed hidden sm:block">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-brand-tint flex items-center justify-center">
            <span className="text-brand text-lg font-bold">$</span>
          </div>
          <div>
            <div className="text-xs text-fg-muted">本期成本</div>
            <div className="text-sm font-semibold text-fg">HK$ 128,450</div>
          </div>
        </div>
      </div>

      {/* Phone frame — z-10 keeps it below the floating cards but above the background */}
      <div className="phone-frame relative z-10">
        <div className="phone-screen">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-3 pb-2 text-[10px] text-fg-muted">
            <span className="font-medium">9:41</span>
            <div className="flex items-center gap-1">
              <span>●●●</span>
              <span>100%</span>
            </div>
          </div>

          {/* App content */}
          <div className="px-5 pb-6">
            {/* App bar */}
            <div className="flex items-center justify-between py-3">
              <div>
                <div className="text-xs text-fg-muted">下午好</div>
                <div className="text-lg font-semibold text-fg">陳師傅</div>
              </div>
              <div className="h-9 w-9 rounded-full bg-brand-tint flex items-center justify-center text-brand font-semibold">
                陳
              </div>
            </div>

            {/* Active project card */}
            <div className="rounded-2xl bg-gradient-to-br from-brand to-brand-strong text-white p-4 shadow-lg shadow-brand/30">
              <div className="flex items-center justify-between">
                <span className="text-xs opacity-90">進行中 · 2</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 backdrop-blur">
                  60%
                </span>
              </div>
              <div className="mt-3 text-base font-semibold">
                將軍澳 · 3房2廳裝修
              </div>
              <div className="text-xs opacity-90 mt-1">
                預算 HK$ 480,000 · 預計 11 月完工
              </div>
              <div className="mt-3 h-1.5 rounded-full bg-white/20 overflow-hidden">
                <div className="h-full w-[60%] bg-white rounded-full" />
              </div>
            </div>

            {/* Status filter tabs */}
            <div className="mt-5 flex gap-2 overflow-x-auto">
              <PillTab label="全部" active />
              <PillTab label="報價中" badge="3" />
              <PillTab label="進行中" badge="2" />
              <PillTab label="已完成" />
            </div>

            {/* Project rows */}
            <div className="mt-4 space-y-3">
              <ProjectRow
                name="天后 · 全屋翻新"
                status="進行中"
                statusColor="brand"
                progress={75}
              />
              <ProjectRow
                name="北角 · 廁所翻新"
                status="報價中"
                statusColor="orange"
                progress={0}
              />
              <ProjectRow
                name="中環 · 辦公室裝修"
                status="已完成"
                statusColor="success"
                progress={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PillTab({
  label,
  active,
  badge,
}: {
  label: string;
  active?: boolean;
  badge?: string;
}) {
  return (
    <div
      className={`flex-shrink-0 inline-flex items-center gap-1.5 h-7 px-3 rounded-full text-xs font-medium transition-colors ${
        active
          ? "bg-brand text-white"
          : "bg-brand-tint text-brand-strong"
      }`}
    >
      {label}
      {badge && (
        <span
          className={`px-1.5 rounded-full text-[10px] ${
            active ? "bg-white/25" : "bg-white"
          }`}
        >
          {badge}
        </span>
      )}
    </div>
  );
}

function ProjectRow({
  name,
  status,
  statusColor,
  progress,
}: {
  name: string;
  status: string;
  statusColor: "brand" | "orange" | "success";
  progress: number;
}) {
  const colors = {
    brand: "bg-brand-tint text-brand-strong",
    orange: "bg-orange/15 text-orange",
    success: "bg-success/15 text-success",
  };
  return (
    <div className="rounded-xl bg-white border border-brand/10 p-3">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium text-fg">{name}</div>
        <span
          className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${colors[statusColor]}`}
        >
          {status}
        </span>
      </div>
      <div className="mt-2 h-1 rounded-full bg-brand-tint overflow-hidden">
        <div
          className={`h-full ${
            progress === 100 ? "bg-success" : "bg-brand"
          } rounded-full`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}