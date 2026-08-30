import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import { Mark } from "@/components/common/logo";

export default function NotFound(){return <section className="container-shell flex min-h-screen items-center justify-center py-32"><div className="relative w-full overflow-hidden rounded-5xl bg-mint px-7 py-20 text-center md:py-28"><Mark className="absolute -right-20 -top-20 h-80 w-80 rotate-12 text-forest opacity-[.08]"/><p className="eyebrow justify-center">404 · Lost scent</p><h1 className="display pretty-balance">Looks like this page<br/>went for a walk.</h1><p className="body-lg mx-auto mt-7 max-w-xl">The good news: the rest of the District is exactly where we left it.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/" className="btn-primary"><ArrowLeft className="h-4 w-4"/>Take me home</Link><Link href="/services" className="btn-outline"><Search className="h-4 w-4"/>Explore services</Link></div></div></section>}
