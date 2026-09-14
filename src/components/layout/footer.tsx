import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/common/logo";
import { business, displayBusiness } from "@/config/business";
import { CookieSettingsButton } from "@/components/common/analytics-consent";

const columns = [
  { title: "Explore", links: [["Our District", "/about"], ["Why Paw District", "/why-paw-district"], ["Regular care", "/membership"], ["Journal", "/blog"], ["FAQs", "/faq"]] },
  { title: "Pet care", links: [["Boarding", "/services/boarding"], ["Grooming", "/services/grooming"], ["Training", "/services/training"]] },
  { title: "Find us", links: [["Visit the District", "/visit"], ["Map & directions", "/visit#location"], ["Opening hours", "/visit#hours"]] },
  { title: "Legal", links: [["Privacy", "/privacy"], ["Terms", "/terms"]] },
];

export function Footer() {
  const socialLinks = [["Instagram", business.instagram], ["Facebook", business.facebook], ["YouTube", business.youtube]].filter((item): item is [string, string] => Boolean(item[1]));
  return (
    <footer className="bg-ink pb-28 pt-20 text-cream md:pb-10 lg:pt-28">
      <div className="container-shell">
        <div className="grid gap-14 border-b border-white/15 pb-16 lg:grid-cols-[1.4fr_2fr]">
          <div><Logo light /><p className="mt-7 max-w-sm text-2xl font-semibold leading-snug tracking-[-.03em]">A happier little corner of the world for pets and the people who love them.</p><address className="mt-8 space-y-2 text-sm not-italic text-white/80"><p><a href={`tel:${business.phone}`}>{displayBusiness.phone}</a></p><p><a href={`mailto:${business.email}`}>{displayBusiness.email}</a></p><p>{displayBusiness.address}</p></address></div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">{columns.map((column) => <div key={column.title}><p className="mb-5 text-[11px] font-extrabold uppercase tracking-[.18em] text-white/70">{column.title}</p><ul className="space-y-3">{column.links.map(([label, href]) => <li key={href}><Link href={href} className="text-sm text-white/80 transition hover:text-white">{label}</Link></li>)}</ul>{column.title === "Legal" ? <div className="mt-3"><CookieSettingsButton /></div> : null}</div>)}</div>
        </div>
        <div className="flex flex-col gap-6 pt-8 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Paw District. Care built around their world.</p>{socialLinks.length ? <div className="flex gap-5">{socialLinks.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white">{label}<ArrowUpRight className="h-3 w-3" /></a>)}</div> : null}</div>
      </div>
    </footer>
  );
}
