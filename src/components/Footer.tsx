import Link from "next/link";
import { Logo } from "./Logo";

const cols = [
  {
    title: "產品",
    links: [
      { href: "#modules", label: "四大模塊" },
      { href: "#workflow", label: "點樣運作" },
      { href: "#personas", label: "適合邊個" },
      { href: "#download", label: "下載 App" },
    ],
  },
  {
    title: "資源",
    links: [
      { href: "#", label: "使用手冊" },
      { href: "#", label: "API 文件" },
      { href: "#", label: "更新日誌" },
      { href: "#", label: "聯絡我哋" },
    ],
  },
  {
    title: "關於",
    links: [
      { href: "#", label: "關於 Opensite" },
      { href: "#", label: "同 OpenVan 嘅關係" },
      { href: "#", label: "私隱政策" },
      { href: "#", label: "使用條款" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-brand/10 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-fg-soft max-w-xs leading-relaxed">
              專為香港裝修 / 建築行業而設嘅工程項目管理 App。
              報價、材料、進度、成本，一手掌握。
            </p>
            <p className="mt-6 text-xs text-fg-muted">
              📍 香港 · Firebase: opensystem-857b2
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-xs uppercase tracking-wider text-fg-muted font-medium">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-fg-soft hover:text-brand transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-brand/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-fg-muted">
            © {new Date().getFullYear()} Opensite · Made for Hong Kong
            construction.
          </p>
          <p className="text-xs text-fg-muted">
            姊妹產品：<span className="text-brand">OpenVan</span> · van rental
            & logistics
          </p>
        </div>
      </div>
    </footer>
  );
}