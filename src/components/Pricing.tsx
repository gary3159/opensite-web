import Link from "next/link";
import { Check, Sparkles } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    cadence: "forever",
    description: "For solo founders shipping their first site.",
    cta: "Start free",
    href: "#download",
    featured: false,
    features: [
      "1 published site",
      "AI copy + layout generation",
      "opensite.app subdomain",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    cadence: "/ month",
    description: "For small teams running multiple client sites.",
    cta: "Get Pro",
    href: "#download",
    featured: true,
    features: [
      "Unlimited sites",
      "Custom domain + SSL",
      "SEO + AEO optimisation",
      "Lead capture & routing",
      "Analytics dashboard",
      "Email support",
    ],
  },
  {
    name: "Studio",
    price: "$79",
    cadence: "/ month",
    description: "For agencies shipping sites at scale.",
    cta: "Talk to us",
    href: "#download",
    featured: false,
    features: [
      "Everything in Pro",
      "White-label editor",
      "Multi-seat workspace",
      "API + webhook access",
      "Priority support",
      "Quarterly strategy review",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-bg-soft">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-wider text-brand font-medium">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-fg">
            Free to ship.{" "}
            <span className="text-fg-soft">Pay when you scale.</span>
          </h2>
          <p className="mt-5 text-lg text-fg-soft leading-relaxed">
            No surprise upcharges for the essentials — custom domains,
            analytics, and AEO are bundled.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                t.featured
                  ? "border-brand bg-bg-card shadow-xl shadow-brand/10"
                  : "border-border bg-bg-card"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-8 inline-flex items-center gap-1 rounded-full bg-brand text-bg text-xs font-medium px-3 py-1">
                  <Sparkles className="h-3 w-3" />
                  Most popular
                </span>
              )}

              <h3 className="text-lg font-medium text-fg">{t.name}</h3>
              <p className="mt-2 text-sm text-fg-soft">{t.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-semibold tracking-tight text-fg">
                  {t.price}
                </span>
                <span className="text-sm text-fg-muted">{t.cadence}</span>
              </div>

              <Link
                href={t.href}
                className={`mt-6 inline-flex items-center justify-center h-11 px-5 rounded-full text-sm font-medium transition-colors ${
                  t.featured
                    ? "bg-brand text-bg hover:bg-brand-soft"
                    : "border border-border bg-bg hover:bg-bg-elevated text-fg"
                }`}
              >
                {t.cta}
              </Link>

              <ul className="mt-8 space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                        t.featured ? "text-brand" : "text-success"
                      }`}
                    />
                    <span className="text-fg-soft">{f}</span>
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