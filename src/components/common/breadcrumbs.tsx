import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SEOJsonLd } from "./seo-json-ld";
import { siteConfig } from "@/config/site";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  const allItems = [{ label: "Home", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-xs font-bold uppercase tracking-[.1em] text-muted">
        {allItems.map((item, index) => <span key={`${item.label}-${index}`} className="flex items-center gap-1">{index > 0 && <ChevronRight className="h-3 w-3" />}{item.href ? <Link className="hover:text-forest" href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</span>)}
      </nav>
      <SEOJsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: allItems.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.label, item: item.href ? `${siteConfig.url}${item.href}` : undefined })) }} />
    </>
  );
}
