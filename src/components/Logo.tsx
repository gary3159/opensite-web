import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 group ${className}`}
      aria-label="Opensite 首頁"
    >
      {/* Brand mark: sky-blue gradient with stylized 'O' = open site */}
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-strong shadow-sm shadow-brand/30">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          {/* Stylised 'O' = aperture / open site */}
          <path d="M5 9V5h4" />
          <path d="M19 9V5h-4" />
          <path d="M5 15v4h4" />
          <path d="M19 15v4h-4" />
          <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
        </svg>
      </span>
      <span className="text-base font-semibold tracking-tight text-fg">
        Opensite
      </span>
    </Link>
  );
}