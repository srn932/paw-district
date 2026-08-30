import { PageHero } from "@/components/common/page-hero";
import { TestimonialGrid } from "@/components/common/testimonial-grid";
import { CTASection } from "@/components/sections/cta-section";
import { pageMetadata } from "@/config/seo";

export const metadata=pageMetadata("Pet Parent Testimonials","Read the Paw District customer review layout for grooming, daycare, boarding and wellness experiences","/testimonials");
export default function TestimonialsPage(){return <><PageHero eyebrow="Pet parent stories" title="Heard around the District." copy="The layout is ready for real customer voices. Every review currently shown is sample content, clearly labelled and awaiting verification." breadcrumbs={[{label:"Testimonials"}]} accent="bg-sun"/><section className="container-shell section-pad"><TestimonialGrid /></section><CTASection/></>}
