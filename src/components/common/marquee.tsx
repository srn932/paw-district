const items = ["Pet-first care", "Trained professionals", "Clean spaces", "Happy tails", "Personal attention", "Safe stays"];

export function TrustMarquee() {
  return <div className="overflow-hidden border-y border-ink/10 bg-cream py-4" aria-label="Paw District care values"><div className="marquee-track flex items-center">{[...items, ...items].map((item, index) => <span key={`${item}-${index}`} className="flex items-center whitespace-nowrap px-6 text-[11px] font-extrabold uppercase tracking-[.18em] text-ink/70"><span className="mr-12 h-2 w-2 rounded-full bg-leaf" />{item}</span>)}</div></div>;
}
