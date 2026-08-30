import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function TestimonialStrip() {
  return <div className="hide-scrollbar flex snap-x gap-5 overflow-x-auto pb-5">{testimonials.slice(0, 4).map((item, index) => <blockquote key={index} className="card flex min-w-[86vw] snap-center flex-col p-7 sm:min-w-[460px] md:p-9"><div className="flex gap-1 text-forest" aria-label="Sample five star rating">{Array.from({ length: 5 }).map((_, star) => <Star key={star} className="h-4 w-4 fill-current" />)}</div><p className="mt-8 text-2xl font-semibold leading-snug tracking-[-.035em]">“{item.quote}”</p><footer className="mt-10 border-t border-ink/10 pt-5 text-sm text-muted"><span className="font-bold text-ink">{item.name}</span> · {item.pet}<span className="mt-2 block text-[10px] font-bold uppercase tracking-widest text-amber-800">Sample review — not verified</span></footer></blockquote>)}</div>;
}
