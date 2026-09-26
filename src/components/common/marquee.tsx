const items = ["Pet-first care", "Trained professionals", "Clean spaces", "Happy tails", "Personal attention", "Safe stays"];

export function TrustMarquee() {
  return <div className="overflow-hidden border-y border-ink/10 bg-cream py-4"><p className="sr-only">Paw District care values: {items.join(", ")}</p><div className="marquee-track flex w-max items-center" aria-hidden="true">{[0, 1].map((group) => <div key={group} className="flex shrink-0 items-center">{items.map((item) => <span key={`${group}-${item}`} className="flex items-center whitespace-nowrap px-6 text-[11px] font-extrabold uppercase tracking-[.18em] text-ink/70"><span className="mr-12 h-2 w-2 rounded-full bg-leaf" />{item}</span>)}</div>)}</div></div>;
}
