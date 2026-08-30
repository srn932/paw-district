import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { BlogSearch } from "@/components/common/blog-search";
import { CTASection } from "@/components/sections/cta-section";
import { blogPosts } from "@/data/blog";
import { pageMetadata } from "@/config/seo";

export const metadata=pageMetadata("Pet Care Journal","Practical notes about pet grooming, dog daycare, pet boarding, puppy care and everyday pet wellness","/blog");
export default function BlogPage(){const featured=blogPosts[0];return <><PageHero eyebrow="Notes from the District" title="Useful pet care. No wagging around the point." copy="Simple, specific guidance for grooming days, play days, stay-away days and the everyday questions in between." breadcrumbs={[{label:"Journal"}]} accent="bg-mint"/><section className="container-shell pb-16"><Link href={`/blog/${featured.slug}`} className="group grid overflow-hidden rounded-5xl bg-ink text-white lg:grid-cols-2"><div className="relative min-h-[380px] overflow-hidden"><Image src={featured.image} alt={featured.title} fill priority sizes="(max-width:1024px) 100vw, 50vw" className="object-cover object-[center_38%] transition duration-700 group-hover:scale-105"/></div><div className="flex flex-col justify-center p-8 md:p-12"><p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-mint">Featured · {featured.category}</p><h2 className="mt-6 text-4xl font-bold leading-none tracking-[-.055em] md:text-5xl">{featured.title}</h2><p className="mt-5 leading-7 text-white/65">{featured.excerpt}</p><span className="mt-8 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider">Read article <ArrowUpRight className="h-4 w-4"/></span></div></Link></section><section className="container-shell pb-20 md:pb-28"><BlogSearch posts={blogPosts}/></section><CTASection title="A question better answered by a human?" copy="Tell us what is happening and we will point you toward the right service—or the right professional."/></>}
