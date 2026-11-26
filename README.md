# HealthFlow Website

Public website for HealthFlow Group: Egypt's national health information exchange infrastructure. Bilingual (English / Arabic, RTL).

Live: https://healthflow.tech

## Stack

- React 19 + Vite
- Tailwind CSS v4
- lucide-react icons
- pnpm
- Hosted on **Vercel**

## Develop

```bash
pnpm install
pnpm run dev      # http://localhost:5173
pnpm run build    # production build to dist/
pnpm run lint
```

## Editing content

All copy lives in two files that mirror each other export for export:

| File | Language |
| --- | --- |
| `src/content.js` | English |
| `src/content.ar.js` | Arabic |

When you change text, change it in both. `alt` fields hold a product's name in the other language.
Layout and components are in `src/App.jsx`. Language switching (toggle, `?lang=ar`, saved preference,
`<html lang/dir>`) is in `src/i18n.js`. Brand colours and RTL typography rules are in `src/App.css`.

## Deployment

Vercel deploys automatically from GitHub, using `vercel.json`:

- every pull request and branch push gets a **preview** deployment, linked on the PR
- merging to `main` deploys to **production** (healthflow.tech)

There is no other deploy pipeline. Roll back from the Vercel dashboard (Deployments → Promote / Instant Rollback).

## Analytics

Google Analytics 4 is built in but stays off until a measurement ID is configured:

1. Create a GA4 property and web data stream for `healthflow.tech` at analytics.google.com and copy its measurement ID (`G-…`).
2. In Vercel → Project → Settings → Environment Variables, add `VITE_GA_MEASUREMENT_ID` = that ID for **Production**.
3. Redeploy (Deployments → … → Redeploy).

Visitors then see a bilingual consent banner. GA only loads after **Accept** (in line with PDPL 151/2020), and the
choice can be changed from **Cookie settings** in the footer. Events sent: page views, `language_change`,
`contact_open` and `generate_lead` (contact form sent). The code is in `src/analytics.js`.

## Contact

info@healthflow.tech · +20 111 004 7666 · Cairo, Egypt
