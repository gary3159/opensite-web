import { FileText, Package, TrendingUp, Calculator } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "建立報價",
    detail: "輸入項目、數量、單價，自動計算總額。一鍵發送畀客戶，客戶簽名即確認。",
    duration: "5 分鐘",
  },
  {
    icon: Package,
    step: "02",
    title: "落單材料",
    detail: "確定材料清單，逐項落單，記錄供應商同預計送達日。v2 可直接透過 OpenVan 預約送貨。",
    duration: "10 分鐘",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "更新進度",
    detail: "師傅每日上傳現場相、更新每個項目嘅完工百分比。客戶即時睇到，唔使再打電話。",
    duration: "整個施工期",
  },
  {
    icon: Calculator,
    step: "04",
    title: "結算成本",
    detail: "完工後自動結算成本 vs 預算，每個項目嘅利潤率即時顯示，再開新項目有數據參考。",
    duration: "完工日",
  },
];

export function Workflow() {
  return (
    <section
      id="workflow"
      className="py-24 sm:py-32 bg-bg-soft relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-grid opacity-50" aria-hidden />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-wider text-brand font-medium">
            點樣運作
          </p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-fg">
            一個工程嘅完整生命週期，
            <br />
            <span className="text-fg-soft">由呢 4 步組成。</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-brand/40 to-brand/10 -translate-x-4"
                  aria-hidden
                />
              )}

              <article className="glass rounded-2xl p-6 h-full">
                <div className="flex items-center justify-between">
                  <div className="h-11 w-11 rounded-xl bg-brand-tint flex items-center justify-center">
                    <s.icon className="h-5 w-5 text-brand" />
                  </div>
                  <span className="text-xs font-mono text-fg-muted">
                    {s.step}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-fg">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-fg-soft leading-relaxed">
                  {s.detail}
                </p>

                <div className="mt-5 pt-4 border-t border-brand/10">
                  <div className="text-xs text-fg-muted">所需時間</div>
                  <div className="text-sm font-medium text-brand mt-0.5">
                    {s.duration}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}