import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/common/logo";
import { business, displayBusiness } from "@/config/business";

const columns = [
  { title: "Explore", links: [["About", "/about"], ["Services", "/services"], ["Membership", "/membership"], ["Journal", "/blog"], ["FAQs", "/faq"]] },
  { title: "Services", links: [["Grooming", "/services/grooming"], ["Daycare", "/services/daycare"], ["Boarding", "/services/boarding"], ["Wellness", "/services/wellness"]] },
  { title: "Visit", links: [["Contact", "/contact"], ["Book appointment", "/book"], ["Location", "/contact#location"], ["Opening hours", "/contact#hours"]] },
  { title: "Legal", links: [["Privacy", "/privacy"], ["Terms", "/terms"]] },
];

export function Footer() {
  return (
    <footer className="bg-ink pb-28 pt-20 text-cream md:pb-10 lg:pt-28">
      <div className="container-shell">
        <div className="grid gap-14 border-b border-white/15 pb-16 lg:grid-cols-[1.4fr_2fr]">
          <div><Logo light /><p className="mt-7 max-w-sm text-2xl font-semibold leading-snug tracking-[-.03em]">A happier little corner of the world for pets and the people who love them.</p><div className="mt-8 space-y-2 text-sm text-white/60"><p>{displayBusiness.phone}</p><p>{displayBusiness.email}</p><p>{displayBusiness.address}</p></div></div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">{columns.map((column) => <div key={column.title}><p className="mb-5 text-[11px] font-extrabold uppercase tracking-[.18em] text-white/45">{column.title}</p><ul className="space-y-3">{column.links.map(([label, href]) => <li key={href}><Link href={href} className="text-sm text-white/75 transition hover:text-white">{label}</Link></li>)}</ul></div>)}</div>
        </div>
        <div className="flex flex-col gap-6 pt-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Paw District. Care built around their world.</p><div className="flex gap-5">{[["Instagram", business.instagram], ["Facebook", business.facebook], ["YouTube", business.youtube]].map(([label, href]) => href ? <a key={label} href={href} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white">{label}<ArrowUpRight className="h-3 w-3" /></a> : <span key={label} title="Add this URL in src/config/business.ts">{label}</span>)}</div></div>
      </div>
    </footer>
  );
}
