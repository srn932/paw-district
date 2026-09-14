"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export function FAQAccordion({ items }: { items: readonly { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="divide-y divide-ink/10 border-y border-ink/10">{items.map((item, index) => { const panelId = `faq-panel-${index}`; return <div key={item.question}><h3><button className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-bold tracking-[-.02em] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-leaf/20" onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index} aria-controls={panelId}><span>{item.question}</span><span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mint">{open === index ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}</span></button></h3><div id={panelId} role="region" className={`grid transition-all duration-500 ${open === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}><div className="overflow-hidden"><p className="max-w-3xl pb-6 leading-7 text-muted">{item.answer}</p></div></div></div>; })}</div>;
}
