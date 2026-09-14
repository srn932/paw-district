"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

const storageKey = "paw-district-analytics-consent";
const settingsEvent = "paw-district:cookie-settings";
type Consent = "accepted" | "declined" | null;

export function AnalyticsConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const saved = window.localStorage.getItem(storageKey);
      setConsent(saved === "accepted" || saved === "declined" ? saved : null);
      setReady(true);
    }, 0);
    const reopen = () => setConsent(null);
    window.addEventListener(settingsEvent, reopen);
    return () => { window.clearTimeout(timer); window.removeEventListener(settingsEvent, reopen); };
  }, []);

  function choose(value: Exclude<Consent, null>) {
    const analyticsWasLoaded = consent === "accepted";
    window.localStorage.setItem(storageKey, value);
    setConsent(value);
    if (value === "declined" && analyticsWasLoaded) window.location.reload();
  }

  return <>{consent === "accepted" ? <Script id="google-tag-manager" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NJ7TMB8F');` }} /> : null}{ready && consent === null ? <aside className="fixed inset-x-4 bottom-20 z-[70] mx-auto max-w-3xl rounded-3xl border border-ink/10 bg-ivory p-5 shadow-soft md:bottom-5 md:flex md:items-center md:gap-6" aria-label="Analytics preferences"><p className="text-sm leading-6 text-muted">We use optional Google Analytics to understand site visits. It loads only if you accept. Read our <Link className="font-bold text-forest underline underline-offset-4" href="/privacy">privacy policy</Link>.</p><div className="mt-4 flex shrink-0 gap-2 md:mt-0"><button type="button" className="btn-outline !min-h-10 !px-4 !py-2" onClick={() => choose("declined")}>Decline</button><button type="button" className="btn-primary !min-h-10 !px-4 !py-2" onClick={() => choose("accepted")}>Accept analytics</button></div></aside> : null}</>;
}

export function CookieSettingsButton() {
  return <button type="button" className="text-left text-sm text-white/75 transition hover:text-white" onClick={() => window.dispatchEvent(new Event(settingsEvent))}>Cookie settings</button>;
}
