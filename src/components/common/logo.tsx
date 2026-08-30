import Link from "next/link";

export function Mark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <rect width="48" height="48" rx="16" fill="currentColor" />
      <circle cx="17" cy="18" r="4" fill="#F7F4EC" />
      <circle cx="31" cy="18" r="4" fill="#F7F4EC" />
      <circle cx="13" cy="27" r="3.5" fill="#F7F4EC" />
      <circle cx="35" cy="27" r="3.5" fill="#F7F4EC" />
      <path d="M16 32c0-5.2 3.6-9 8-9s8 3.8 8 9c0 3-2.2 5-5 4.2-2-.6-4-.6-6 0-2.8.8-5-1.2-5-4.2Z" fill="#F7F4EC" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-leaf/30" aria-label="Paw District home">
      <span className="h-12 w-12 shrink-0 rounded-2xl border border-ink/10 bg-white bg-[url('/images/paw-district-logo.jpg')] bg-[length:185%] bg-[position:50%_3%] bg-no-repeat shadow-sm" aria-hidden="true" />
      <span className={`text-sm font-extrabold uppercase leading-[.9] tracking-[.12em] ${light ? "text-white" : "text-ink"}`}><span className="text-[9px] font-bold tracking-[.2em] opacity-65">The</span><br />Paw District</span>
    </Link>
  );
}
