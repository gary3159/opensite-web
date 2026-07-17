"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Opensite 係咩？",
    a: "Opensite 係一個專為香港裝修 / 建築行業設計嘅工程項目管理 App。透過報價、材料、進度、成本 4 大模塊，幫師傅、工程公司同業主由第一份報價管理到完工結算。",
  },
  {
    q: "支援邊啲平台？",
    a: "iOS 16+ 同 Android 10+ 嘅原生 App，亦有 Web 版本可以喺電腦用到。三邊數據即時同步，唔會唔見。",
  },
  {
    q: "資料擺喺邊？安全嗎？",
    a: "所有資料儲存喺 Google Firebase 雲端，使用與 OpenVan 共用嘅企業級 Firebase 專案（opensystem-857b2），享有 Google 級別嘅保安、加密、備份。",
  },
  {
    q: "要幾錢？有冇免費版？",
    a: "本地 Beta 期間完全免費，所有功能任你用。我哋會喺正式收費前 30 日通知你，期間資料可以隨時匯出。",
  },
  {
    q: "我嘅客戶唔用 Opensite 都可以睇進度嗎？",
    a: "可以。你可以將報價單、進度更新用 PDF / 連結分享俾客戶，客戶唔需要安裝 App 都睇到。",
  },
  {
    q: "同 OpenVan 有咩關係？",
    a: "OpenVan 係姊妹產品 — 專做 van rental 同物流配送。Opensite v2 會直接整合 OpenVan 嘅物流網絡，落材料單之後可以即時預約送貨到工地，一條龍搞掂。",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 sm:py-32 bg-bg-soft">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-wider text-brand font-medium">
            常見問題
          </p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-fg">
            仲有嘢想知？
          </h2>
        </div>

        <div className="mt-12 divide-y divide-brand/10 border-y border-brand/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left group"
                >
                  <span className="text-base sm:text-lg font-medium text-fg group-hover:text-brand transition-colors">
                    {f.q}
                  </span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-brand/20 text-brand group-hover:bg-brand group-hover:text-white transition-colors flex-shrink-0">
                    {isOpen ? (
                      <Minus className="h-3.5 w-3.5" />
                    ) : (
                      <Plus className="h-3.5 w-3.5" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-6 text-fg-soft leading-relaxed">{f.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}