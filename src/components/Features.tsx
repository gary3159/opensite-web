import {
  Wand2,
  PenLine,
  Search,
  Share2,
  Globe,
  BarChart3,
  Shield,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "One-line site generation",
    body: "Describe your business in a sentence. Opensite generates pages, layouts, and assets tuned to your industry.",
  },
  {
    icon: PenLine,
    title: "AI copy that sounds like you",
    body: "Trained on real operator-level content. Editable, brand-locked, and free of generic AI-isms.",
  },
  {
    icon: Search,
    title: "SEO + AEO built in",
    body: "Optimised for Google and answer engines (ChatGPT, Perplexity, SGE) from the moment you publish.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first editor",
    body: "Edit on the train. Publish from your phone. The same editor powers iOS, Android, and Web.",
  },
  {
    icon: Share2,
    title: "Launch & growth toolkit",
    body: "QR codes, social cards, email capture, lead routing — pre-wired into every site you ship.",
  },
  {
    icon: BarChart3,
    title: "Analytics that don't lie",
    body: "Multi-touch attribution with privacy-safe analytics. See which AI channel actually drove revenue.",
  },
  {
    icon: Globe,
    title: "Custom domain in 60 seconds",
    body: "Bring your own domain or grab one in-app. SSL, DNS, and redirects handled automatically.",
  },
  {
    icon: Shield,
    title: "Compliance-aware",
    body: "HIPAA, GDPR, CCPA, and industry-specific disclosures baked in per vertical. No legal homework.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-wider text-brand font-medium">
            The platform
          </p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-fg">
            Eight things every site needs.{" "}
            <span className="text-fg-soft">Done in one prompt.</span>
          </h2>
          <p className="mt-5 text-lg text-fg-soft leading-relaxed">
            Stop juggling plugins, designers, and copywriters. Opensite bundles
            the full launch stack into a single AI workflow.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {features.map((f) => (
            <article
              key={f.title}
              className="bg-bg-card p-6 hover:bg-bg-elevated transition-colors group"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand group-hover:bg-brand/20 transition-colors">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-medium text-fg">{f.title}</h3>
              <p className="mt-2 text-sm text-fg-soft leading-relaxed">
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}