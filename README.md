# The Paw District

Production website for [The Paw District](https://www.thepawdistrict.in), a pet-care business in Chennai offering boarding, grooming and practical dog training.

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS
- Vercel hosting
- Google Tag Manager, loaded only after analytics consent

## Local development

Use Node.js 22 or a compatible current LTS release.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

```env
NEXT_PUBLIC_SITE_URL=https://www.thepawdistrict.in
NEXT_PUBLIC_WHATSAPP_NUMBER=917338900239
```

The production domain and WhatsApp number have safe defaults in source, but setting both variables in Vercel keeps deployment configuration explicit.

## Quality checks

```bash
npm run check
```

The command runs TypeScript, ESLint and a production build. The same checks run for pushes and pull requests through GitHub Actions.

## Content and business settings

- Business contact details, coordinates, hours and social links: `src/config/business.ts`
- Navigation and canonical site URL: `src/config/site.ts`
- Service content: `src/data/services.ts`
- Journal content: `src/data/blog.ts`
- FAQs: `src/data/faqs.ts`

Only publish verified operating hours, social profiles, prices or customer reviews. Empty social links are intentionally omitted from the interface, and visitors are asked to call or WhatsApp before visiting until opening hours are confirmed.

## Analytics and enquiries

The GTM container is preserved in `src/components/common/analytics-consent.tsx`. It is not requested until a visitor accepts optional analytics. Visitors can reopen their choice from **Cookie settings** in the footer.

The website enquiry form validates input in the browser and opens a pre-filled WhatsApp message. It does not claim to submit data to a backend or database.

## Deployment

Vercel deploys the production site from this repository. Keep `www.thepawdistrict.in` as the canonical hostname and the apex domain redirected to it. After changing DNS, environment variables or domain settings, validate the canonical URL, `robots.txt`, `sitemap.xml` and response security headers on the live domain.
