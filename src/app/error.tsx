"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";

export default function ErrorPage({error,reset}:{error:Error&{digest?:string};reset:()=>void}){useEffect(()=>{console.error(error)},[error]);return <section className="container-shell flex min-h-[70vh] items-center justify-center py-32"><div className="max-w-3xl rounded-5xl bg-peach p-10 text-center md:p-16"><p className="eyebrow justify-center">A small detour</p><h1 className="headline">Something got off the lead.</h1><p className="body-lg mt-5">Try that page once more. If it keeps happening, the Paw District team should hear about it.</p><button onClick={reset} className="btn-primary mt-8"><RotateCcw className="h-4 w-4"/>Try again</button></div></section>}
