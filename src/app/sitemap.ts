import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/config/site";

export default function sitemap():MetadataRoute.Sitemap{const staticRoutes=["","/about","/services","/membership","/why-paw-district","/testimonials","/blog","/faq","/contact","/book","/privacy","/terms"];return [...staticRoutes.map(route=>({url:`${siteConfig.url}${route}`,lastModified:new Date(),changeFrequency:route===""?"weekly" as const:"monthly" as const,priority:route===""?1:.7})),...services.map(service=>({url:`${siteConfig.url}/services/${service.slug}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:.8})),...blogPosts.map(post=>({url:`${siteConfig.url}/blog/${post.slug}`,lastModified:new Date(post.date),changeFrequency:"monthly" as const,priority:.65}))]}
