import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/config/site";

export function WhatsAppButton() {
  return <Link href={whatsappUrl()} className="whatsapp-float fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-forest text-white shadow-soft transition hover:-translate-y-1 hover:bg-ink md:flex" aria-label="Chat on WhatsApp"><span className="whatsapp-pop pointer-events-none absolute bottom-[calc(100%+12px)] right-0 w-max max-w-56 rounded-2xl bg-ink px-4 py-3 text-sm font-semibold normal-case tracking-normal text-white shadow-soft">Questions? Chat with us <span aria-hidden="true">🐾</span><span className="absolute -bottom-1.5 right-5 h-3 w-3 rotate-45 bg-ink" /></span><MessageCircle className="h-5 w-5" /></Link>;
}
