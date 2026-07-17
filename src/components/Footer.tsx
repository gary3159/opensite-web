import Link from "next/link";
import { Logo } from "./Logo";
// lucide-react v1.x doesn't export brand icons — inline SVG instead

const cols = [
  {
    title: "Product",
    links: [
      { href: "#features", label: "Features" },
      { href: "#download", label: "Download" },
      { href: "#pricing", label: "Pricing" },
      { href: "#showcase", label: "Showcase" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#", label: "About" },
      { href: "#", label: "Blog" },
      { href: "#", label: "Careers" },
      { href: "#", label: "Press kit" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "#", label: "Docs" },
      { href: "#", label: "API reference" },
      { href: "#", label: "Status" },
      { href: "#", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Privacy" },
      { href: "#", label: "Terms" },
      { href: "#", label: "Cookies" },
      { href: "#", label: "DPA" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border-soft bg-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-fg-soft max-w-xs leading-relaxed">
              The AI-native site builder for founders who&apos;d rather ship
              than fiddle.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialIcon href="#" label="GitHub">
                <GithubSvg />
              </SocialIcon>
              <SocialIcon href="#" label="X / Twitter">
                <TwitterSvg />
              </SocialIcon>
              <SocialIcon href="#" label="LinkedIn">
                <LinkedinSvg />
              </SocialIcon>
            </div>
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
                      className="text-sm text-fg-soft hover:text-fg transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-border-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-fg-muted">
            © {new Date().getFullYear()} Opensite. All rights reserved.
          </p>
          <p className="text-xs text-fg-muted">
            Made for founders. Hosted on Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg-soft hover:text-fg hover:border-fg-muted transition-colors"
    >
      {children}
    </Link>
  );
}

function GithubSvg() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a10.97 10.97 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.12 3.04.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

function TwitterSvg() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.844l-5.36-7.01L4.6 22H1.34l8.02-9.16L1 2h7.02l4.84 6.4L18.244 2zm-2.4 18h1.86L7.32 4h-1.99l10.514 16z" />
    </svg>
  );
}

function LinkedinSvg() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}