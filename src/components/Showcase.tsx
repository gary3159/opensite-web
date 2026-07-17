import { Quote } from "lucide-react";

const showcase = [
  {
    tag: "Coffee · Direct-to-consumer",
    headline: "Highland Roasters",
    body: "From blank canvas to shipped storefront in 14 minutes. Generated 12 product pages, a wholesale enquiry form, and a launch email sequence.",
    metric: { value: "4.2×", label: "traffic vs. old site" },
    accent: "from-amber-500/30 to-orange-500/10",
  },
  {
    tag: "Real estate · Boutique agency",
    headline: "Riverside Realty",
    body: "MLS-integrated listings, AI-driven lead nurture, and a virtual tour builder. The team publishes in minutes — not days.",
    metric: { value: "+38%", label: "qualified leads / mo" },
    accent: "from-cyan-500/30 to-blue-500/10",
  },
  {
    tag: "Fitness · Personal brand",
    headline: "Coach Maya Lin",
    body: "A booking system, training plans shop, and weekly newsletter — wired up by describing her business once. ",
    metric: { value: "$11k", label: "first-month revenue" },
    accent: "from-violet-500/30 to-fuchsia-500/10",
  },
];

export function Showcase() {
  return (
    <section id="showcase" className="py-24 sm:py-32 bg-bg-soft">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-wider text-accent font-medium">
            Built with Opensite
          </p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-fg">
            Real businesses.{" "}
            <span className="text-fg-soft">Real revenue.</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {showcase.map((s) => (
            <article
              key={s.headline}
              className="relative rounded-2xl border border-border bg-bg-card overflow-hidden hover:border-fg-muted/40 transition-colors"
            >
              {/* Faux visual header */}
              <div
                className={`h-40 bg-gradient-to-br ${s.accent} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-grid opacity-60" />
                <div className="absolute bottom-4 left-5 right-5">
                  <span className="text-[10px] uppercase tracking-wider text-fg-muted">
                    {s.tag}
                  </span>
                  <h3 className="mt-1 text-xl font-semibold text-fg">
                    {s.headline}
                  </h3>
                </div>
              </div>

              <div className="p-5">
                <Quote className="h-4 w-4 text-fg-muted" />
                <p className="mt-3 text-sm text-fg-soft leading-relaxed">
                  {s.body}
                </p>
                <div className="mt-5 pt-5 border-t border-border-soft flex items-baseline gap-2">
                  <span className="text-2xl font-semibold text-brand">
                    {s.metric.value}
                  </span>
                  <span className="text-xs text-fg-muted">
                    {s.metric.label}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}