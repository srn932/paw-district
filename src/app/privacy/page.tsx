import Link from "next/link";
import { PageHero } from "@/components/common/page-hero";
import { business } from "@/config/business";
import { pageMetadata } from "@/config/seo";

export const metadata = pageMetadata(
  "Privacy Policy",
  "How The Paw District handles website enquiries, analytics choices and third-party services",
  "/privacy",
);

const sections = [
  {
    title: "Information you choose to share",
    copy: "The enquiry form asks for your name, phone number, optional email address, pet details, the service you are interested in and any notes you add. The website does not send or store that form in a Paw District database. It creates a pre-filled WhatsApp message on your device; you can review or edit the message before choosing whether to send it.",
  },
  {
    title: "How enquiries are used",
    copy: "If you send an enquiry by WhatsApp, phone or email, we use the information to respond, understand your pet's needs, discuss availability and plan any care you choose to book. Please share only health or behaviour details relevant to the requested care. This website is not an emergency or veterinary diagnostic service.",
  },
  {
    title: "Analytics choices",
    copy: "We use Google Tag Manager to operate Google Analytics only after you select Accept analytics. Analytics may process information such as pages viewed, approximate location derived from an IP address, device or browser information and interaction data. If you decline, the analytics tag is not loaded. Your choice is saved in your browser's local storage and can be changed using Cookie settings in the footer.",
  },
  {
    title: "Hosting and technical records",
    copy: "The website is hosted by Vercel. Like most hosting providers, Vercel may process request and device information, including IP addresses and browser details, to deliver, secure and operate the website. Service providers retain information according to their own policies and the settings available to us.",
  },
  {
    title: "Third-party services",
    copy: "The site links to WhatsApp and may display Google Maps. When you choose to use those services, their own privacy terms apply. We do not control how a third-party service processes information after you open or use it.",
  },
  {
    title: "Your choices and questions",
    copy: `You may ask about personal information you have sent to Paw District, or request an eligible correction or deletion, by emailing ${business.email}. We may need to verify that the request relates to you before acting on it.`,
  },
] as const;

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy, in plain language." copy="What this website collects, which services it uses and the choices available to you." breadcrumbs={[{ label: "Privacy policy" }]} accent="bg-mint" />
      <article className="container-shell pb-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-12 text-sm font-bold uppercase tracking-[.12em] text-forest">Last updated 15 September 2026</p>
          {sections.map((section) => <section key={section.title} className="mb-10"><h2 className="text-2xl font-bold tracking-[-.035em]">{section.title}</h2><p className="mt-4 text-lg leading-8 text-muted">{section.copy}</p></section>)}
          <section className="mb-10" id="service-policies">
            <h2 className="text-2xl font-bold tracking-[-.035em]">Service-provider policies</h2>
            <p className="mt-4 text-lg leading-8 text-muted">Learn more in the privacy information published by <a className="font-semibold text-forest underline underline-offset-4" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google</a>, <a className="font-semibold text-forest underline underline-offset-4" href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noreferrer">Vercel</a> and <a className="font-semibold text-forest underline underline-offset-4" href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noreferrer">WhatsApp</a>.</p>
          </section>
          <p className="rounded-3xl bg-cream p-6 leading-7 text-muted">Questions? Email <a className="font-semibold text-forest underline underline-offset-4" href={`mailto:${business.email}`}>{business.email}</a> or return to the <Link className="font-semibold text-forest underline underline-offset-4" href="/visit">visit page</Link>.</p>
        </div>
      </article>
    </>
  );
}
