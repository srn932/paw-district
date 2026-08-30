# Paw District

A production-quality, responsive pet-care website built with Next.js App Router, TypeScript, Tailwind CSS, Motion, React Hook Form and Zod.

The design is a warm, premium light-theme experience focused on boarding, grooming and training. All routes, enquiry forms, navigation, SEO endpoints and responsive states are implemented.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). If that port is occupied, Next.js will offer the next available port.

## Production build

```bash
npm run build
npm start
```

Quality checks:

```bash
npm run typecheck
npm run lint
```

## Main routes

- `/` — Home
- `/about` — About Paw District
- `/services/boarding`
- `/services/grooming`
- `/services/training`
- `/membership`
- `/why-paw-district`
- `/testimonials`
- `/blog` and `/blog/[slug]`
- `/faq`
- `/visit`
- `/privacy`
- `/terms`
- Custom 404, route error and loading states

## Where to edit

Business identity and contact details live in one place:

- `src/config/business.ts` — phone, WhatsApp, email, address, city, coordinates, hours and social profiles
- `src/config/site.ts` — navigation, site URL fallback, tagline and WhatsApp message
- `src/config/seo.ts` — reusable page metadata helper

Editable site content:

- `src/data/services.ts` — service copy, features, flows and service FAQs
- `src/data/membership.ts` — membership tiers and benefits
- `src/data/testimonials.ts` — customer review data
- `src/data/stats.ts` — homepage metrics
- `src/data/faqs.ts` — grouped FAQs
- `src/data/blog.ts` — journal articles

The verified Chennai contact details and map coordinates live in `src/config/business.ts`; the metadata helper uses the city naturally for local SEO.

## Placeholder content that must be replaced

The following data is deliberately labelled as placeholder or sample content in source and/or UI:

- Testimonials and ratings
- Homepage statistics
- Membership benefits and prices
- Grooming price rows
- Team profiles
- Before/after grooming images
- General pet photography
- Opening hours and social links
- Draft legal policy details

Do not publish fictional reviews, figures, team members, prices or operating claims as verified facts.

## Images

Development photography uses remote Unsplash placeholders through `next/image`. Remote imagery is set to `unoptimized` so restricted local environments do not require the Next.js server to fetch third-party assets.

Before production:

1. Add approved Paw District photography under `public/images/`.
2. Replace remote URLs in `src/data/services.ts`, `src/data/blog.ts` and page sections.
3. Remove `unoptimized: true` from `next.config.ts` to restore the optimized image pipeline.
4. Confirm descriptive alt text still matches each final image.

## Enquiries

The enquiry form includes client-side Zod validation, accessible labels and errors, loading states and a polished success state.

Current development submission flow:

- `src/lib/forms/submit-lead.ts` validates the architecture with a simulated async response.
- No email, database, CRM, WhatsApp message or webhook is sent.
- An enquiry does not reserve an appointment or stay.

For production, add server-only adapters under `src/lib/integrations/` and call them from a Route Handler or Server Action. Keep provider credentials in server environment variables. Do not move secrets into client components.

## WhatsApp

Copy `.env.example` to `.env.local` and add the number in international format without spaces or symbols:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=91XXXXXXXXXX
```

If no number is configured, WhatsApp actions safely lead to the Visit the District page instead of opening a broken `wa.me` URL.

## Chatbot

The chatbot mount is disabled by default:

```env
NEXT_PUBLIC_CHAT_ENABLED=false
```

When enabled, `src/components/common/chat-widget.tsx` displays a clearly labelled integration container. Mount a real chatbot there; no fake AI responses are included.

## SEO and local search

Implemented:

- Unique metadata and canonical URLs
- Open Graph and Twitter metadata
- Organization/LocalBusiness/PetStore structured data
- Service, FAQ, Article and Breadcrumb structured data
- `sitemap.xml`
- `robots.txt`
- Web app manifest and SVG favicon
- Semantic heading and article structure
- Internal linking across boarding, grooming, training, the journal, FAQs and visit information

Confirm the remaining opening hours and social profiles in `src/config/business.ts` before launch.

## Motion and 3D

- Interactive photographic hero with restrained pointer parallax
- Static, reduced-motion-safe presentation on mobile and accessible devices
- Scroll reveals and staggered transitions
- Animated statistics
- Service-card and image hover motion
- Horizontal testimonial rail
- Before/after grooming comparison
- Animated mobile menu and sticky conversion actions
- `prefers-reduced-motion` support

## Environment variables

See `.env.example`:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_CHAT_ENABLED`
- `CONTACT_NOTIFICATION_EMAIL`
- `DATABASE_URL`
- `CRM_WEBHOOK_URL`

Only variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Keep credentials server-only.

## Deployment

### Vercel

Import the repository, use the Next.js preset, configure environment variables and deploy. Set `NEXT_PUBLIC_SITE_URL` to the production origin before the final build.

### Standard Node.js hosting

Use Node.js 20 or newer:

```bash
npm ci
npm run build
npm start
```

Run the service behind HTTPS and a reverse proxy. Configure production environment variables in the host rather than committing `.env.local`.

## Before launch

- Insert verified business and operating details.
- Replace every sample review, metric, plan, price, team profile and remote image.
- Connect forms to approved server-side integrations.
- Review veterinary wording and service suitability with the operating team.
- Have privacy, terms, cancellation and membership policies reviewed professionally.
- Test real phone, WhatsApp, email, map and social links.
- Re-run `npm run typecheck`, `npm run lint` and `npm run build`.
