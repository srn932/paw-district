import { ButtonLink } from "@/components/common/button";
import { Mark } from "@/components/common/logo";
import { whatsappUrl } from "@/config/site";

export function CTASection({ title = "Their next good day starts here.", copy = "Tell us what your pet needs. Paw District will take care of the rest." }: { title?: string; copy?: string }) {
  return <section className="container-shell pb-20 md:pb-28"><div className="relative overflow-hidden rounded-5xl bg-forest px-7 py-16 text-white md:px-14 md:py-24"><Mark className="absolute -right-16 -top-16 h-72 w-72 rotate-12 text-white opacity-[.06]" /><span className="absolute bottom-10 right-[28%] h-16 w-16 rounded-full bg-sun/70 blur-[1px] floaty" /><div className="relative max-w-4xl"><p className="eyebrow !text-mint">One more wag</p><h2 className="headline pretty-balance">{title}</h2><p className="mt-6 max-w-xl text-lg leading-8 text-white/70">{copy}</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><ButtonLink href="/book" variant="light">Book a visit</ButtonLink><ButtonLink href={whatsappUrl()} variant="outline" className="!border-white/25 !text-white hover:!bg-white/10">Chat on WhatsApp</ButtonLink></div></div></div></section>;
}
