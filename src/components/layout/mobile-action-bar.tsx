import Link from "next/link";
import { CalendarDays, MessageCircle, Phone } from "lucide-react";
import { business } from "@/config/business";
import { whatsappUrl } from "@/config/site";

export function MobileActionBar() {
  return <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-3 rounded-2xl border border-white/20 bg-ink p-1.5 text-white shadow-soft md:hidden"><Link href={business.phone ? `tel:${business.phone}` : "/contact"} className="flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-xl text-[9px] font-bold uppercase tracking-wider"><Phone className="h-4 w-4" />Call</Link><Link href={whatsappUrl()} className="flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-xl text-[9px] font-bold uppercase tracking-wider"><MessageCircle className="h-4 w-4" />WhatsApp</Link><Link href="/book" className="flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-xl bg-sun text-ink text-[9px] font-bold uppercase tracking-wider"><CalendarDays className="h-4 w-4" />Book</Link></div>;
}
