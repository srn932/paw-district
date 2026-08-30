import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/types";

export function ServiceCard({ service, index }: { service: Service; index?: number }) {
  return <Link href={`/services/${service.slug}`} className={`group relative flex min-h-[500px] flex-col overflow-hidden rounded-4xl ${service.color} p-6 transition duration-500 hover:-translate-y-2 hover:shadow-soft md:p-8`}><div className="flex items-start justify-between"><div><span className="text-[10px] font-extrabold uppercase tracking-[.2em] text-ink/55">{index !== undefined ? `0${index + 1}` : service.kicker}</span><h3 className="subhead mt-4 max-w-md">{service.name}</h3><p className="mt-3 max-w-sm leading-7 text-ink/65">{service.description}</p></div><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/70 transition duration-300 group-hover:rotate-45 group-hover:bg-ink group-hover:text-white"><ArrowUpRight className="h-4 w-4" /></span></div><div className="relative mt-auto h-52 overflow-hidden rounded-3xl bg-white/30"><Image src={service.image} alt={`${service.name} service at Paw District`} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectPosition: service.imagePosition || "50% 40%" }} className="object-cover transition duration-700 ease-out group-hover:scale-105" /></div></Link>;
}
