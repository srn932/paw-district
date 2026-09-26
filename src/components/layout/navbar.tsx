"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/common/logo";
import { business } from "@/config/business";
import { siteConfig, whatsappUrl } from "@/config/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); onScroll(); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) firstMobileLinkRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setExperienceOpen(false);
        if (open) {
          setOpen(false);
          menuButtonRef.current?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = ""; document.removeEventListener("keydown", onKeyDown); };
  }, [open]);
  const experienceActive = pathname.startsWith("/services/");
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "nav-glass" : "bg-transparent"}`}>
      <div className="container-shell flex h-20 items-center justify-between lg:h-24">
        <Logo />
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Main navigation">
          <Link href={siteConfig.navigation[0].href} aria-current={pathname === siteConfig.navigation[0].href ? "page" : undefined} className={`text-[11px] font-extrabold uppercase tracking-[.11em] transition hover:text-forest ${pathname === siteConfig.navigation[0].href ? "text-forest" : "text-ink/75"}`}>{siteConfig.navigation[0].label}</Link>
          <div
            className="relative"
            onMouseEnter={() => setExperienceOpen(true)}
            onMouseLeave={() => setExperienceOpen(false)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setExperienceOpen(false);
            }}
          >
            <button
              type="button"
              onClick={() => setExperienceOpen((current) => !current)}
              onFocus={() => setExperienceOpen(true)}
              className={`flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[.11em] transition hover:text-forest ${experienceActive ? "text-forest" : "text-ink/75"}`}
              aria-expanded={experienceOpen}
              aria-haspopup="true"
            >
              The Paw Experience
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${experienceOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            <div className={`absolute left-1/2 top-full w-72 -translate-x-1/2 pt-5 transition duration-300 ${experienceOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}>
              <div className="overflow-hidden rounded-3xl border border-ink/10 bg-ivory p-2 shadow-soft">
                {siteConfig.experienceNavigation.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setExperienceOpen(false)} tabIndex={experienceOpen ? 0 : -1} className="group block rounded-2xl px-4 py-3 transition hover:bg-mint" aria-current={pathname === item.href ? "page" : undefined}>
                    <span className="block text-sm font-bold tracking-[-.02em]">{item.label}</span>
                    <span className="mt-0.5 block text-xs text-muted">{item.copy}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {siteConfig.navigation.slice(1).map((item) => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} className={`text-[11px] font-extrabold uppercase tracking-[.11em] transition hover:text-forest ${pathname === item.href ? "text-forest" : "text-ink/75"}`}>{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <Link href={`tel:${business.phone}`} className="btn-primary hidden lg:inline-flex">Call the District</Link>
          <button ref={menuButtonRef} type="button" onClick={() => setOpen(!open)} className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-ivory lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      <div id="mobile-navigation" aria-hidden={!open} className={`fixed inset-0 top-20 z-40 bg-cream transition duration-500 lg:hidden ${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0"}`}>
        <nav className="container-shell flex h-full flex-col overflow-y-auto py-10" aria-label="Mobile navigation">
          <Link ref={firstMobileLinkRef} href={siteConfig.navigation[0].href} aria-current={pathname === siteConfig.navigation[0].href ? "page" : undefined} onClick={() => setOpen(false)} className="border-b border-ink/10 py-4 text-3xl font-bold tracking-[-.04em]"><span className="mr-4 text-xs text-muted">01</span>{siteConfig.navigation[0].label}</Link>
          <div className="border-b border-ink/10 py-5">
            <p className="text-2xl font-bold tracking-[-.04em]"><span className="mr-4 text-xs text-muted">02</span>The Paw Experience</p>
            <div className="ml-9 mt-4 grid gap-2 sm:grid-cols-3">
              {siteConfig.experienceNavigation.map((item) => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setOpen(false)} className="rounded-2xl bg-ivory px-4 py-3 text-base font-bold transition hover:bg-mint">{item.label}<span className="mt-1 block text-xs font-normal text-muted">{item.copy}</span></Link>)}
            </div>
          </div>
          {siteConfig.navigation.slice(1).map((item, index) => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setOpen(false)} className="border-b border-ink/10 py-4 text-3xl font-bold tracking-[-.04em]"><span className="mr-4 text-xs text-muted">0{index + 3}</span>{item.label}</Link>)}
          <div className="mt-8 flex flex-col gap-3"><Link href={`tel:${business.phone}`} onClick={() => setOpen(false)} className="btn-primary">Call the District</Link><Link href={whatsappUrl()} onClick={() => setOpen(false)} className="btn-outline">Chat on WhatsApp</Link></div>
        </nav>
      </div>
    </header>
  );
}
