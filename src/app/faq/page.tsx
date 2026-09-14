import { PageHero } from "@/components/common/page-hero";
import { FAQAccordion } from "@/components/common/faq-accordion";
import { SEOJsonLd } from "@/components/common/seo-json-ld";
import { Reveal } from "@/components/motion/reveal";
import { CTASection } from "@/components/sections/cta-section";
import { allFaqs, faqGroups } from "@/data/faqs";
import { pageMetadata } from "@/config/seo";

export const metadata=pageMetadata("Pet Care FAQs","Answers about The Paw District in Chennai, including pet boarding, dog and cat grooming, training, regular care and visits","/faq");
export default function FAQPage(){return <><SEOJsonLd data={{"@context":"https://schema.org","@type":"FAQPage",mainEntity:allFaqs.map(item=>({"@type":"Question",name:item.question,acceptedAnswer:{"@type":"Answer",text:item.answer}}))}}/><PageHero eyebrow="Good questions welcome" title="The things pet parents usually ask." copy="From first grooms to first sleepovers: clear answers, sensible limits and no pretending every pet needs the same plan." breadcrumbs={[{label:"FAQs"}]} accent="bg-mint"/><section className="container-shell pb-20 md:pb-28"><div className="grid gap-14">{faqGroups.map((group,index)=><Reveal key={group.category}><div className="grid gap-8 lg:grid-cols-[.4fr_1.6fr]"><div><span className="text-xs font-extrabold tracking-[.18em] text-forest">0{index+1}</span><h2 className="mt-3 text-3xl font-bold tracking-[-.04em]">{group.category}</h2></div><FAQAccordion items={group.items}/></div></Reveal>)}</div></section><CTASection title="Still curious? Ask a human." copy="Tell us about your pet and the service you are considering. Specific details make for much better answers."/></>}
