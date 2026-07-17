import {
  FileText,
  Package,
  TrendingUp,
  Calculator,
  ArrowRight,
} from "lucide-react";

const modules = [
  {
    icon: FileText,
    name: "報價",
    enName: "Quotation",
    body: "一張表搞掂晒。報價單建立、發送、業主確認、版本管理，全部喺一個畫面。",
    bullets: ["草稿 / 已發送 / 已接受", "PDF 一鍵匯出", "客戶簽名確認"],
    color: "from-brand to-brand-strong",
    bgClass: "bg-brand-tint",
  },
  {
    icon: Package,
    name: "材料",
    enName: "Material",
    body: "落單、收貨、核對，一手追蹤。供應商、單價、預計送達日，全部記錄。",
    bullets: ["DRAFT / 已落單 / 已送達", "供應商 + 單價紀錄", "v2 銜接 OpenVan 送貨"],
    color: "from-orange to-red-400",
    bgClass: "bg-orange/10",
  },
  {
    icon: TrendingUp,
    name: "進度",
    enName: "Progress",
    body: "完工百分比自動計算。每一個報價項目都有獨立進度，師傅每日更新一次。",
    bullets: ["每項進度獨立追蹤", "現場相片 + 時間線", "完工自動通知客戶"],
    color: "from-emerald-500 to-success",
    bgClass: "bg-success/10",
  },
  {
    icon: Calculator,
    name: "成本",
    enName: "Cost",
    body: "預算 vs 實際，賺蝕一目了然。每個項目即時對比，唔會到完工先知蝕錢。",
    bullets: ["預算 / 實際對比", "材料成本自動加總", "利潤率即時顯示"],
    color: "from-violet-500 to-purple-600",
    bgClass: "bg-violet-500/10",
  },
];

export function Modules() {
  return (
    <section id="modules" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-wider text-brand font-medium">
            四大核心模塊
          </p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-fg">
            裝修工程嘅 4 個關鍵階段，
            <br />
            <span className="text-fg-soft">全部裝入一個 App。</span>
          </h2>
          <p className="mt-5 text-lg text-fg-soft leading-relaxed">
            由第一份報價到最後一張單，每一步都有數據、有紀錄、有提醒。
            唔再靠記憶、唔再靠 WhatsApp。
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((m) => (
            <article
              key={m.name}
              className="group relative rounded-3xl border border-brand/10 bg-white p-8 hover:shadow-xl hover:shadow-brand/5 transition-all hover:-translate-y-1"
            >
              {/* Icon + name */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`h-12 w-12 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center shadow-lg shadow-brand/10`}
                  >
                    <m.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-fg">
                      {m.name}
                    </div>
                    <div className="text-xs text-fg-muted">{m.enName}</div>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-fg-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>

              {/* Body */}
              <p className="mt-5 text-base text-fg-soft leading-relaxed">
                {m.body}
              </p>

              {/* Bullets */}
              <ul className="mt-5 space-y-2">
                {m.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-sm text-fg-soft"
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${m.bgClass}`} />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}