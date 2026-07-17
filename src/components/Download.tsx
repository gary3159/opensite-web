"use client";

import Link from "next/link";
import { Apple, Play, QrCode, Smartphone, Bell, Download as DownloadIcon } from "lucide-react";

export function Download() {
  return (
    <section
      id="download"
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-mesh" aria-hidden />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <div>
            <p className="text-xs uppercase tracking-wider text-brand font-medium">
              即刻下載
            </p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-fg">
              下一個工程，
              <br />
              <span className="gradient-text">由 Opensite 開始。</span>
            </h2>
            <p className="mt-5 text-lg text-fg-soft leading-relaxed">
              免費下載，無需信用卡。iOS、Android 同步，
              數據即時上雲，唔會唔見。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#"
                className="inline-flex items-center gap-3 h-14 px-5 rounded-xl bg-fg text-white hover:bg-gray-800 transition-colors"
              >
                <Apple className="h-7 w-7" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] opacity-80 uppercase tracking-wide">
                    Download on the
                  </div>
                  <div className="text-base font-semibold">App Store</div>
                </div>
              </Link>
              <a
                href="/api/download/apk"
                download="opensite-android-v0.1.0.apk"
                className="inline-flex items-center gap-3 h-14 px-5 rounded-xl border border-brand/30 bg-brand-tint hover:bg-brand hover:text-white text-brand-strong transition-colors group"
              >
                <DownloadIcon className="h-6 w-6 group-hover:animate-bounce" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] opacity-80 uppercase tracking-wide">
                    直接下載 APK
                  </div>
                  <div className="text-base font-semibold">v0.1.0 · 22.3 MB</div>
                </div>
              </a>
              <Link
                href="#"
                className="inline-flex items-center gap-3 h-14 px-5 rounded-xl border border-brand/20 bg-white hover:bg-brand-tint transition-colors"
              >
                <Play className="h-6 w-6 text-brand" fill="currentColor" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] text-fg-muted uppercase tracking-wide">
                    GET IT ON
                  </div>
                  <div className="text-base font-semibold text-fg">
                    Google Play
                  </div>
                </div>
              </Link>
            </div>

            <div className="mt-8">
              <p className="text-sm text-fg-soft">
                想試用但未準備好下載？加入等候名單，
                我哋會通知你最新功能同地區上架消息。
              </p>
              <form
                className="mt-3 flex flex-col sm:flex-row gap-2 max-w-md"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="relative flex-1">
                  <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-fg-muted" />
                  <input
                    type="email"
                    required
                    placeholder="電話或電郵"
                    className="w-full h-11 pl-10 pr-4 rounded-full bg-white border border-brand/20 text-fg placeholder:text-fg-muted focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-brand text-white font-medium hover:bg-brand-strong transition-colors"
                >
                  <Bell className="h-4 w-4" />
                  通知我
                </button>
              </form>
            </div>
          </div>

          {/* Right — QR card */}
          <div className="relative">
            <div className="relative mx-auto max-w-md">
              <div className="glass-strong rounded-3xl p-6 shadow-2xl shadow-brand/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-fg-muted">
                    掃碼安裝
                  </span>
                  <QrCode className="h-4 w-4 text-brand" />
                </div>
                <div className="aspect-square w-full rounded-2xl bg-white p-6 flex items-center justify-center border border-brand/10">
                  {/* Faux QR */}
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg, var(--brand) 0 6px, transparent 6px 12px), repeating-linear-gradient(90deg, var(--brand) 0 6px, transparent 6px 12px)",
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
                  自動偵測 iOS / Android · iOS 16+ · Android 10+
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}