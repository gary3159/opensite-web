import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 group ${className}`}
      aria-label="Opensite home"
    >
      <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-brand to-accent">
        {/* Stylised 'O' = open aperture */}
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 text-bg"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M5 9V5h4" />
          <path d="M19 9V5h-4" />
          <path d="M5 15v4h4" />
          <path d="M19 15v4h-4" />
          <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
        </svg>
        <span className="absolute inset-0 rounded-md bg-gradient-to-br from-brand to-accent opacity-0 group-hover:opacity-30 blur-md transition-opacity" />
      </span>
      <span className="text-base font-semibold tracking-tight text-fg">
        Opensite
      </span>
    </Link>
  );
}