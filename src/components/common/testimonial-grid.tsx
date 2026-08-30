"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const filters=["All","Boarding","Grooming","Training"];
export function TestimonialGrid(){const[filter,setFilter]=useState("All");const shown=testimonials.filter(item=>filter==="All"||item.service===filter);return <><div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter reviews">{filters.map(item=><button key={item} onClick={()=>setFilter(item)} className={`rounded-full px-5 py-3 text-xs font-bold uppercase tracking-wider transition ${filter===item?"bg-ink text-white":"border border-ink/10 bg-white hover:bg-mint"}`}>{item}</button>)}</div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{shown.map((item,index)=><article key={`${item.quote}-${index}`} className="card flex min-h-[330px] flex-col p-7"><div className="flex gap-1 text-forest">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-4 w-4 fill-current"/>)}</div><blockquote className="mt-8 text-xl font-semibold leading-snug tracking-[-.03em]">“{item.quote}”</blockquote><div className="mt-auto pt-8 text-sm text-muted"><p className="font-bold text-ink">{item.name}</p><p>{item.pet} · {item.service}</p><p className="mt-3 text-[9px] font-extrabold uppercase tracking-widest text-amber-800">Sample content · not verified</p></div></article>)}</div></>}
