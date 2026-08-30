"use client";

import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { BlogPost } from "@/types";

export function BlogSearch({ posts }: { posts: BlogPost[] }) {
  const [query,setQuery]=useState(""); const [category,setCategory]=useState("All");
  const categories=["All",...Array.from(new Set(posts.map(post=>post.category)))];
  const shown=useMemo(()=>posts.filter(post=>(category==="All"||post.category===category)&&(post.title+post.excerpt).toLowerCase().includes(query.toLowerCase())),[posts,query,category]);
  return <><div className="flex flex-col gap-4 rounded-3xl bg-cream p-4 md:flex-row md:items-center"><label className="relative flex-1"><span className="sr-only">Search journal</span><Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"/><input value={query} onChange={event=>setQuery(event.target.value)} className="field !pl-11" placeholder="Search the journal"/></label><div className="hide-scrollbar flex gap-2 overflow-x-auto">{categories.map(item=><button key={item} onClick={()=>setCategory(item)} className={`whitespace-nowrap rounded-full px-4 py-3 text-[10px] font-extrabold uppercase tracking-wider ${category===item?"bg-ink text-white":"bg-white"}`}>{item}</button>)}</div></div>{shown.length?<div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">{shown.map(post=><Link key={post.slug} href={`/blog/${post.slug}`} className="group"><div className="relative aspect-[4/3] overflow-hidden rounded-4xl bg-mint/30"><Image src={post.image} alt={post.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover object-[center_38%] transition duration-700 group-hover:scale-105"/></div><p className="mt-5 text-[10px] font-extrabold uppercase tracking-[.15em] text-forest">{post.category} · {post.readingTime}</p><h2 className="mt-3 text-2xl font-bold leading-tight tracking-[-.04em] group-hover:text-forest">{post.title}</h2><p className="mt-3 leading-7 text-muted">{post.excerpt}</p></Link>)}</div>:<div className="mt-10 rounded-4xl border border-dashed border-ink/20 p-12 text-center"><p className="text-3xl font-bold tracking-[-.04em]">No notes found in that corner.</p><button className="btn-outline mt-6" onClick={()=>{setQuery("");setCategory("All")}}>Clear search</button></div>}</>;
}
