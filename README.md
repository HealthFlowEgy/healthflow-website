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

## Contact

info@healthflow.tech · +20 111 004 7666 · Cairo, Egypt
