import { Clock3, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { ButtonLink } from "@/components/common/button";
import { EnquiryForm } from "@/components/forms/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { business, displayBusiness } from "@/config/business";
import { pageMetadata } from "@/config/seo";
import { whatsappUrl } from "@/config/site";

export const metadata=pageMetadata("Visit The Paw District in Chennai","Find The Paw District on Mappedu Road, Alapakkam - Nedunkundram, or speak with us about boarding, grooming, training and regular care","/visit");

const directionsUrl=`https://www.google.com/maps/dir/?api=1&destination=${business.latitude},${business.longitude}`;
const info=[
  [Phone,"Call us",displayBusiness.phone,`tel:${business.phone}`],
  [MessageCircle,"WhatsApp","Start a conversation",whatsappUrl()],
  [Mail,"Email",displayBusiness.email,`mailto:${business.email}`],
  [Navigation,"Directions","Open in Google Maps",directionsUrl],
] as const;

export default function VisitPage(){return <><PageHero eyebrow="Visit the District" title="Come say hello. Sniffing optional." copy="Find us in Alapakkam - Nedunkundram, Chennai, or start a conversation about boarding, grooming, training and regular care." breadcrumbs={[{label:"Visit the District"}]} accent="bg-peach"/><section className="container-shell pb-20 md:pb-28"><div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]"><Reveal><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">{info.map(([Icon,label,value,href])=><a key={label} href={href} target={label==="Directions"?"_blank":undefined} rel={label==="Directions"?"noreferrer":undefined} className="rounded-3xl border border-ink/10 p-5 transition hover:bg-mint"><Icon className="h-5 w-5 text-forest"/><p className="mt-6 text-[10px] font-extrabold uppercase tracking-[.15em] text-muted">{label}</p><p className="mt-1 font-bold">{value}</p></a>)}</div></Reveal><Reveal delay={.1}><EnquiryForm/></Reveal></div></section><section id="location" className="container-shell pb-20 md:pb-28"><div className="grid overflow-hidden rounded-5xl bg-cream lg:grid-cols-2"><div className="relative min-h-[420px] overflow-hidden bg-mint"><iframe title="The Paw District location on Google Maps" src={`https://www.google.com/maps?q=${business.latitude},${business.longitude}&z=16&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 h-full w-full border-0"/></div><div className="flex flex-col justify-center p-8 md:p-12"><MapPin className="mb-8 h-8 w-8 text-forest"/><p className="eyebrow">Find our corner</p><h2 className="headline">The District<br/>is right here.</h2><p className="body-lg mt-6">{displayBusiness.address}</p><div id="hours" className="mt-7 scroll-mt-28"><p className="label flex items-center gap-2"><Clock3 className="h-4 w-4"/>Opening hours</p>{displayBusiness.hours.map(item=><p key={item} className="text-muted">{item}</p>)}</div><ButtonLink href={directionsUrl} className="mt-8 self-start">Get directions</ButtonLink></div></div></section></>}
