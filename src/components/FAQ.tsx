"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is Opensite really free?",
    a: "Yes. The Starter plan lets you publish one site on an opensite.app subdomain, with AI generation, copy, and SEO included. No credit card required.",
  },
  {
    q: "Which platforms does the app run on?",
    a: "iOS 16+, Android 10+, and any modern web browser. Your projects stay synced across all three.",
  },
  {
    q: "Do I own the code and content?",
    a: "Always. You own 100% of your content, your domain, and your customer data. Export at any time as static HTML or via our API.",
  },
  {
    q: "How is this different from Squarespace or Wix?",
    a: "Opensite is AI-native, not template-native. You describe your business and the platform generates a site purpose-built for it — including copy, SEO, and the growth tooling you'd otherwise buy as plugins.",
  },
  {
    q: "Can I bring my existing domain?",
    a: "Yes — point an A or CNAME record and Opensite handles SSL provisioning automatically. Or register a new domain in-app.",
  },
  {
    q: "Is there a refund policy?",
    a: "30-day, no-questions-asked refund on Pro and Studio plans. Cancel any time from the app or web dashboard.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-wider text-brand font-medium">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-fg">
            Questions, answered.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-border-soft border-y border-border-soft">
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
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border text-fg-soft group-hover:border-brand group-hover:text-brand transition-colors flex-shrink-0">
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