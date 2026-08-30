import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/config/site";

export function WhatsAppButton() {
  return <Link href={whatsappUrl()} className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-forest text-white shadow-soft transition hover:-translate-y-1 hover:bg-ink md:flex" aria-label="Chat on WhatsApp"><MessageCircle className="h-5 w-5" /></Link>;
}
