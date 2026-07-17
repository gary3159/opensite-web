import { HardHat, Building2, Home } from "lucide-react";

const personas = [
  {
    icon: HardHat,
    role: "裝修師傅 / 工程公司",
    headline: "專心做好工程，盤數交俾 App。",
    pains: [
      "WhatsApp 收唔切客戶訊息",
      "報價單版本搞亂",
      "每個項目賺蝕唔清楚",
    ],
    benefits: [
      "5 分鐘出一份專業報價單",
      "客戶確認即時通知",
      "完工即睇成本利潤",
    ],
    cta: "我係師傅，立即下載",
  },
  {
    icon: Home,
    role: "業主",
    headline: "裝修過程一目了然，唔使日日追。",
    pains: [
      "唔知師傅做緊咩",
      "報價單睇唔明",
      "完工後先發現超支",
    ],
    benefits: [
      "App 入面睇到每個項目進度",
      "相片時間線，唔使去到場都知",
      "材料送達有通知",
    ],
    cta: "我係業主，了解多啲",
  },
  {
    icon: Building2,
    role: "工程公司老闆",
    headline: "10 個項目同時跑，一樣管理得到。",
    pains: [
      "唔知邊個項目蝕緊錢",
      "材料成本失控",
      "客戶投訴先知問題",
    ],
    benefits: [
      "所有項目集中睇",
      "成本 vs 預算 dashboard",
      "客戶簽名確認紀錄",
    ],
    cta: "我係老闆，傾下合作",
  },
];

export function Personas() {
  return (
    <section id="personas" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-wider text-brand font-medium">
            適合邊個用
          </p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-fg">
            唔理你係邊個，
            <br />
            <span className="text-fg-soft">Opensite 都幫到你。</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {personas.map((p) => (
            <article
              key={p.role}
              className="relative rounded-3xl border border-brand/10 bg-white overflow-hidden"
            >
              {/* Header band */}
              <div className="px-6 py-5 bg-gradient-to-br from-brand to-brand-strong text-white">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div className="text-base font-semibold">{p.role}</div>
                </div>
                <p className="mt-3 text-sm opacity-95">{p.headline}</p>
              </div>

              {/* Pains */}
              <div className="px-6 py-5 border-b border-brand/10">
                <div className="text-xs font-medium text-fg-muted mb-3">
                  而家嘅痛點
                </div>
                <ul className="space-y-2">
                  {p.pains.map((x) => (
                    <li
                      key={x}
                      className="flex items-start gap-2 text-sm text-fg-soft"
                    >
                      <span className="text-orange mt-0.5">✗</span>
                      {x}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="px-6 py-5">
                <div className="text-xs font-medium text-fg-muted mb-3">
                  Opensite 幫到你
                </div>
                <ul className="space-y-2">
                  {p.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-fg"
                    >
                      <span className="text-brand mt-0.5">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="px-6 pb-6">
                <a
                  href="#download"
                  className="block text-center h-11 leading-[44px] rounded-full bg-brand-tint text-brand-strong text-sm font-medium hover:bg-brand hover:text-white transition-colors"
                >
                  {p.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}