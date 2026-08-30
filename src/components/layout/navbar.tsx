"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/common/logo";
import { business } from "@/config/business";
import { siteConfig, whatsappUrl } from "@/config/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); onScroll(); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "nav-glass" : "bg-transparent"}`}>
      <div className="container-shell flex h-20 items-center justify-between lg:h-24">
        <Logo />
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Main navigation">
          {siteConfig.navigation.map((item) => <Link key={item.href} href={item.href} className={`text-[11px] font-extrabold uppercase tracking-[.11em] transition hover:text-forest ${pathname === item.href ? "text-forest" : "text-ink/75"}`}>{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <Link href={whatsappUrl()} className="hidden h-11 w-11 items-center justify-center rounded-full border border-ink/15 transition hover:bg-mint sm:flex" aria-label="Chat with Paw District on WhatsApp"><MessageCircle className="h-4 w-4" /></Link>
          <Link href={`tel:${business.phone}`} className="btn-primary hidden lg:inline-flex">Call the District</Link>
          <button onClick={() => setOpen(!open)} className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-ivory lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      <div className={`fixed inset-0 top-20 z-40 bg-cream transition duration-500 lg:hidden ${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0"}`}>
        <nav className="container-shell flex h-full flex-col overflow-y-auto py-10" aria-label="Mobile navigation">
          {siteConfig.navigation.map((item, index) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-ink/10 py-4 text-3xl font-bold tracking-[-.04em]"><span className="mr-4 text-xs text-muted">0{index + 1}</span>{item.label}</Link>)}
          <div className="mt-8 flex flex-col gap-3"><Link href={`tel:${business.phone}`} onClick={() => setOpen(false)} className="btn-primary">Call the District</Link><Link href={whatsappUrl()} onClick={() => setOpen(false)} className="btn-outline">Chat on WhatsApp</Link></div>
        </nav>
      </div>
    </header>
  );
}
